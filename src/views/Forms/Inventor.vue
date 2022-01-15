<template lang="">
  <div class="container-fluid">
    <Header
      title="Inventor"
      progress="Not Started"
      bordercolor="border-danger"
    ></Header>
    <p class="py-2">Inventory Examples</p>
    <hr />
    <p>
      *MOST TIME SENSITIVE* Please provide three in-stock Inventory Examples
      below with accurate Invoice, MSRP and Selling Price (before incentives and
      rebates). This data will be used to order your inventory and validate the
      pricing sent over from your Inventory Provider, ensuring we can calculate
      accurate payments in your ads.
    </p>
    <form @submit.prevent="inventroSubmit()" >
      <div class="d-flex">
        <div class="col-4">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-7">
              <p class="fs-3">New Vehicle 1</p>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Stock Number</label>
              </div>
              <div class="col-7">
                <input
                   v-model="vehicle.stockNumber"
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
               />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Year</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                  class="form-select border border-dark py-3 mb-3"
                  v-model="vehicle.year"
                >
                 <option value="1998">1998</option>
                  <option value="1999">1999</option>
                   <option value="2000">2000</option>
                 
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Make</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                  class="form-select border border-dark py-3 mb-3"
                  v-model="vehicle.make"
                >
                  <option value="select make">select make</option>
                    <option value="bently">bently</option>
                 
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Model</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                  class="form-select border border-dark py-3 mb-3"
                  v-model="vehicle.model"
                >
                  <option value="bently">Bently</option>
                  
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <label for="">MSRP</label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  placeHolder="$0.00"
                  @blur="addDoller($event,'msrp')"
                  @focus="removeDoller($event,'msrp')"
                data-vehicle="vehicle"
                  v-model="vehicle.msrp"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for=""
                  >Selling Price(before incentives and rebates)*</label
                >
              </div>
              <div class="col-7">
                <input
                  type="text"
                  placeHolder="$0.00"
                  v-model="vehicle.sellingPrice"
                   @blur="addDoller($event,'sellingPrice')"
                  @focus="removeDoller($event,'sellingPrice')"
                data-vehicle="vehicle"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-4">
                <label for="">Invoice Price</label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  placeHolder="$0.00"
                  v-model="vehicle.invoice"
                   @blur="addDoller($event,'invoice')"
                  @focus="removeDoller($event,'invoice')"
                data-vehicle="vehicle"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- form2 -->
       <div class="col-4">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-7">
              <p class="fs-3">New Vehicle 1</p>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Stock Number</label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                   v-model="vehicle1.stockNumber"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Year</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                  class="form-select border border-dark py-3 mb-3"
                  v-model="vehicle1.year"
                >
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Make</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                  class="form-select border border-dark py-3 mb-3"
                  v-model="vehicle1.make"
                >
                  <option value="select make">select make</option>
                  <option value="bently">bently</option>
                  
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Model</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                  class="form-select border border-dark py-3 mb-3"
                  v-model="vehicle1.model"
                >
                  <option value="bently">bently</option>
                 
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <label for="">MSRP</label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  placeHolder="$0.00"
                  v-model="vehicle1.msrp"
                   @blur="addDoller($event,'msrp')"
                  @focus="removeDoller($event,'msrp')"
                data-vehicle="vehicle1"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for=""
                  >Selling Price(before incentives and rebates)*</label
                >
              </div>
              <div class="col-7">
                <input
                  type="text"
                  placeHolder="$0.00"
                   data-vehicle="vehicle1"
                    @blur="addDoller($event,'sellingPrice')"
                  @focus="removeDoller($event,'sellingPrice')"
                  v-model="vehicle1.sellingPrice"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-4">
                <label for="">Invoice Price</label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  placeHolder="$0.00"
                   data-vehicle="vehicle1"
                    @blur="addDoller($event,'invoice')"
                  @focus="removeDoller($event,'invoice')"
                  v-model="vehicle1.invoice"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- form3 -->
        <div class="col-4">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-7">
              <p class="fs-3">New Vehicle 3</p>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Stock Number</label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  v-model="vehicle2.stockNumber"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Year</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                   v-model="vehicle2.year"
                  class="form-select border border-dark py-3 mb-3"
                >
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Make</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                   v-model="vehicle2.make"
                  class="form-select border border-dark py-3 mb-3"
                >
                  <option value="select make">select make</option>
                  <option value="bently">bently</option>
                 
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="">Model</label>
              </div>
              <div class="col-7">
                <!-- <input
                  type="text"
                  class="form-control border border-dark py-3 mb-3"
                /> -->

                <select
                  name=""
                  id=""
                   v-model="vehicle2.model"
                  class="form-select border border-dark py-3 mb-3"
                >
                  <option value="bently">bently</option>
                  
                 
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <label for="">MSRP</label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  placeHolder="$0.00"
                   data-vehicle="vehicle2"
                   v-model="vehicle2.msrp"
                    @blur="addDoller($event,'msrp')"
                  @focus="removeDoller($event,'msrp')"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for=""
                  >Selling Price(before incentives and rebates)*</label
                >
              </div>
              <div class="col-7">
                <input
                  type="text"
                   data-vehicle="vehicle2"
                   v-model="vehicle2.sellingPrice"
                    @blur="addDoller($event,'sellingPrice')"
                  @focus="removeDoller($event,'sellingPrice')"
                  placeHolder="$0.00"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-4">
                <label for="">Invoice Price</label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  placeHolder="$0.00"
                  data-vehicle="vehicle2"
                  @blur="addDoller($event,'invoice')"
                  @focus="removeDoller($event,'invoice')"
                   v-model="vehicle2.invoice"
                  class="form-control border border-dark py-3 mb-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
    <!-- footer -->
    <h1 class="fs-1">Inventory Uploads</h1>
    <HorizantalLine bordercolor="border-dark"/> 
    <p>In addition to these values, please upload example screenshots from your DMS or Inventory Management System. We will use this information to verify the pricing.</p>

    <div class="text-end">
      <button class="btn rounded-pill bg-primary px-5" type="submit">save</button>
      </div>
    </form>
  </div>
</template>
<script>
import Header from "../../components/sharedHeading/Header.vue";
import HorizantalLine from "../../components/sharedHeading/HorizantalLine.vue"
import axios from 'axios'
export default {
  components: {
    Header,
    HorizantalLine
  },

  data() {
    return {
      vehicle: {
        stockNumber: '',
        year: '2000',
        make: 'select make',
        model: 'bently',
        msrp: '',
        sellingPrice: '',
        invoice: ''
      },
      vehicle1: {
        stockNumber: '',
        year: '2000',
        make: 'select make',
        model: 'bently',
        msrp: '',
        sellingPrice: '',
        invoice: ''
      },
      vehicle2: {
        stockNumber: '',
        year: '2000',
        make: 'select make',
        model: 'bently',
        msrp: '',
        sellingPrice: '',
        invoice: ''
      }
    }
  },



  mounted() {


    this.gerData()
  },

  methods: {

    gerData() {

      axios.get('inventor.json').then((res) => {
        let vechicle = ''
        let vechicle1 = ''
        let vechicle2 = ''

        for (let key in res.data) {
          let data = []
          data.push(res.data[key])
          data.forEach((res) => {
            console.log(res)
            vechicle = res.vechicle
            vechicle1 = res.vechicle1
            vechicle2 = res.vechicle2

            this.vehicle.stockNumber = vechicle.stockNumber
            this.vehicle.year = vechicle.year
            this.vehicle.make = vechicle.make
            this.vehicle.model = vechicle.model
            this.vehicle.msrp = vechicle.msrp
            this.vehicle.sellingPrice = vechicle.sellingPrice
            this.vehicle.invoice = vechicle.invoice

            this.vehicle1.stockNumber = vechicle1.stockNumber
            this.vehicle1.year = vechicle1.year
            this.vehicle1.make = vechicle1.make
            this.vehicle1.model = vechicle1.model
            this.vehicle1.msrp = vechicle1.msrp
            this.vehicle1.sellingPrice = vechicle1.sellingPrice
            this.vehicle1.invoice = vechicle1.invoice

            this.vehicle2.stockNumber = vechicle2.stockNumber
            this.vehicle2.year = vechicle2.year
            this.vehicle2.make = vechicle2.make
            this.vehicle2.model = vechicle2.model
            this.vehicle2.msrp = vechicle2.msrp
            this.vehicle2.sellingPrice = vechicle2.sellingPrice
            this.vehicle2.invoice = vechicle2.invoice


          })



        }

      })
    },
    inventroSubmit() {

      console.log(this.vehicle, this.vehicle1, this.vehicle2)
      axios.post('inventor.json', { vechicle: this.vehicle, vechicle1: this.vehicle1, vechicle2: this.vehicle2 }).then((res) => {
        console.log(res)

      })
    },
    addDoller(e, obj) {


      let text = e.target.value
      if (!text.includes('$')) {
        if (e.target.dataset.vehicle === 'vehicle2') {
          this.vehicle2[obj] = '$' + e.target.value + '.' + '00'
        }
        if (e.target.dataset.vehicle === 'vehicle1') {
          this.vehicle1[obj] = '$' + e.target.value + '.' + '00'
        }
        if (e.target.dataset.vehicle === 'vehicle') {
          this.vehicle[obj] = '$' + e.target.value + '.' + '00'
        }

      }

    }
    ,
    removeDoller(e, obj) {
      let text = e.target.value



      if (e.target.dataset.vehicle === 'vehicle2') {

        this.vehicle2[obj] = this.removeDollers(text)
      }
      if (e.target.dataset.vehicle === 'vehicle1') {

        this.vehicle1[obj] = this.removeDollers(text)
      }
      if (e.target.dataset.vehicle === 'vehicle') {


        this.vehicle[obj] = this.removeDollers(text)
      }
    },

    removeDollers(data) {
      let text = data

      let a = text.substring(text.length, 1)
      let b = a.slice(0, -3)

      return b
    }
  }
};
</script>
<style lang=""></style>
