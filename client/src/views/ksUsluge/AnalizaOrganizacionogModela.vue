<template lang="html">


  <div class="usluga">
  <router-link class="navbar-brand" to="/ksusluge">Back </router-link>
    <h3>Analiza organizacionog modela kompanije</h3>
    <p>U cilju utvrđivanja jaza između postojećeg i željenog stanja, unapređenja korporativne kulture i poslovnih procedura, kao i sistematizacije radnih mesta, vršimo uslugu Analize organizacionog modela Kompanije, koja podrazumeva analizu postojeće organizacije putem procene menadžmenta, ispitivanja stavova zaposlenih i analize organizacione šeme i sistematizacije radnih mesta.</p>
    <h5>Potrebna Vam je ova usluga? Popunite polja ispod:</h5>
    <div class="card-body">
       <form>

         <div class="form-group">
           <label for="numberOfEmployees">Broj zaposlenih u kompaniji</label>
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

  name: 'AnalizaOrganizacionogModela',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
