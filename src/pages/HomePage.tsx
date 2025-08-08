import type { FC } from "react";
import { Link } from "@tanstack/react-router";

const HomePage: FC = () => {
  return (
    <>
      <h3 dir={"rtl"} className={"text-3xl mb-3 text-center"}>
        السلام عليكم
      </h3>

      <p className={"my-2"}>
        <i>My-Arabic.com</i> aims at providing a full in-depth Arabic grammar
        and vocabulary course. It is inspired by Br. Asif's lessons on YouTube,
        which are based on the three Madinah Books by dr. V. Abdur Raheem.
      </p>

      <p className={"my-2"}>
        This site ensues an effort in the hopes of summarizing the
        aforementioned works, and effectively compile them into a single
        user-friendly and interactive web-course!
      </p>

      <hr />

      <p className={"my-2"}>
        The site is currently in its early stages, and is being developed
        actively. If you have any suggestions or feedback, please feel free to
        submit an issue on the github repository:{" "}
        <Link
          to={"https://github.com/arabic-madinah/web"}
          target={"_blank"}
          className={"link text-blue-400"}
        >
          Github Arabic Madinah/web
        </Link>
        .
      </p>
    </>
  );
};

export default HomePage;
