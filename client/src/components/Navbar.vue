<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
      <router-link class="navbar-brand" to="/" v-if="!isLoggedIn">KeySolutions Global</router-link>
      <router-link class="navbar-brand" to="/ksusluge" v-if="!isLoggedIn">KS Usluge</router-link>
      <router-link class="navbar-brand" to="/kskandidati" v-if="!isLoggedIn">KS Kandidati</router-link>
      <router-link class="navbar-brand" to="/login" v-if="!isLoggedIn">Login</router-link>
      <router-link class="navbar-brand" to="/profile" v-if="isLoggedIn">Profile</router-link>
      <router-link class="navbar-brand" to="/vqtest" v-if="isLoggedIn && !isAdmin">VQTest</router-link>
      <router-link class="navbar-brand" to="/feedBackTest" v-if="isLoggedIn && !isAdmin">360 FeedBack Test</router-link>
      <router-link class="navbar-brand" to="/stavoviZaposlenih" v-if="isLoggedIn && !isAdmin">Stavovi Zaposlenih</router-link>
      <router-link class="navbar-brand" to="/testLicnosti" v-if="isLoggedIn && !isAdmin">Test Licnosti</router-link>
      <router-link class="navbar-brand" to="/results" v-if="isAdmin">Test results</router-link>
      <router-link class="navbar-brand" to="/admin" v-if="isAdmin">Test Administration</router-link>
      <router-link class="navbar-brand" to="/register" v-if="isAdmin">Register Employee</router-link>
      <router-link class="navbar-brand" to="/registerCompany" v-if="isAdmin">Register Company</router-link>
      <a to="/logout" class="nav-link" @click.prevent="logoutUser" v-if="isLoggedIn" >
        Logout
      </a>



    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <router-link to="/" class="nav-link">
              Home
            </router-link>
        </li>
        <li class="nav-item active">
            <router-link to="/about" class="nav-link">
              About
            </router-link>
        </li>
        <li class="nav-item active" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link">
              Login
            </router-link>
        </li>
        <li class="nav-item active" v-if="!isLoggedIn">
            <router-link to="/register" class="nav-link">
              Register
            </router-link>
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
            <router-link to="/profile" class="nav-link">
              Profile
            </router-link>
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
            <a to="/logout" class="nav-link" @click.prevent="logoutUser">
              Logout
            </a>
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
          <router-link to="/vqtest" class="nav-link">
            VQ Test
          </router-link>
        </li>

      </ul>
    </div> -->
  </div>
</nav>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {mapGetters,mapActions} from 'vuex';
export default {
  computed:{
    ...mapGetters(["isLoggedIn","isAdmin"])
  },
  methods:{
    ...mapActions(['logout']),
    logoutUser(){
      this.logout();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
