<template lang="html">
  <div class="usluga">
  <router-link class="navbar-brand" to="/ksusluge">Back </router-link>
    <h3>Istrazivanje Stavova Zaposlenih</h3>
    <p>Da li vas zanima ,,krvna slika’’ Vaše Kompanije? Koje su Vaše jake i slabe strane u odnosu na Vašu korporativnu kulturu?</p>
    <p>Istraživanje stavova zaposlenih predstavlja ispitivanje zadovoljstva zaposlenih određenim motivacionim faktorima putem upitnika, sa jasnim predlogom aktivnosti koje će dovesti do unapređenja u narednom periodu. Korišćenjem upitnika procene stavova zaposlenih se dobija uvid u to kakva su očekivanja zaposlenih, koliko su zadovoljni radom u Kompaniji i da li su njihove vrednosti u skladu sa Kompanijskim vrednostima. Istraživanje podrazumeva Upitnik od minimum 80 pitanja na osnovu čega izrađujemo kvantitativnu i kvalitativnu analizu.</p>
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

  name: 'IstrazivanjeStavovaZaposlenih',
  components: {

  },
}
</script>

<style lang="css" scoped>
</style>
