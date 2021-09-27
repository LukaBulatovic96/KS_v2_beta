<template lang="html">

  <h1>360 FeedBack Test</h1>
  <!-- <h3>Test radi: {{user.name}}</h3> -->
  <div class="row">
    <div class="card mx-auto">
  <div class="card-body">

  <form @submit.prevent="submitFeedBackTest360">

    <div class="form-group">
      <label for="boss">Naziv Nadredjenog</label>
      <input
        class="form-control"
        type="text"
        placeholder="Nadredjeni"
        name="boss"
        v-model="boss"
        id="boss"
        >
    </div>

      <div class="form-group">
        <h3> Za zadatke za koje niko u timu nije spreman da ih samostalno obavi, pravovremeno bira zaposlenog koji pokazuje najveći potencijal za samostalno obavljanje posla.</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans1a" id="ans1a" v-model="ans1" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans1b" id="ans1b" v-model="ans1" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans1c" id="ans1c" v-model="ans1" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans1d" id="ans1d" v-model="ans1" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans1e" id="ans1e" v-model="ans1" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>


      <div class="form-group">
        <h3> Adekvatno bira kanal komunikacije (email, telefonski razgovor, sastanak)u skladu sa temom i prirodom problema kojim se bavi. </h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans2a" id="ans2a" v-model="ans2" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans2b" id="ans2b" v-model="ans2" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans2c" id="ans2c" v-model="ans2" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans2d" id="ans2d" v-model="ans2" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans2e" id="ans2e" v-model="ans2" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>


      <div class="form-group">
        <h3> Adekvatno se postavlja i reaguje na primedbe, žalbe i kritike – uvažava tako dobijene informacije i nastoji da na osnovu njih unapredi svoj pristup poslu. </h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans3a" id="ans3a" v-model="ans3" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans3b" id="ans3b" v-model="ans3" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans3c" id="ans3c" v-model="ans3" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans3d" id="ans3d" v-model="ans3" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans3e" id="ans3e" v-model="ans3" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>

      <div class="form-group">
        <h3> Afirmiše zaposlene u svom timu, podstičući ih na samostalnost u radu.</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4a" id="ans4a" v-model="ans4" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4b" id="ans4b" v-model="ans4" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4c" id="ans4c" v-model="ans4" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4d" id="ans4d" v-model="ans4" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4e" id="ans4e" v-model="ans4" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>



      <div class="form-group">
        <h3> Aktivno sluša sagovornika u komunikaciji, a  zatim proverava da li je dobro razumeo sagovornika, kako bi obezbedio razumevanje u komunikaciji.</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans5a" id="ans5a" v-model="ans5" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans5b" id="ans5b" v-model="ans5" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans5c" id="ans5c" v-model="ans5" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans5d" id="ans5d" v-model="ans5" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans5e" id="ans5e" v-model="ans5" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>


      <div class="form-group">
        <h3> Analizira greške u radu na delegiranim zadacima i evaluira spremnost zaposlenih za uspešno realizovanje zadatka.</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans6a" id="ans6a" v-model="ans6" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans6b" id="ans6b" v-model="ans6" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans6c" id="ans6c" v-model="ans6" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans6d" id="ans6d" v-model="ans6" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans6e" id="ans6e" v-model="ans6" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>


      <div class="form-group">
        <h3> Analizira zadatke iz perspektive zahtevanih resursa (vreme, ljudi, finansije, materijalni resursi) za njegovo obavljanje i vrši adekvatnu pripremu tima.</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans7a" id="ans7a" v-model="ans7" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans7b" id="ans7b" v-model="ans7" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans7c" id="ans7c" v-model="ans7" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans7d" id="ans7d" v-model="ans7" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans7e" id="ans7e" v-model="ans7" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>


      <div class="form-group">
        <h3> Bez obzira na prirodu teme i sagovornika (bilo da je komunikacija prijatna ili neprijatna), u komunikaciji zadržava stav Ja sam ok, Ti si ok. </h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans8a" id="ans8a" v-model="ans8" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans8b" id="ans8b" v-model="ans8" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans8c" id="ans8c" v-model="ans8" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans8d" id="ans8d" v-model="ans8" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans8e" id="ans8e" v-model="ans8" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>


      <div class="form-group">
        <h3> Daje zaposlenima izazovne zadatke tako da im omogućuje prostor za razvoj.</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans9a" id="ans9a" v-model="ans9" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans9b" id="ans9b" v-model="ans9" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans9c" id="ans9c" v-model="ans9" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans9d" id="ans9d" v-model="ans9" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans9e" id="ans9e" v-model="ans9" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>


      <div class="form-group">
        <h3> Delegira zadatke onim zaposlenima koji su spremni da ih samostalno realizuju obezbeđujući ličnu efikasnost i efikasnost organizacije</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans10a" id="ans10a" v-model="ans10" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          Uopste se ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans10b" id="ans10b" v-model="ans10" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Donekle se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans10c" id="ans10c" v-model="ans10" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            I slazem se i ne slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans10d" id="ans10d" v-model="ans10" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            Delimicno se slazem
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans10e" id="ans10e" v-model="ans10" value="5">
          <label class="form-check-label" for="flexRadioDefault5">
            Potpuno se slazem
          </label>
        </div>
      </div>

    <button class="btn btn-primary">Submit</button>

  </form>
  </div>
    </div>
    </div>


</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  computed: mapGetters(['user']),
  data(){
    return{
      ans1:"A",
      ans2:"A",
      ans3:"A",
      ans4:"A",
      ans5:"A",
      ans6:"A",
      ans7:"A",
      ans8:"A",
      ans9:"A",
      ans10:"A",
      name:"",
      boss:""
    };
  },
  methods:{
    ...mapActions(['submitFeedBackTest','getProfile']),
    submitFeedBackTest360(){
    //  console.log(this.username,this.password)
      // eslint-disable-next-line no-unused-vars
    let feedbackTestData = {
      ans1:this.ans1,
      ans2:this.ans2,
      ans3:this.ans3,
      ans4:this.ans4,
      ans5:this.ans5,
      ans6:this.ans6,
      ans7:this.ans7,
      ans8:this.ans8,
      ans9:this.ans9,
      ans10:this.ans10,
      name:this.user.name,
      boss:this.boss
    };
    this.submitFeedBackTest(feedbackTestData)
    .then(res=>{
      if(res.data.success){
        this.$router.push('/profile');
      }
    }).catch(err =>{
      console.log(err);
    });
    }
  },
  created(){
    this.getProfile();
  }
};
</script>

<style lang="css" scoped>
</style>
