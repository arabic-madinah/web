import type { PropsWithChildren } from "react";

export interface NoteProps extends PropsWithChildren {}
const Note: React.FC<NoteProps> = ({ children }) => {
  return (
    <div className="p-4 my-4 bg-blue-100 border-l-4 border-blue-500 text-red-500">
      💡 {children}
    </div>
  );
};
export default Note;
