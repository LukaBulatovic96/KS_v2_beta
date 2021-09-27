// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import router from '../router/index';

const state = {
  token: localStorage.getItem('token') || '',
  user:{},
  status:'',
  vqtests:{},
  feedbackTests:{},
  stavoviZaposlenihs:{},
  testLicnostis:{},
  companys:{}
};

const getters={
  // isLoggedIn: function(state){
  //   if(state.token !='' ){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  testLicnostis:state=>state.testLicnostis,
  stavoviZaposlenihs:state=>state.stavoviZaposlenihs,
  feedbackTests:state=>state.feedbackTests,
  vqtests:state=>state.vqtests,
  companys:state=>state.companys,
  isAdmin: function(state){
    if(state.user.type == "admin"){
      return true
    }else{
      return false
    }
  },
  isLoggedIn:state => !!state.token, //odozgo kod samo skracen
  authState: state => state.status,
  user: state => state.user
};

const actions ={
//Login action
// eslint-disable-next-line no-unused-vars
async login({commit},user){
  commit('auth_request');
  let res = await axios.post('/api/users/login', user)
  if(res.data.success){
    // eslint-disable-next-line no-unused-vars
    const token = res.data.token;
    // eslint-disable-next-line no-unused-vars
    const user = res.data.user;
    //Store the token into the local localStorage
    localStorage.setItem('token',token);
    //Set the axios defaults
    axios.defaults.headers.common['Authorization']=token;
    commit('auth_success',token,user);
  }
  return res;
},
//Register user
async register({
  commit
},userData){
  commit('register_request');
  let res = await axios.post('/api/users/register', userData);
  if(res.data.success !== undefined){
    commit('register_success');
  }
  return res;
},
async registerCompany({
  commit
},companyData){
  commit('registerCompany_request');
  let res = await axios.post('/api/companys/register', companyData);
  if(res.data.success !== undefined){
    commit('registerCompany_success');
  }
  return res;
},
//Get profile
async getProfile({commit}){
  commit('profile_request');
  let res = await axios.get('/api/users/profile');
  commit('profile_present',res.data.user);
  return res;
},

//Logout
async logout({commit}){
  await localStorage.removeItem('token');
  commit('logout');
  delete axios.defaults.headers.common['Authorization'];
  router.push('/login');
  return;
},
//Submit VQTest
async submitVQ({
  commit
},vqData){
  commit('vq_request');
  let res = await axios.post('/api/vqtests/submit', vqData);
  if(res.data.success !== undefined){
    commit('submitVQ_success');
  }
  return res;
},
async submitFeedBackTest({
  commit
},feedbackData){
  commit('feedbacktest_request');
  let res = await axios.post('/api/feedbackTests/submit', feedbackData);
  if(res.data.success !== undefined){
    commit('sfeedbacktest_success');
  }
  return res;
},
async submitStavoviZaposlenih({
  commit
},stavoviZaposlenihData){
  commit('feedbacktest_request');
  let res = await axios.post('/api/stavoviZaposlenihs/submit', stavoviZaposlenihData);
  if(res.data.success !== undefined){
    commit('feedbacktest_success');
  }
  return res;
},
async submitTestLicnosti({
  commit
},testLicnostiData){
  commit('feedbacktest_request');
  let res = await axios.post('/api/testLicnostis/submit', testLicnostiData);
  if(res.data.success !== undefined){
    commit('feedbacktest_success');
  }
  return res;
},
//Get items
async getVQTests({ //art
  commit
}){
  commit('vqtests_request');
  let res = await axios.get('/api/vqtests/getAll');
  commit('vqtests',res.data);
  console.log(res.data);
  return res;
},
async getFeedBackTests({ //art
  commit
}){
  commit('feedbacktest_request');
  let res = await axios.get('/api/feedbackTests/getAll');
  commit('feedbacktests',res.data);
  console.log("feedback"+res.data[0]);
  return res;
},
async getStavoviZaposlenih({ //art
  commit
}){
  commit('feedbacktest_request');
  let res = await axios.get('/api/stavoviZaposlenihs/getAll');
  commit('stavoviZaposlenih',res.data);
  console.log(res.data);
  return res;
},
async getTestLicnosti({ //art
  commit
}){
  commit('feedbacktest_request');
  let res = await axios.get('/api/testLicnostis/getAll');
  commit('testLicnosti',res.data);
  console.log(res.data);
  return res;
},
//Get companies
async getCompanies({ //art
  commit
}){
  commit('companies_request');
  let res = await axios.get('/api/companys/getAll');
  commit('companies',res.data);
  console.log(res.data);
  return res;
},

};

const mutations = {

  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state,token,user){
    state.token = token
    state.user = user
    state.status = 'success'
  },
  register_request(state){
    state.status = 'loading'
  },
  register_success(state){
    state.status = 'success'
  },
  registerCompany_request(state){
    state.status = 'loading'
  },
  registerCompany_success(state){
    state.status = 'success'
  },
  logout(state){
    state.status = ''
    state.token = ''
    state.user = ''
  },
  profile_request(state){
    state.status = 'loading'
  },
  profile_present(state,user){
    state.user = user
  },
  vq_request(state){
    state.status='loading'
  },
  submitVQ_success(state){
    state.status = 'success'
  },
  feedbacktest_request(state){
    state.status='loading'
  },
  submitfeedbacktest_success(state){
    state.status = 'success'
  },
  vqtests_request(state){
    state.status='loading'
  },
  vqtests(state,vqtests){
    state.vqtests=vqtests
    state.status='success'
  },
  feedbacktests(state,feedbackTests){
    state.feedbackTests=feedbackTests
    state.status='success'
  },
  stavoviZaposlenih(state,stavoviZaposlenihs){
    state.stavoviZaposlenihs=stavoviZaposlenihs
    state.status='success'
  },
  testLicnosti(state,testLicnostis){
    state.testLicnostis=testLicnostis
    state.status='success'
  },
  companies_request(state){
    state.status='loading'
  },
  companies(state,companys){
    state.companys=companys
    state.status='success'
  },

};

export default{
  state,
  actions,
  mutations,
  getters
}
