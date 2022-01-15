<template>
   <div class="mt-3">
      <Header title="Budjects" progress="completed" bordercolor="border-success"></Header>
      <p>Please provide your historical budget spent with your previous provider. If not applicable, please leave blank.</p>

      <div class="container">
         <form @submit.prevent="budjectSubmit">
            <div class="row">
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Search-New</span>
                     <div class="col-7">
                        <input
                           type="text"
                           class="form-control border border-dark py-3 mb-3"
                           v-model="budject.searchNew"
                           @focus="removeDoller($event, 'searchNew')"
                           @blur="addDoller($event, 'searchNew')"
                        />
                     </div>
                  </div>
               </div>
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">YouTube</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.youTube"
                           @focus="removeDoller($event, 'youTube')"
                           @blur="addDoller($event, 'youTube')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <!-- section1 -->
            <div class="row">
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Search-Pre-Owned</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.searchPreOwned"
                           @focus="removeDoller($event, 'searchPreOwned')"
                           @blur="addDoller($event, 'searchPreOwned')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">OTT</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.ott"
                           @focus="removeDoller($event, 'ott')"
                           @blur="addDoller($event, 'ott')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <!-- section2 -->
            <div class="row">
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Search-Service</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.searchService"
                           @focus="removeDoller($event, 'searchService')"
                           @blur="addDoller($event, 'searchService')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Sales Mail</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.salesMail"
                           @focus="removeDoller($event, 'salesMail')"
                           @blur="addDoller($event, 'salesMail')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <!-- section3 -->
            <div class="row">
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Social-Sales</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.socialSales"
                           @focus="removeDoller($event, 'socialSales')"
                           @blur="addDoller($event, 'socialSales')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Service Mail</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.serviceMail"
                           @focus="removeDoller($event, 'serviceMail')"
                           @blur="addDoller($event, 'serviceMail')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <!-- section4 -->
            <div class="row">
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Social-Service</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.socialService"
                           @focus="removeDoller($event, 'socialService')"
                           @blur="addDoller($event, 'socialService')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Other</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.other"
                           @focus="removeDoller($event, 'other')"
                           @blur="addDoller($event, 'other')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <!-- section5 -->
            <div class="row">
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Display-New</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.displayNew"
                           @focus="removeDoller($event, 'displayNew')"
                           @blur="addDoller($event, 'displayNew')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
            </div>

            <!-- section6 -->
            <div class="row">
               <div class="col-5">
                  <div class="row">
                     <span class="col-4 fs-5">Display-Pre-Owned</span>
                     <div class="col-7">
                        <input
                           type="text"
                           v-model="budject.displayPreOwned"
                           @focus="removeDoller($event, 'displayPreOwned')"
                           @blur="addDoller($event, 'displayPreOwned')"
                           class="form-control border border-dark py-3 mb-3"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div class="text-end mt-3">
               <button class="btn rounded-pill bg-primary px-5 text-white" type="submit">save</button>
            </div>
         </form>
      </div>
   </div>
</template>
<script>
import axios from "axios";
import Header from "../../components/sharedHeading/Header.vue";


export default {
   components: { Header },
   data() {
      return {
         budject: {
            searchNew: '',
            searchPreOwned: '',
            searchService: '',
            socialService: '',
            socialSales: '',
            displayPreOwned: '',
            youTube: '',
            ott: '',
            salesMail: '',
            serviceMail: '',
            other: '',
            displayNew: ''

         }
      }
   },
   mounted() {
      axios.get('budject.json').then((res) => {
         for (let item in res.data) {
            let array = []
            array.push({ ...res.data[item] })

            array.forEach((res) => {
               let budject = res.budject

               this.budject = {
                  searchNew: budject.searchNew,
                  searchPreOwned: budject.searchPreOwned,
                  searchService: budject.searchService,
                  socialService: budject.socialService,
                  socialSales: budject.socialSales,
                  displayPreOwned: budject.displayPreOwned,
                  youTube: budject.youTube,
                  ott: budject.ott,
                  salesMail: budject.salesMail,
                  serviceMail: budject.serviceMail,
                  other: budject.other,
                  displayNew: budject.displayNew

               }



            })
         }
      })
   },
   methods: {
      budjectSubmit() {
         axios.post('budject.json', { budject: this.budject }).then((res) => {
            console.log(res)

         })
         this.budject = {
            searchNew: '',
            searchPreOwned: '',
            searchService: '',
            socialService: '',
            socialSales: '',
            displayPreOwned: '',
            youTube: '',
            ott: '',
            salesMail: '',
            serviceMail: '',
            other: '',
            displayNew: ''

         }
      },

      addDoller(e, data) {
         let text = e.target.value
         if (!text.includes("$") && !this.budject[data] == "") {
            this.budject[data] = "$" + e.target.value + ".00"
         }

      },
      removeDoller(e, data) {
         let text = e.target.value
         let b = text.substring(text.length, 1)
         this.budject[data] = b.slice(0, -3)

      }
   }
}
</script>

<style>
</style>