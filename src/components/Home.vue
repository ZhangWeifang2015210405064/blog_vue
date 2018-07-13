<template>
    <div class="allbox">
        <div class="leftbox">
          <div class="newblogs">
            <h2 class="hometitle">
              博客首页
            </h2>
            <ul>
              <li >
                <h3 class="blogtitle">
                  <router-link to="">{{ article.article_name }}</router-link>
                </h3>
                <div class="bloginfo">
                  <span class="blogpic">
                    <router-link to="">
                      <img src="../assets/img/test1.png" alt="article.article_name">
                    </router-link>
                  </span>
                  <p>
                    {{ article.article }}
                  </p>
                </div>
                <div class="autor">
                  <span class="lm f_l">
                    <router-link to="">{{ article.tag1 }}</router-link>
                  </span>
                  <span class="dtime f_l">
                   {{ article.date }}
                  </span>
                  <span class="viewnum f_l">
                    浏览&nbsp;({{ article.click }})
                  </span>
                  <span class="pingl f_l">
                    喜欢&nbsp;({{ article.praise }})
                  </span>
                </div>
                <!-- <h3 class="blogtitle">
                  <router-link to="">制作个人博客，我是怎么收费的</router-link>
                </h3>
                <div class="bloginfo">
                  <span class="blogpic">
                    <router-link to="">
                      <img src="../assets/img/test1.png" alt="制作个人博客，我是怎么收费的">
                    </router-link>
                  </span>
                  <p>
                    有人会以为我是"高冷型"，no，错了，我是"好好型"的，
                    从合作开始，我们之间的关系也不仅仅只有交易，在我看来，
                    我们会是朋友。有些微信加了很久的网友，哪怕一句话也没说过，
                    只要我们没有互相拉黑，有时间的见证，我们亦是朋友。
                  </p>
                </div>
                <div class="autor">
                  <span class="lm f_l">
                    <router-link to="">博客日记</router-link>
                  </span>
                  <span class="dtime f_l">
                    2018-07-05
                  </span>
                  <span class="viewnum f_l">
                    浏览&nbsp;(841)
                  </span>
                  <span class="pingl f_l">
                    喜欢&nbsp;(54)
                  </span>
                </div> -->
              </li>
            </ul>
            <div class="pagelist"></div>
          </div>
        </div>
        <div class="rightbox">
          <div class="blank"></div>
          <div class="search">
            <form>
              <input name="keyboard" id="keyboard" class="input_text" type="text" placeholder="请输入关键字" />
              <input name="Submit" class="input_submit" value="搜索" type="button">
            </form>
          </div>
          <div class="recommend">
            <h2 class="rc_title">
              本栏推荐
              <span></span>
            </h2>
            <ul>
              <li>
                <b>
                  <router-link to="">《野蚂蚁》原创个人博客-撰写互联网人的工作与生活</router-link>
                </b>
                <p>
                  <i>
                    <router-link to="">
                      <img src="../assets/img/test1.png" alt="《野蚂蚁》原创个人博客-撰写互联网人的工作与生活"/>
                    </router-link>
                  </i>
                  站长名字叫，卜野，他的阅历才如此丰富多彩，
                  用他的话说，建一个个人网站，是用来记录工作和生活，
                  寻找精神上的自由之路。不会为了流量，去做一些违背自己初心的事。
                </p>
              </li>
            </ul>
          </div>
          <div class="wechat" id="follow-us">
            <h2 class="wc_title">
              关注微信
              <span></span>
            </h2>
            <ul>
              <img src="../assets/img/wechat.png">
            </ul>
          </div>
        </div>
        
    </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Home",
  data() {
    return {
      // article: {
      //   article: "",
      //   article_id: "",
      //   article_intro: "",
      //   article_name: "",
      //   author: "",
      //   click: "",
      //   date: "",
      //   praise: "",
      //   tag1: "",
      //   tag2: ""
      // }
      article: {}
    };
  },
  created() {
    this.getArticle();
  },
  beforeMount() {
    //this.getArticle();
  },
  beforeCreate() {
    //this.getArticle();
  },
  mounted() {
    //this.getArticle();
  },
  methods: {
    getArticle() {
      $.getJSON(
        "http://localhost:8080/selectArticle?article_name=zwf1",
        result => {
          console.log(result);
          this.article = result;
        }
      );
    }
  }
};
</script>

<style  scoped>
a {
  text-decoration: none;
  color: #555;
}

a:hover {
  color: #000;
}

.allbox {
  width: 1100px;
  overflow: hidden;
  margin: auto;
}

.leftbox {
  width: 70%;
  float: left;
  overflow: hidden;
}

.newblogs {
  background: #fff;
  overflow: hidden;
  width: 100%;
  clear: both;
  border-radius: 10px;
  margin: 20px 0;
}

.hometitle {
  padding: 0 10px;
  line-height: 40px;
  height: 40px;
  font-size: 18px;
  border-bottom: #000 2px solid;
  text-align: left;
}

.newblogs ul {
  padding: 10px;
  overflow: hidden;
}

ul,
li {
  list-style: none;
}

.newblogs li {
  border-bottom: #ccc 1px solid;
  margin-bottom: 10px;
  overflow: hidden;
}

.blogtitle {
  line-height: 30px;
  margin: 10px 0;
  text-align: left;
}

.blogpic {
  overflow: hidden;
  width: 30%;
  max-height: 100px;
  display: block;
  float: left;
  margin-right: 20px;
  border-radius: 5px;
}

.blogpic img {
  width: 100%;
}

img {
  border: 0;
  display: block;
}

.bloginfo p {
  height: 100px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  padding-top: 10px;
  font-size: 14px;
}

.autor {
  width: 100%;
  overflow: hidden;
  clear: both;
  margin: 20px 0 0 0;
  display: inline-block;
  color: #838383;
  font-size: 12px;
}

.autor span {
  margin: 0 10px 0 0;
  padding-left: 20px;
}
.f_l {
  float: left;
}

.lm {
  background: url(../assets/img/newsbg01.png) no-repeat left center;
}

.dtime {
  background: url(../assets/img/newsbg02.png) no-repeat left center;
}

.viewnum {
  background: url(../assets/img/newsbg04.png) no-repeat left center;
}

.pingl {
  background: url(../assets/img/like.jpg) no-repeat left center;
}

.pagelist {
  text-align: center;
  color: #666;
  width: 100%;
  clear: both;
  margin: 20px 0;
  padding-top: 20px;
}

/*rightbox*/

.rightbox {
  width: 28%;
  float: right;
  overflow: hidden;
}

.blank {
  height: 20px;
  overflow: hidden;
  width: 100%;
  margin: auto;
  clear: both;
}

.search {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
}

.input_text {
  padding-left: 5px;
  border: 1px solid #ccc;
  width: 70%;
  height: 26px;
  line-height: 26px;
  background-color: #f2f2f2;
  float: left;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.input_submit {
  background-color: #333;
  color: #fff;
  float: left;
  width: 20%;
  border: none;
  cursor: pointer;
  height: 28px;
  line-height: 28px;
  border-radius: 0 5px 5px 0;
  outline: none;
}

.recommend {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
}

.rc_title {
  text-align: center;
  margin: 20px;
}

.rc_title span {
  display: block;
  border-bottom: #000 2px solid;
}

.recommend ul {
  padding: 10px;
}

.recommend ul li {
  border-bottom: solid 1px #eaeaea;
  font-size: 14px;
  margin: 0 0 10px 0;
  padding: 0 0 10px 0;
  overflow: hidden;
}

.recommend ul li b {
  height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
}

.recommend ul li p {
  display: block;
  line-height: 24px;
  color: #888;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 96px;
}

.recommend li i {
  width: 100px;
  height: 90px;
  overflow: hidden;
  display: block;
  border: #efefef 1px solid;
  float: left;
  margin-right: 10px;
}

.recommend li i img {
  height: 100%;
  margin: auto;
  transition: all 0.5s ease;
}

.recommend ul li:hover p {
  color: #000;
}

.recommend ul li:hover {
  border-bottom: 1px solid #000;
}

.recommend ul li:hover i img {
  transform: scale(1.03);
}

.wechat {
  width: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
}

.wc_title {
  text-align: center;
  margin: 20px;
}

.wc_title span {
  display: block;
  border-bottom: 2px solid #000;
}

.wechat img {
  width: 100%;
  height: auto;
}
</style>


