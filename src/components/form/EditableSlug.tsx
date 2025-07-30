import type { ChangeEventHandler } from "react";

export interface EditableSlugProps {
  defaultValue?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
}

export default function EditableSlug({
  defaultValue,
  value,
  onChange,
  className,
  placeholder,
}: EditableSlugProps) {
  return (
    <input
      name="slug"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-transparent px-1 py-1 text-sm text-gray-500
          outline-none w-full font-mono
          border border-transparent caret-transparent
        hover:border-blue-400 hover:caret-blue-500
        focus:border-blue-400 focus:caret-blue-500
        rounded
        ${className ?? ""}
        `}
    />
  );
}
