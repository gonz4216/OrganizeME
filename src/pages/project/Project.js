import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

// components
import ProjectComments from "./ProjectComments";
import ProjectSummary from "./ProjectSummary";

// styles
import "./Project.css";
import Navbar from "../../components/Navbar";
import NotSupported from "../NotSupported";

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <NotSupported />

      <Navbar />
      <div className="project-details">
        <ProjectSummary project={document} />
        <ProjectComments project={document} />
      </div>
    </>
  );
}
