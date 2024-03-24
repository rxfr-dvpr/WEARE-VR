<template>
  <Nav/>

  <div class="main-pages">
    <div class="container">
      <div class="row">

        <div class="side-nav">
          <span @click="selectPage(idx, btn.url)" class="side-nav-btn" v-for="(btn, idx) in nStore.links" 
          :key="idx" :class="{'active': btn.active}"></span>
        </div>
        
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
import { navStore } from "@/stores/navStore.js";

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
    return {
      nStore: navStore(),
      bgFilterImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/bg-filter.png?alt=media&token=54c9f47c-6cb6-44c8-a113-f4351b4ab231'
    }
  },
  methods: {
    selectPage(idx, url) {
      this.nStore.links.map(item => item.active = false)
      this.nStore.links[idx].active = true

      this.$router.push(url);
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
  height: 600px;
  position: relative;

  .row {
    column-gap: 45px;
    flex-wrap: unset;
    overflow-x: hidden;
    align-items: center;
  }
}

.side-nav {
  max-width: max-content;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &-btn {
    width: 8px;
    height: 8px;
    background: var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
    z-index: 4;
    transition: .4s;

    &.active {
      height: 40px;
      border-radius: 3px !important;
    }
  }
}

.all-pages {
  width: 100%;
  height: 100%;
  position: relative;

  .page {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
  }
}

</style>