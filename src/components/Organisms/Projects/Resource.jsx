import React from "react";
import RepoCard from "../../Atoms/RepoCard.jsx";
import NotebookCard from "../../Atoms/NotebookCard.jsx";
import ResourceCard from "../../Atoms/ResourceCard.jsx";

export default function Resource(props) {
  return (
    <>
      <h1>Resources</h1>
      <div>
        <h2>Repos</h2>
        {props.repos.map((repo) => (
          <RepoCard key={Math.random()} repo={repo} />
        ))}
      </div>
      <div>
        <h2>Notebooks</h2>
        {props.notebooks.map((notebook) => (
          <NotebookCard key={Math.random()} notebook={notebook} />
        ))}
      </div>
      <div>
        <h2>Extras</h2>
        {props.resources.map((resource) => (
          <ResourceCard key={Math.random()} resource={resource} />
        ))}
      </div>
    </>
  );
}
