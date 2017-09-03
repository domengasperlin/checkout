<template>
  <div class="container text-center bg-blue">
    {{msg}}
    <div id="pay">Payment method</div>
    <div class="">
    <input class="" type="radio"> Debit/Credit card
    <input class="" type="radio"> Paypal
    <input class="" type="radio"> Instalment
    </div>
    <br><br>
    <div id="pay">Your credit/debit cards</div>
    <br><br>
    Card number
    <input class="vnos" type="text">
    <br><br>
    Card type
    <v-select v-model="selected" :options="['foo','bar']"></v-select>
    <br><br>
    Expiry
    <v-select placeholder="Month" v-model="selected" :options="['foo','bar']"></v-select>
    <v-select placeholder="Year" v-model="selected" :options="['foo','bar']"></v-select>
     <input placeholder="CCV" class="" type="text">
    <br><br>
    Cardholders name
    <br>
    <input class="" type="input">
    <br><br>
    <input class="" type="checkbox"> Save details to my myryanair account
    <br><br>
    <input class="" type="checkbox"> I consent to unicredit bank
    <br><br>
    Billing address
    <br><br>
    Address 1
<input class="vnos" type="text">
<br><br>
    Address 2
<input class="vnos" type="text">
<br>
City
<input class="vnos" type="text">
Posta Zip
<input class="vnos" type="text">
Country
<v-select placeholder="United Kingdom" v-model="selected" :options="['foo','bar']"></v-select>
<br><br>
<button class="btn btn-primary">Pay now</button>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: null
    }
  },
  components: {
    vSelect
  },
  methods: {
    testGet () {
      let api = 'https://bb42c32d.ngrok.io/api/check'
      this.axios.post(api,
      {
      "payment_method": "account",
      "number": "SI99299177743294199"
      }).then((response) => {
        this.msg = response
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.testGet()
    // console.log($('#test'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* Rectangle 12 */
.gumb {
width: 428px;
height: 54px;
background: #56CCF2;
border-radius: 10px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 20px;
color: #FFFFFF;
border-radius: 10px;
}
#pay {
  /* Payment metod */
font-family: Roboto;
font-style: normal;
font-weight: bold;
line-height: normal;
font-size: 16px;
color: #000000;
}
#selection {
  /* Ellipse 2 */

background: #023A75;
}
.vnos {
/* Rectangle 2 */

border: 1px solid #BDBDBD;
box-sizing: border-box;
border-radius: 4px;

}
vnos1 {
/* Enter card number */
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 13px;
letter-spacing: -0.13px;

color: #E0E0E0;

}


</style>
