<template>
  <section class="contact__section">
    <div class="container">
      <div class="row">

        <form @submit.prevent class="contact__form">
          <h4 class="contact__form-title">{{ form.title }}</h4>

          <div class="form-inputs">
            <input :type="input.type" v-for="(input, idx) in form.inputs" :key="idx" required
            :class="`form-inputs-item ${input.type}-inp`" v-model="input.val" :placeholder="input.plc">

            <textarea class="form-inputs-item msg-inp" rows="1" placeholder="Сообщение" required v-model="form.msg"></textarea>
          </div>

          <div class="form-ctrls">
            <label class="form-policy"><input type="checkbox" required> {{ form.policy }}</label>

            <button class="form-btn all-btn" type="submit">{{ form.btn }}</button>
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
            val: '',
            plc: 'Имя'
          },
          {
            type: 'email',
            val: '',
            plc: 'E-mail'
          },
          {
            type: 'number',
            val: '',
            plc: 'Телефон'
          }
        ],
        msg: '',
        btn: 'Отправить заявку',
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

    .form-inputs {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
      row-gap: 30px;

      &-item {
        max-width: 270px;
        width: 100%;
        background: transparent;
        border: 0;
        border-bottom: 1px solid rgba($color: #fff, $alpha: .4);
        padding: 15px 0 15px 10px;
        font-size: 15px;

        &::placeholder {
          color: var(--primary-color);
          opacity: .9;
        }

        &.msg-inp {
          resize: vertical;
        }
      }
    }

    .form-ctrls {
      width: 100%;
      display: flex;
      justify-content: space-between;
      column-gap: 25px;
      row-gap: 20px;
      flex-wrap: wrap;

      .form-btn {
        max-width: 240px;
        width: 100%;
        background: var(--main-blue);
        border-color: var(--main-blue);
      }

      .form-policy {
        max-width: 210px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 14px;
        cursor: pointer;
        user-select: none
      }
    }
  }
}

</style>