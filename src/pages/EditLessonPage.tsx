import type { FC } from "react";
import useGetLessonBySlugQuery from "../queries/useGetLessonBySlugQuery.ts";
import EditableTitle from "../components/EditableTitle.tsx";
import { useRouter } from "@tanstack/react-router";
import { useFormik } from "formik";
import useUpdateLessonMutation from "../queries/useUpdateLessonMutation.ts";
import MdxEditor from "../components/mdx/MdxEditor.tsx";

export interface EditLessonPageProps {
  lessonId: string;
}

const EditLessonPage: FC<EditLessonPageProps> = ({ lessonId }) => {
  const { lesson, isLoading } = useGetLessonBySlugQuery(lessonId);
  const { mutateAsync, isPending } = useUpdateLessonMutation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: lesson?.title || "",
      slug: lesson?.slug || "",
      content: lesson?.content || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", { values });
      await mutateAsync({
        id: lesson?.id || "",
        title: values.title,
        slug: values.slug,
        content: values.content,
        order: lesson?.order ?? null,
      });
      if (values.slug !== lesson?.slug) {
        await router.navigate({
          to: `/lessons/${values.slug}`,
        });
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      {isPending && (
        <div className="absolute inset-0 z-10 bg-white/10 flex items-center justify-center pointer-events-none">
          <div className="h-8 w-8 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="sticky top-0 z-10 flex justify-end items-end py-2">
        <button
          type={"submit"}
          disabled={isPending || isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Save
        </button>
      </div>

      <EditableTitle
        value={formik.values.title}
        onChange={formik.handleChange}
        placeholder={"Enter chapter title..."}
        className={"mb-1"}
      />

      <input
        name="slug"
        id="slug"
        value={formik.values.slug}
        onChange={formik.handleChange}
        placeholder={"Enter slug..."}
        className="bg-transparent px-1 py-1 text-sm text-gray-500
          outline-none font-mono
          border border-transparent caret-transparent
        hover:border-blue-400 hover:caret-blue-500
        focus:border-blue-400 focus:caret-blue-500
        rounded"
      />

      <MdxEditor
        value={formik.values.content}
        onChange={(value) =>
          formik.handleChange({
            target: {
              name: "content",
              value,
            },
          })
        }
      />
    </form>
  );
};

export default EditLessonPage;
