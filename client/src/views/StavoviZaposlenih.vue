<template lang="html">

  <h1>Istraživanje stavova zaposlenih</h1>
  <p>Poštovani/a,</p>
  <p>Učestvujete u istraživanju stavova zaposlenih Kompanije White City Logistics.
Pred Vama se nalazi upitnik koji je namenjen ispitivanju stavova zaposlenih sa ciljem unapređenja poslovanja i radne atmosfere u Kompaniji White City Logistics.
</p>
<p>Upitnik sadrži niz pitanja sa ponuđenim odgovorima, a obeležavanjem kućice ispred odgovora se opredeljujete za jedan od njih, koji najpribližnije odražava Vaš lični stav o tvrdnji iznetoj u pitanju ili Vašu ocenu o nivou ispunjenosti nekog elementa. Potrebno je odabrati samo jedan od ponuđenih odgovora za svako pitanje (osim tamo gde je naznačeno da je potrebno više odgovora). Ovo je jedna od prilika da date svoj doprinos u ostvarivanju navedenog cilja koji je i u Vašem interesu, pa je veoma važno da na sva pitanja odgovorite što iskrenije</p>
<p>Vaše učešće u istraživanju je anonimno.</p>
  <!-- <h3>Test radi: {{user.name}}</h3> -->
  <div class="row">
    <div class="card mx-auto">
  <div class="card-body">

  <form @submit.prevent="submitStavoviZaposlenihThis">


      <div class="form-group">
        <h3> Staz u kompaniji</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="staza" id="staza" v-model="staz" value="1">
          <label class="form-check-label" for="flexRadioDefault1">
          manje od 6 meseci
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="stazb" id="stazb" v-model="staz" value="2">
          <label class="form-check-label" for="flexRadioDefault2">
            Izmedju 6 meseci i 1 godine
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="stazc" id="stazc" v-model="staz" value="3">
          <label class="form-check-label" for="flexRadioDefault3">
            izmedju 1 godine i 2 godine
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="stazd" id="stazd" v-model="staz" value="4">
          <label class="form-check-label" for="flexRadioDefault4">
            vise od 2 godine
          </label>
        </div>
      </div>

      <div class="form-group">
        <h3> Pol</h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="pola" id="pola" v-model="pol" value="M">
          <label class="form-check-label" for="flexRadioDefault1">
          Muski
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="polb" id="polb" v-model="pol" value="Z">
          <label class="form-check-label" for="flexRadioDefault2">
            Zenski
          </label>
        </div>
      </div>

      <h2>Korporativna Kultura</h2>
      <p>Kompanijske vrednosti - Set principa, verovanja, postulata koji utiču na to kako se mi kao pojedinci i kao grupa ponašamo, kako unutar naše organizacije, tako i u odnosu sa okruženjem</p>

      <div class="form-group">
        <h3>Da li smatrate da su Vam kompanijske vrednosti potrebne? </h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans1a" id="ans1a" v-model="ans1" value="Da">
          <label class="form-check-label" for="flexRadioDefault1">
          DA
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans1b" id="ans1b" v-model="ans1" value="Ne">
          <label class="form-check-label" for="flexRadioDefault2">
            NE
          </label>
        </div>

      </div>

      <div class="form-group">
        <label for="ans2">Ukoliko ste na prethodno pitanje odgovorili sa DA, navedite koje kompanijske vrednosti prema Vašem mišljenju treba da poseduje White City Logistics:</label>
        <input
          class="form-control"
          type="text"
          placeholder=""
          name="ans2"
          v-model="ans2"
          id="ans2"
          >
      </div>

      <div class="form-group">
        <h3>Da li kompanija poseduje paket benefita za zaposlene? </h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans3a" id="ans3a" v-model="ans3" value="Da">
          <label class="form-check-label" for="flexRadioDefault1">
          DA
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans3b" id="ans3b" v-model="ans3" value="Ne">
          <label class="form-check-label" for="flexRadioDefault2">
            NE
          </label>
        </div>

      </div>

      <div class="form-group">
        <h3>Obeležite 2 beneficije koje biste želeli da Vam kompanija u budućem periodu obezbedi: </h3>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4a" id="ans4a" v-model="ans4" value="Dodatni slobodni dani">
          <label class="form-check-label" for="flexRadioDefault1">
          Dodatni slobodni dani
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4b" id="ans4b" v-model="ans4" value="Teambuilding aktivnosti">
          <label class="form-check-label" for="flexRadioDefault2">
            Teambuilding aktivnosti
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4c" id="ans4c" v-model="ans4" value="Clanstvo u fitness centrima">
          <label class="form-check-label" for="flexRadioDefault2">
            Članstvo u fitness centrima
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4d" id="ans4d" v-model="ans4" value="Privatno zdravstveno osiguranje">
          <label class="form-check-label" for="flexRadioDefault2">
            Privatno zdravstveno osiguranje
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="ans4e" id="ans4e" v-model="ans4" value="Dodatno strucno usavrsavanje">
          <label class="form-check-label" for="flexRadioDefault2">
            Dodatno stručno usavršavanje
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
      name:"",
      staz:"",
      pol:"",
      ans1:"",
      ans2:"",
      ans3:"",
      ans4:"",
    };
  },
  methods:{
    ...mapActions(['submitStavoviZaposlenih','getProfile']),
    submitStavoviZaposlenihThis(){
     console.log("STAVOVI ZAPOSLENIH")
      // eslint-disable-next-line no-unused-vars
    let stavoviZaposlenihData = {
      name:this.user.name,
      staz:this.staz,
      pol:this.pol,
      ans1:this.ans1,
      ans2:this.ans2,
      ans3:this.ans3,
      ans4:this.ans4,
    };
    this.submitStavoviZaposlenih(stavoviZaposlenihData)
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
