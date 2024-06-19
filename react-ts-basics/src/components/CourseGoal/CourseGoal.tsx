import { type FC, ReactNode } from "react";
/* import { PropsWithChildren } from "react"; */

interface CourseGoalProps {
    title: string;
    children: ReactNode;
  }

/* type CourseGoalProps = PropsWithChildren<{ title: string } > */ 
// * Theres other way to use an component that waits a children

/* const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
export default CourseGoal */ //This is OTHER way to use Prop types

export const CourseGoal = ({
  title,
  children,
}:CourseGoalProps ) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};
