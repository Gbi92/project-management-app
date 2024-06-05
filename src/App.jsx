import { useState } from "react";

import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

/* 
myProjects = [
  {
    title: 'Learn',
    description: 'long text',
    dueDate: 'date string',
    tasks: ['task1', 'task2']
  },
  {
    title: 'Learn2',
    description: 'long text',
    dueDate: 'date string',
    tasks: ['task1', 'task2', 'task3']
  }
]
*/

function App() {
  const [isNewProject, setIsNewProject] = useState(false);

  function handleAddProject() {
    setIsNewProject(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleAddProject} />
      {isNewProject ? (
        <NewProject onCancel={() => setIsNewProject(false)} />
      ) : (
        <NoProjectSelected onAddProject={handleAddProject} />
      )}
    </main>
  );
}

export default App;
