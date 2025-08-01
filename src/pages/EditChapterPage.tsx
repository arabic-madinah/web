import type { FC } from "react";
import useGetChapterBySlugQuery from "../queries/useGetChapterBySlugQuery.ts";
import EditableTitle from "../components/form/EditableTitle.tsx";
import { useFormik } from "formik";
import useUpdateChapterMutation from "../queries/useUpdateChapterMutation.ts";
import { useRouter } from "@tanstack/react-router";
import EditableSlug from "../components/form/EditableSlug.tsx";
import SaveButton from "../components/SaveButton.tsx";
import MdxEditor from "../components/mdx/MdxEditor.tsx";

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
      content: chapter?.content || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", { values });
      await mutateAsync({
        id: chapter?.id || "",
        title: values.title,
        slug: values.slug,
        content: values.content,
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
    <form onSubmit={formik.handleSubmit} className={"relative"}>
      {isPending && (
        <div className="absolute inset-0 z-10 bg-white/10 flex items-center justify-center pointer-events-none">
          <div className="h-8 w-8 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="absolute right-0 top-0 z-10 py-2">
        <SaveButton disabled={isLoading || isPending} />
      </div>

      <EditableTitle
        value={formik.values.title}
        onChange={formik.handleChange}
        placeholder={"Enter chapter title..."}
        className={"mb-1"}
      />

      <EditableSlug
        value={formik.values.slug}
        onChange={formik.handleChange}
        placeholder={"Enter slug..."}
        className={"mb-2"}
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

export default EditChapterPage;
