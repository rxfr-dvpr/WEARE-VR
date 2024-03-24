<template>
    <div class="side-nav">
      <router-link :to="btn.url" class="side-nav-btn" v-for="(btn, idx) in store.links" 
      :key="idx"></router-link>
    </div>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
  name: 'Side Navigation',
  data() {
    return {
      store: navStore()
    }
  }
}

</script>

<style lang="scss" scoped>

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

    &.router-link-exact-active {
      height: 40px;
      border-radius: 3px !important;
    }
  }
}

</style>