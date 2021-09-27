<template lang="html">

<h1>Test Licnosti</h1>
<div class="row">
  <div class="card mx-auto">
<div class="card-body">

<form @submit.prevent="submitTestLicnostiThis">
    <div class="form-group">
      <h3>Nisam osoba koja se puno brine.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans1a" id="ans1a" v-model="ans1" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans1b" id="ans1b" v-model="ans1" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans1c" id="ans1c" v-model="ans1" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans1d" id="ans1d" v-model="ans1" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans1e" id="ans1e" v-model="ans1" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>


    <div class="form-group">
      <h3>Zaista mi se sviđa većina ljudi koje srećem.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans2a" id="ans2a" v-model="ans2" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans2b" id="ans2b" v-model="ans2" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans2c" id="ans2c" v-model="ans2" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans2d" id="ans2d" v-model="ans2" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans2e" id="ans2e" v-model="ans2" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>



    <div class="form-group">
      <h3>Imam veoma živu maštu.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans3a" id="ans3a" v-model="ans3" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans3b" id="ans3b" v-model="ans3" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans3c" id="ans3c" v-model="ans3" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans3d" id="ans3d" v-model="ans3" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans3e" id="ans3e" v-model="ans3" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>



    <div class="form-group">
      <h3>Umem da budem ciničan/a i skeptičan/a prema namerama drugih ljudi.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans4a" id="ans4a" v-model="ans4" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans4b" id="ans4b" v-model="ans4" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans4c" id="ans4c" v-model="ans4" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans4d" id="ans4d" v-model="ans4" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans4e" id="ans4e" v-model="ans4" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>



    <div class="form-group">
      <h3>Poznat/a sam po svojoj razboritosti i zdravom razumu.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans5a" id="ans5a" v-model="ans5" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans5b" id="ans5b" v-model="ans5" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans5c" id="ans5c" v-model="ans5" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans5d" id="ans5d" v-model="ans5" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans5e" id="ans5e" v-model="ans5" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>



    <div class="form-group">
      <h3>Često me ljuti način na koji ljudi sa mnom postupaju.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans6a" id="ans6a" v-model="ans6" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans6b" id="ans6b" v-model="ans6" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans6c" id="ans6c" v-model="ans6" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans6d" id="ans6d" v-model="ans6" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans6e" id="ans6e" v-model="ans6" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>



    <div class="form-group">
      <h3>Izbegavam da budem u mnoštvu ljudi.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans7a" id="ans7a" v-model="ans7" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans7b" id="ans7b" v-model="ans7" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans7c" id="ans7c" v-model="ans7" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans7d" id="ans7d" v-model="ans7" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans7e" id="ans7e" v-model="ans7" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>



    <div class="form-group">
      <h3>Nisu mi posebno važna estetska i umetnička pitanja.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans8a" id="ans8a" v-model="ans8" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans8b" id="ans8b" v-model="ans8" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans8c" id="ans8c" v-model="ans8" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans8d" id="ans8d" v-model="ans8" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans8e" id="ans8e" v-model="ans8" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>


    <div class="form-group">
      <h3>Nisam prepreden/a ili podmukao/la.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans9a" id="ans9a" v-model="ans9" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans9b" id="ans9b" v-model="ans9" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans9c" id="ans9c" v-model="ans9" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans9d" id="ans9d" v-model="ans9" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans9e" id="ans9e" v-model="ans9" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
          Potpuno se slazem
        </label>
      </div>
    </div>



    <div class="form-group">
      <h3>Radije ću ostaviti neke mogućnosti otvorene nego da sve unapred isplaniram.</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans10a" id="ans10a" v-model="ans10" value="1">
        <label class="form-check-label" for="flexRadioDefault1">
        Uopste se ne slazem
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans10b" id="ans10b" v-model="ans10" value="2">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans10c" id="ans10c" v-model="ans10" value="3">
        <label class="form-check-label" for="flexRadioDefault2">
          Neutralno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans10d" id="ans10d" v-model="ans10" value="4">
        <label class="form-check-label" for="flexRadioDefault2">
          Slazem se
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans10e" id="ans10e" v-model="ans10" value="5">
        <label class="form-check-label" for="flexRadioDefault2">
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
      ans1:"",
      ans2:"",
      ans3:"",
      ans4:"",
      ans5:"",
      ans6:"",
      ans7:"",
      ans8:"",
      ans9:"",
      ans10:"",
      name:""
    };
  },
  methods:{
    ...mapActions(['submitTestLicnosti','getProfile']),
    submitTestLicnostiThis(){
    //  console.log(this.username,this.password)
      // eslint-disable-next-line no-unused-vars
    let testLicnostiData = {
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
      name:this.user.name
    };
    this.submitTestLicnosti(testLicnostiData)
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
