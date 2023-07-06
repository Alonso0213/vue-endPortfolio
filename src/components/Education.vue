<template>
    <body>
        
        <h2>Education</h2>
    
    <div>
        <center><div class="card mb-3" style="max-width: 540px;" v-for="education in project" :key="education.ID">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="education.image" class="img-fluid rounded-start" alt="img" loading="lazy">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ education.description }}</h5>
                  <p class="card-text">{{ education.year }}</p>
                </div>
              </div>
            </div>
          </div>
        </center>
    </div>
</body>
</template>

<script>
    export default {
        computed: {
      project() {
        return this.$store.state.education;
      }
    },
    mounted() {
      this.$store.dispatch('fetchEducation');
    }
  }
    
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap');
h2{
    color: white;
    font-family: 'Cinzel', serif;
}
.card-text{
  font-family:'Raleway', sans-serif;
}
body{
    background-color: rgb(31, 31, 31);;
    color: white;
  }
</style>