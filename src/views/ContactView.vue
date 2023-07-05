<template>
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        <br><br><br>
    </center>
    </body>
       

    
</template>

<script>

    export default {
       
    }
</script>

<style scoped>
form{
    width: 40%;
    color: white;
}
body{
    background-color: rgb(31, 31, 31);
}
h2{
    color: white;
}
</style>