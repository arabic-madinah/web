import type { ChangeEventHandler } from "react";

interface EditableTitleProps {
  defaultValue?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
}

export default function EditableTitle({
  defaultValue,
  value,
  onChange,
  className,
  placeholder,
}: EditableTitleProps) {
  return (
    <input
      value={value}
      defaultValue={defaultValue}
      name={"title"}
      placeholder={placeholder}
      onChange={onChange}
      className={`bg-transparent text-xl font-semibold px-1 py-1 transition-all duration-100
        outline-none w-full
        border border-transparent caret-transparent
        hover:border-blue-400 hover:caret-blue-500
        focus:border-blue-400 focus:caret-blue-500
        rounded
        ${className ?? ""}
      `}
    />
  );
}
