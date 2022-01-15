<template>
   <div class="spinner">
      <div></div>
      <div></div>
   </div>
</template>
<script>
export default {
}
</script>
<style scoped>
body {
   max-width: 960px;
   margin: 200px auto;
   display: flex;

   justify-content: space-around;
}

/* spinner */
.spinner {
   width: 100px;
   height: 100px;
   position: relative;
   position: absolute;
   left: 50%;
   top: 40%;
}
.spinner div {
   box-sizing: border-box;
   position: absolute;
   width: 100%;
   height: 100%;
   border: 8px solid transparent;
   border-top-color: #60bef5c2;
   border-radius: 50%;
   animation: spinnerOne 1.2s linear infinite;
}
.spinner div:nth-child(2) {
   border: 8px solid transparent;
   border-bottom-color: #60bef5af;
   animation: spinnerTwo 1.2s linear infinite;
}

@keyframes spinnerOne {
   0% {
      transform: rotate(0deg);
      border-width: 10px;
   }
   50% {
      transform: rotate(180deg);
      border-width: 1px;
   }
   100% {
      transform: rotate(360deg);
      border-width: 10px;
   }
}
@keyframes spinnerTwo {
   0% {
      transform: rotate(0deg);
      border-width: 1px;
   }
   50% {
      transform: rotate(180deg);
      border-width: 10px;
   }
   100% {
      transform: rotate(360deg);
      border-width: 1px;
   }
}
</style>