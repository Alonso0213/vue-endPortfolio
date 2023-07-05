<template>
    <body class="body">
        <h2 class="head">Projects</h2>
<cards/> 
    </body>
       
    
</template>

<script>
import cards from "../components/projectCard.vue"
    export default {
        components:{
            cards
        }
    }
</script>

<style scoped>
.body{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-color: rgb(31, 31, 31);
    color: white;
}
</style>