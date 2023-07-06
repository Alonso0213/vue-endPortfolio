import axios from 'axios';
import { createStore } from 'vuex';
export default createStore({
  state: {
    projects: [],
    testimonials: [],
    education: [],
    skills: []
  },
  getters: {
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    setEducation(state, education) {
      state.education = education;
    }
  },
  actions: {
    async fetchProjects({ commit }) {
      try {
        const response = await axios.get('https://alonso0213.github.io/json-portfolio/index.json');
        const projects = response.data.projects;
        commit('setProjects', projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
    async fetchTestimonials({ commit }) {
      try {
        const response = await axios.get('https://alonso0213.github.io/json-portfolio/index.json');
        const testimonials = response.data.testimonials;
        commit('setTestimonials', testimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    },
    async fetchSkills({ commit }) {
      try {
        const response = await axios.get('https://alonso0213.github.io/json-portfolio/index.json');
        const skills = response.data.skills;
        commit('setSkills', skills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    },
    async fetchEducation({ commit }) {
      try {
        const response = await axios.get('https://alonso0213.github.io/json-portfolio/index.json');
        const education = response.data.education;
        commit('setEducation', education);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    }
  },
  modules: {
  }
});
