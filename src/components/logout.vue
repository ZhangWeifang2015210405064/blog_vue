<template>
    <div class="logoutbox">
        <div class="blank"></div>
        <div class="logout_img">
            <h2 class="logouttitle">登出提醒</h2>
            <span></span>
            <img src="../assets/img/logout.jpg" />
            <br>
            <br>
            <button class="btn_logout" @click="logout()">确认退出</button>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'logout',
    data () {
      return {

      }
    },
    methods: {
        logout: function () {
            this.$router.push("/")
            this.$emit('userLogout', "")
        }
    }
}
</script>

<style scoped>
.logoutbox {
    width: 1100px;
    overflow: hidden;
    margin: auto;
}

.logout_img {
    width: 60%;
    border-radius: 10px;
    border: 1px solid #d5dce5;
    background-color: #fff;
    margin: auto;
    padding: 5px;
}

.logouttitle {
    margin: 10px 0;
}

.logout_img span {
    display: block;
    border-bottom: 2px solid #000;
    margin-bottom: 20px;
}

.logout_img  {
    display: block;
    margin: auto;
}

.btn_logout {
    background: #333;
    display: block;
    height: 44px;
    line-height: 44px;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
    text-decoration: none;
    clear: both;
    width: 40%;
    margin: auto;
    border: solid 1px solid #d5dce5;
    border-radius: 3px;
    box-shadow: 0 0 3px #fff inset;
}

</style>


