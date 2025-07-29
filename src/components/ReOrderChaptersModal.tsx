import {
  DndContext,
  closestCenter,
  useSensors,
  PointerSensor,
  useSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import useGetChaptersQuery, {
  type Chapter,
} from "../queries/useGetChaptersQuery.ts";
import useUpdateChapterMutation from "../queries/useUpdateChapterMutation.ts";
import { useState } from "react";
// import { Button } from "@/components/ui/button";

export default function ReorderChaptersModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { chapters } = useGetChaptersQuery();
  const [items, setItems] = useState<Chapter[]>([]);

  const { mutateAsync, isPending } = useUpdateChapterMutation();

  const open = () => {
    setItems(chapters); // snapshot from query
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      setItems((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const handleSave = async () => {
    const updated = items.map((item, index) => ({
      ...item,
      order: index + 1,
    }));

    try {
      await Promise.all(
        updated.map((chapter) =>
          mutateAsync({
            id: chapter.id,
            order: chapter.order,
            title: null,
            slug: null,
          }),
        ),
      );
      close();
    } catch (err) {
      console.error("Reorder failed", err);
    }
  };

  return (
    <>
      <button onClick={open} className="text-blue-600 underline">
        Reorder Chapters
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="bg-gray-600 p-6 rounded shadow-lg w-full max-w-md relative">
            {isPending && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10 pointer-events-none">
                <div className="h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <h2 className="text-xl font-semibold mb-4">Reorder Chapters</h2>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={items.map((i) => i.id)}
                strategy={verticalListSortingStrategy}
              >
                <ul className="space-y-2">
                  {items.map((chapter) => (
                    <SortableChapterItem key={chapter.id} chapter={chapter} />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={close}
                className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isPending}
                className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Save Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SortableChapterItem({ chapter }: { chapter: Chapter }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: chapter.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md cursor-move"
    >
      {chapter.title}
    </li>
  );
}
