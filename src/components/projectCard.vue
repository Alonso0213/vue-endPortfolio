<template>
    <body class="body">
     
     <div class="container">
         <div class="row">
             <div class="card" style="width: 18rem;" v-for="projects in projects" :key="projects.ID">
   <img :src="projects.image" class="card-img-top" alt="" loading="lazy">
   <div class="card-body">
     <h5 class="card-title">{{ projects.description }}</h5>
    <a :href= projects.link target="_blank"><p class="card-text"><button class="btn btn-primary">Live</button></p></a><br>
    <a :href= projects.link2 target="_blank"><p class="card-text"><button class="btn btn-primary">GitHub</button></p></a>
   </div>
 </div>
         </div>
     </div>
 </body>
 </template>
 <script>
    export default {
    computed: {
      projects() {
        return this.$store.state.projects;
      }
    },
    mounted() {
      this.$store.dispatch('fetchProjects');
    }
  }
 </script>
 <style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap');

 .row{
     display: flex;
     justify-content: center;
     gap: 2rem;
 }
 .card{
     background-color: rgba(20, 20, 20, 0.938);
     color: white;
     border: solid white;
     font-family: 'Cinzel', serif;

 }
 .body{
     background-color: rgb(31, 31, 31);
 }
 
 </style>
 