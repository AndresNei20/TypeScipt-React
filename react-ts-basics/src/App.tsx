import "./App.css";
import { CourseGoal } from "./components/CourseGoal/CourseGoal";

function App() {
  return (
    <>
      <h1>Let's get started</h1>
      <CourseGoal
        title="hello"
        >
        <p>hello i'm the description</p>
      </CourseGoal>
    </>
  );
}

export default App;
