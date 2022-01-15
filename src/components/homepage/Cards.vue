<template >
   <div>
      <div class="d-flex flex-wrap justify-content-between">
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <router-link to="/inventor">
               <i class="fas fa-car-side text-secondary icon-card fa-7x"></i>
            </router-link>
            <p class="mt-3 text-card">Inventory</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <router-link to="/accounts">
               <i class="fas fa-user text-secondary icon-card fa-7x"></i>
            </router-link>
            <p class="mt-3 text-card">Account</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>

         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <router-link to="contacts">
               <i class="fas fa-phone-alt text-secondary icon-card fa-7x"></i>
            </router-link>
            <p class="mt-3 text-card">Contact</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <router-link to="/access">
               <i class="fas fa-key text-secondary icon-card fa-7x"></i>
            </router-link>
            <p class="mt-3 text-card">Access</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <a routerLink="/home/sidenav/advertising">
               <i class="fas fa-bullhorn text-secondary icon-card fa-7x"></i>
            </a>
            <p class="mt-3 text-card">Advertising</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <router-link to="/geo">
               <i class="fas fa-globe text-secondary icon-card fa-7x"></i>
            </router-link>
            <p class="mt-3 text-card">Geo</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <router-link to="/expectations">
               <i class="fas fa-image text-secondary icon-card fa-7x"></i>
            </router-link>
            <p class="mt-3 text-card">Expectations</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <router-link to="/measurements">
               <i class="fas fa-chess-knight text-secondary icon-card fa-7x"></i>
            </router-link>
            <p class="mt-3 text-card">Measurement</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <router-link to="/budjects">
               <i class="fas fa-hand-holding-usd text-secondary icon-card fa-7x"></i>
            </router-link>
            <p class="mt-3 text-card">Budget</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
         <div
            class="card rounded d-flex flex-column align-items-center py-4 mt-5 icons me-1 col-12 col-md-6 col-lg-2"
         >
            <a routerLink="/home/billing">
               <i class="fas fa-scroll text-secondary icon-card fa-7x"></i>
            </a>
            <p class="mt-3 text-card">Billing</p>
            <i class="material-icons text-danger">&#xe15d;</i>
         </div>
      </div>
   </div>
</template>
<script>
export default {

}
</script>
<style  scoped>
.icon-card:hover {
   position: relative;
   top: 2px;
}
</style>