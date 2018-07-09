<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <div id="mnav">
        <div class="logo">
          <router-link to="/Home">Z个人博客</router-link>
        </div>
        <ul id="starlist">
          <li v-for="(Hitem, index) in Hitems" :class="{ selected:changeRed == index}" @click="change(index)">
            <router-link v-bind:to="Hitem.router">{{ Hitem.name }}</router-link>
          </li>
        </ul>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      Hitems: [
        { router: '/Home', name: '博客首页'},
        { router: '/AboutUs', name: '关于我们'},
        { router: '/Study', name: '学无止境'},
        { router: '/Life', name: '漫步生活'},
        { router: '/LoginReg', name: '登录/注册'}
      ],
      changeRed: 0
    }
  },
  methods:{
    change (index) {
      console.log(index);
      this.changeRed = index;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  color: #555;
  background: #f1f1f1;
  line-height: 1.5;
}

* {
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  color: #FFF;
  background: #333;
  line-height: 46px;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 100;
}

#mnav {
  width: 90%;
  overflow: hidden;
  margin: auto;
}

.logo {
  float: left;
  font-size: 24px;
}
.logo a {
  color: #FFF;
}

li a {
  color: #fff;
}

a {
  text-decoration: none;
  cursor: pointer;
}

ul, li {
  list-style: none;
}

#starlist {
  float: right;
}

#starlist li {
  float: left;
  display: block;
  padding: 0 0 0 40px;
  font-size: 18px;
}

.selected * {
  color: #f65a8a;
}

</style>
