<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <div id="mnav">
        <div class="logo">
          <router-link to="/Home">Z个人博客</router-link>
        </div>
        <ul id="starlist" v-if="userName" >
          <li v-for="(item, index) in Litems" >
            <router-link v-bind:to="item.router">{{ item.name }}</router-link>
          </li>
        </ul>
        <ul id="starlist" v-else>
          <li v-for="(item, index) in Hitems" >
            <router-link v-bind:to="item.router">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </header>
    <router-view @userLogin="userLogin" @userLogout="userLogout"/>

    <footer>
      <p>
        Made by Z个人博客 仅供学习使用
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userName: sessionStorage.userName,
      Hitems: [
        { router: '/Home', name: '博客首页'},
        { router: '/AboutUs', name: '关于我们'},
        { router: '/xwzj', name: '学无止境'},
        { router: '/mbrs', name: '漫步人生'},
        { router: '/LoginReg', name: '登录/注册'}
      ],
      Litems: [
        { router: '/Home', name: '博客首页'},
        { router: '/AboutUs', name: '关于我们'},
        { router: '/xwzj', name: '学无止境'},
        { router: '/mbrs', name: '漫步人生'},
        { router: '/post', name: '发表博客' },
        { router: '/Personal', name: '个人中心'},
        { router: '/logout', name: '登出'}
      ]
    }
  },
  methods:{
    userLogin (userName) {
      sessionStorage.userName = userName;
      console.log(sessionStorage);
      this.userName = sessionStorage.userName;
    },
    userLogout (userName) {
      sessionStorage.userName = userName;
      console.log(sessionStorage);
      this.userName = sessionStorage.userName;
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

a.router-link-active {
  color:#f65a8a;
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
  opacity: 0.8;
  line-height: 46px;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 100;
}

#mnav {
  width: 1100px;
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

footer {
  width: 100%;
  background: #333;
  opacity: 0.8;
  color: #a5a4a4;
  text-align: center;
  padding: 20px 0;
  margin-top: 20px;
}
</style>
