<template>
  <section class="cases__section">
    <div class="container">
      <div class="row">
        <div class="cases__descr">
          <p class="cases-num">01<span>/05</span></p>

          <h2 class="cases-title ml">{{ title }}</h2>

          <p class="cases-txt ml">{{ txt }}</p>

          <p class="cases-txt-2 ml">{{ txt2 }}</p>
        </div>

        <img src="@/assets/images/cases-img.png" alt="" class="cases-img">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Cases Page',
  data() {
    return {
      title: 'Дизайн интерьера частной квартиры',
      txt: 'Инновационный квартал Премиального уровня с авторской архитектурой и современными технологиями на берегу реки Москвы.',
      txt2: 'Выполнение Дизайн проекта в VR, Инженерный проект, Комплектация объекта, Выполнение отделочных работ '
    }
  }
}

</script>

<style lang="scss" scoped>

.cases__section {
  width: 100%;
  height: 100%;
  margin-top: 55px;
  border-top: 1px solid rgba($color: #fff, $alpha: .2);
  border-bottom: 1px solid rgba($color: #fff, $alpha: .2);

  .row {
    justify-content: space-between;
  }

  .cases__descr {
    max-width: 600px;
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    row-gap: 30px;

    .cases-num {
      font-size: 28px;
      letter-spacing: 1.5px;
      font-family: var(--num-font);

      span {
        font-size: 15px;
        opacity: .3;
        font-family: var(--num-font);
      }
    }

    .cases-title {
      font-size: 52px;
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: 1.1px;
    }

    .cases-txt {
      font-size: 17px;
      font-weight: 300;

      &-2 {
        font-size: 15px;
        opacity: .5;
        font-weight: 300;
      }
    }

    .ml {
      margin-left: 55px;
    }
  }

  .cases-img {
    max-width: 490px;
    width: 100%;
    height: 100%;
    min-height: 100%;
    object-fit: cover;
    margin-right: 100px;
  }
}

</style>