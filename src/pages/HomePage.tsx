import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <h3 className={"text-3xl"}>السلام عليكم</h3>

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
    </>
  );
};

export default HomePage;
