import { createStore } from 'vuex'

export default createStore({
  state: {
    Testimonials: null
  },
  getters: {
  },
  mutations: {
    setTestimoinials(state,testcards){ 
      state.testcards = testcards
    }
  },
  actions: {
    async fetchtestimonials(context) {
      try{
        let response =await fetch ("https://alonso0213.github.io/json-portfolio/index.json")
        let {testcards}= await response.json()
        context.commit("setTestimonials",testcards)
      }catch(e) {
        console.log("nothing");
      }
    }
    
  },
  modules: {
  }
})
