<template>
  <div class="bg-light-gray vh-100 pa3 tc">
    <h2 class="tc">Github authentication with Appwrite</h2>
    <div class="br3 bg-black ba near-white b--black-10 shadow-3 w-100 w-60-m w-30-l center mt5 ph4 pv4 mw6">
      <div class="f4 tl">
        <p class="green fw7">Name:</p>
        <p>{{name}}</p>
        <p class="mt4 green fw7">Email:</p>
        <p>{{email}}</p>
      </div>
      <button class="f5 link dim br3 pv2 ph3 mb2 dib white bg-dark-green ba b--black pointer mt4 mt0-l inline-flex items-center" @click="logOutWithGithub">
        Log out
        </button>
    </div>
  </div>
</template>
<script>
import {sdk} from '~/init';
  export default {
    data(){
      return{
        namme: '',
        email: '',
        response: ''
      }
    },
    mounted: function(){
        this.getUserSession()
    },
    methods: {
      getUserSession: async function(){
        try {
          this.response = await sdk.account.get()
          if (this.response) {
            this.name = this.response.name,
            this.email = this.response.email 
          }
          
        } catch (error) {
          console.log(error)
        }
      },
      logOutWithGithub: async function(){
        try {
          await sdk.account.deleteSession('current')
          this.$router.push('/') 
        } catch (error) {
          console.log(error)
        }
      }
    }
  };

</script>