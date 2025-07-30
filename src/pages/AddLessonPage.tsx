import { type FC } from "react";
import ChapterPicker from "../components/ChapterPicker.tsx";
import { useRouter } from "@tanstack/react-router";
import { useFormik } from "formik";
import useCreateLessonMutation from "../queries/useCreateLessonMutation.ts";
import SaveButton from "../components/SaveButton.tsx";
import EditableTitle from "../components/form/EditableTitle.tsx";
import EditableSlug from "../components/form/EditableSlug.tsx";
import MdxEditor from "../components/mdx/MdxEditor.tsx";

const AddLessonPage: FC = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useCreateLessonMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      slug: "",
      content: "",
      chapterId: null,
      order: null,
    },
    onSubmit: async (values) => {
      console.log("Form submitted with values:", { values });
      if (!values.chapterId) {
        return;
      }
      await mutateAsync({
        title: values.title,
        slug: values.slug,
        order: values.order,
        content: values.content || "",
        chapterId: values.chapterId,
      });
      await router.navigate({
        to: `/lessons/${values.slug}`,
      });
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={"relative h-full flex flex-col"}
    >
      {isPending && (
        <div className="absolute inset-0 z-10 bg-white/10 flex items-center justify-center pointer-events-none">
          <div className="h-8 w-8 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="absolute right-0 top-0 z-10 py-2 space-x-2">
        <SaveButton disabled={isPending} />
      </div>

      <EditableTitle
        value={formik.values.title}
        onChange={formik.handleChange}
        placeholder={"Enter chapter title..."}
        className={"mb-1"}
      />

      <div
        className={
          "flex flex-row justify-between items-start align-bottom gap-4 mb-3"
        }
      >
        <ChapterPicker
          chapterId={formik.values.chapterId}
          onChange={(c) => {
            formik.setFieldValue("chapterId", c);
          }}
        />

        <EditableSlug
          value={formik.values.slug}
          onChange={formik.handleChange}
          placeholder={"Enter slug..."}
          className={"flex-1 mb-2"}
        />
      </div>

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

export default AddLessonPage;
