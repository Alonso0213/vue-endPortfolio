<template>
   <body class="body">
    
    <div class="container">
        <div class="row">
            <div class="card" style="width: 18rem;"  v-for="testimonials in data" :key="testimonials.ID">
  <img :src="testimonials.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ testimonials.name }}</h5>
    <p class="card-text">{{ testimonials.description }}</p>
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
                const res = await fetch("https://alonso0213.github.io/new-json/index.json");
                let parsedData = await res.json()
                this.data = parsedData.testimonials;
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
.card-body{
    background-color: black;
    color: white;
}
.body{
    background-color: rgb(59, 59, 59);
}

</style>
