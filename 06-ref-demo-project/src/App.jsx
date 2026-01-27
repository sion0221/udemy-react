import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    // 정의되지 않은 값으로 준 이유?
    // selectedProject 속성을 사용해서 나중에 프로젝트가 여러 개 있을 때,
    // null 값 : 새로운 프로젝트를 추가하고 싶을 때 사용
    // undefined 값 : 추가한 새 프로젝트가 없거나 아무 프로젝트도 선택하지 않았을 때 사용
    project: [],
  });

  function handleStartAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
      {/* <NewProject /> */}
    </main>
  );
}

export default App;
