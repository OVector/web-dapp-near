import React, { useState } from 'react';

import { AddNewProject, MyProjects } from 'components/Projects';

import Metatags from '../components/Metatags';

interface Project {
  name: string;
  description: string;
  image: string;
}

export default function Projects() {
  const allStatus = {
    explorer: 'explorer',
    add: 'add',
  };

  const [status, setStatus] = useState(allStatus.explorer);
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
    setStatus(allStatus.explorer);
  };

  return (
    <main>
      <Metatags title="Projects" description="Explore my projects" />
      <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        {status == allStatus.explorer && <MyProjects projects={projects} onAdd={() => setStatus(allStatus.add)} />}
        {status == allStatus.add && <AddNewProject onAdded={(project) => addProject(project)} />}
      </div>
    </main>
  );
}
