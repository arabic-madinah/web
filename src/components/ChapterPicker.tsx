import { type FC } from "react";
import useGetChaptersQuery from "../queries/useGetChaptersQuery.ts";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

export interface ChapterPickerProps {
  chapterId?: string | null;
  onChange: (chapter: string | null) => void;
}

const ChapterPicker: FC<ChapterPickerProps> = ({ chapterId, onChange }) => {
  const { chapters, isLoading } = useGetChaptersQuery();

  const selectedChapter = chapters.find((c) => c.id === chapterId);

  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
          {isLoading ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
          ) : (
            selectedChapter?.title || "Select Chapter"
          )}
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-700 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          {chapters.map((chapter) => (
            <MenuItem key={chapter.id}>
              <button
                onClick={() => onChange(chapter.id)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
              >
                {chapter.title}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default ChapterPicker;
