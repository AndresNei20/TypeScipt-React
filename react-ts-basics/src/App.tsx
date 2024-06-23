import "./App.css";
import { CourseGoal } from "./components/CourseGoal/CourseGoal";
import { Header } from "./components/Header/Header";
import goalsImg from './assets/goalsImage.jpg'
import { useState } from "react";
import { CourseGoalList } from "./components/CourseGoalList/CourseGoalList";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals(prevGoals => {
      const newGoal:CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth'
      }
      return [...prevGoals, newGoal ]
    })
  }

  return (
    <>
      <h1>Let's get started</h1>
      <Header
        image={{src: goalsImg, alt: 'A list of goals'}}>
        <h1> Your course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals}/>
    </>
  );
}

export default App;
