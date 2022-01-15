<template lang="">
   <div>
       <p class="border-bottom  " :class="[bordercolor,borderWidth]" ></p>
   </div>
</template>
<script>
export default {
   props: ['bordercolor', 'borderWidth']
}
</script>
<style lang="">
   
</style>