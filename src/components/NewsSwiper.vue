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
        height: auto;
        display: flex;
        flex-direction: column;
        row-gap: 5px;

        .news-img {
            width: 100%;
            max-height: 220px;
            height: 100%;
            object-fit: cover;
        }

        .news-title {
            margin-top: 15px;
            font-size: 22px;
            font-weight: 400;
            letter-spacing: 1.1px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .news-txt {
            font-size: 15px;
            opacity: .6;
            font-weight: 300;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            margin-bottom: 30px;
        }

        .news-info {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: auto;
            padding-bottom: 10px;
            border-bottom: 1px solid #fff;
            font-size: 14px;
            opacity: .6;
            font-weight: 300;

            .news-suggestions {
                text-transform: uppercase;
            }
        }
    }
}

</style>