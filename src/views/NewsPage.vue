<template>
  <section class="news__section">
    <div class="container">
      <div class="row">
        <h2 class="news-title all-title-52">{{ title }}</h2>
        
        <div class="news-filter">
          <span class="news-filter-btn" v-for="(filter, idx) in filters" :key="idx" 
          :class="{'selected': filter.selected}" @click="selectType(idx)">
            {{ filter.type }}
          </span>
        </div>

        <NewsSwiper :slides="slides"/>
      </div>
    </div>
  </section>
</template>

<script>
import NewsSwiper from '@/components/NewsSwiper.vue'

export default {
  name: 'News Page',
  data() {
    return {
      title: 'Статьи и новости',
      slides: [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/News%2Fnews-1.png?alt=media&token=5bcda5e1-41fd-401b-b953-b80f8d1f6f83',
          title: 'Тренды в строительстве дома',
          txt: 'Небольшой мастер-класс, как самому сделать грифельную стену дома. Наша команда состоит из опытных специалистов.',
          date: '28.02.2024'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/News%2Fnews-2.png?alt=media&token=3fc2b8f7-8806-4733-b05c-120b6b592be6',
          title: '2D- или 3D-анимация',
          txt: 'Самое яркое и запоминающееся средство для привлечения потребителя — это рекламные ролики. Видеоряд остается в памяти человека надолго, если он сделан качественно и со вкусом. Но не каждый зритель принимает решение остановиться и посмотреть на него. Для того чтобы рекламный ролик действительно запомнился, необходимо учесть несколько ключевых моментов. Во-первых, важно иметь четко сформулированное сообщение, которое нужно донести до аудитории. Ролик должен быть лаконичным и нести основную идею максимально ярко и понятно.',
          date: '07.12.2023'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/News%2Fnews-3.png?alt=media&token=0630b36f-a51e-4ecc-8c14-59bb6409376b',
          title: 'Разработка интерактивных систем VR',
          txt: 'Наша компания предоставляет услуги не только по созданию трехмерных моделей и визуализации объектов, но и разрабатывает целые интерактивные проекты для различных целей, таких как виртуальные туры, обучающие приложения, игровые симуляторы и многое другое. Наш подход к разработке интерактивных проектов основан на инновационных технологиях и профессиональном подходе к каждому заказу.',
          date: '31.05.2023'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/News%2Fnews-4.png?alt=media&token=bf8d7dc5-64bb-4566-b159-db31ff959279',
          title: 'Виртуальная реальность в обучении',
          txt: 'Виртуальная реальность меняет методы работы бизнеса. Прочитайте эту статью, чтобы узнать влияние VR на бизнес. Мы понимаем, что в современном мире визуальное восприятие играет ключевую роль, поэтому наши интерактивные проекты создаются с учетом самых последних тенденций в дизайне и разработке программного обеспечения.',
          date: '12.09.2022'
        },
      ],
      filters: [
        {
          selected: true,
          type: 'Все'
        },
        {
          selected: false,
          type: 'Новости'
        },
        {
          selected: false,
          type: 'Обзоры'
        },
        {
          selected: false,
          type: 'Советы'
        }
      ]
    }
  },
  components: {
    NewsSwiper
  },
  methods: {
    selectType(idx) {
      this.filters.map(item => item.selected = false)
      this.filters[idx].selected = true
    }
  }
}

</script>

<style lang="scss" scoped>

.news__section {
  width: 100%;
  padding-top: 70px;
  
  .row {
    flex-direction: column;
    row-gap: 20px;
  }

  .news-filter {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    &-btn {
      padding: 7px 25px 8px;
      border-radius: 40px;
      border: solid 1px rgba($color: #fff, $alpha: .2);
      font-size: 15px;
      cursor: pointer;
      transition: .3s;

      &::first-letter {
        text-transform: uppercase;
      }

      &.selected, &:hover, &:active {
        background: var(--main-blue);
        border-color: var(--main-blue);
      }
    }
  }
}

</style>