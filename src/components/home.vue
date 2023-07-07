<template>
    <body class="body">
    <h1 class="head animate__animated animate__slideInDown"> Welcome to my Porfolio</h1>
    <div class="main animate__animated animate__slideInUp">
        <div>
    <h2>Im an aspiring full-stack developer</h2>
     </div>
        <router-link to="/about"><button class="btn btn-primary">Get in touch</button></router-link>
       
    </div>
    
    </body>
</template>
<script>
    export default {
    }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap');
.main{
    padding: 100px;
    background: url(https://i.postimg.cc/6Q52Hk6n/IMG-20230706-WA0007.jpg)no-repeat;
    background-size: contain;
    background-position:center ;
    height: 80vh;
    background-color: black;
}
.head{
    background-color: black;
    color: white;
    font-family: 'Caprasimo', cursive;
    font-size: uppercase;
}
.body{
    background-color: black;
}
.btn{
    margin-top: 55vh;
}
div h2{
    display: flex;
    justify-content: left;
    font-family:'Caprasimo', cursive; 
    font-size: uppercase;
    color: white;
}
@media (width<500px){
    div h2{
        display: flex;
        justify-content: left;
        font-family:'Caprasimo', cursive; 
        font-size: uppercase;
        color: white;
        margin-top: 40vh;
    }
    .btn{
        margin-top: 0vh;
    }
}
@media (width>500px){
    div h2{
        display: flex;
        justify-content: left;
        font-family:'Caprasimo', cursive; 
        font-size: uppercase;
        color: white;
       
    }
}
</style>