<template lang="html">

    <div class="usluga">
    <router-link class="navbar-brand" to="/ksusluge">Back </router-link>
      <h3>Procena 360</h3>
      <p>Procena ispitanika metodologijom 360˚ podrazumeva ispitivanje menadžerskih sposobnosti na tri nivoa, na nivou nadređenih, podređenih i na istom organizacionom nivou.</p>
      <p>Usluga je namenjena svim liderima i menadžerima koji imaju za cilj da unaprede svoje sposobnosti na osnovu feedback-a svojih zaposlenih, u cilju kvalitetnije radne atmosfere i boljeg učinka, a samim tim i doprinosa Kompaniji.  Ova usluga se koristi i za procenu Liderskog I Menadžerskog kapaciteta zaposlenih na ovim pozicijama.Naziv organizacione jedinice/jedinica za koje se vrši usluga</p>
      <h5>Potrebna Vam je ova usluga? Popunite polja ispod:</h5>
      <div class="card-body">
         <form>

           <div class="form-group">
             <label for="numberOfEmployees">Broj zaposlenih za koje se vrši usluga</label>
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
             <label for="nameOfOrganisationUnit">Naziv organizacione jedinice/jedinica za koje se vrši usluga</label>
             <input
               class="form-control"
               type="text"
               placeholder="nameOfOrganisationUnit"
               name="nameOfOrganisationUnit"
               v-model="nameOfOrganisationUnit"
               id="nameOfOrganisationUnit"
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

  name: 'Procena360',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
