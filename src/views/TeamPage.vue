<template>
  <section class="team__section">
    <div class="container">
      <div class="row">
        <h2 class="team-title">{{ title }}</h2>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Team Page',
  data() {
    return {
      title: 'Наша команда',
      slides: [
        {
          name: 'Денис Петров',
          job: 'Дизайнер интерьеров',
          img: ''
        },
        {
          name: 'Елезовета Туктамышева',
          job: 'Дизайнер интерьеров',
          img: ''
        },
        {
          name: 'Евдоким Кляров',
          job: 'Дизайнер интерьеров',
          img: ''
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

</style>