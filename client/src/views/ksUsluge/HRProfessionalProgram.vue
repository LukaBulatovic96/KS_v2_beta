<template lang="html">

  <div class="usluga">
  <router-link class="navbar-brand" to="/ksusluge">Back </router-link>
    <h3>HR Professional Program</h3>
    <p>HR Professional Program jeste mentoring program koji je dizajniran tako da HR zaposleni (kao i početnici koji žele da grade karijeru kroz oblast Upravljanja ljudskim resursima), dosegnu viši nivo u svojoj karijeri prenošenjem znanja, iskustva i metodologije od strane naših konsultanata. Tokom programa obrađuju se sledeće teme: HR uticaj na organizaciju, Selekcija i regrutacija, Implementacija Performance Management-a, Talent Management, Interne komunikacije, Rešavanje konfilkta u timovima, HR budžetiranje, Strategija edukacije i razvoja zaposlenih, Employer branding, kao i  Organizaciona struktura i kultura.</p>
    <h5>Potrebna Vam je ova usluga? Popunite polja ispod:</h5>
    <div class="card-body">
       <form>

         <div class="form-group">
           <label for="numberOfEmployees">Broj zaposlenih za koje se vrsi usluga</label>
           <input
             class="form-control"
             type="text"
             placeholder="numberOfEmployees"
             name="numberOfEmployees"
             v-model="numberOfEmployees"
             id="numberOfEmployees"
             >
         </div>
         <div class="form-group">
           <label for="nameOfPosition">Naziv pozicije zaposlenog za kojeg se vrši usluga</label>
           <input
             class="form-control"
             type="text"
             placeholder="nameOfPosition"
             name="nameOfPosition"
             v-model="nameOfPosition"
             id="nameOfPosition"
             >
         </div>
         <div class="form-group">
           <label for="nameOfEmployee">Ime i prezime zaposlenog/zaposlenih za koje se vrše usluge</label>
           <input
             class="form-control"
             type="text"
             placeholder="nameOfEmployee"
             name="nameOfEmployee"
             v-model="nameOfEmployee"
             id="nameOfEmployee"
             >
         </div>
        <div class="form-group">
          <label for="companyName">Naziv Kompanije</label>
          <input
            class="form-control"
            type="text"
            placeholder="companyName"
            name="companyName"
            v-model="companyName"
            id="companyName"
            >
        </div>
        <div class="form-group">
          <label for="contactName">Ime i Prezime Kontakt Osobe</label>
          <input
            class="form-control"
            type="text"
            placeholder="contactName"
            name="contactName"
            v-model="contactName"
            id="contactName"
            >
        </div>
        <div class="form-group">
          <label for="contactNumber">Kontakt telefon</label>
          <input
            class="form-control"
            type="text"
            placeholder="contactNumber"
            name="contactNumber"
            v-model="contactNumber"
            id="contactNumber"
            >
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            class="form-control"
            type="text"
            placeholder="email"
            name="email"
            v-model="email"
            id="email"
            >
        </div>




        <button class="btn btn-primary">Posalji Formular</button>
        &nbsp;&nbsp;&nbsp;&nbsp;

      </form>

  </div>

  </div>

</template>

<script>
export default {

  name: 'HRProfessionalProgram',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
