<template>
  <section class="error__section">
    <div class="container">
      <div class="row">
        <p class="error-num">404</p>
        <p class="error-msg">{{ errorTxt }}</p>

        <router-link to="/" class="back-link"><i class="far fa-long-arrow-left"></i> {{ backLink }}</router-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Not Found Page',
  data() {
    return {
      errorTxt: 'Страница не найдена',
      backLink: 'вернуться на главную страницу'
    }
  }
}

</script>

<style lang="scss" scoped>

.error__section {
  width: 100%;
  padding: 100px 0;

  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 10px;
  }

  .error-num {
    font-size: calc(55px + 135 * (100vw / 1920));
    font-weight: 600;
  }

  .error-msg {
    font-size: 20px;
    opacity: .7;
    margin-bottom: 20px;
  }

  .back-link {
    font-size: 15px;
    transition: .3s;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: max-content;

    i {
      margin-top: 4px;
      font-size: 17px;
      transition: .3s;
    }

    &:hover, &:active {
      color: var(--main-blue);

      i {
        color: var(--main-blue);
      }
    }
  }
}

@media (min-width: 1920px) {
  .error-num {
    font-size: 190px !important;
  }
}

</style>