import { type FC, type PropsWithChildren, useState } from "react";
import { LoginDialogContext } from "@/provider/loginDialog/LoginDialogContext.tsx";
import { Dialog, DialogContent } from "@/components/ui/dialog.tsx";
import { useFormik } from "formik";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Button } from "@/components/ui/button.tsx";

const LoginDialogProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      passcode: "",
    },
    onSubmit: (values) => {
      console.log("Passcode submitted:", values.passcode);
      localStorage.setItem("passcode", values.passcode);
      setOpen(false);
    },
  });

  return (
    <LoginDialogContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={"dark"}>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full max-w-sm items-center gap-3 dark">
              <Label htmlFor="email" className={"dark text-white"}>
                Password
              </Label>
              <Input
                type={"password"}
                onChange={formik.handleChange}
                name={"passcode"}
                className={"dark text-white"}
              />
            </div>
            <Button className={"mt-2"}>Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </LoginDialogContext.Provider>
  );
};

export default LoginDialogProvider;
