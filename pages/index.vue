<template>
  <div class="bg-moon-gray vh-100 pa3 tc">
    <h2 class="black">Github authentication with Appwrite</h2>
    <div class="br3 bg-black ba near-white b--black-10 shadow-3 w-100 w-60-m w-30-l mw6 center mt5 ph4 pv4">
      <p class="f4">Click on this button to login</p>
        <button class="f6 link dim br3 pv2 ph2 mb2 dib white bg-green ba b--navy pointer mt3 mt0-l inline-flex items-center" @click="loginWithGithub">
          <span class="f6 ml2 pr2">Login with Github</span>
        </button>
    </div>
  </div>
</template>

<script>
import {sdk} from '~/init.js'
export default {
  methods: {

    loginWithGithub: async function(){
      try {
        await sdk.account.createOAuth2Session('github', 'http://localhost:3000/dashboard')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>