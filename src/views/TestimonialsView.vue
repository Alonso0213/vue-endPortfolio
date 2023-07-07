<template>
    <body class="body">
<cards/> 
    </body>
       
    
</template>

<script>
import cards from "../components/Cards.vue"
    export default {
        components:{
            cards
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap');
h2{
    color: white;
    font-family: 'Cinzel', serif;
}
.body{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-color: rgb(31, 31, 31);
    color: white;
    font-family: 'Khand', sans-serif;
}
</style>