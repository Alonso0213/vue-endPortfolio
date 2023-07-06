<template>
    <div>
        <body>
            <h2>Skills</h2>
            <div class="row">
             <div class="col" v-for="skills in project" :key="skills.ID">
               <img :src= skills.image alt="img" class="img1">
               <div class="col">
                <p class="p" col-3>{{ skills.description }}</p><br>
            <div class="icon">
                <img :src= skills.icon1 alt="img" col-3>
                <img :src= skills.icon2 alt="img" col-3>
                <img :src= skills.icon3 alt="img" col-3>
                <img :src= skills.icon4 alt="img" col-3>
                <img :src= skills.icon5 alt="img" col-3>
            </div>

               </div>
             </div>
            </div>                
        </body>
    </div>
</template>

<script>
    export default {
    computed: {
      project() {
        return this.$store.state.skills;
      }
    },
    mounted() {
      this.$store.dispatch('fetchSkills');
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap');
h2{
    color: white;
    font-family: 'Cinzel', serif;
}
.row{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .col {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    
  }
  .img1{
    height:13rem;
    border-radius: 80rem;
  }
  img{
    height:8rem;
    border-radius: 50rem;
  }
  body{
    background-color: rgb(31, 31, 31);;
    color: white;
  }
 
  
</style>