import { useState } from "react";

import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

/* 
myProjects = [
  {
    id: '',
    title: 'Learn',
    description: 'long text',
    dueDate: 'date string',
    tasks: ['task1', 'task2']
  },
  {
    id: '',
    title: 'Learn2',
    description: 'long text',
    dueDate: 'date string',
    tasks: ['task1', 'task2', 'task3']
  }
]
*/

function App() {
  const [isNewProject, setIsNewProject] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleAddProject() {
    setIsNewProject(true);
  }

  function handleSave(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projects={projects} onAddProject={handleAddProject} />
      {isNewProject ? (
        <NewProject
          onCancel={() => setIsNewProject(false)}
          onSave={handleSave}
        />
      ) : (
        <NoProjectSelected onAddProject={handleAddProject} />
      )}
    </main>
  );
}

export default App;
