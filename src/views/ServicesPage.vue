<template>

  <section class="services__section">
    <div class="container">
      <div class="row">

        <div class="services__descr">
          <h2 class="services__descr-title all-title-48">{{ title }}</h2>

          <p class="services__descr-txt">{{ txt }}</p>
        </div>

        <div class="services__list">
          <figure class="services__list-item" v-for="(item, idx) in cards" :key="idx">
            <img :src="item.img" alt="" class="service-img">

            <figcaption class="service-name">{{ item.title }}</figcaption>

            <router-link :to="`/services`" class="service-link">Подробнее <i class="fal fa-long-arrow-right"></i></router-link>
          </figure>
        </div>
        
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: 'Services Page',
  data() {
    return {
      title: 'Комплексные решения визуализации',
      txt: 'WEARE – российский разработчик программного обеспечения и массогабаритного оборудования, предоставляющий максимально полное погружение в виртуальную реальность.',
      cards: [
        {
          title: 'Разработка VR решений',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Services%2Fservices-img-1.png?alt=media&token=785d8602-4c18-457b-a3a0-a48de2b05b6f'
        },
        {
          title: 'Дополненная реальность для Вашего бизнеса',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Services%2Fservices-img-2.png?alt=media&token=40345fdd-829c-4cbb-8dd6-158eba779452'
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.services__section {
  width: 100%;
  padding-top: 50px;

  .row {
    flex-direction: column;
    row-gap: 50px;
  }

  .services__descr {
    max-width: 1190px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &-title {
      max-width: 645px;
      width: 100%;
    }

    &-txt {
      max-width: 540px;
      width: 100%;
      font-size: 17px;
      color: rgba($color: #fff, $alpha: .8);
    }
  }

  .services__list {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    &-item {
      max-width: 540px;
      width: 100%;
      border: solid 1px rgba($color: #fff, $alpha: .1);
      border-radius: 3px;
      overflow: hidden;
      background: #000032;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 33px;
      row-gap: 10px;
      text-align: center;
      cursor: pointer;
      height: max-content;

      .service-img {
        width: 100%;
        object-fit: contain;
        max-height: 320px;
      }

      .service-name {
        max-width: 300px;
        width: 100%;
        font-size: 22px;
        font-weight: 500;
      }

      .service-link {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1.2px;
      }

      &:last-of-type {
        margin-top: 40px;
      }
    }
  }
}

</style>