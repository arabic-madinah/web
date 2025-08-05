import { QuizBuilder } from "./QuizBuilder.tsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx";

type QuizBuilderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (snippet: string) => void;
};

export const QuizBuilderModal = ({
  isOpen,
  onClose,
  onInsert,
}: QuizBuilderModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl w-full p-0">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-gray-900 dark:text-white px-6 pt-6">
            Create Quiz
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <QuizBuilder onCreate={onInsert} onCancel={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
