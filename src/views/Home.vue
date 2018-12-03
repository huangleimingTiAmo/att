<template>
  <div class="home">
    <h1 class="title">区块链浏览器</h1>
    <div class="serial-number-input-wrapper">
      <div class="serial-number-title">请输入查询序列号</div>
      <input type="text" @keyup.enter="onSubmit" v-model="serial" class="serial-number">
    </div>
    <button>查询</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      serial: ''
    }

  },
  methods: {
    onSubmit() {
      axios.get(`api/bcb/inquire/${this.serial}`).then((res)=>{
        this.$router.push({
          name: 'list',
          params: {
            result: res.data
          }
        })
      }).catch(()=>{
        alert('xxx')
      })
    }
  }
}
</script>

<style scoped>
  .home{
    text-align: center;
  }
  .title{
    font-size: 50px;
    margin-top: 30px;
  }
  .serial-number-input-wrapper{
    margin-top: 50px;
    padding: 0 30px;
  }
  .serial-number-input-wrapper .serial-number-title{
    font-size: 18px;
    line-height: 1.3333333333;
    font-weight: 400;
  } 
  .serial-number-input-wrapper .serial-number{
    margin-top: 20px;
    margin-bottom: 6px;
    font-size: 1em;
    text-align: center;
    box-shadow: inset 0px 2px 2px #C2C2C2;
    color: #262626;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: inherit;
    text-rendering: optimizeLegibility;
    margin: 0 auto 8px;
    height: 45px;
    width: 100%;
  }
  @media  screen and (min-width: 735px){
    .serial-number {
      width: 342px;
    }
  }
  /* @media  screen and (max-width: 1068px){
    .serial-number {
      width: 342px;
    }
  } */

    


</style>

