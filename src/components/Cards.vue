<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="item in data" :key="item.ID">
                <div class="card">
                    <img :src="item.image" class="card-img-top" alt="item.title">
                    <div class="card-body">
                        <h1>Title</h1>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                const res = await fetch("https://codebeans2022.github.io/JSON-Server/data.json");
                let parsedData = await res.json()
                this.data = parsedData.products;
            },
        },
        mounted(){
            this.fetchData()
        },
    }
</script>
<style scoped>
</style>