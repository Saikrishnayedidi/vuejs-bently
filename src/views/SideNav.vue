<template lang="">
   <div class="main">
      <nav class="navbar navbar-light  bg-nav">
  <div class="container">
    <a class="navbar-brand" href="#">
      <i class="fas fa-home text-white fs-1"></i>
    </a>
    
  </div>
</nav>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-2 background">
      <div class="sidebar">
        <div class="lists-data ">
          <ul class="nav-list side">
            <li class="nav-link fs-5 ">
              <router-link to="/" class="text-dark py-3 d-block ps-3 " >SUMMARY</router-link>
            </li>
            <li class="nav-link fs-5">
              <router-link to="/inventor" class="text-dark py-3 d-block ps-3 " >INVENTOR</router-link>
            </li>
            <li class="nav-link fs-5">
               <router-link to="/accounts" class="text-dark py-3 d-block ps-3 " >ACCOUNTS</router-link>
            </li>
            <li class="nav-link fs-5">
             <router-link to="/contacts" class="text-dark py-3 d-block ps-3 " >CONTACTS</router-link>
            </li>
             <li class="nav-link fs-5">
             <router-link to="/budjects" class="text-dark py-3 d-block ps-3 " >BUDJECTS</router-link>
            </li>
            <li class="nav-link fs-5">
              <router-link to="/measurements" class="text-dark py-3 d-block ps-3 " >MEASUREMENTS</router-link>
            </li>
           <li class="nav-link fs-5">
              <router-link to="/access" class="text-dark py-3 d-block ps-3 " >ACCESS</router-link>
            </li>
           <li class="nav-link fs-5">
              <router-link to="/geo" class="text-dark py-3 d-block ps-3 " >GEO</router-link>
            </li>
             <li class="nav-link fs-5">
              <router-link to="/expectations" class="text-dark py-3 d-block ps-3 ">Expectations</router-link>
            </li>
          
           
           
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-10 scroll">
      <router-view></router-view>
    </div>
  </div>
</div>

   </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.bg-nav {
  background-color: #4d5053;
}

div li {
  list-style-type: none;
  border-bottom: 1px solid white;
}
div li a {
  text-decoration: none;
}
.background {
  background-color: #4d5053;
}
.add {
  color: red;
}
a.router-link-active {
  text-decoration: none;
  color: rgb(67, 207, 67) !important;
}
.main {
  margin-top: 100px;
}

.nav-link:hover {
  background-color: #0d0057;
  color: white !important;
}
.sidebar {
  background-color: #e2e2e2;
  margin: 1px 1px 1px -11px;
}
.side {
  margin: 0px 0px 0px -62px;
}
</style>