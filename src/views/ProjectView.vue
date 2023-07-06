<template>
    <body class="body">
        <h2 class="head  animate__animated animate__bounceInDown">Projects</h2>
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
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap');
.head{
    color: white;
    font-family: 'Cinzel', serif;
}
.body{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-color: rgb(31, 31, 31);
    color: white;
}
</style>