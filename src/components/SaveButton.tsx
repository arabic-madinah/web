import { type FC } from "react";
import { SaveAll } from "lucide-react";
import PrimaryButton from "./PrimaryButton.tsx";

export interface SaveButtonProps {
  disabled?: boolean;
}

const SaveButton: FC<SaveButtonProps> = ({ disabled }) => {
  return (
    <PrimaryButton type={"submit"} disabled={disabled}>
      <SaveAll size={16} />
      Save
    </PrimaryButton>
  );
};

export default SaveButton;
