import {defineStore} from "pinia";


type Filters = {
  id?: string
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: []
  }),
  getters: {
    isNotEmpty: (state) => {
      return state.projects !== null && state.projects.length > 0;
    },
    getById: (state) => {
      return (id: string) => {
        const project = state.projects.find((project: { id: string }) => project.id === id);
        if (project) return project;
        return undefined;
      };
    },
    getProjects: (state) => {
      return (filters: Filters) => {
        if (!filters) {
          return state.projects;
        }
        return null;
      };
    }
  },
  actions: {
    init() {

    }
  }
})
