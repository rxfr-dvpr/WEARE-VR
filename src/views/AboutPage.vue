<template>
  <section class="about__section">
    <div class="container">
      <div class="row">
        <h2 class="about-title">{{ title }}</h2>

        <p class="about-txt">{{ txt }}</p>

        <div class="about__list">
          <p class="about__list-item" v-for="(item, idx) in statistics" :key="idx">
            {{ item.num }}
            <span>{{ item.name }}</span>
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'About Page',
  data() {
    return {
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
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.about__section {
  width: 100%;
  padding-top: 100px;

  .row {
    flex-direction: column;
    row-gap: 40px;
  }

  .about-title {
    max-width: 700px;
    width: 100%;
    font-size: 52px;
    text-transform: uppercase;
    font-weight: 500;
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

      span {
        font-size: 17px;
      }
    }
  }
}

</style>