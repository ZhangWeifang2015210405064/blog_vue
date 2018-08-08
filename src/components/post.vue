<template>
    <div class="postbox">
        <div class="postblog">
            <form>
                <h2>标题</h2>
                <input class="post_name" type="text" name="article_name" placeholder="请输入标题" v-model="post.article_name"/>
                <h2>标签</h2>
                <div class="post_tag_box">
                <select id="tag1" class="post_tag" name="tag1" @change="selectVal" v-model="post.tag1">
                    <option v-for="item in list1" :value="item.value" v-model="item.value">{{ item.value }}</option>
                </select>
                <select id="tag2" class="post_tag" name="tag2" v-model="post.tag2" disabled="disabled">
                    
                </select>
                </div>
                <h2>简介</h2>
                <input class="post_name" type="text" name="intro" placeholder="请输入简介" v-model="post.article_intro"/>
                <h2>正文</h2>
                <br>
                <br>
                <br>
                <!-- <textarea id="post_text" name="post" rows="12" cols="59" placeholder="请在此输入正文" v-model="post.article"></textarea> -->
                <mavon-editor v-model="post.article" ref="md" @imgAdd="$imgAdd"></mavon-editor>
    
                <input class="post_btn" type="button" value="发表" @click="articlePost()"/>

            </form>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueMarkdown from 'vue-markdown'
Vue.prototype.$axios = axios
export default {
    name: "post",
    data () {
      return {
          list1: [
              { value: '漫步人生' },
              { value: '学无止境' }
          ],
          post: {

          },
          global: this.GLOBAL.Path
      }
    },
    components: {
        'vue-markdown': VueMarkdown
    },
    methods: {
        selectVal: function(ele) {
            //console.log(ele.target.value);
            var selectText = ele.target.value;
            var tag2 = document.getElementById("tag2");
            tag2.removeAttribute("disabled");
            if(selectText == "漫步人生") { 
                var selectOptions = tag2.options; 
                var optionLength = selectOptions.length; 
                for(var i=0;i <optionLength;i++) 
                { 
                    tag2.removeChild(selectOptions[0]); 
                }  
                tag2.options.add(new Option('旅游', '旅游')); 
                tag2.options.add(new Option('饮食', '饮食')); 
                tag2.options.add(new Option('家居', '家居'));  
            }
            if(selectText == "学无止境") {
                var selectOptions = tag2.options; 
                var optionLength = selectOptions.length; 
                for(var i=0;i <optionLength;i++) 
                { 
                    tag2.removeChild(selectOptions[0]); 
                } 
                tag2.options.add(new Option('前端', '前端')); 
                tag2.options.add(new Option('后端', '后端')); 
                tag2.options.add(new Option('数据库', '数据库'));
            }
            if(selectText == "请选择") {
                var selectOptions = tag2.options; 
                var optionLength = selectOptions.length; 
                for(var i=0;i <optionLength;i++) 
                { 
                    tag2.removeChild(selectOptions[0]); 
                } 
                tag2.options.add(new Option('请选择', ''));
            }
        },
        articlePost: function () {
            console.log(sessionStorage);
            this.post.userName = sessionStorage.userName;
            console.log(this.post);
            $.post(this.global[0]+"/insertArticle", this.post, function (result) {
                alert(result);
            })
        },
        // 绑定@imgAdd event
        $imgAdd (pos, $file) {
            // 第一步.将图片上传到服务器.
            //console.log(pos);
            //console.log($file);
           var formdata = new FormData();
           formdata.append('image', $file);
           console.log(formdata);
           console.log(pos);
           console.log($file);
           this.$axios({
               url: this.global[0]+'/testUpload',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
              console.log(pos.toString());
              console.log(url.data);
               this.$refs.md.$img2Url(pos, url.data);
           })
        },
        // $imgDel (pos) {
        //     var formdata = new FormData();
        //     formdata.append('image', pos[0]);
        //     console.log(formdata);
        //     console.log(pos);
            
        //     this.$axios({
        //         url: this.global[0]+'/testDel',
        //         method: 'post',
        //         data: formdata,
        //         headers: { 'Content-Type': 'multipart/form-data' },
        //     }).then((result) => {
                
        //         console.log(result.data);
        //         console.log(pos[1]);
                
        //         // this.$refs.md.$refs.toolbar_left.$imgDelByFilename(pos[0].name);
        //         this.$refs.md.$img2Url(pos[1], "123");
        //         console.log(this.$refs.md);
        //     })
        // }
    },
    watch: {
        
    }
}
</script>

<style scoped>
.postbox {
    width: 1100px;
    overflow: hidden;
    margin: auto;
}

.postblog {
    width: 100%;
    overflow: hidden;
    margin: 20px 0;
    background-color: #fff;
    border: 1px solid #d5dce5;
    border-radius: 10px;
    padding: 20px 30px;
    box-sizing: border-box;
}

.post_name {
  
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  box-sizing: border-box;
  border: none;
  background-color: #f2f2f2;
  color: #4f4f4f;
}

.post_tag_box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.post_tag {
  
  display: block;
  width: 40%;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  box-sizing: border-box;
  border: none;
  background-color: #f2f2f2;
  color: #4f4f4f;
}

#post_text {
  box-sizing: border-box;
  
  display: block;
  width: 100%;
  resize: none;
  font-family: "PingFang SC", "Microsoft YaHei", SimHei, Arial, SimSun;
  font-size: 16px;
  color: #4f4f4f;
  font-weight: normal;
  line-height: 26px;
  min-height: 26px;
  padding: 5px 16px;
  /* text-align: justify; */
  background-color: #f2f2f2;
  border: none;
}

.postblog h2 {
  display: block;
  float: left;
  color: #000;
  margin: 8px 0 8px;
  font-weight: 500;
}

.post_btn {
    float: right;
    margin: 8px 0 0 0;
    background: #333;
    display: block;
    height: 44px;
    line-height: 44px;
    color: #fff;
    text-align: center;
    font-size: 1.2em;
    text-decoration: none;
    clear: both;
    width: 100px;
    border: solid 1px solid #d5dce5;
    border-radius: 3px;
    box-shadow: 0 0 3px #fff inset;
}

</style>