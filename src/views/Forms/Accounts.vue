<template lang="">
<form  @submit.prevent="accountSubmit">
  <div>
    <Header
      title="Accounts"
      progress="completed"
      bordercolor="border-success"
    ></Header>
    <div class="container">
      <h1 class="fs-3" id="top">Dealership Name & Address</h1>
      <HorizantalLineVue bordercolor="border-dark" borderWidth="border-1"></HorizantalLineVue>
      <div class="row">
        <span class="fs-5 col-2" >Dealership</span>
        <span class="fs-5 col-2">Test Bentley</span>
      </div>
      <div class="row">
        <span class="fs-5 col-2">Dealership Address</span>
        <span class="fs-5 col"
          >1297 Parkside Dr Walnut Creek CA,94596-3693</span
        >
      </div>
      <div class="row">
        <div class="col-3 mt-3">
          <select
            
            class="form-select border border-dark py-3 mb-3"
           
          >
            <option value="yes">Yes</option>
            <option value="no">no</option>
           
          </select>
        </div>
        <p class="col mt-3">I confirm this is the correct name and address for use in the dealership ad copy and location extensions. If address changes are needed, please contact support@teamvelocitymarketing.com</p>
      </div>
      <h1 class="fs-2">Digital Properties</h1>
       <HorizantalLineVue bordercolor="border-dark" class="mt-4"></HorizantalLineVue>
<div class="alert alert-danger" v-if="isError.length>0" role="alert">
 {{isError}}
</div>
       <span>Website URLS</span>
       <div class="col-3 mt-2">
          <input type="text" :class="error.websiteUrls ? 'error' : 'errors' " v-model="urls.websiteUrls" @input="urlVaalid($event,'websiteUrls')" class="form-control  border border-dark py-3 mb-3 ">
          <span v-if="error.websiteUrls" class="text-danger">{{urls.websiteUrls}}is wrong url </span>
       </div>
        <span>Website Provider</span>
       <div class="col-3 mt-2">
            <input type="text" :class="error.WebsiteProvider ? 'error' : 'errors' " v-model="urls.WebsiteProvider" @input="urlVaalid($event,'WebsiteProvider')" class="form-control  border border-dark py-3 mb-3 ">
          <span v-if="error.WebsiteProvider" class="text-danger">{{urls.WebsiteProvider}}is wrong url </span>
       </div>
        <span>Facebook URL</span>
       <div class="col-3 mt-2">
           <input type="text" :class="error.facebookURL ? 'error' : 'errors' " v-model="urls.facebookURL" @input="urlVaalid($event,'facebookURL')" class="form-control  border border-dark py-3 mb-3 ">
          <span v-if="error.facebookURL" class="text-danger">{{urls.facebookURL}}is wrong url </span>
       </div>
        <span>Twitter URL</span>
       <div class="col-3 mt-2">
         <input type="text" :class="error.twitterUrl ? 'error' : 'errors' " v-model="urls.twitterUrl" @input="urlVaalid($event,'twitterUrl')" class="form-control  border border-dark py-3 mb-3 ">
          <span v-if="error.twitterUrl" class="text-danger">{{urls.twitterUrl}} is wrong url </span>
       </div>
        <span>Instagram URL</span>
       <div class="col-3 mt-2">
         <input type="text" :class="error.instagramUrl ? 'error' : 'errors' " v-model="urls.instagramUrl" @input="urlVaalid($event,'instagramUrl')" class="form-control  border border-dark py-3 mb-3 ">
          <span v-if="error.instagramUrl" class="text-danger">{{urls.instagramUrl}} is wrong url </span>
       </div>
       <span>Youtube URL</span>
       <div class="col-3 mt-2">
         <input type="text" :class="error.youtubeUrl ? 'error' : 'errors' " v-model="urls.youtubeUrl" @input="urlVaalid($event,'youtubeUrl')" class="form-control  border border-dark py-3 mb-3 ">
          <span v-if="error.youtubeUrl" class="text-danger">{{urls.youtubeUrl}} is wrong url </span>
       </div>
       <LoadingSpinnerVue v-if="isLoading" class="mt-5"></LoadingSpinnerVue>
       <h1 class="fs-2">Phone Numbers</h1>
       
       <HorizantalLineVue bordercolor="border-dark" borderWidth="border-1"></HorizantalLineVue>
       <p>Please enter the phone numbers call tracking numbers should direct to. Call tracking numbers will direct to the phone numbers you provide below.</p>

         <span>Call Routing Line-Sales</span>
       <div class="col-3 mt-2">
         <input type="text" v-model="phoneNumber.usaNumber1" @input="acceptNumber($event,'usaNumber1')"  class="form-control  border border-dark py-3 mb-3 ">

       </div>
        <span>Call Routing Line-Sales</span>
       <div class="col-3 mt-2">
         <input type="text" v-model="phoneNumber.usaNumber2" @input="acceptNumber($event,'usaNumber2')"  class="form-control  border border-dark py-3 mb-3 ">

       </div>

       <div class="text-end mt-3">
            <button  class="btn rounded-pill bg-primary px-5 text-white" type="submit">save</button>
       </div>
    </div>
  </div>
  
  </form>
</template>
<script>


import axios from "axios";
import Header from "../../components/sharedHeading/Header.vue";
import HorizantalLineVue from "../../components/sharedHeading/HorizantalLine.vue";
import LoadingSpinnerVue from "../../components/sharedHeading/LoadingSpinner.vue";
export default {
   components: {
      Header,
      HorizantalLineVue,
      LoadingSpinnerVue
   },
   data() {
      return {
         isError: '',
         isLoading: false,
         urls: {
            websiteUrls: '',
            WebsiteProvider: '',
            facebookURL: '',
            twitterUrl: '',
            instagramUrl: '',
            youtubeUrl: ''
         },
         phoneNumber: {
            usaNumber1: '',
            usaNumber2: ''

         }
         ,

         error: {
            websiteUrls: '',
            WebsiteProvider: '',
            facebookURL: '',
            twitterUrl: '',
            instagramUrl: '',
            youtubeUrl: ''
         },
         submitForm: {
            websiteUrls: false,
            WebsiteProvider: false
         }


      };
   },

   mounted() {
      let phonenumber
      let urls

      axios.get('accounts.json').then((res) => {
         let arry = []
         for (let item in res.data) {
            arry.push({ ...res.data[item] })
         }

         arry.forEach((res) => {
            console.log(res)
            phonenumber = res.phonenumbers
            urls = res.urls
            console.log(urls)
            this.urls.websiteUrls = urls.websiteUrls
            this.urls.WebsiteProvider = urls.WebsiteProvider
            this.urls.facebookURL = urls.facebookURL
            this.urls.twitterUrl = urls.twitterUrl
            this.urls.youtubeUrl = urls.youtubeUrl
            this.urls.instagramUrl = urls.instagramUrl
            this.phoneNumber.usaNumber1 = phonenumber.usaNumber1
            this.phoneNumber.usaNumber2 = phonenumber.usaNumber2
         })


      })


   },

   methods: {

      accountSubmit() {

         this.isLoading = true
         if (!this.submitForm.websiteUrls) {
            console.log('websiteRUrls is wrg')

         }
         if (!this.submitForm.WebsiteProvider) {
            console.log('websiteRUrls ttgggg')
         }
         if (this.submitForm.websiteUrls && this.submitForm.WebsiteProvider) {
            setTimeout(() => {
               axios.post('accounts.json', { urls: this.urls, phonenumbers: this.phoneNumber }).then((res) => {


                  if (!res.status === 200) {
                     this.isLoading = false
                     return
                  }




               }).catch((err) => {
                  this.isLoading = false
                  this.isError = err.message

               })
            }, 3000)

         }

         // this.urls = {
         //    websiteUrls: '',
         //    WebsiteProvider: '',
         //    facebookURL: '',
         //    twitterUrl: '',
         //    instagramUrl: '',
         //    youtubeUrl: ''
         // },
         //    this.phoneNumber = {
         //       usaNumber1: '',
         //       usaNumber2: ''

         //    }

         // console.log(this.urls, this.phoneNumber)
      },
      acceptNumber(e, number) {
         var x = this.phoneNumber[number].replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
         this.phoneNumber[number] = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      },
      urlVaalid(e, data) {

         let url = e.target.value
         let pattren = /^[w]{3}\.[a-z0-9]+\.com$/;
         if (url) {
            if (pattren.test(url)) {

               this.error[data] = false
               this.submitForm[data] = true
            }
            else {
               if (url.length < 6) {
                  this.error[data] = true

               }
               else {
                  this.error[data] = false
               }
            }

         }
         else {

            this.websiteUrls = false
         }

      }
   }
};
</script>
<style scoped>
.error {
   border: 1px solid red !important;
}
.errors {
   border: 1px solid black !important;
}
</style>
