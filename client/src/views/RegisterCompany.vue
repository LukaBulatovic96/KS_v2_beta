<template lang="html">
  <div class="row">
    <div class="card mx-auto">
      <div class="card-header test-white bg-primary">
        <h4>Register Company</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="registerCompanyThis">
          <div class="form-group">
            <label for="name">Naziv Kompanije</label>
            <input
              class="form-control"
              type="text"
              placeholder="name"
              name="name"
              v-model="name"
              id="name"
              >
          </div>

          <button class="btn btn-primary">Register</button>



        </form>

      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return{
      name:""
    }
  },
  methods:{
    ...mapActions(['registerCompany']),
    registerCompanyThis(){
      // eslint-disable-next-line no-unused-vars

      let company = {
        name:this.name,
      }
      this.registerCompany(company);
    }

  },
}
</script>

<style lang="css" scoped>
.card{
  width: 60%;
  border-radius: 0;
}
.btn{
  width: 60%;
  border-radius: 0;
}
.form-control{
  border-radius: 0;
}
</style>
