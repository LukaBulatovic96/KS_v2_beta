<template lang="html">


  <div class="usluga">
  <router-link class="navbar-brand" to="/ksusluge">Back </router-link>
    <h3>Talent Management</h3>
    <p>Talenti su oni ljudi koji doprinose razvoju Kompanije i dostizanju Kompanijskih ciljeva i na taj način stvaraju dodatne vrednosti za Kompaniju i imaju snažan uticaj na poslovanje organizacije. Upravljanje talentima je proces koji se odvija kroz nekoliko faza, koje podrazumevaju privlačenje najtalentovanijih zaposlenih, prepoznavanje talenata u Kompaniji, definisanje načina za razvoj potencijala Talenata, usklađivanje potencijala Talenata sa ciljevima Kompanije, formiranje korporativne kulture koja podstiče performans zaposlenih i motivaciju Talenata.</p>
    <h5>Potrebna Vam je ova usluga? Popunite polja ispod:</h5>
    <div class="card-body">
       <form>

         <div class="form-group">
           <label for="numberOfEmployees">Broj zaposlenih za učešće u Talent programu (Procena internih timova)</label>
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

  name: 'TalentMenagement',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
