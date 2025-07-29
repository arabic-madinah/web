import type { FC } from "react";
import useGetChapterBySlugQuery from "../queries/useGetChapterBySlugQuery.ts";
import EditableTitle from "../components/EditableTitle.tsx";
import { useFormik } from "formik";
import useUpdateChapterMutation from "../queries/useUpdateChapterMutation.ts";
import { useRouter } from "@tanstack/react-router";
import ReorderChaptersModal from "../components/ReOrderChaptersModal.tsx";

export interface EditChapterPageProps {
  chapterId: string;
}

const EditChapterPage: FC<EditChapterPageProps> = ({ chapterId }) => {
  const { chapter, isLoading } = useGetChapterBySlugQuery(chapterId);
  const { mutateAsync, isPending } = useUpdateChapterMutation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: chapter?.title || "",
      slug: chapter?.slug || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", { values });
      await mutateAsync({
        id: chapter?.id || "",
        title: values.title,
        slug: values.slug,
        order: chapter?.order ?? null,
      });
      if (values.slug !== chapter?.slug) {
        await router.navigate({
          to: `/chapters/${values.slug}`,
        });
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!chapter) {
    return <div>Chapter not found</div>;
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
          //onClick={handleSave}
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
          outline-none
          border border-transparent caret-transparent
        hover:border-blue-400 hover:caret-blue-500
        focus:border-blue-400 focus:caret-blue-500
        rounded"
      />

      <ReorderChaptersModal />
    </form>
  );
};

export default EditChapterPage;
