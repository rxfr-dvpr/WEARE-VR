<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="nav-logo">
                <img src="@/assets/images/nav-logo.svg" alt="" class="nav-logo-img">
            </router-link>

            <div class="nav-contact">
                <a href="tel:+998998173066" class="nav-contact-num">+998 99 817 30 66</a>

                <button class="nav-contact-btn all-btn">получить  консультацию</button>
            </div>
            
            <button class="nav-btn" @click="linksOpened = !linksOpened">
                <span class="nav-btn-line"></span>
                <span class="nav-btn-line scnd"></span>

                <span class="nav-btn-txt" :class="{'opened': linksOpened}">закрыть</span>
            </button>

            <Transition name="wrapper">
                <div class="nav-wrapper" v-show="linksOpened">
                    <ul class="nav__list">
                        <li class="nav__list-item">
                            <a href="" class="nav__list-link"></a>
                        </li>
                    </ul>

                    <img :src="bgImg" alt="" class="bg-img">

                    <img :src="bgVector" alt="" class="bg-vector">
                </div>
            </Transition>

        </div>
    </div>
  </nav>
</template>

<script>

export default {
    name: 'Navigation',
    data() {
        return {
            bgImg: "https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/bg-filter.png?alt=media&token=54c9f47c-6cb6-44c8-a113-f4351b4ab231",
            bgVector: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/bg-vector.svg?alt=media&token=84c62bf9-00de-4499-8690-167f0bb8e7fd',
            linksOpened: false
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 35px 0 15px;

    .row {
        justify-content: space-between;
        column-gap: 40px;
    }

    &-logo {
        max-width: 200px;
        width: 100%;
        z-index: 6;

        &-img {
            width: 100%;
        }
    }

    &-contact {
        max-width: 550px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-left: auto;
        gap: 15px;
        align-items: center;

        &-num {
            font-size: 22px;
            letter-spacing: 1.1px;
            transition: .3s;
            min-width: max-content;
            
            &:hover {
                color: var(--main-blue);
            }
        }
    }

    &-btn {
        width: 50px;
        height: 50px;
        background: transparent;
        position: relative;
        border: 0;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        align-items: center;
        justify-content: center;
        border: solid 2px var(--main-blue);
        border-radius: 50%;
        z-index: 6;

        &-line {
            width: 27px;
            height: 2px;
            display: block;
            background: var(--primary-color);
            position: relative;            

            &.scnd {
                width: 17px;
                margin-left: 10px;
            }
        }

        &-txt {
            position: absolute;
            right: 0;
            bottom: 0;
            transform: rotate(90deg);
            translate: 8px 55px;
            font-size: 14px;
            text-transform: uppercase;
            opacity: 0;
            pointer-events: none;
            transition: .4s;

            &.opened {
                opacity: 1;
                pointer-events: all !important;
            }
        }
    }

    &-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgb(32,59,124);
        background: linear-gradient(145deg, rgba(32,59,124,1) 0%, rgba(73,47,116,1) 100%);
        overflow: hidden;
        z-index: 5;

        .bg-img {
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: .5;
            pointer-events: none;
        }

        .bg-vector {
            max-width: 835px;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: .1;
            pointer-events: none;
        }
    }
}

.wrapper-enter-active,
.wrapper-leave-active {
  transition: .4s ease;
}

.wrapper-enter-from,
.wrapper-leave-to {
  opacity: 0;
}

</style>