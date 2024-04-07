<template>
  <section class="team__section">
    <div class="container">
      <div class="row">
        <h2 class="team-title all-title-48">{{ title }}</h2>

        <TeamSwiper :slides="slides"/>
      </div>
    </div>
  </section>
</template>

<script>
import TeamSwiper from '@/components/TeamSwiper.vue'

export default {
  name: 'Team Page',
  data() {
    return {
      title: 'Наша команда',
      slides: [
        {
          name: 'Денис Петров',
          job: 'Дизайнер интерьеров',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Team%2Fdenis.png?alt=media&token=f30d44a4-65d2-402f-9454-17332c686350'
        },
        {
          name: 'Елезовета Туктамышева',
          job: 'Дизайнер интерьеров',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Team%2Felezoveta.png?alt=media&token=a644a918-6741-4d09-b712-609e8340ef21'
        },
        {
          name: 'Евдоким Кляров',
          job: 'Дизайнер интерьеров',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Team%2Fevdokim.png?alt=media&token=e330a67c-60ba-4a24-976d-6ed2ff671836'
        },
        {
          name: 'Денис Петров',
          job: 'Дизайнер интерьеров',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Team%2Fdenis.png?alt=media&token=f30d44a4-65d2-402f-9454-17332c686350'
        },
        {
          name: 'Елезовета Туктамышева',
          job: 'Дизайнер интерьеров',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Team%2Felezoveta.png?alt=media&token=a644a918-6741-4d09-b712-609e8340ef21'
        },
        {
          name: 'Евдоким Кляров',
          job: 'Дизайнер интерьеров',
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Team%2Fevdokim.png?alt=media&token=e330a67c-60ba-4a24-976d-6ed2ff671836'
        }
      ]
    }
  },
  components: {
    TeamSwiper
  }
}

</script>

<style lang="scss" scoped>

.team__section {
  width: 100%;
  padding-top: 70px;

  .row {
    flex-direction: column;
    row-gap: 40px;
  }

  .team-title {
    font-weight: 600; 
  }
}

</style>