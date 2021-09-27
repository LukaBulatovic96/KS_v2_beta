<template lang="html">

  <div class="usluga">
    <router-link class="navbar-brand" to="/ksusluge">Back </router-link>
    <h3>Uvođenje HR funkcije u kompaniji</h3>
    <p>HR funkcija, kao jedna od najvažnijih poslovnih funkcija u svakoj Kompaniji, obično se uvodi u momentu kada Kompanije zapošljava  više od 50 zaposlenih. Cilj je da se  objedine svi HR procesi I definiše Strategija ljudskih resursa koja će podržati poslovanje i razvoj Kompanije. Ova usluga podrazumeva definisanje HR ciljeva u skladu sa ciljevima Kompanije, uspostavljanje HR procesa i kao i uvođenje i odabir HR profesionalca za rad u Kompaniji.</p>
    <h5>Potrebna Vam je ova usluga? Popunite polja ispod:</h5>
    <div class="card-body">
       <form>

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

  name: 'UvodjenjeHRfunkcije',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
