<template>
    <swiper :modules="modules" class="news-swiper" :slidesPerView="3.3" :spaceBetween="50" :navigation="true">
        <swiper-slide class="news-swiper-slide" v-for="(news, idx) in slides" :key="idx">
            <img :src="news.img" alt="" class="news-img">

            <h4 class="news-title">{{ news.title }}</h4>

            <p class="news-txt">{{ news.txt }}</p>

            <p class="news-info">
                <span class="news-info-date">{{ news.date }}</span>

                <router-link to="" class="news-suggestions">советы</router-link>
            </p>
        </swiper-slide>
    </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'News Swiper',
    props: {
        slides: {
            type: Array,
            default: [],
            required: true
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation],
            cltrs: {
                prevEl: '.swiper-ctrls-btn.left',
                nextEl: '.swiper-ctrls-btn.right'
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.news-swiper {
    width: 100%;

    &-slide {
        width: 100%;
    }
}

</style>