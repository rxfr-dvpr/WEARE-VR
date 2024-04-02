<template>
  <section class="contact__section">
    <div class="container">
      <div class="row">

        <form @submit.prevent class="contact__form">
          <h4 class="contact__form-title">{{ form.title }}</h4>

          <div class="form-inputs">
            <input :type="input.type" v-for="(input, idx) in form.inputs" :key="idx"
            :class="`form-inputs-item ${input.type}-inp`" v-model="input.val">

            <textarea class="form-inputs-item" v-model="form.msg"></textarea>
          </div>
        </form>

        <!-- <div class="contact__info">
          <a href="" class="contact__info-number"></a>
          <a href="" class="contact__info-mail"></a>
        </div> -->

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Contact Page',
  data() {
    return {
      form: {
        title: 'Готовы создать уникальный проект? Давайте сделаем его вместе!',
        inputs: [
          {
            type: 'text',
            val: ''
          },
          {
            type: 'email',
            val: ''
          },
          {
            type: 'number',
            val: ''
          }
        ],
        msg: '',
        btnVal: '',
        policy: 'Я согласен с политикой конфиденциальности'
      }
    }
  }
}

</script>

<style lang="scss" scoped>

.contact__section {
  width: 100%;
  padding-top: 60px;

  .row {
    justify-content: space-between;
  }

  .contact__form {
    max-width: 595px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 80px;

    &-title {
      max-width: 440px;
      width: 100%;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 70px;
      
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}

</style>