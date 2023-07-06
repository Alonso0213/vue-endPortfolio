<template>
    <div>
        <body>
            <h2 class="animate__animated animate__fadeInDown">About me</h2>
            <div class="row">
             <div class="col">
               <img src="https://i.postimg.cc/wMCJBrJn/me.jpg" alt="img" class="animate__animated animate__fadeInLeft" loading="lazy">
               <div class="col"><p class="p animate__animated animate__fadeInRight" col-3>Alonso Cupido
                 E-mail:alonsocupido51@gmail.com
                 Contact:0614605377 <br>
                A few of my hobbies include playing video games, hiking and just chilling with friends. <br>
                My full name is Alonso Conon Adam Cupido
                 D.O.B: 29 July 2003
                 I am from Mitchell's Plain</p>
               </div>
             </div>
            </div>                
        </body>
    </div>
</template>

<script>

    export default {
        
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
  img{
    height:17rem;
    border-radius: 50rem;
  }
  body{
    background-color: rgb(31, 31, 31);;
    color: white;
  }
  
</style>