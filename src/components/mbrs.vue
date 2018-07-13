<template>
  <div class="hello">
    this is 漫步人生
    <ul>
        <li v-for="item in tag2" >
            <router-link v-bind:to="item.route">{{ item.name }}</router-link>
            
        </li>
    </ul>
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'mbrs',
  data () {
    return {
      tag2: [
          { route: '/ly', name: '旅游' },
          { route: '/ys', name: '饮食' },
          { route: '/jj', name: '家居' }
      ]
    }
  },
  methods:{

  }
}
</script>