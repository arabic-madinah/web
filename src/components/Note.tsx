import type { FC, PropsWithChildren } from "react";

const Note: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="p-4 my-4 bg-stone-600 border-l-4 border-blue-500 text-neutral-50">
      {children}
    </div>
  );
};
export default Note;
