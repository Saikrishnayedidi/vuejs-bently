<template lang="">
   <div class="">
      <div class="d-flex justify-content-between">
 <h1 class="fs-2">{{title}}</h1>

<div><i class="material-icons me-3">&#xe15d; </i><h1 class="fs-2 d-inline">{{progress}}</h1>
</div>      
      </div>
     <p class="border-bottom border-2 " :class="bordercolor"></p>
   </div>
</template>
<script>
export default {
   props: ['title', 'progress', 'bordercolor']
}
</script>
<style lang="">
   
</style>