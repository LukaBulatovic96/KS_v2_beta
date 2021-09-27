<template lang="html">



    <div class="vqtests">
      <h3>VQ Tests results</h3>
      <ul class="list-group" >
        <div class=""  v-for="vqtest in vqtests" :key="vqtest.name">
          <li id="itemsLi" class="list-group-item">
            <h5>{{vqtest.name}} radio <span>{{ new Date(vqtest.date).toLocaleString() }}</span></h5>
            <p> A: {{(25-vqtest.result)/2+vqtest.result}}</p>
            <p> B: {{25 - ((25-vqtest.result)/2+vqtest.result) }} </p>
            <!-- <p><b>1.</b>{{vqtest.ans1}} <b>2.</b>{{vqtest.ans2}}<b>3.</b>{{vqtest.ans3}} <b>4.</b>{{vqtest.ans4}} <b>5.</b>{{vqtest.ans5}}
            <b>6.</b>{{vqtest.ans6}} <b>7.</b>{{vqtest.ans7}} <b>8.</b>{{vqtest.ans8}} <b>9.</b>{{vqtest.ans9}} <b>10.</b>{{vqtest.ans10}}
            <b>11.</b>{{vqtest.ans11}} <b>12.</b>{{vqtest.ans12}} <b>13.</b>{{vqtest.ans13}} <b>14.</b>{{vqtest.ans14}} <b>15.</b>{{vqtest.ans15}}
            <b>16.</b>{{vqtest.ans16}} <b>17.</b>{{vqtest.ans17}} <b>18.</b>{{vqtest.ans18}} <b>19.</b>{{vqtest.ans19}} <b>20.</b>{{vqtest.ans20}}
            <b>21.</b>{{vqtest.ans21}} <b>22.</b>{{vqtest.ans22}} <b>23.</b>{{vqtest.ans23}} <b>24.</b>{{vqtest.ans24}} <b>25.</b>{{vqtest.ans25}}</p> -->
          </li>
        </div>
      </ul>

      <h3>Test Licnosti results</h3>
      <ul class="list-group" >
        <div class=""  v-for="testLicnosti in testLicnostis" :key="testLicnosti.name">
          <li id="itemsLi" class="list-group-item">
            <h5>{{testLicnosti.name}} radio <span>{{ new Date(testLicnosti.date).toLocaleString() }}</span></h5>
            <p>Rezultat: </p>

            <!-- <p> A: {{(25-vqtest.result)/2+vqtest.result}}</p>
            <p> B: {{25 - ((25-vqtest.result)/2+vqtest.result) }} </p> -->
            <!-- <p><b>1.</b>{{vqtest.ans1}} <b>2.</b>{{vqtest.ans2}}<b>3.</b>{{vqtest.ans3}} <b>4.</b>{{vqtest.ans4}} <b>5.</b>{{vqtest.ans5}}
            <b>6.</b>{{vqtest.ans6}} <b>7.</b>{{vqtest.ans7}} <b>8.</b>{{vqtest.ans8}} <b>9.</b>{{vqtest.ans9}} <b>10.</b>{{vqtest.ans10}}
            <b>11.</b>{{vqtest.ans11}} <b>12.</b>{{vqtest.ans12}} <b>13.</b>{{vqtest.ans13}} <b>14.</b>{{vqtest.ans14}} <b>15.</b>{{vqtest.ans15}}
            <b>16.</b>{{vqtest.ans16}} <b>17.</b>{{vqtest.ans17}} <b>18.</b>{{vqtest.ans18}} <b>19.</b>{{vqtest.ans19}} <b>20.</b>{{vqtest.ans20}}
            <b>21.</b>{{vqtest.ans21}} <b>22.</b>{{vqtest.ans22}} <b>23.</b>{{vqtest.ans23}} <b>24.</b>{{vqtest.ans24}} <b>25.</b>{{vqtest.ans25}}</p> -->
          </li>
        </div>
        </ul>

        <h3>Stavovi Zaposlenih results</h3>
        <ul class="list-group" >
          <div class=""  v-for="stavoviZaposlenih in stavoviZaposlenihs" :key="stavoviZaposlenih.name">
            <li id="itemsLi" class="list-group-item">
              <h5>{{stavoviZaposlenih.name}} radio <span>{{ new Date(stavoviZaposlenih.date).toLocaleString() }}</span></h5>
              <p v-if="stavoviZaposlenih.staz ==='1'"> Staz: <b>manje od 6 meseci</b> </p>
              <p v-if="stavoviZaposlenih.staz ==='2'"> Staz: <b>6meseci - 1godine</b> </p>
              <p v-if="stavoviZaposlenih.staz ==='3'"> Staz: <b>1-2 godine</b> </p>
              <p v-if="stavoviZaposlenih.staz ==='4'"> Staz: <b>vise od 2 godine </b></p>

              <p v-if="stavoviZaposlenih.pol ==='M'"> Pol: <b>Muski</b> </p>
              <p v-if="stavoviZaposlenih.pol ==='Z'"> Pol: <b>Zenski</b> </p>

              <p>1. Da li smatrate da su Vam kompanijske vrednosti potrebne?  <b> {{stavoviZaposlenih.ans1}} </b></p>
              <p>2. Ukoliko ste na prethodno pitanje odgovorili sa DA, navedite koje kompanijske vrednosti prema Vašem mišljenju treba da poseduje White City Logistics: <b> {{stavoviZaposlenih.ans2}} </b></p>
              <p>3. Da li kompanija poseduje paket benefita za zaposlene? <b> {{stavoviZaposlenih.ans3}}</b></p>
              <p>4. Obeležite 2 beneficije koje biste želeli da Vam kompanija u budućem periodu obezbedi: <b>{{stavoviZaposlenih.ans4}}</b></p>
              <!-- <p> A: {{(25-vqtest.result)/2+vqtest.result}}</p>
              <p> B: {{25 - ((25-vqtest.result)/2+vqtest.result) }} </p> -->
              <!-- <p><b>1.</b>{{vqtest.ans1}} <b>2.</b>{{vqtest.ans2}}<b>3.</b>{{vqtest.ans3}} <b>4.</b>{{vqtest.ans4}} <b>5.</b>{{vqtest.ans5}}
              <b>6.</b>{{vqtest.ans6}} <b>7.</b>{{vqtest.ans7}} <b>8.</b>{{vqtest.ans8}} <b>9.</b>{{vqtest.ans9}} <b>10.</b>{{vqtest.ans10}}
              <b>11.</b>{{vqtest.ans11}} <b>12.</b>{{vqtest.ans12}} <b>13.</b>{{vqtest.ans13}} <b>14.</b>{{vqtest.ans14}} <b>15.</b>{{vqtest.ans15}}
              <b>16.</b>{{vqtest.ans16}} <b>17.</b>{{vqtest.ans17}} <b>18.</b>{{vqtest.ans18}} <b>19.</b>{{vqtest.ans19}} <b>20.</b>{{vqtest.ans20}}
              <b>21.</b>{{vqtest.ans21}} <b>22.</b>{{vqtest.ans22}} <b>23.</b>{{vqtest.ans23}} <b>24.</b>{{vqtest.ans24}} <b>25.</b>{{vqtest.ans25}}</p> -->
            </li>
          </div>
          </ul>

          <h3>360 Upitnik za Procenu Liderskih i Menadzerskih Sposobnosti</h3>
          <ul class="list-group" >
            <div class=""  v-for="feedbackTest in feedbackTests" :key="feedbackTest.name">
              <li id="itemsLi" class="list-group-item">
                <h5>{{feedbackTest.name}} radio <span>{{ new Date(feedbackTest.date).toLocaleString() }}</span></h5>
                <p>Rezultati: <b>{{feedbackTest.ans1}},{{feedbackTest.ans2}},{{feedbackTest.ans3}},{{feedbackTest.ans4}},{{feedbackTest.ans5}},{{feedbackTest.ans6}},{{feedbackTest.ans7}},{{feedbackTest.ans8}},{{feedbackTest.ans9}},{{feedbackTest.ans10}}, </b></p>

              </li>
            </div>
            </ul>

    </div>


</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line no-unused-vars
import {mapActions,mapGetters} from 'vuex';

export default {
  computed: mapGetters(["vqtests",'companys',"testLicnostis",'stavoviZaposlenihs',"feedbackTests"]),
  methods: {
    ...mapActions(["getVQTests",'getFeedBackTests','getStavoviZaposlenih','getTestLicnosti','getCompanies'])
  },
  async created() {
    await  this.getVQTests();
    await  this.getFeedBackTests();
    await  this.getStavoviZaposlenih();
    await  this.getTestLicnosti();
    await  this.getCompanies();
    console.log(this.feedbackTests);
  }
}
</script>

<style >
#itemsLi{
  background-color: cyan;
}


</style>
