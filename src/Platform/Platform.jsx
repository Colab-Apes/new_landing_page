import Nav from './components/Nav';
import { CreateProject, HomePage, LearningPool, Project } from './sections';

const Platform = () => {
  return (
    <>
      <Nav />
      <CreateProject />
      <HomePage />
      <LearningPool />
      <Project />
    </>
  )
}

export default Platform