import { type FC, useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import useGetChaptersQuery, {
  type Chapter,
} from "../queries/useGetChaptersQuery.ts";
import classNames from "classnames";
import { CircleCheck, XIcon } from "lucide-react";
import { useProgress } from "@/provider/progressTracking/useProgressTracking.ts";

interface SideBarProps {
  setIsSidebarOpen: (open: boolean) => void;
  isSidebarOpen: boolean;
}

const SideBar: FC<SideBarProps> = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const { chapters } = useGetChaptersQuery();
  const { progress } = useProgress();
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(
    null,
  );

  console.log({ progress });

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Auto-expand relevant chapter based on route
  useEffect(() => {
    for (const chapter of chapters) {
      const chapterMatch = currentPath.includes(`/chapters/${chapter.slug}`);
      const lessonMatch = chapter.lessons?.some((lesson) =>
        currentPath.includes(`/lessons/${lesson.slug}`),
      );

      if (chapterMatch || lessonMatch) {
        setExpandedChapterId(chapter.id);
        break;
      }
    }
  }, [currentPath, chapters]);

  const isActive = (path: string) => currentPath === path;

  // Helper to calculate chapter progress as average of lesson progresses
  const getChapterProgress = (chapter: Chapter) => {
    if (!chapter.lessons || chapter.lessons.length === 0) return undefined;
    const lessonProgresses = chapter.lessons.map(
      (lesson) => progress[lesson.id] ?? 0,
    );
    const sum = lessonProgresses.reduce((a, b) => a + b, 0);
    return sum / chapter.lessons.length;
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ease-in-out md:hidden"
        />
      )}

      <aside
        className={classNames(
          "fixed inset-y-0 left-0 w-64 bg-neutral-700 p-4 shadow-md transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block",
          {
            "z-50": isSidebarOpen,
            "translate-x-0": isSidebarOpen,
            "-translate-x-full": !isSidebarOpen,
            //hidden: !isSidebarOpen, // optional fallback
          },
        )}
      >
        <div className={"flex px-3 space-x-3 items-center align-bottom"}>
          <img src={"/logo.png"} alt={"logo"} className={"size-8 rounded"} />
          <span className="text-xl font-bold text-sky-100">My-Arabic</span>

          {/* Close button for mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-1 pt-2">
          <Link
            to="/"
            className={`block px-3 py-2 rounded transition ${
              isActive("/")
                ? "bg-sky-600 text-white"
                : "hover:bg-sky-600 hover:text-white"
            }`}
          >
            Home
          </Link>
          {chapters.map((chapter) => {
            const isChapterExpanded = expandedChapterId === chapter.id;
            const chapterPath = `/chapters/${chapter.slug}`;
            const isChapterActive = isActive(chapterPath);
            const chapterProgress = getChapterProgress(chapter);

            return (
              <div key={chapter.id}>
                <div className="relative">
                  <Link
                    to={chapterPath}
                    className={`block flex items-center justify-between px-3 py-2 rounded w-full transition ${
                      isChapterActive
                        ? "bg-sky-600 text-white"
                        : "hover:bg-sky-600 hover:text-white text-slate-100"
                    }`}
                    onClick={() => {
                      if (isChapterExpanded) {
                        setExpandedChapterId(null);
                      } else {
                        setExpandedChapterId(chapter.id);
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {/* Chapter Progress Icon Prefix */}
                      {chapterProgress ? (
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{ width: 24, height: 24, minWidth: 24 }}
                        >
                          <CircularProgress value={chapterProgress ?? 0} />
                        </span>
                      ) : null}
                      {/* Show max 2 lines, truncate with ellipsis if needed */}
                      <span className="line-clamp-2 overflow-hidden break-words max-w-[160px]">
                        {chapter.title}
                      </span>
                    </span>

                    {chapter.lessons?.length > 0 && (
                      <span className="ml-auto" aria-hidden="true">
                        <svg
                          className={classNames(
                            "w-4 h-4 transition-transform transform",
                            {
                              "rotate-180": isChapterExpanded,
                            },
                          )}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    )}
                  </Link>
                </div>

                {isChapterExpanded && chapter.lessons?.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1">
                    {chapter.lessons.map((lesson) => {
                      const lessonPath = `/lessons/${lesson.slug}`;
                      const isLessonActive = currentPath === lessonPath;
                      const progressValue = progress[lesson.id];

                      return (
                        <Link
                          key={lesson.id}
                          to={lessonPath}
                          className={`block text-sm px-3 py-1 rounded transition flex items-center gap-2 ${
                            isLessonActive
                              ? "bg-sky-500 text-white"
                              : "text-slate-200 hover:bg-sky-500 hover:text-white"
                          }`}
                        >
                          {/* Progress Icon Prefix */}
                          {progressValue === undefined ? null : (
                            <span className="inline-flex items-center justify-center">
                              <CircularProgress value={progressValue} />
                            </span>
                          )}
                          {lesson.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

// Circular progress indicator component
const CircularProgress: FC<{ value: number }> = ({ value }) => {
  // Hide if no progress
  if (!value || value <= 0) return null;

  const size = 16; // Make both SVG and icon 16x16 for consistency
  const radius = 7;
  const stroke = 2.5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const percent = Math.min(value, 1.0);
  const strokeDashoffset = circumference - percent * circumference;

  const showCheck = percent >= 1.0;

  if (showCheck) {
    return (
      <CircleCheck
        size={size}
        color={"#22c55e"}
        style={{
          pointerEvents: "none",
          display: "block",
        }}
      />
    );
  }

  return (
    <svg width={size} height={size} style={{ display: "block" }}>
      {/* Background dashed circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={normalizedRadius}
        stroke="#e5e7eb"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray="2,2"
      />
      {/* Progress arc */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={normalizedRadius}
        stroke="#22c55e"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: "stroke-dashoffset 0.3s" }}
      />
    </svg>
  );
};

export default SideBar;
