<template>
  <Nav/>

  <div class="main-pages">
    <div class="container">
      <div class="row">

        <SideNav/>
        
        <div class="all-pages">
          <router-view v-slot="{ Component }">
            <transition enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutLeft">
              <component :is="Component" class="page"/>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>

  <img :src="bgFilterImg" alt="" class="bg-filter">
</template>

<script>
import Nav from './components/Nav.vue'
import SideNav from './components/SideNav.vue'

export default {
  name: 'App',
  components: {
    Nav,
    SideNav
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
  opacity: .7;
}

.main-pages {
  width: 100%;
  position: relative;

  .row {
    column-gap: 45px;
    flex-wrap: unset;
    align-items: center;
  }
}

.all-pages {
  width: 100%;
  min-height: 700px;
  position: relative;

  .page {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
  }
}

</style>