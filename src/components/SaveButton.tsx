import { type FC } from "react";
import { Button } from "@headlessui/react";
import { SaveAll } from "lucide-react";

export interface SaveButtonProps {
  disabled?: boolean;
}

const SaveButton: FC<SaveButtonProps> = ({ disabled }) => {
  return (
    <Button
      type={"submit"}
      disabled={disabled}
      className="inline-flex items-center gap-2 rounded-md bg-gray-700
      px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner
      shadow-white/10 focus:not-data-focus:outline-none data-focus:outline
      data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
    >
      <SaveAll size={16} />
      Save
    </Button>
  );
};

export default SaveButton;
