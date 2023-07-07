<template>
    <div>
        <body>
            <h2>Contact me</h2>
             <center><form  action="https://formspree.io/f/mgejewdp" method="POST">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter e-mail" required>
                  
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Message</label>
                   <textarea name="message" id="" cols="30" rows="10" class="form-control" placeholder="Enter message" required></textarea>
                </div>
                <div class="card" style="width: 16rem;" id="div">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><a href="https://www.facebook.com/" target="_blank"><img src="https://i.postimg.cc/PJjw68bK/2021-Facebook-icon-svg.png" alt="icon" class="icons"></a></li>
                      <li class="list-group-item"><a href="https://www.linkedin.com/in/alonso-cupido-b91370282/" target="_blank"><img src="https://i.postimg.cc/sgDpdSkN/702300.png" alt="icon" class="icons"></a></li>
                      <li class="list-group-item"><a href="https://www.instagram.com/?hl=en" target="_blank"><img src="https://i.postimg.cc/TPKghxYj/instagram-icon-logo-free-png.webp" alt="icon" class="icons"></a></li>
                    </ul>
                    <div class="card-footer">
                      E-mail: alonsocupido51@gmail.com <br>cell: 0614605377
                    </div>
                  </div>
                  <br>
                <button type="submit" class="btn btn-primary" target="blank">Submit</button>
              </form>
            <br><br><br>
        </center>
        </body>
           
    
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap');
form{
    width: 40%;
    color: white;
    
}
body{
    background-color: rgb(31, 31, 31);
}
h2{
    color: white;
    font-family: 'Cinzel', serif;
}
img{
    height: 2rem;
}

@media (width<700px) {
    form{
        width: 90%;
        color: rgb(255, 20, 20);
        
    }
}
</style>