import { type CourseGoal as CGoal } from "../../App";
import { CourseGoal } from "../CourseGoal/CourseGoal";

interface CourseGoalListProps{
    goals: CGoal[];
};

export const CourseGoalList = ({ goals }: CourseGoalListProps) => {
  return (
    <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
        <CourseGoal
          title={goal.title}>
          <p>{goal.description}</p>
        </CourseGoal>
      </li>
    ) )}
  </ul>
  )
}