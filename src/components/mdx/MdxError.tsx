import { type FC } from "react";

export interface MdxErrorProps {
  message?: string;
}

const MdxError: FC<MdxErrorProps> = ({ message }) => {
  return (
    <div className={"text-red-400"}>
      Error rendering MDX content.
      {message && <div className="mt-2">{message}</div>}
    </div>
  );
};

export default MdxError;
