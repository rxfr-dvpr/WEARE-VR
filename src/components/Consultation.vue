<template>
  <div class="consult-modal">
    <div class="container">
        <div class="row">
            <button class="back-btn all-btn" @click="this.$emit('backClick')">back</button>

            <form @submit.prevent class="modal-form">
                <h3 class="modal-form-title">{{ title }}</h3>

                <p class="modal-form-subtitle">{{ subtitle }}</p>

                <div class="form-inputs">
                    <input type="text" class="name-inp all-inp" required placeholder="Имя">
                    <input type="tel" class="tel-inp all-inp" required placeholder="Телефон">
                    <input type="email" class="email-inp all-inp" required placeholder="E-mail">
                    <textarea class="msg-inp all-inp" required placeholder="Описание задачи"></textarea>
                </div>

                <button class="submit-btn all-btn">{{ btnVal }}</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Consultation Modal',
    data() {
        return {
            title: 'Получить консультацию',
            subtitle: 'Мы всегда рады обсудить с вами ваш проект или ответить на вопросы.',
            nameInp: '',
            telInp: '',
            emailInp: '',
            msgInp: '',
            btnVal: 'Отправить заявку'
        }
    }
}

</script>

<style lang="scss" scoped>

.consult-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background: #E4E7E9;
    z-index: 5;

    .row {
        column-gap: 100px;
        row-gap: 25px;
        align-items: center;
    }

    .back-btn {
        max-width: 100px;
        font-weight: 600;
        color: var(--dark-blue);
        border-color: var(--dark-blue);
        border-width: 2px;

        &:hover {
            color: var(--primary-color);
            border-color: transparent;
        }
    }

    .modal-form {
        max-width: 920px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        &-title {
            max-width: 595px;
            width: 100%;
            font-size: 52px;
            text-transform: uppercase;
            font-weight: 500;
            color: var(--dark-blue);
        }

        &-subtitle {
            max-width: 390px;
            width: 100%;
            font-size: 17px;
            color: var(--dark-blue);
            margin-bottom: 30px;
            font-weight: 500;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .form-inputs {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            row-gap: 45px;
            column-gap: 35px;

            .all-inp {
                max-width: 270px;
                width: 100%;
                background: transparent;
                border: 0;
                color: var(--dark-blue);
                font-weight: 600;
                padding: 0 10px 10px;
                border-bottom: 1px solid var(--dark-blue);
                font-size: 14px;

                &::placeholder {
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba($color: #000032, $alpha: .7);
                }

                &.msg-inp {
                    max-width: 100%;
                    resize: vertical;
                }
            }
        }

        .submit-btn {
            max-width: 240px;
            background: var(--main-blue);
            border-color: var(--main-blue);
            margin-top: 10px;
        }
    }
}

</style>