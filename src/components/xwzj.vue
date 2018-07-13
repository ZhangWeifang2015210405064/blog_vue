<template>
  <div class="hello">
    this is 学无止境
    <ul>
        <li v-for="item in tag1" >
            <router-link v-bind:to="item.route" >{{ item.name }}</router-link> 
            
        </li>
    </ul>
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'xwzj',
  data () {
    return {
      tag1: [
          { route: '/qd', name: '前端' },
          { route: '/hd', name: '后端' },
          { route: '/sjk', name: '数据库' }
      ]
    }
  },
  methods:{

  }
}
</script>