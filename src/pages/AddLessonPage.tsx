import { type FC, useState } from "react";
import ChapterPicker from "../components/ChapterPicker.tsx";

const AddLessonPage: FC = () => {
  const [chapterId, setChapterId] = useState<string | null>("");

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-4">Add Lesson</h1>
      <p className="text-gray-600">This page is under construction.</p>

      <ChapterPicker chapterId={chapterId} onChange={(c) => setChapterId(c)} />
    </div>
  );
};

export default AddLessonPage;
