<template>
   <div class="main">
    <about/>
    <h1>Resume</h1>
    <education/>
    <skills/>
   </div>
</template>

<script>
import about from "../components/Resume.vue"
import education from "../components/Education.vue"
import skills from "../components/skills.vue"
  export default {
    components:{
      about,
      education,
      skills
        }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap');
h1{
    color: white;
    font-family: 'Cinzel', serif;
}
h1{
  background-color: rgba(0, 0, 0, 0.854);
  color: white;
}
.main{
  background-color:rgba(20, 20, 20, 0.938);
}

</style>

