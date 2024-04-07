<template>
  <section class="about__section">
    <div class="container">
      <div class="row">
        <h2 class="about-title all-title-52">{{ title }}</h2>

        <p class="about-txt">{{ txt }}</p>

        <div class="about__list">
          <p class="about__list-item" v-for="(item, idx) in statistics" :key="idx">
            {{ item.num }}
            <span>{{ item.name }}</span>
          </p>
        </div>
        
        <img :src="gradientImg" alt="" class="about-gradient">

        <div class="sponsors__list">
          <span class="sponsors__list-title">нам доверяют:</span>

          <img :src="sponsor.img" alt="" class="sponsors__list-img" v-for="(sponsor, idx) in sponsors" :key="idx">
        </div>
      </div>
    </div>

    <img :src="mainImg" alt="" class="about-img">
  </section>
</template>

<script>

export default {
  name: 'About Page',
  data() {
    return {
      mainImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fabout-img.png?alt=media&token=daf6aee6-3e25-48f0-a282-654431dde829',
      gradientImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fabout-gradient.png?alt=media&token=0c110355-3a1b-4c44-9f36-9f26f006f80c',
      title: 'Мы становимся другом для нашего клиента',
      txt: 'что бы изучить и понять внутренней мир  заказчика, а затем выразить его в интерьере. Дизайн проект — это подлинный шедевр, который рождается в единстве души и разума',
      statistics: [
        {
          num: 'c 2015',
          name: 'года на рынке'
        },
        {
          num: '200',
          name: 'архитектурных проектов'
        },
        {
          num: '180',
          name: 'проектов под ключ'
        },
        {
          num: '320',
          name: 'интерьерных проектов'
        },
      ],
      sponsors: [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fmegafon.svg?alt=media&token=f5acb0be-30b9-4b2a-9b30-d50f6abd9c48'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fgazprom.svg?alt=media&token=117a3361-b7f7-45d1-b427-c9b98bb2e9ea'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fsponsor-3.svg?alt=media&token=8b1e1e8f-f3c4-4066-8d54-4d6eb09c2bcd'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/About%2Fsponsor-4.svg?alt=media&token=2b309e4e-305d-49a0-a01e-366e5a384778'
        }
      ],
    }
  }
}

</script>

<style lang="scss" scoped>

.about__section {
  width: 100%;
  height: 100%;
  padding-top: 100px;

  .row {
    flex-direction: column;
    row-gap: 40px;
    position: relative;
  }

  .about-title {
    max-width: 700px;
    width: 100%;
  }

  .about-txt {
    max-width: 500px;
    width: 100%;
    font-size: 17px;
    color: rgba($color: #fff, $alpha: .7);
    font-weight: 300;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  .about__list {
    max-width: 845px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    gap: 15px;

    &-item {
      font-size: 48px;
      display: flex;
      flex-direction: column;
      font-family: var(--num-font);

      span {
        font-size: 17px;
      }
    }
  }

  .about-gradient {
    max-width: 1000px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -45%);
    z-index: -1;
  }

  .sponsors__list {
    max-width: max-content;
    width: 100%;
    display: flex;
    column-gap: 45px;
    align-items: flex-end;
    margin-top: auto;

    &-title {
      font-size: 14px;
      font-weight: 300;
      text-transform: uppercase;
      min-width: max-content;
    }

    &-img {
      max-width: 175px;
      width: 100%;
    }
  }

  .about-img {
    max-width: 700px;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    filter: blur(5px)
  }
}

</style>