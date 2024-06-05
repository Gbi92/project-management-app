import { useState } from "react";

import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prev) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectingProject(selectedProjectId) {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectId,
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prev) => ({
      ...prev,
      projects: prev.projects.filter(
        (project) => project.id !== prev.selectedProjectId
      ),
      selectedProjectId: undefined,
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <ProjectDetails
      selectedProject={selectedProject}
      onDelete={handleDeleteProject}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        onAddProject={handleStartAddProject}
        onSelectingProject={handleSelectingProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
