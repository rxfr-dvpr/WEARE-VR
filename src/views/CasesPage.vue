<template>
  <section class="cases__section">
    <div class="container">
      <div class="row">
        <div class="cases__descr">
          <p class="cases-num">01<span>/05</span></p>

          <h2 class="cases-title ml all-title-52">{{ title }}</h2>

          <p class="cases__descr-txt ml">{{ descr.txt }}</p>

          <p class="cases__descr-txt-2 ml">{{ descr.txt2 }}</p>

          <span class="cases-link ml">Подробнее <i class="fal fa-long-arrow-right"></i></span>
        </div>

        <img :src="img" alt="" class="cases-img">

        <span class="cases-txt all-title-52" v-html="absoluteTxt"></span>
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
      descr: {
        txt: 'Инновационный квартал Премиального уровня с авторской архитектурой и современными технологиями на берегу реки Москвы.',
        txt2: 'Выполнение Дизайн проекта в VR, Инженерный проект, Комплектация объекта, Выполнение отделочных работ '
      },
      absoluteTxt: 'VR-экскурсия <br> по платформе Приразломная',
      img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Cases%2Fcases-img.png?alt=media&token=433ea6e7-d2d0-44b5-b82b-a3c5ae774d16'
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
  position: relative;
  overflow-x: hidden;

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
      font-weight: 400;
      letter-spacing: 1.1px;
    }

    &-txt {
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

    .cases-link {
      font-size: 15px;
      text-transform: uppercase;
      align-items: center;
      cursor: pointer;
      display: flex;
      gap: 15px;
      transition: .3s;

      i {
        font-size: 20px;
        margin-top: 2px;
        transition: .3s;
      }

      &:hover {
        color: var(--main-blue);

        i {
          color: var(--main-blue);
        }
      }
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

  .cases-txt {
    max-width: 900px;
    width: 100%;
    letter-spacing: 1.1px;
    position: absolute;
    top: 18.5%;
    right: -45%;
  }
}

</style>