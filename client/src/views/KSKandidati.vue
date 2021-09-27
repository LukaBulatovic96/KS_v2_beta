<template lang="html">

  <div class="usluga">

    <h1>KS KANDIDATI</h1>
    <p>Tražite posao?</p>
    <p>Popunite polja ispod, pošaljite nam Vašu radnu biografiju i na taj način postanite deo naše baze, a mi ćemo Vas kontaktirati ukoliko se otvori radno mesto koje odgovara Vašim kvalifikacijama.</p>
    <div class="card-body">
       <form>

         <div class="form-group">
           <label for="name">Ime i Prezime</label>
           <input
             class="form-control"
             type="text"
             placeholder="name"
             name="name"
             v-model="name"
             id="name"
             >
         </div>
         <div class="form-group">
           <label for="birthDate">Datum i godina rodjenja</label>
           <input
             class="form-control"
             type="text"
             placeholder="birthDate"
             name="birthDate"
             v-model="birthDate"
             id="birthDate"
             >
         </div>
         <div class="form-group">
           <label for="residency">Mesto Prebivalista</label>
           <input
             class="form-control"
             type="text"
             placeholder="residency"
             name="residency"
             v-model="residency"
             id="residency"
             >
         </div>
         <div class="form-group">
           <label for="email">Vasa E-mail Adresa</label>
           <input
             class="form-control"
             type="text"
             placeholder="e-mail"
             name="email"
             v-model="email"
             id="email"
             >
         </div>
         <div class="form-group">
           <label for="degree">Stepen Strucne Spreme</label>
           <input
             class="form-control"
             type="text"
             placeholder="degree"
             name="degree"
             v-model="degree"
             id="degree"
             >
         </div>
         <div class="form-group">
           <label for="desiredWorkplace">Zeljene Industrija/bransa za rad</label>
           <input
             class="form-control"
             type="text"
             placeholder="desiredWorkplace"
             name="desiredWorkplace"
             v-model="desiredWorkplace"
             id="desiredWorkplace"
             >
         </div>
         <div class="form-group">
           <label for="cv">Dodajte CV</label>&nbsp;&nbsp;&nbsp;&nbsp;
           <label for="cv">[[Implementacija file browser-a]]</label>
         </div>





        <button class="btn btn-primary">Posalji Formular</button>
        &nbsp;&nbsp;&nbsp;&nbsp;

      </form>

  </div>

  </div>

</template>

<script>
export default {

  name: 'KSKandidati',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
