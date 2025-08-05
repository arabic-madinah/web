import { type FC, type PropsWithChildren, useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command.tsx";
import { BookA, BookOpenCheck, TableOfContents, User } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { CommandPaletteContext } from "./CommandPaletteContext.tsx";
import { useSearchRoutes } from "@/hooks/useSearchRoutes.ts";
import { useLoginDialog } from "@/provider/loginDialog/useLoginDialog.ts";

const CommandPaletteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { setOpen: openLoginDialog } = useLoginDialog();

  const [searchInput, setSearchInput] = useState("");
  const { search } = useSearchRoutes();

  const routes = search(searchInput);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  type CommandType =
    | "create-chapter"
    | "create-lesson"
    | "course-editor"
    | "login";
  const selectCommand = (command: CommandType) => {
    switch (command) {
      case "create-chapter":
        navigate({ to: "/chapters-create" });
        break;
      case "create-lesson":
        navigate({ to: "/lessons-create" });
        break;
      case "course-editor":
        navigate({ to: "/course-editor" });
        break;
      case "login":
        openLoginDialog(true);
        break;
      default:
        console.warn("Unknown command:", command);
    }
    setOpen(false);
  };

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
      <>
        <CommandDialog
          open={open}
          onOpenChange={setOpen}
          className="dark -mt-24 md:mt-0"
        >
          <CommandInput
            placeholder="Type a command or search..."
            value={searchInput}
            onValueChange={setSearchInput}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {routes?.length ? (
              <CommandGroup heading={"Search Results"}>
                {routes.map((route) => (
                  <CommandItem
                    key={route.slug}
                    onSelect={() => {
                      navigate({ to: `${route.type}${route.slug}` });
                      setOpen(false);
                    }}
                  >
                    {{
                      "/chapters/": <BookA />,
                      "/lessons/": <BookOpenCheck />,
                    }[route.type] || null}
                    <span>{route.data.title || route.data.slug}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : null}
            <CommandGroup heading="Quick Commands">
              <CommandItem onSelect={() => selectCommand("create-chapter")}>
                <BookA />
                <span>Add Chapter</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => selectCommand("create-lesson")}>
                <BookOpenCheck />
                <span>Add Lesson</span>
                <CommandShortcut>⌘L</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => selectCommand("course-editor")}>
                <TableOfContents />
                <span>Course Editor</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => selectCommand("login")}>
                <User />
                <span>Login</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    </CommandPaletteContext.Provider>
  );
};

export default CommandPaletteProvider;
