<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <router-link to="/"><img src="https://i.postimg.cc/R0tzfVGv/ac-logo-a-c-design-white-ac-letter-ac-letter-logo-design-initial-letter-ac-linked-circle-uppercase-m.jpg" alt="logo" class="logo" loading="lazy"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/">Home</router-link></li>
        <li class="nav-item">
            <router-link to="/about">About</router-link></li>
        <li class="nav-item">
            <router-link to="/project">Projects</router-link></li>
        <li class="nav-item">
            <router-link to="/testimonials">Testimonials</router-link> </li>
        <li class="nav-item">
            <router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        
    }
</script>

        
        
        
<style scoped>
.logo{
    height: 3.5rem;
    border-radius: 3rem;
}
.collapse ul {
     display: flex;
     gap: 2rem;
}
.collapse{
    display: flex;
    justify-content: end;
}
@media (width<992px) {
  .collapse{
    display: flex;
    justify-content: center;
}
}
</style>