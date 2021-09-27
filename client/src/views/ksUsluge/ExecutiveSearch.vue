<template lang="html">

  <div class="usluga">

  <router-link class="navbar-brand" to="/ksusluge">Back </router-link>

  <h3>Executive Search</h3>
  <p>Executive Search je usluga kojom korišćenjem direktnog pristupa i pregleda bogate baze kandidata pronalazimo stručne kandidate koji svojim kompetencijama  odgovaraju potrebama Klijenata i uslovima za određenu poziciju.</p>
  <h5>Potrebna Vam je ova usluga? Popunite polja ispod:</h5>
  <div class="card-body">
     <form>
       <!-- @submit.prevent="registerUser"  -->
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
      <div class="form-group">
        <label for="positionName">Ime Pozicije</label>
        <input
          class="form-control"
          type="text"
          placeholder="positionName"
          name="positionName"
          v-model="positionName"
          id="positionName"
          >
      </div>
      <div class="form-group">
        <label for="description">Opis posla</label>
        <input
          class="form-control"
          type="text"
          placeholder="description"
          name="description"
          v-model="description"
          id="description"
          >
      </div>
      <div class="form-group">
        <label for="numberOfExecutors">Broj potrebnih izvrsilaca</label>
        <input
          class="form-control"
          type="text"
          placeholder="numberOfExecutors"
          name="numberOfExecutors"
          v-model="numberOfExecutors"
          id="numberOfExecutors"
          >
      </div>
      <div class="form-group">
        <label for="pay">Okvirna zarada (Opciono)</label>
        <input
          class="form-control"
          type="text"
          placeholder="pay"
          name="pay"
          v-model="pay"
          id="pay"
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

  name: 'ExecutiveSearch',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
