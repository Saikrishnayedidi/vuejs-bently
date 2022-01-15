<template>
   <div class="my-3">
      <Header title="Access" progress="completed" bordercolor="border-success"></Header>
      <div class="container">
         <form action>
            <h1 class="fs-3 mb-3">Grant Acsess</h1>
            <HorizantalLine bordercolor="border-dark" borderWidth="border-1"></HorizantalLine>
            <div class="container m-2">
               <input
                  class="form-check-input readio"
                  type="checkBox"
                  v-model="check"
                  @click="checkd"
                  id="flexRadioDefault1"
                  name="flexRadioDefault"
               />
               <label
                  class="form-check-label ms-4 text-muted"
                  for="flexRadioDefault1"
               >Facebook - Page Admin Access</label>
               <p
                  class="ms-5"
               >Required to run Facebook Ads. Team Velocity will send a request from Data Driven Holdings. Access must be granted by your Facebook Business Manager.</p>
            </div>
            <div class="container m-2">
               <input
                  class="form-check-input readio check"
                  type="checkBox"
                  id="flexRadioDefault2"
                  name="flexRadioDefault"
                  :value="check"
                  @click="checkd"
               />
               <label
                  class="form-check-label ms-4 text-muted"
                  for="flexRadioDefault2"
               >Google My Business - Manager Access (Site Manager Access is not sufficient)</label>
               <p
                  class="ms-5"
               >Required to enable Location Extensions and more. Foundation will send a request for you to accept from digitallocationstier10@gmail.com</p>
            </div>
            <div class="container m-2">
               <input
                  class="form-check-input readio"
                  type="checkBox"
                  id="flexRadioDefault3"
                  name="flexRadioDefault"
                  v-model="check"
               />
               <label
                  class="form-check-label ms-4 text-muted"
                  for="flexRadioDefault3"
               >Google Analytics - Edit Access</label>
               <p
                  class="ms-5"
               >Strongly recommended for measurement and optimization. You will need to initiate. Please grant Edit Access at the Property Level to</p>
               <p
                  class="p ms-5"
               >TeamVDealerAnalytics6@gmail.com. See Google's Instructions For Adding Users.</p>
            </div>
            <!-- radio -->
            <div class="container m-2">
               <p>Google Ads Account Preferences (select one)</p>
               <div class="ms-4 radio1">
                  <input
                     class="form-check-input readio"
                     type="radio"
                     data-name="check"
                     value="check"
                     v-model="radio"
                     @click="checkd($event)"
                     name="flexRadioDefault"
                  />

                  <label
                     class="form-check-label ms-4"
                     for="flexRadioDefault1"
                  >Use My existing Google Ads accounts. The 10-digit customer ID is:</label>
                  <div class="col-3 radioText">
                     <input type="text" ref="ddd" class="form-control border border-dark py-3 mb-3" />
                  </div>
                  <p
                     class="ms-5 mt-3"
                  >You must have Admin Access to approve Team Velocity’s request to link your existing account to the Team Velocity MCC. You will not be able to manage non-Team Velocity campaigns in the account alongside our dynamic campaigns.</p>
               </div>

               <div class="ms-4">
                  <input
                     class="form-check-input readio"
                     type="radio"
                     v-model="radio"
                     data-name="check2"
                     @click="checkd($event)"
                     value="Create a new Google Ads account for me"
                     name="flexRadioDefault"
                  />

                  <label
                     class="form-check-label ms-4"
                     for="flexRadioDefault1"
                  >Create a new Google Ads account for me</label>
               </div>
            </div>
         </form>
      </div>
   </div>
</template>
<script>


import axios from "axios";
import Header from "../../components/sharedHeading/Header.vue"
import HorizantalLine from "../../components/sharedHeading/HorizantalLine.vue";
export default {
   data() {
      return {
         check: 'Facebook - Page Admin Access',
         radio: ""
      };
   },
   components: { Header, HorizantalLine },

   mounted() {
      axios.get('access.json').then((res) => {
         for (let item in res.data) {
            let array = []
            array.push({ ...res.data[item] })
            array.forEach((res) => {
               this.check = res.cechk1
            })
         }
      })
   },
   methods: {
      checkd(e) {
         axios.post('access.json', { cechk1: this.check }).then((res) => {
            console.log(res)
         })
         debugger
         if (e.target.dataset.name == 'check2') {

            this.$refs.ddd.disabled = true
            return
         }

         this.$refs.ddd.disabled = false
      }
   }

}
</script>

<style scoped>
.readio {
   width: 20px;
   height: 20px;
}
.p {
   text-decoration: underline;
}
.radio1 {
   position: relative;
}
.radioText {
   position: absolute;
   top: -30px;
   right: 27%;
}
</style>