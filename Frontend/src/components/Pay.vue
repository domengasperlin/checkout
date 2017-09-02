<template>
  <div class="container text-center">
    <img src="/static/001-mastercard.png"></img>
    <img src="/static/003-visa.png"></img>
    <img src="/static/mastercard.png"></img>
    <div class="row">
    <div class="col-md-6 form-group">
    <input type="text" placeholder="Name" class="form-control">
    </div>
    <div class="col-md-6 form-group">
    <input type="text" placeholder="Surname" class="form-control">
    </div>
    <div class="col-md-12 form-group">
    <input type="text" placeholder="Card Number" class="form-control">
    </div>
    <div class="form-group col-md-12">
    <button class="btn gumb">Pay</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    testGet () {
      let api = 'http://httpbin.org/ip'
      this.axios.get(api).then((response) => {
        this.msg = response.data
        console.log(response.data)
      })
    }
  },
  created () {
    this.testGet()
    console.log($('#test'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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



</style>
