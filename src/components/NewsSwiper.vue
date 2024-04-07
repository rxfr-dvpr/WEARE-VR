<template>
    <swiper :modules="modules" class="news-swiper" :slidesPerView="3.3" :spaceBetween="50" :navigation="cltrs" :grabCursor="true">
        <swiper-slide class="news-swiper-slide" v-for="(news, idx) in slides" :key="idx" @click="pushToNews(idx)">
            <img :src="news.img" alt="" class="news-img">

            <h4 class="news-title">{{ news.title }}</h4>

            <p class="news-txt">{{ news.txt }}</p>

            <p class="news-info">
                <span class="news-info-date">{{ news.date }}</span>

                <router-link to="" class="news-suggestions">советы</router-link>
            </p>
        </swiper-slide>
    </swiper>

    <div class="news-swiper-btns all-swiper-btns">
        <span class="news-swiper-btn left all-swiper-btn"><i class="fal fa-long-arrow-left"></i></span>
        <span class="news-swiper-btn right all-swiper-btn"><i class="fal fa-long-arrow-right"></i></span>
    </div>
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
                prevEl: '.news-swiper-btn.left',
                nextEl: '.news-swiper-btn.right'
            }
        }
    },
    methods: {
        pushToNews(idx) {
            this.$router.push(`/news/:${idx}`)
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
        cursor: pointer;

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
            transition: .3s;

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

            &-date {
                font-family: var(--num-font);
            }

            .news-suggestions {
                text-transform: uppercase;
            }
        }

        &:hover {
            .news-title {
                color: var(--main-blue);
            }
        }
    }
}

.news-swiper-btns {
    margin-top: 40px;
}

</style>