<template>
    <div>
        <body>
            <h2>About me</h2>

            <div class="row">
             <div class="col">
               <img src="https://i.postimg.cc/wMCJBrJn/me.jpg" alt="img">
               <div class="col"><p class="p" col-3>Alonso Cupido
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