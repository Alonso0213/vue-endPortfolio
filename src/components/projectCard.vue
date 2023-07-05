<template>
    <body class="body">
     
     <div class="container">
         <div class="row">
             <div class="card" style="width: 18rem;"  v-for="projects in data" :key="projects.ID">
   <img :src="projects.image" class="card-img-top" alt="..." loading="lazy">
   <div class="card-body">
     <h5 class="card-title">{{ projects.description }}</h5>
     <a href=""><p class="card-text">{{ projects.link }}</p></a>
   </div>
 </div>
         </div>
     </div>
 </body>
 </template>
 <script>
     export default {
         data(){
             return{
                 data:[]
             }
         },
         methods: {
             async fetchData(){
                 const res = await fetch("https://alonso0213.github.io/json-portfolio/index.json");
                 let parsedData = await res.json()
                 this.data = parsedData.projects;
             },
         },
         mounted(){
             this.fetchData()
         },
     }
 </script>
 <style scoped>
 .row{
     display: flex;
     justify-content: center;
     gap: 2rem;
 }
 .card{
     background-color: rgba(20, 20, 20, 0.938);
     color: white;
 }
 .body{
     background-color: rgb(31, 31, 31);
 }
 
 </style>
 