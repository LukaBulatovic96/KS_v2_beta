<template lang="html">
  <div class="usluga">
  <router-link class="navbar-brand" to="/ksusluge">Back </router-link>
    <h3>Assessment Procena Timova</h3>
    <p>Procena timova daje informacije o potencijalima, ograničenjima I kapacitetima zaposlenih u timu, na osnovu čega se može predvideti timski uspeh. </p>
    <p>Ovom metodologijom se dobija uvid u kompetencije kandidata prilikom selekcije za određenu poziciju u okviru organizacije, daje informacije o njihovim snagama i slabostima i omogućava poređenje kandidata.</p>
    <p>Podrazumeva korišćenje psiholoških testova, testova liderskih sposobnosti, kao i testova inteligencije, kreiranje assessment centra za procenu zaposlenih.</p>
    <p>Usluga se preporučuje za procenu Menadžment pozicija svih nivoa u kompaniji</p>
    <h5>Potrebna Vam je ova usluga? Popunite polja ispod:</h5>
    <div class="card-body">
       <form>


         <h4>Testovi za koje ste zainteresovani</h4>
         <div class="form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1">
           <label class="form-check-label" for="exampleCheck1">Psiholoski test</label>
         </div>
         <div class="form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1">
           <label class="form-check-label" for="exampleCheck1">Test liderskih sposobnosti</label>
         </div>
         <div class="form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1">
           <label class="form-check-label" for="exampleCheck1">Test inteligencije</label>
         </div>
         <div class="form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1">
           <label class="form-check-label" for="exampleCheck1">Assessment centar</label>
         </div>
         <div class="form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1">
           <label class="form-check-label" for="exampleCheck1">Struktuirani Intervju</label>
         </div>
         <div class="form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1">
           <label class="form-check-label" for="exampleCheck1">Test opštih i spacijalnih sposobnosti</label>
         </div>

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

  name: 'AssessmentProcenaTimova',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
