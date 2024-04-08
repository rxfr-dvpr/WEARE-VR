<template>
  <header class="header home">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <h1 class="header__descr-title" v-html="title"></h1>

                <p class="header__descr-txt all-txt">{{ txt }}</p>

                <div class="header-sertificates">
                    <router-link to="/sertificate" class="header-sertificates-item" v-for="(item, idx) in sertificates" :key="idx">
                        <span>/</span> 
                        &nbsp; 
                        {{ item.name }}
                    </router-link>
                </div>
            </div>

            <div class="header-img-box">
                <img :src="mainImg" alt="" class="header-img">

                <img :src="ellipseImg" alt="" class="header-ellipse">

                <img :src="ellipse2Img" alt="" class="header-ellipse-2">
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
            txt: 'моделирование и визуализация 3D-объектов в формате виртуальной реальности',
            sertificates: [
                {
                    name: 'Участники фестиваля круг света'
                },
                {
                    name: 'Cертификат iso 9001'
                }
            ],
            mainImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Home%2Fheader-img.png?alt=media&token=62ee27b7-38bd-4887-8ef2-a843a8eaa3c8',
            ellipseImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Home%2Fheader-ellipse.png?alt=media&token=475cd578-acf4-41d3-84de-8897fce17a5a',
            ellipse2Img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Home%2Fheader-ellipse-2.png?alt=media&token=c0790cb4-a164-4553-8168-4e5c1595d7a3'
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
            font-size: calc(58px + 12 * (100vw / 1920));
            text-transform: uppercase;
            font-weight: 300;
        }

        &-txt {
            max-width: 480px;
            width: 100%;
            margin-left: 55px;
            letter-spacing: 1.1px;
            font-weight: 300;
            font-size: 16px;
        }


        .header-sertificates {
            display: flex;
            align-items: center;
            gap: 45px;
            margin-top: 50px;

            &-item {
                font-size: 14px;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 1.1px;

                span {
                    font-size: 22px;
                    color: var(--main-blue);
                }
            }
        }
    }

    &-img-box {
        max-width: 800px;
        width: 100%;
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

@media (min-width: 1920px) {
    .header__descr-title {
        font-size: 70px !important;
    }
}

@media (max-width: 1545px) {
    .header__descr {
        max-width: 600px;
    }

    .header-img-box {
        max-width: 650px;
    }
}

</style>