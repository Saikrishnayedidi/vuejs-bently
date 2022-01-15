<template>
   <div class="container-fluid mt-4">
      <Header title="Contacts" progress="Not Started" bordercolor="border-danger"></Header>
      <p>We frequently need dealership guidance on Inventory Feeds, Vehicle Pricing and Digital Strategy and Performance. Please provide accurate contact information for an expert on each of these topics at your dealership.</p>
      <form @submit.prevent="contactsSubmit">
         <div>
            <h1 class="fs-2">Inventory Feed Contact</h1>

            <HorizantalLine bordercolor="border-dark" borderWidth="border-1"></HorizantalLine>
            <div class="row">
               <div class="col-4">
                  <span class="col-3">First Name</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="name"
                        class="form-control border border-dark py-3 mb-3"
                        v-model.trim="inventoryFeedContact.firstName"
                        @input="validate($event, 'firstName')"
                     />
                     <span v-if="error.isfirstNameValid == 'inValid'">this field shoud not b empty</span>
                     <span
                        v-if="error.isfirstNameValid == 'length'"
                     >same should b more then 4 characters</span>
                  </div>
                  <span class="col-3">Email</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="email"
                        v-model="inventoryFeedContact.email"
                        @input="validate($event, 'email')"
                        class="form-control border border-dark py-3 mb-3"
                     />

                     <span v-if="error.isemailValid == 'length'">enter a valid mail</span>
                  </div>
               </div>
               <div class="col-4">
                  <span class="col-3">Last Name</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="name"
                        v-model.trim="inventoryFeedContact.lastName"
                        @input="validate($event, 'lastName')"
                        class="form-control border border-dark py-3 mb-3"
                     />
                     <span v-if="error.islastNameValid == 'inValid'">this field shoud not b empty</span>
                     <span
                        v-if="error.islastNameValid == 'length'"
                     >same should b more then 4 characters</span>
                  </div>
                  <span class="col-3">Phone Number</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="phonenumber"
                        @input="validate($event, 'phoenNumber')"
                        v-model="inventoryFeedContact.phoenNumber"
                        class="form-control border border-dark py-3 mb-3"
                     />
                  </div>
               </div>
            </div>
         </div>
         <!-- sectondsectin -->
         <div>
            <h1 class="fs-2">Vehicle Pricing Contact</h1>

            <HorizantalLine bordercolor="border-dark" borderWidth="border-1"></HorizantalLine>
            <div class="row">
               <div class="col-4">
                  <span class="col-3">First Name</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="name"
                        class="form-control border border-dark py-3 mb-3"
                        v-model.trim="inventoryFeedContact.firstName1"
                        @input="validate($event, 'firstName1')"
                     />
                     <span v-if="error.isfirstName1Valid == 'inValid'">this field shoud not b empty</span>
                     <span
                        v-if="error.isfirstName1Valid == 'length'"
                     >same should b more then 4 characters</span>
                  </div>
                  <span class="col-3">Email</span>
                  <div class="col-8 mt-2">
                     <input
                        type="mail"
                        name="email"
                        v-model="inventoryFeedContact.email1"
                        @input="validate($event, 'email1')"
                        class="form-control border border-dark py-3 mb-3"
                     />

                     <span v-if="error.isemail1Valid == 'length'">enter a valid mail</span>
                  </div>
               </div>
               <div class="col-4">
                  <span class="col-3">Last Name</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="name"
                        v-model.trim="inventoryFeedContact.lastName1"
                        @input="validate($event, 'lastName1')"
                        class="form-control border border-dark py-3 mb-3"
                     />
                     <span v-if="error.islastName1Valid == 'inValid'">this field shoud not b empty</span>
                     <span
                        v-if="error.islastName1Valid == 'length'"
                     >same should b more then 4 characters</span>
                  </div>
                  <span class="col-3">Phone Number</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="phonenumber"
                        @input="validate($event, 'phoenNumber1')"
                        v-model="inventoryFeedContact.phoenNumber1"
                        class="form-control border border-dark py-3 mb-3"
                     />
                  </div>
               </div>
            </div>
         </div>
         <!-- thirdsection -->
         <div>
            <h1 class="fs-2">Digital Strategy & Performance Contact</h1>

            <HorizantalLine bordercolor="border-dark" borderWidth="border-1"></HorizantalLine>
            <div class="row">
               <div class="col-4">
                  <span class="col-3">First Name</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="name"
                        class="form-control border border-dark py-3 mb-3"
                        v-model.trim="inventoryFeedContact.firstName2"
                        @input="validate($event, 'firstName2')"
                     />
                     <span v-if="error.isfirstName2Valid == 'inValid'">this field shoud not b empty</span>
                     <span
                        v-if="error.isfirstName2Valid == 'length'"
                     >same should b more then 4 characters</span>
                  </div>
                  <span class="col-3">Email</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="email"
                        v-model="inventoryFeedContact.email2"
                        @input="validate($event, 'email2')"
                        class="form-control border border-dark py-3 mb-3"
                     />

                     <span v-if="error.isemail2Valid == 'length'">enter a valid mail</span>
                  </div>
               </div>
               <div class="col-4">
                  <span class="col-3">Last Name</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="name"
                        v-model.trim="inventoryFeedContact.lastName2"
                        @input="validate($event, 'lastName2')"
                        class="form-control border border-dark py-3 mb-3"
                     />
                     <span v-if="error.islastName2Valid == 'inValid'">this field shoud not b empty</span>
                     <span
                        v-if="error.islastName2Valid == 'length'"
                     >same should b more then 4 characters</span>
                  </div>
                  <span class="col-3">Phone Number</span>
                  <div class="col-8 mt-2">
                     <input
                        type="text"
                        name="phonenumber"
                        @input="validate($event, 'phoenNumber2')"
                        v-model="inventoryFeedContact.phoenNumber2"
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
</template>
<script>
import axios from "axios";

import Header from "../../components/sharedHeading/Header.vue";
import HorizantalLine from "../../components/sharedHeading/HorizantalLine.vue";
export default {
   components: { Header, HorizantalLine },
   data() {
      return {
         inventoryFeedContact: {
            firstName: '',
            lastName: '',
            phoenNumber: '',
            email: '',
            firstName1: '',
            lastName1: '',
            phoenNumber1: '',
            email1: '',
            firstName2: '',
            lastName2: '',
            phoenNumber2: '',
            email2: '',
         },

         error: {
            isfirstNameValid: '',
            islastNameValid: '',
            isemailValid: '',
            isfirstName1Valid: '',
            islastName1Valid: '',
            isemail1Valid: '',
            isfirstName2Valid: '',
            islastName2Valid: '',
            isemail2Valid: '',
         }
      }
   },
   beforeRouteLeave(to, from, next) {
      debugger
      if (confirm('Do you want to proceed?')) {
         next()
      }
      else {
         next(false)
      }

   },

   mounted() {

      axios.get('contacts.json').then((res) => {

         for (let item in res.data) {
            let array = []

            array.push({ ...res.data[item] })

            array.forEach((res) => {
               let details = res.details
               console.log(res.details)



               this.inventoryFeedContact = {
                  firstName: details.firstName,
                  lastName: details.lastName,
                  phoenNumber: details.phoenNumber,
                  email: details.email,
                  firstName1: details.firstName1,
                  lastName1: details.lastName1,
                  phoenNumber1: details.phoenNumber1,
                  email1: details.email1,
                  firstName2: details.firstName2,
                  lastName2: details.lastName2,
                  phoenNumber2: details.phoenNumber2,
                  email2: details.email2,
               }
            })


         }

      })
   },
   methods: {

      contactsSubmit() {
         axios.post('contacts.json', { details: this.inventoryFeedContact }).then((res) => {
            console.log(res)
         })


         console.log(this.inventoryFeedContact.email)
      },
      validate(e, name) {
         if (e.target.name === 'name') {
            if (this.inventoryFeedContact[name] == '') {
               this.error['is' + name + 'Valid'] = 'inValid'
            }
            else if (this.inventoryFeedContact[name].length < 4) {
               this.error['is' + name + 'Valid'] = 'length'
            }
            else {
               this.error['is' + name + 'Valid'] = 'valid'
            }
         }

         if (e.target.name === 'phonenumber') {
            var x = this.inventoryFeedContact[name].replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.inventoryFeedContact[name] = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

         }

         if ('email' == e.target.name) {
            let pattren = /[a-z]+@gmail\.com/;
            let email = e.target.value;
            if (pattren.test(email)) {
               this.error['is' + name + 'Valid'] = 'valid';
            } else {
               this.error['is' + name + 'Valid'] = 'length';
            }
         }

      },

   }
}
</script>
<style>
</style>