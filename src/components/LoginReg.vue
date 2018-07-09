<template>
  <div class="centerbox">
    <div class="mgbox">
      <div class="centerbox_title">
        <span class="login_title title_selected" @click="loginshow()">
            登录
        </span>
        <span class="reg_title" @click="regshow()">
            注册
        </span>
      </div>
      <div class="reg_box" style="display:none">
        <div class="user_reg_info">
          <form method="get" @submit="submit" onsubmit="return checkForm()">
            <input class="user_reg_name" type="text" name="name" placeholder="输入用户名" @blur="blurName()" v-model="input.userName"/>
            <div class="tip_type" id="user_reg_name_tip">*请输入1-10位字符或数字</div>

            <input class="user_reg_pwd" type="password" name="password" placeholder="输入密码" @blur="blurPwd()" v-model="input.password"/>
            <div class="tip_type" id="user_reg_pwd_tip">*请输入6-10位字符或数字密码</div>

            <input class="user_reg_repwd" type="password" name="password-repeat" placeholder="确认密码" @blur="blurRepwd()"/>
            <div class="tip_type" id="user_reg_repwd_tip">*请再次输入密码</div>

            <input class="user_reg_email" type="email" name="email" placeholder="输入邮箱" @blur="blurEmail()" v-model="input.email"/>
            <div class="tip_type" id="user_reg_email_tip">*请输入邮箱</div>

            <input class="reg_btn" type="submit" value="注册" />
          </form>
        </div>
      </div>
      <div class="login_box">
        <div class="user_login_info">
            <form method="post" @submit="submitLogin" action="http://localhost:8080/login">
                <input class="user_act" type="text" name="name" placeholder="输入账号" v-model="login.userName"/><br/>
                <input class="user_pwd" type="password" name="password" placeholder="输入密码" v-model="login.password"/><br/>
                <input id="login_btn" class="login_btn" type="submit" value="登录"/>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var flag_name = 0;
var flag_pwd = 0;
var flag_repwd = 0;
var flag_email = 0;
export default {
  name: 'LoginReg',
  data () {

     return {
       input: {

       },
       login: {

       }
     }
  },
  methods:{
    loginshow: function () {
      $('.reg_title').removeClass('title_selected');
      $('.login_title').addClass('title_selected');
      $('.reg_box').hide();
      $('.login_box').show();
    },
    regshow:  function () {
      $('.login_title').removeClass('title_selected');
      $('.reg_title').addClass('title_selected');
      $('.login_box').hide();
      $('.reg_box').show();
    },
    blurName: function () {
      var name = $('.user_reg_name').val();
      var myreg = /^[A-Za-z0-9]{1,10}$/;
      if (name == null || name == "") {
          $("#user_reg_name_tip").text("*用户名不能为空！");
          flag_name = 0;
      } else if(!myreg.test(name)) {
          $("#user_reg_name_tip").text("*用户名不符合规定！");
          flag_name = 0;
      } else {
          $('#user_reg_name_tip').text("");
          flag_name = 1;
      }
    },
    blurPwd: function () {
      var pwd = $('.user_reg_pwd').val();
      var myreg = /^[A-Za-z0-9]{6,10}$/;
      if (pwd == null || pwd == "") {
          $("#user_reg_pwd_tip").text("*密码不能为空！");
          flag_pwd = 0;
      } else if(!myreg.test(pwd)) {
          $("#user_reg_pwd_tip").text("*密码不符合规定！");
          flag_pwd = 0;
      } else {
          $('#user_reg_pwd_tip').text("");
          flag_pwd = 1;
      }
    },
    blurRepwd: function () {
      var repwd = $('.user_reg_repwd').val();
      var pwd = $('.user_reg_pwd').val();
      if (repwd == null || repwd == "") {
          $("#user_reg_repwd_tip").text("*确认密码不能为空！");
          flag_repwd = 0;
      } else if(!(repwd == pwd)) {
          $("#user_reg_repwd_tip").text("*两次密码不同！");
          flag_repwd = 0;
      } else {
          $('#user_reg_repwd_tip').text("");
          flag_repwd = 1;
      }
    },
    blurEmail: function () {
      var email = $('.user_reg_email').val();
      var myeamil = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (email == null || email == "") {
          $("#user_reg_email_tip").text("*邮箱不能为空！");
          flag_email = 0;
      } else if(!myeamil.test(email)) {
          $("#user_reg_email_tip").text("*邮箱格式不正确！");
          flag_email = 0;
      } else {
          $('#user_reg_email_tip').text("");
          flag_email = 1;
      }
    },
    checkForm: function () {
      alert(flag_name,flag_pwd,flag_repwd,flag_email);
      if(flag_name == 0 || flag_pwd == 0 || flag_repwd == 0 || flag_email == 0)
        return false;
    },
    submit: function () {
      //console.log(this.input);
      $.post("http://localhost:8080/insertUser",this.input, function (result) {
        alert(result);
      })
    },
    submitLogin: function () {
      //console.log(this.login);
      $.post("http://localhost:8080/login",this.login, function (result) {
        alert(result);
      })
    }
  }
}
</script>

<style  scoped>
  
  .centerbox {
    width: 60%;
    overflow: hidden;
    margin: auto;
  }

  .mgbox {
    background: #fff;
    border-radius: 10px;
    margin: 20px 0;
  }

  .centerbox_title {
    width: 100%;
    height: 42px;
    overflow: hidden;
    border-bottom: 2px solid #333; 
  }

  .title_selected {
    background: #333;
    color: #fff;
  }

  .login_title {
    border-top-left-radius: 10px;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    width: 50%;
    height: 100%;
    line-height: 42px;
    display: block;
    float: left;
    cursor: pointer;
  }

  .reg_title {
    border-top-right-radius: 10px;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    width: 50%;
    height: 100%;
    line-height: 42px;
    display: block;
    float: left;
    cursor: pointer;
  }

  /*登录*/
  .login_box {
    width: 302px;
    height: 282px;
    /* border: 1px solid #d5dce5; */
    background-color: #fefefe;
    border-radius: 5px;
    margin: 0 auto;
  }

  .user_login_info {
    padding: 30px 30px;
  }

  .user_act {
    background: #fff;
    display: block;
    width: 100%;
    padding: 12px 0;
    border: 1px solid #d5dce5;
    font-weight: normal;
    text-indent: 23px;
    outline: 0;
    font-size: 1.25em;
    border-radius: 3px;
  }

  .user_pwd {
    background: #fff;
    display: block;
    width: 100%;
    padding: 12px 0;
    border: 1px solid #d5dce5;
    font-weight: normal;
    text-indent: 23px;
    outline: 0;
    font-size: 1.25em;
    border-radius: 3px;
  }

  .login_btn {
    background: #333;
    display: block;
    height: 44px;
    line-height: 44px;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
    text-decoration: none;
    clear: both;
    width: 100%;
    border: solid 1px solid #d5dce5;
    border-radius: 3px;
    box-shadow: 0 0 3px #fff inset;
  }

  /*注册*/
  .reg_box {
    width: 302px;
    height: 432px;
    /* border: 1px solid #d5dce5; */
    background-color: #fefefe;
    border-radius: 5px;
    margin: 0 auto;
  }

  .user_reg_info {
    padding: 20px 30px;
  }

  .user_reg_name {
    background: #fff;
    display: block;
    width: 100%;
    padding: 12px 0;
    border: 1px solid #d5dce5;
    font-weight: normal;
    text-indent: 23px;
    outline: 0;
    font-size: 1.25em;
    border-radius: 3px;
  }

  .user_reg_pwd {
    background: #fff;
    display: block;
    width: 100%;
    padding: 12px 0;
    border: 1px solid #d5dce5;
    font-weight: normal;
    text-indent: 23px;
    outline: 0;
    font-size: 1.25em;
    border-radius: 3px;
  }

  .user_reg_repwd {
    background: #fff;
    display: block;
    width: 100%;
    padding: 12px 0;
    border: 1px solid #d5dce5;
    font-weight: normal;
    text-indent: 23px;
    outline: 0;
    font-size: 1.25em;
    border-radius: 3px;
  }

  .user_reg_email {
    background: #fff;
    display: block;
    width: 100%;
    padding: 12px 0;
    border: 1px solid #d5dce5;
    font-weight: normal;
    text-indent: 23px;
    outline: 0;
    font-size: 1.25em;
    border-radius: 3px;
  }

  .reg_btn {
    background: #333;
    display: block;
    height: 44px;
    line-height: 44px;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
    text-decoration: none;
    clear: both;
    width: 100%;
    border: solid 1px solid #d5dce5;
    border-radius: 3px;
    box-shadow: 0 0 3px #fff inset;
  }

  .tip_type {
    text-align: left;
    float: left;
    color: #e74851;
    width: 100%;
    height: 24px;
    margin-bottom: 10px;
  }
</style>