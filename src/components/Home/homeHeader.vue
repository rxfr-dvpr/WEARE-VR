<template>
  <header class="header home">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <h1 class="header__descr-title" v-html="title"></h1>

                <p class="header__descr-txt">{{ txt }}</p>
            </div>

            <div class="header-img-box">
                <img src="@/assets/images/header-img.png" alt="" class="header-img">

                <img src="@/assets/images/header-ellipse.png" alt="" class="header-ellipse">

                <img src="@/assets/images/header-ellipse-2.png" alt="" class="header-ellipse-2">
            </div>
        </div>
    </div>
  </header>
</template>

<script>

export default {
    name: 'Home Page Header',
    data() {
        return {
            title: 'разработка <span class="title-span">vr/ar</span> проектов',
            txt: 'моделирование и визуализация 3D-объектов в формате виртуальной реальности'
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    &__descr {
        max-width: 630px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 35px;

        &-title {
            font-size: 71px;
            text-transform: uppercase;
            font-weight: 300;
        }

        &-txt {
            max-width: 480px;
            width: 100%;
            font-size: 17px;
            text-transform: uppercase;
            opacity: .8;
            margin-left: 55px;
            letter-spacing: 1.1px;
            font-weight: 300;
        }
    }

    &-img-box {
        max-width: 800px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .header-img {
            width: 100%;
        }

        .header-ellipse {
            max-width: 175px;
            width: 100%;
            position: absolute;
            bottom: 4%;
            left: -20%;

            &-2 {
                max-width: 200px;
                width: 100%;
                position: absolute;
                top: 2%;
                left: -2%;
            }
        }
    }
}

</style>