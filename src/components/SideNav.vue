<template>
    <div class="side-nav">
        <span @click="selectPage(idx, btn.url)" class="side-nav-btn" v-for="(btn, idx) in store.links" 
        :key="idx" :class="{'active': btn.active}"></span>
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
    },
    methods: {
        selectPage(idx, url) {
          this.store.links.map(item => item.active = false)
          this.store.links[idx].active = true
        
          this.$router.push(url);
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

    &.active {
      height: 40px;
      border-radius: 3px !important;
    }
  }
}

</style>