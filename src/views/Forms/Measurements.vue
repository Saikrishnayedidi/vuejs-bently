<template>
   <div>
      <Header class="my-4" title="Measurements" progress="Not Started" bordercolor="border-danger"></Header>
      <form @submit.prevent="meadurementsSubmit()">
         <div class="container">
            <p>By default, once you grant us Edit Access to your Google Analytics account, Foundation will create a new Google Analytics View to measure Foundation-Recommended goals based on the functionality available on your website. This will be linked to your Google Ads account and used to measure success and inform optimization strategies. This added measurement service is complementary.</p>
            <div class="container m-2">
               <input
                  class="form-check-input readio"
                  type="radio"
                  @click="checks($event)"
                  v-model="check"
                  data-name="check1"
                  value="check1"
                  name="flexRadioDefault"
               />

               <label
                  class="form-check-label ms-4"
                  for="flexRadioDefault1"
               >Recommended-Create a Foundation Google Analytics View and Goals for me</label>
            </div>
            <p class="or fs-5">OR</p>
            <LoadingSpinner v-if="loader"></LoadingSpinner>
            <div class="container m-2">
               <input
                  class="form-check-input readio"
                  type="radio"
                  data-name="check2"
                  @click="checks($event)"
                  v-model="check"
                  value="check2"
                  name="flexRadioDefault"
               />
               <label
                  class="form-check-label ms-4"
                  for="flexRadioDefault1"
               >OPT OUT-Do not Create a Foundation Google Analytics View or Goals for me</label>
            </div>

            <p>If Opting Out, please explain why and whether you have an existing Google Analytics View you would like Foundation to reference for measurement & optimization guidance.</p>
            <div class="input-group">
               <div>
                  <textarea
                     :disabled="isValid"
                     class="form-control border border-dark"
                     cols="100"
                     rows="7"
                     v-model="textArea"
                     aria-label="With textarea"
                  ></textarea>
               </div>
            </div>
            <div class="text-end mt-3">
               <button class="btn rounded-pill bg-primary px-5 text-white" type="submit">save</button>
            </div>
         </div>
      </form>
   </div>
</template>
<script>
import axios from "axios";
import Header from "../../components/sharedHeading/Header.vue";
import LoadingSpinner from "../../components/sharedHeading/LoadingSpinner.vue";

export default {
   components: { Header, LoadingSpinner },
   data() {
      return {
         isValid: null,

         check: null,
         textArea: '',
         loader: false,
      }
   },

   mounted() {
      this.loader = true
      setTimeout(() => {
         axios.get('measurements.json').then((res) => {
            for (let item in res.data) {
               let array = []
               array.push({ ...res.data[item] })
               array.forEach((res) => {

                  this.check = res.check
                  this.textArea = res.textArea
                  this.loader = false
               })
            }
         })
      }, 3000);
   },

   methods: {
      meadurementsSubmit() {

         console.log('1', this.check)


         this.loader = true

         setTimeout(() => {

            axios.post('measurements.json', { check: this.check, textArea: this.textArea }).then((res) => {
               if (!res.data.ok) {
                  this.loader = false
               }

            }).catch((err) => {
               console.log(err.message)
            })

         }, 3000)

      },
      checks(e) {


         if (e.target.dataset.name == 'check2') {
            this.isValid = false
         }
         if (e.target.dataset.name == 'check1') {
            this.isValid = true
         }

      }

   }
}
</script>

<style scoped>
.readio {
   width: 20px;
   height: 20px;
}
.or {
   position: relative;
   left: 5%;
   top: 10px;
}
</style>