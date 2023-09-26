import { useParams } from "react-router-dom";

export const Project = () => {
  const { project } = useParams;

  console.log(project);
  return (
    <div className="page-container project">
      <h1>Project </h1>
    </div>
  );
};
