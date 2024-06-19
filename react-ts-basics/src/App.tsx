import "./App.css";
import { CourseGoal } from "./components/CourseGoal/CourseGoal";
import { Header } from "./components/Header/Header";
import goalsImg from './assets/goalsImage.jpg'

function App() {
  return (
    <>
      <h1>Let's get started</h1>
      <Header
        image={{src: goalsImg, alt: 'A list of goals'}}>
        <h1> Your course goals</h1>
      </Header>
      <CourseGoal
        title="hello"
        >
        <p>hello i'm the description</p>
      </CourseGoal>
    </>
  );
}

export default App;
