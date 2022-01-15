<template>
   <div class="mt-3">
      <Header title="Expectations" progress="completed" bordercolor="border-success"></Header>
      <form @submit.prevent="expectationsSubmit">
         <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item mt-4 border border-1 border-dark">
               <h2 class="accordion-header" id="flush-headingOne">
                  <button
                     class="accordion-button text-dark fs-3 mainbg"
                     @click="toggle($event)"
                     :class="{ collapsed: isCollapse }"
                     type="button"
                     data-name="toggle"
                     data-bs-toggle="collapse"
                  >Sales</button>
               </h2>
               <div
                  id="flush-collapseOne"
                  class="accordion-collapse"
                  :class="{ collapse: isCollapse }"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
               >
                  <div class="accordion-body">
                     <!-- table -->
                     <div class="accordion-item mt-4 border border-1 border-dark">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button bgcolor fs-5 text-dark"
                              type="button"
                           >New Vehicle Sales</button>
                        </h2>
                        <div
                           id="flush-collapseOne"
                           class="accordion-collapse"
                           :class="{ collapse: isCollapse }"
                           aria-labelledby="flush-headingOne"
                           data-bs-parent="#accordionFlushExample"
                        >
                           <div class="accordion-body">
                              <!-- 1st question -->
                              <div>
                                 <p class="fs-5">
                                    1.Monthly Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0"
                                       v-model="expectations.monthlyIncrease"
                                       name="flexRadioDefault"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >0</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1-5"
                                       v-model="expectations.monthlyIncrease"
                                       name="flexRadioDefault"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >1-5</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="6-10"
                                       v-model="expectations.monthlyIncrease"
                                       name="flexRadioDefault"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >6-10</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="11-15"
                                       v-model="expectations.monthlyIncrease"
                                       name="flexRadioDefault"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >11-15</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="16 or more"
                                       v-model="expectations.monthlyIncrease"
                                       name="flexRadioDefault"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >16 or more</label>
                                 </div>
                              </div>
                              <!-- <end 1st> -->
                              <!-- 2nd question -->
                              <div>
                                 <p class="fs-5">
                                    2.YOY Percent Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0%"
                                       v-model="expectations.yoyPercentIncrease"
                                       name="flexRadioDefault2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1-5%"
                                       v-model="expectations.yoyPercentIncrease"
                                       name="flexRadioDefault2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1-5%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="6-10%"
                                       v-model="expectations.yoyPercentIncrease"
                                       name="flexRadioDefault2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >6-10%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="11-15%"
                                       v-model="expectations.yoyPercentIncrease"
                                       name="flexRadioDefault2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >11-15%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="16% or more"
                                       v-model="expectations.yoyPercentIncrease"
                                       name="flexRadioDefault2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >16% or more</label>
                                 </div>
                              </div>
                              <!-- <end> -->
                              <!-- herehe -->

                              <!-- 3rd question -->
                              <div>
                                 <p class="fs-5">
                                    3.Market Share Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0%"
                                       v-model="expectations.marketShareIncrease"
                                       name="flexRadioDefault3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value=".5-1%"
                                       v-model="expectations.marketShareIncrease"
                                       name="flexRadioDefault3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >.5-1%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1.1-1.5%"
                                       v-model="expectations.marketShareIncrease"
                                       name="flexRadioDefault3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1.1-1.5%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1.6-2%"
                                       v-model="expectations.marketShareIncrease"
                                       name="flexRadioDefault3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1.6-2%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="Over 2%"
                                       v-model="expectations.marketShareIncrease"
                                       name="flexRadioDefault3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >Over 2%</label>
                                 </div>
                              </div>

                              <!-- <> -->
                              <!-- 4thquestion -->
                              <div>
                                 <p class="fs-5">
                                    4.District Ranking Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0"
                                       v-model="expectations.districtRankingIncrease"
                                       name="flexRadioDefault4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1"
                                       v-model="expectations.districtRankingIncrease"
                                       name="flexRadioDefault3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="2"
                                       v-model="expectations.districtRankingIncrease"
                                       name="flexRadioDefault4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >2</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="3"
                                       v-model="expectations.districtRankingIncrease"
                                       name="flexRadioDefault4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >3</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="4 or higher"
                                       v-model="expectations.districtRankingIncrease"
                                       name="flexRadioDefault4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >4 or higher</label>
                                 </div>
                              </div>
                              <!-- <> -->
                           </div>
                        </div>
                     </div>
                     <!-- tableend -->
                  </div>
               </div>
            </div>
         </div>

         <!-- 2ndaccordian -->

         <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item mt-4 border border-1 border-dark">
               <h2 class="accordion-header" id="flush-headingOne">
                  <button
                     class="accordion-button text-dark fs-3 mainbg"
                     @click="toggle($event)"
                     :class="{ collapsed: isCollapse1 }"
                     type="button"
                     data-name="toggle1"
                     data-bs-toggle="collapse"
                  >Service</button>
               </h2>
               <div
                  id="flush-collapseOne"
                  class="accordion-collapse"
                  :class="{ collapse: isCollapse1 }"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
               >
                  <div class="accordion-body">
                     <!-- table -->
                     <div class="accordion-item mt-4 border border-1 border-dark">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button bgcolor fs-5 text-dark"
                              type="button"
                           >Customer Pay RO</button>
                        </h2>
                        <div
                           id="flush-collapseOne"
                           class="accordion-collapse"
                           :class="{ collapse: isCollapse1 }"
                           aria-labelledby="flush-headingOne"
                           data-bs-parent="#accordionFlushExample"
                        >
                           <div class="accordion-body">
                              <!-- 1st question -->
                              <div>
                                 <p class="fs-5">
                                    1.Monthly Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0"
                                       v-model="customerPayRO.monthlyIncrease"
                                       name="customerPayRO"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >0</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1-5"
                                       v-model="customerPayRO.monthlyIncrease"
                                       name="customerPayRO"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >1-5</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="6-10"
                                       v-model="customerPayRO.monthlyIncrease"
                                       name="customerPayRO"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >6-10</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="11-15"
                                       v-model="customerPayRO.monthlyIncrease"
                                       name="customerPayRO"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >11-15</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="16 or more"
                                       v-model="customerPayRO.monthlyIncrease"
                                       name="customerPayRO"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >16 or more</label>
                                 </div>
                              </div>
                              <!-- <end 1st> -->
                              <!-- 2nd question -->
                              <div>
                                 <p class="fs-5">
                                    2.YOY Percent Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0%"
                                       v-model="customerPayRO.yoyPercentIncrease"
                                       name="customerPayRO2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1-5%"
                                       v-model="customerPayRO.yoyPercentIncrease"
                                       name="customerPayRO2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1-5%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="6-10%"
                                       v-model="customerPayRO.yoyPercentIncrease"
                                       name="customerPayRO2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >6-10%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="11-15%"
                                       v-model="customerPayRO.yoyPercentIncrease"
                                       name="customerPayRO2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >11-15%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="16% or more"
                                       v-model="customerPayRO.yoyPercentIncrease"
                                       name="customerPayRO2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >16% or more</label>
                                 </div>
                              </div>
                              <!-- <end> -->
                              <!-- herehe -->

                              <!-- 3rd question -->
                              <div>
                                 <p class="fs-5">
                                    3.Market Share Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0%"
                                       v-model="customerPayRO.marketShareIncrease"
                                       name="customerPayRO3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value=".5-1%"
                                       v-model="customerPayRO.marketShareIncrease"
                                       name="customerPayRO3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >.5-1%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1.1-1.5%"
                                       v-model="customerPayRO.marketShareIncrease"
                                       name="customerPayRO3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1.1-1.5%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1.6-2%"
                                       v-model="customerPayRO.marketShareIncrease"
                                       name="customerPayRO3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1.6-2%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="Over 2%"
                                       v-model="customerPayRO.marketShareIncrease"
                                       name="customerPayRO3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >Over 2%</label>
                                 </div>
                              </div>

                              <!-- <> -->
                              <!-- 4thquestion -->
                              <div>
                                 <p class="fs-5">
                                    4.District Ranking Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0"
                                       v-model="customerPayRO.districtRankingIncrease"
                                       name="customerPayRO4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1"
                                       v-model="customerPayRO.districtRankingIncrease"
                                       name="customerPayRO4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="2"
                                       v-model="customerPayRO.districtRankingIncrease"
                                       name="customerPayRO4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >2</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="3"
                                       v-model="customerPayRO.districtRankingIncrease"
                                       name="customerPayRO4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >3</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="4 or higher"
                                       v-model="customerPayRO.districtRankingIncrease"
                                       name="customerPayRO4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >4 or higher</label>
                                 </div>
                              </div>
                              <!-- <> -->
                           </div>
                        </div>
                     </div>
                     <!-- tableend -->
                  </div>
               </div>
            </div>
         </div>

         <!-- <> -->

         <!-- 3rdaccordian -->
         <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item mt-4 border border-1 border-dark">
               <h2 class="accordion-header" id="flush-headingOne">
                  <button
                     class="accordion-button mainbg text-dark fs-3"
                     @click="toggle($event)"
                     :class="{ collapsed: isCollapse2 }"
                     type="button"
                     data-name="toggle2"
                     data-bs-toggle="collapse"
                  >Website</button>
               </h2>
               <div
                  id="flush-collapseOne"
                  class="accordion-collapse"
                  :class="{ collapse: isCollapse2 }"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
               >
                  <div class="accordion-body">
                     <!-- table -->
                     <div class="accordion-item mt-4 border border-1 border-dark">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button bgcolor fs-5 text-dark"
                              type="button"
                           >Website</button>
                        </h2>
                        <div
                           id="flush-collapseOne"
                           class="accordion-collapse"
                           :class="{ collapse: isCollapse2 }"
                           aria-labelledby="flush-headingOne"
                           data-bs-parent="#accordionFlushExample"
                        >
                           <div class="accordion-body">
                              <!-- 1st question -->
                              <div>
                                 <p class="fs-5">
                                    1.Traffic Increase MOM*
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0%"
                                       v-model="website.trafficIncreaseMOM"
                                       name="website"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >0%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1-2%"
                                       v-model="website.trafficIncreaseMOM"
                                       name="website"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >1-2%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="3-5%"
                                       v-model="website.trafficIncreaseMOM"
                                       name="website"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >3-5%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="6-10%"
                                       v-model="website.trafficIncreaseMOM"
                                       name="website"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >6-10%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="11% or more"
                                       v-model="website.trafficIncreaseMOM"
                                       name="website"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >11% or more</label>
                                 </div>
                              </div>
                              <!-- <end 1st> -->
                              <!-- 2nd question -->
                              <div>
                                 <p class="fs-5">
                                    2.Lead Increase
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0%"
                                       v-model="website.leadIncrease"
                                       name="website2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1-2%"
                                       v-model="website.leadIncrease"
                                       name="website2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1-2%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="3-5%"
                                       v-model="website.leadIncrease"
                                       name="website2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >3-5%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="6-10%"
                                       v-model="website.leadIncrease"
                                       name="website2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >6-10%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="11% or more"
                                       v-model="website.leadIncrease"
                                       name="website2"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >11% or more</label>
                                 </div>
                              </div>
                              <!-- <end> -->
                              <!-- herehe -->

                              <!-- 3rd question -->
                              <div>
                                 <p class="fs-5">
                                    3.Engagement Rate
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0%"
                                       v-model="website.engagementRate"
                                       name="website3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1-5%"
                                       v-model="website.engagementRate"
                                       name="website3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1-5%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="6-10%"
                                       v-model="website.engagementRate"
                                       name="website3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >6.10%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="11-15%"
                                       v-model="website.engagementRate"
                                       name="website3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >11-15%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="Over 2%"
                                       v-model="website.engagementRate"
                                       name="website3"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >16% or more</label>
                                 </div>
                              </div>

                              <!-- <> -->
                              <!-- 4thquestion -->
                              <div>
                                 <p class="fs-5">
                                    4.Transaction Rate
                                    <span class="text-danger">*</span>
                                 </p>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="0%"
                                       v-model="website.transactionRate"
                                       name="website4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >0%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="1-5%"
                                       v-model="website.transactionRate"
                                       name="website4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >1-5%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="6-10%"
                                       v-model="website.transactionRate"
                                       name="website4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >6-10%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="11-15%"
                                       v-model="website.transactionRate"
                                       name="website4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault21"
                                    >11-15%</label>
                                 </div>
                                 <div class="container m-2">
                                    <input
                                       class="form-check-input readio"
                                       type="radio"
                                       data-name="check1"
                                       value="16 or more"
                                       v-model="website.transactionRate"
                                       name="website4"
                                    />
                                    <label
                                       class="form-check-label ms-4 fs-5"
                                       for="flexRadioDefault1"
                                    >16% or more</label>
                                 </div>
                              </div>
                              <!-- <> -->
                           </div>
                        </div>
                     </div>
                     <!-- tableend -->
                  </div>
               </div>
            </div>
         </div>

         <!-- <> -->
         <div class="text-end mt-3">
            <button class="btn rounded-pill bg-primary px-5 text-white" type="submit">save</button>
         </div>
      </form>
   </div>
</template>
<script>
// import axios from "axios";

import Header from "../../components/sharedHeading/Header.vue"

// import { Store } from "vuex";
export default {
   data() {
      return {
         isCollapse: true,
         isCollapse1: true,
         isCollapse2: true,
         expectations: {
            monthlyIncrease: '',
            yoyPercentIncrease: '',
            marketShareIncrease: '',
            districtRankingIncrease: ''
         },
         customerPayRO: {
            monthlyIncrease: '',
            yoyPercentIncrease: '',
            marketShareIncrease: '',
            districtRankingIncrease: ''
         },
         website: {
            trafficIncreaseMOM: '',
            leadIncrease: '',
            engagementRate: '',
            transactionRate: ''
         }

         // monthly: ['0', '1-5', '6-10', '11-15', '16 or more'],
         // yearly: ['0%', '1-5%', '6-10%', '11-15%', '16% or more'],
         // market: ['0%', '.5-1%', '1.1-1.5%', '1.6-2%', 'Over 2%'],
         // district: ['0', '1', '2', '3', '4 or higher'],
         // trafficIncrease: ['0%', '1-2%', '3-5%', '6-10%', '11% or more'],
         // leadIncrease: ['0%', '1-2%', '3-5%', '6-10%', '11% or more'],
         // engagementRate: ['0%', '1-5%', '6-10%', '11-15%', '16% or more'],
         // transactionRate: ['0%', '1-5%', '6-10%', '11-15%', '16% or more'],


      };
   },

   mounted() {
      this.$store.dispatch('expectationsGet')


      setTimeout(() => {

         console.log(this.$store.state.expectations)
         // this.expectations = {
         //    monthlyIncrease: '',
         //    yoyPercentIncrease: '',
         //    marketShareIncrease: '',
         //    districtRankingIncrease: ''
         // },

         this.customerPayRO = {
            monthlyIncrease: this.$store.state.expectations.customerPayRO.monthlyIncrease,
            yoyPercentIncrease: this.$store.state.expectations.customerPayRO.yoyPercentIncrease,
            marketShareIncrease: this.$store.state.expectations.customerPayRO.marketShareIncrease,
            districtRankingIncrease: this.$store.state.expectations.customerPayRO.districtRankingIncrease
         },
            this.expectations = {
               monthlyIncrease: this.$store.state.expectations.expectation.monthlyIncrease,
               yoyPercentIncrease: this.$store.state.expectations.expectation.yoyPercentIncrease,
               marketShareIncrease: this.$store.state.expectations.expectation.marketShareIncrease,
               districtRankingIncrease: this.$store.state.expectations.expectation.districtRankingIncrease
            },
            this.website = {
               trafficIncreaseMOM: this.$store.state.expectations.website.trafficIncreaseMOM,
               leadIncrease: this.$store.state.expectations.website.leadIncrease,
               engagementRate: this.$store.state.expectations.website.engagementRate,
               transactionRate: this.$store.state.expectations.website.transactionRate
            }


      }, 300)



      // for (let item in this.$store.state.expectations) {
      //    let array = []
      //    array.push({ ...this.$store.state.expectations[item] })
      //    console.log(array)
      // }
   },

   methods: {
      expectationsSubmit() {
         // axios.post('https://agrx-7d527-default-rtdb.firebaseio.com/expectations.json', { expectations: this.expectations, customerPayRO: this.customerPayRO, website: this.website }).then((res) => {
         //    if (!res.ok) {
         //       console.log('hello')
         //    }
         // })

         this.$store.dispatch('expectationsPost', { expectation: this.expectations, customerPayRO: this.customerPayRO, website: this.website })


      },
      toggle(e) {

         if (e.target.dataset.name == 'toggle') {
            this.isCollapse = !this.isCollapse
         }

         if (e.target.dataset.name == 'toggle1') {
            this.isCollapse1 = !this.isCollapse1
         }
         if (e.target.dataset.name == 'toggle2') {
            this.isCollapse2 = !this.isCollapse2
         }


      }
   },
   components: { Header }
}
</script>

<style scoped>
.bgcolor {
   background-color: #ccc;
}
.mainbg {
   background-color: #f5f5f5;
}
.readio {
   width: 20px;
   height: 20px;
}
</style>
