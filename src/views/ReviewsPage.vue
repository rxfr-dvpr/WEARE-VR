<template>
  <section class="reviews__section">
    <div class="container">
      <div class="row">

        <div class="reviews-top">
          <h2 class="reviews-title all-title-48">{{ title }}</h2>
          <p class="reviews-top-txt">{{ topTxt }}</p>
        </div>

        <ReviewsSwiper :slides="slides"/>
      </div>
    </div>
  </section>
</template>

<script>
import ReviewsSwiper from '@/components/ReviewsSwiper.vue'

export default {
  name: 'Reviews Page',
  data() {
    return {
      title: 'Отзывы',
      topTxt: 'Как мы работаем',
      slides: [
        {
          name: 'Ксения Жемчугова',
          job: 'Начальник Департамента закупок ООО «Газпром Нефть Шельф»',
          msg: 'Высокий уровень квалификации специалистов и оперативное реагирование на изменения технического задания в целом позволили осуществить данный проект в соответствии с разработанным графиков и обеспечить рациональное расходование финансовых ресурсов',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Reviews%2Freview-1.png?alt=media&token=8e7c38c7-a2ca-4b7d-b6ac-27d07ac70db9',
          icon: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fgazprom.svg?alt=media&token=117a3361-b7f7-45d1-b427-c9b98bb2e9ea'
        },
        {
          name: 'Павел Осипов',
          job: 'Начальник Департамента закупок ООО «мегафон»',
          msg: 'Высокий уровень квалификации специалистов и оперативное реагирование на изменения технического задания в целом позволили осуществить данный проект в соответствии с разработанным графиков и обеспечить рациональное расходование финансовых ресурсов',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Reviews%2Freview-1.png?alt=media&token=8e7c38c7-a2ca-4b7d-b6ac-27d07ac70db9',
          icon: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fmegafon.svg?alt=media&token=f5acb0be-30b9-4b2a-9b30-d50f6abd9c48'
        },
        {
          name: 'Ксения Жемчугова',
          job: 'Начальник Департамента закупок ООО «Газпром Нефть Шельф»',
          msg: 'Высокий уровень квалификации специалистов и оперативное реагирование на изменения технического задания в целом позволили осуществить данный проект в соответствии с разработанным графиков и обеспечить рациональное расходование финансовых ресурсов',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Reviews%2Freview-1.png?alt=media&token=8e7c38c7-a2ca-4b7d-b6ac-27d07ac70db9',
          icon: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fgazprom.svg?alt=media&token=117a3361-b7f7-45d1-b427-c9b98bb2e9ea'
        },
        {
          name: 'Павел Осипов',
          job: 'Начальник Департамента закупок ООО «мегафон»',
          msg: 'Высокий уровень квалификации специалистов и оперативное реагирование на изменения технического задания в целом позволили осуществить данный проект в соответствии с разработанным графиков и обеспечить рациональное расходование финансовых ресурсов',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Reviews%2Freview-1.png?alt=media&token=8e7c38c7-a2ca-4b7d-b6ac-27d07ac70db9',
          icon: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fmegafon.svg?alt=media&token=f5acb0be-30b9-4b2a-9b30-d50f6abd9c48'
        },
      ]
    }
  },
  components: {
    ReviewsSwiper
  }
}

</script>

<style lang="scss" scoped>

.reviews__section {
  width: 100%;
  padding-top: 60px;

  .row {
    flex-direction: column;
    row-gap: 40px;
  }

  .reviews-top {
    width: 100%;
    position: relative;

    .reviews-title {
      letter-spacing: 1.2px;
      position: absolute;
      bottom: 20px;
      left: 50px;
      font-weight: 600;
    }

    &-txt {
      font-size: 122px;
      text-transform: uppercase;
      z-index: -1;
      opacity: .1;
      color: transparent;
      -webkit-text-stroke: 1px rgba($color: #fff, $alpha: .7);
      user-select: none;
    }
  }
}

</style>