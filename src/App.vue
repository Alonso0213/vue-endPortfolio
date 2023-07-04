<template>
 <div>
  <NAvbar/>
  
<router-view/>
<Foot/>
</div>
    
  
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #df0c0c;
}

</style>
<script>
import NAvbar from "./components/Navbar.vue";
import Foot from "./components/footer.vue";

export default {
  name: 'Navbar',
  components: {
    NAvbar,
    Foot
  }
}
</script>
