<template>
   <div class="my-3">
      <Header title="Geo" progress="completed" bordercolor="border-success"></Header>
      <form @submit.prevent="geoSubmit">
         <div class="container">
            <p>Provide direction on where to show your ads -- by setting a radius or providing a list of zip codes.</p>
            <p>Let us know if New, Used, or Service campaigns require their own unique Geo Targeting strategies. Feel free to upload any Pump In, Pump Out, or Cross Sell reports for a more analytical approach. If geos are not provided before launch, a 15 mile radius will be set around the dealership.</p>
            <h1 class="fs-3 mt-5 mb-2">Primary Marketing Area / Area of Responsibility</h1>
            <HorizantalLine bordercolor="border-dark" borderWidth="border-1"></HorizantalLine>
            <div class="row">
               <div class="col">
                  <span class="fs-4">PROFIT CENTER: NEW</span>
                  <div class="row mt-5">
                     <div class="col">
                        <span class="fs-5 text-decoration-underline">Include</span>
                        <p class="mt-3">Enter one or more postal codes:</p>
                        <div class="input-group">
                           <div>
                              <textarea
                                 v-model="geo.newInclude"
                                 class="form-control border border-dark"
                                 cols="19"
                                 rows="8"
                                 aria-label="With textarea"
                              ></textarea>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <span class="fs-5 text-decoration-underline">Exclude</span>
                        <p class="mt-3">Enter one or more postal codes:</p>
                        <div class="input-group">
                           <div>
                              <textarea
                                 class="form-control border border-dark"
                                 cols="19"
                                 rows="8"
                                 v-model="geo.newExclude"
                                 aria-label="With textarea"
                              ></textarea>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <p class="fs-4">PROFIT CENTER: USED</p>
                  <input
                     type="checkbox"
                     class="form-check-input"
                     name="used"
                     v-model="check.checkUsed"
                     @click="checkd($event)"
                  />
                  <span class="ms-3">Use Profit Central Postal codes</span>
                  <div class="row mt-2">
                     <div class="col">
                        <span class="fs-5 text-decoration-underline">Include</span>
                        <p class="mt-3">Enter one or more postal codes:</p>
                        <div class="input-group">
                           <div>
                              <textarea
                                 :disabled="isvalidUsed"
                                 class="form-control border border-dark"
                                 cols="19"
                                 rows="8"
                                 name="used"
                                 v-model="geo.usedInclude"
                                 aria-label="With textarea"
                              ></textarea>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <span class="fs-5 text-decoration-underline">Exclude</span>
                        <p class="mt-3">Enter one or more postal codes:</p>
                        <div class="input-group">
                           <div>
                              <textarea
                                 :disabled="isvalidUsed"
                                 class="form-control border border-dark"
                                 cols="19"
                                 rows="8"
                                 name="used"
                                 v-model="geo.usedExclude"
                                 aria-label="With textarea"
                              ></textarea>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col">
                  <p class="fs-4">PROFIT CENTER: SERVICE</p>
                  <input
                     type="checkbox"
                     class="form-check-input"
                     v-model="check.checkService"
                     @click="checkd($event)"
                     name="service"
                  />
                  <span class="ms-3">Use Profit Central Postal codes</span>
                  <div class="row mt-2">
                     <div class="col">
                        <span class="fs-5 text-decoration-underline">Include</span>
                        <p class="mt-3">Enter one or more postal codes:</p>
                        <div class="input-group">
                           <div>
                              <textarea
                                 :disabled="isvalidService"
                                 class="form-control border border-dark"
                                 cols="19"
                                 rows="8"
                                 name="service"
                                 v-model="geo.serviceInclude"
                                 aria-label="With textarea"
                              ></textarea>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <span class="fs-5 text-decoration-underline">Exclude</span>
                        <p class="mt-3">Enter one or more postal codes:</p>
                        <div class="input-group">
                           <div>
                              <textarea
                                 :disabled="isvalidService"
                                 class="form-control border border-dark"
                                 cols="19"
                                 rows="8"
                                 name="service"
                                 v-model="geo.serviceExclude"
                                 aria-label="With textarea"
                              ></textarea>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col"></div>
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
import HorizantalLine from "../../components/sharedHeading/HorizantalLine.vue";
export default {
   components: { Header, HorizantalLine },

   data() {
      return {
         isvalidUsed: false,
         isvalidService: false,
         geo: {
            newInclude: '',
            newExclude: '',
            usedInclude: '',
            usedExclude: '',
            serviceInclude: '',
            serviceExclude: ''
         },
         check: {
            checkUsed: '',
            checkService: ''
         }


      }
   },

   mounted() {

      axios.get('geo.json').then((res) => {
         for (let item in res.data) {
            let array = []
            array.push({ ...res.data[item] })

            array.forEach((res) => {

               this.check = {
                  checkUsed: res.check.checkUsed,
                  checkService: res.check.checkService
               }
               this.geo = {
                  newInclude: res.geo.newInclude,
                  newExclude: res.geo.newExclude,
                  usedInclude: res.geo.usedInclude,
                  usedExclude: res.geo.usedExclude,
                  serviceInclude: res.geo.serviceInclude,
                  serviceExclude: res.geo.serviceExclude
               }
               if (this.check.checkUsed) {
                  this.isvalidUsed = true
               } else this.isvalidUsed = false
               if (this.check.checkService) {
                  this.isvalidService = true
               }
               else this.isvalidService = false
               console.log(this.check)
            })
         }
      })



   },

   methods: {

      geoSubmit() {
         axios.post('geo.json', { check: this.check, geo: this.geo })
      },
      checkd(e) {

         if (e.target.name == 'used') {
            if (e.target.checked) {
               this.isvalidUsed = true
            }
            else this.isvalidUsed = false
         }
         if (e.target.name == 'service') {
            if (e.target.checked) {
               this.isvalidService = true
            }
            else this.isvalidService = false
         }

      }

   }
}
</script>

<style scoped>
</style>
