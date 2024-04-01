<template>
  <swiper :modules="modules" class="team-swiper" :slidesPerView="4.5" :spaceBetween="35" :navigation="cltrs">
    <swiper-slide class="team-swiper-slide" v-for="(slide, idx) in slides" :key="idx">
        <div class="slide-box">
            <img :src="slide.img" alt="" class="slide-img">

            <p class="slide-name">{{ slide.name }}</p>
        </div>

        <span class="slide-job">{{ slide.job }}</span>
    </swiper-slide>
  </swiper>

  <div class="swiper-ctrls all-swiper-btns">
    <span class="swiper-ctrls-btn left all-swiper-btn"><i class="fal fa-long-arrow-left"></i></span>
    <span class="swiper-ctrls-btn right all-swiper-btn"><i class="fal fa-long-arrow-right"></i></span>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Team Swiper',
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

.team-swiper {
    width: 100%;

    &-slide {
        max-width: 300px;
        width: 100%;
        display: flex;
        gap: 10px;

        .slide-job {
            font-size: 15px;
            color: rgba($color: #fff, $alpha: .6);
            writing-mode: vertical-rl;
            text-orientation: mixed;
            font-weight: 300;
            margin-top: 15px;
        }

        .slide-box {
            max-width: 270px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 12px;
            
            .slide-img {
                width: 100%;
                max-height: 390px;
                height: 100%;
                object-fit: cover;
                overflow: hidden;
            }
            
            .slide-name {
                font-size: 20px;
                text-transform: capitalize;
                font-weight: 300;
            }
        }

        &:nth-child(2n) {
            margin-top: 45px;
        }
    }
}

</style>