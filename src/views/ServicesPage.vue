<template>

  <section class="services__section">
    <div class="container">
      <div class="row">

        <div class="services__descr">
          <h2 class="services__descr-title">{{ title }}</h2>

          <p class="services__descr-txt">{{ txt }}</p>
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
      txt: 'WEARE – российский разработчик программного обеспечения и массогабаритного оборудования, предоставляющий максимально полное погружение в виртуальную реальность. '
    }
  }
}

</script>

<style lang="scss" scoped>

.services__section {
  width: 100%;
  padding-top: 70px;

  .services__descr {
    max-width: 1190px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &-title {
      max-width: 645px;
      width: 100%;
      font-size: 48px;
      text-transform: uppercase;
      font-weight: 500;
    }

    &-txt {
      max-width: 540px;
      width: 100%;
      font-size: 17px;
      color: rgba($color: #fff, $alpha: .8);
    }
  }
}

</style>