import { createRootRoute, createRoute, Router } from "@tanstack/react-router";
import AppLayout from "./Layouts/AppLayout";
import LessonPage from "./pages/LessonPage.tsx";
import ChapterPage from "./pages/ChapterPage.tsx";
import EditLessonPage from "./pages/EditLessonPage.tsx";
import EditChapterPage from "./pages/EditChapterPage.tsx";
import AddChapterPage from "./pages/AddChapterPage.tsx";
import AddLessonPage from "./pages/AddLessonPage.tsx";

const rootRoute = createRootRoute({
  component: AppLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <>Hello</>,
});

const lessonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lessons/$lessonId",
  component: () => {
    const { lessonId } = lessonRoute.useParams() as { lessonId: string };
    return <LessonPage lessonId={lessonId} />;
  },
});

const createLessonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lessons-create",
  component: () => {
    return <AddLessonPage />;
  },
});

const editLessonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lessons/$lessonId/edit",
  component: () => {
    const { lessonId } = editLessonRoute.useParams();
    return <EditLessonPage lessonId={lessonId} />;
  },
});

const chapterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chapters/$chapterId",
  component: () => {
    const { chapterId } = chapterRoute.useParams() as { chapterId: string };
    return <ChapterPage chapterId={chapterId} />;
  },
});

const createChapterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chapters-create",
  component: () => {
    return <AddChapterPage />;
  },
});

const editChapterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chapters/$chapterId/edit",
  component: () => {
    const { chapterId } = editChapterRoute.useParams();
    return <EditChapterPage chapterId={chapterId} />;
  },
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  chapterRoute,
  createChapterRoute,
  editChapterRoute,
  lessonRoute,
  createLessonRoute,
  editLessonRoute,
]);
export const router = new Router({ routeTree });
