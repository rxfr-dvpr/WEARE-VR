<template>
    <swiper :modules="modules" class="reviews-swiper" :slidesPerView="1.3" :navigation="ctrls" :grabCursor="true">
        <swiper-slide class="reviews-swiper-slide" v-for="(review, idx) in slides" :key="idx">
            <div class="review-img-box">
                <img :src="review.img" alt="" class="review-img">
            </div>

            <div class="review-descr">
                <p class="review-author">{{ review.name }}</p>

                <span class="review-job">{{ review.job }}</span>

                <p class="review-msg">{{ review.msg }}</p>

                <img :src="review.icon" alt="" class="review-icon">
            </div>
        </swiper-slide>
    </swiper>

    <div class="reviews-swiper-btns all-swiper-btns">
        <span class="reviews-swiper-btn left all-swiper-btn"><i class="fal fa-long-arrow-left"></i></span>
        <span class="reviews-swiper-btn right all-swiper-btn"><i class="fal fa-long-arrow-right"></i></span>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Reviews Swiper',
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
            ctrls: {
                prevEl: '.reviews-swiper-btn.left',
                nextEl: '.reviews-swiper-btn.right'
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.reviews-swiper {
    width: 100%;

    &-slide {
        display: flex;
        opacity: .6;
        transition: .4s;

        .review-img-box {
            max-width: 350px;
            width: 100%;
            padding: 8px 9px;
            border: solid 2px rgba($color: #fff, $alpha: .1);

            .review-img {
                width: 100%;
            }
        }

        .review-descr {
            width: 100%;
            padding: 55px 35px 45px;
            border: solid 2px rgba($color: #fff, $alpha: .1);
            border-right: 0 !important;
            border-left: 0 !important;
            display: flex;
            flex-direction: column;
            row-gap: 10px;

            .review-author {
                font-size: 22px;
                text-transform: capitalize;
                font-weight: 600;
            }

            .review-job {
                max-width: 300px;
                width: 100%;
                font-size: 17px;
                opacity: .4;
                font-weight: 300;
            }

            .review-msg {
                max-width: 500px;
                width: 100%;
                margin-top: 10px;
                font-size: 17px;
                font-weight: 300;
            }

            .review-icon {
                max-width: 130px;
                width: 100%;
                margin-top: auto;
            }
        }

        &.swiper-slide-active {
            opacity: 1;
        }

        &:last-of-type {
            .review-descr {
                border-right: solid 2px rgba($color: #fff, $alpha: .1) !important;
            }
        }
    }
}

</style>