<template>
  <Nav/>

  <router-view v-slot="{ Component }">
    <transition enter-active-class="animate__animated animate__fadeInUp"
    leave-active-class="animate__animated animate__fadeOutLeft">
      <component :is="Component" class="page"/>
    </transition>
  </router-view>

  <img :src="bgFilterImg" alt="" class="bg-filter">
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
    return {
      bgFilterImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/bg-filter.png?alt=media&token=54c9f47c-6cb6-44c8-a113-f4351b4ab231'
    }
  }
}

</script>

<style lang="scss" scoped>

.bg-filter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
  opacity: .7;
}

.page {
  position: absolute;
  width: 100%;
  height: 815px;
  top: 106px;
}

</style>