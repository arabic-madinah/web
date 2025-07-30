import type { FC } from "react";
import { useRouter } from "@tanstack/react-router";
import { useFormik } from "formik";
import useCreateChapterMutation from "../queries/useCreateChapterMutation.ts";
import SaveButton from "../components/SaveButton.tsx";
import EditableTitle from "../components/form/EditableTitle.tsx";
import EditableSlug from "../components/form/EditableSlug.tsx";
import ReorderChaptersModal from "../components/ReOrderChaptersModal.tsx";

const AddChapterPage: FC = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useCreateChapterMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      slug: "",
      order: null,
    },
    onSubmit: async (values) => {
      console.log("Form submitted with values:", { values });
      await mutateAsync({
        title: values.title,
        slug: values.slug,
        order: values.order,
      });
      await router.navigate({
        to: `/chapters/${values.slug}`,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={"relative"}>
      {isPending && (
        <div className="absolute inset-0 z-10 bg-white/10 flex items-center justify-center pointer-events-none">
          <div className="h-8 w-8 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="absolute right-0 top-0 z-10 py-2">
        <SaveButton disabled={isPending} />
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

      <ReorderChaptersModal />
    </form>
  );
};

export default AddChapterPage;
