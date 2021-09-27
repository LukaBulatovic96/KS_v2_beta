<template lang="html">



    <div class="usluga">
    <router-link class="navbar-brand" to="/ksusluge">Back </router-link>
      <h3>Business Coaching</h3>
      <p>Business Coaching je tehnika kojom se pruža pomoć menadžerima i direktorima Kompanija obukama  1 na 1 kako bi ostvarili svoj pun potencijal, razvijali se kako na ličnom tako i na profesionalnom planu i usavršili sposobnosti koje mogu doprineti povećanju efektivnosti, samim tim i uspešnim Kompanijskim rezultatima. Tokom ovih sesija obrađuju se teme kao što  su: Strateško razmišljanje, Prilagodljivost promenama, Performance Management, Otvorena komunikacija, Interpersonalne sposobnosti, Timski razvoj, Organizovanost i Upravljanje konfliktima.</p>
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

  name: 'BusinessCoaching',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
