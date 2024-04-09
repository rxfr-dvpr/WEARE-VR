<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="nav-logo">
                <img :src="consultOpened ? darkLogo : lightLogo" alt="" class="nav-logo-img">
            </router-link>

            <div class="nav-contact">
                <a href="tel:+998998173066" class="nav-contact-num" :class="{'dark': consultOpened}">+998 99 817 30 66</a>

                <button class="nav-contact-btn all-btn" @click="consultOpened = true">получить  консультацию</button>
            </div>
            
            <button class="nav-btn" @click="linksOpened = !linksOpened" :disabled="consultOpened"
            :class="{'active': linksOpened, 'consult-opened': consultOpened}">
                <span class="nav-btn-line"></span>
                <span class="nav-btn-line scnd"></span>

                <span class="border-circle frst"></span>
                <span class="border-circle scnd"></span>

                <span class="nav-btn-txt" :class="{'opened': linksOpened}">закрыть</span>
            </button>

            <Transition name="wrapper">
                <div class="nav-wrapper" v-show="linksOpened">
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                            <router-link :to="link.url" class="nav__list-link" @click="this.linksOpened = false">
                                <span class="link-num">{{ (idx + 1) < 10 ? `0${idx + 1}` : idx + 1 }}</span>
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>

                    <img :src="bgImg" alt="" class="bg-img">

                    <img :src="bgVector" alt="" class="bg-vector">
                </div>
            </Transition>
            
            <Transition name="consult">
                <Consultation v-show="consultOpened" @backClick="consultOpened = false"/>
            </Transition>
        </div>
    </div>
  </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";
import Consultation from './Consultation.vue';

export default {
    name: 'Navigation',
    components: {
        Consultation
    },
    data() {
        return {
            lightLogo: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Nav%2Fnav-logo.svg?alt=media&token=70883c0e-9a01-4127-b4a5-049a10172b06',
            darkLogo: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Nav%2Fnav-logo-dark.svg?alt=media&token=53b228f0-bc84-4a87-ac04-9bebc3da8382',
            bgImg: "https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/bg-filter.png?alt=media&token=54c9f47c-6cb6-44c8-a113-f4351b4ab231",
            bgVector: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/bg-vector.svg?alt=media&token=84c62bf9-00de-4499-8690-167f0bb8e7fd',
            linksOpened: false,
            store: navStore(),
            consultOpened: false
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
        z-index: 8;
        display: flex;
        justify-items: center;
        align-items: center;

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
            font-size: calc(15px + 7 * (100vw / 1920));
            transition: .3s;
            min-width: max-content;
            z-index: 6;
            font-weight: 600;
            font-family: var(--num-font);
            
            &:hover, &.dark {
                color: var(--main-blue);
            }
        }

        &-btn {
            font-size: calc(11px + 3 * (100vw / 1920));
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
        z-index: 8;
        padding-bottom: 4px;
        padding-left: 6px;
        transition: .2s;

        &-line {
            width: 27px;
            height: 2px;
            display: block;
            background: var(--primary-color);
            position: relative;
            transition: .3s;        

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
            translate: 8px 45px;
            font-size: 14px;
            text-transform: uppercase;
            opacity: 0;
            pointer-events: none;
            transition: .4s;

            &.opened {
                opacity: 1;
                pointer-events: all !important;
                translate: 8px 55px !important;
            }
        }

        .border-circle {
            width: 52px;
            height: 52px;
            position: absolute;
            top: 0;
            border-radius: 50%;
            border: solid 2px var(--main-blue);
            transition: .2s;

            &.frst {
                top: -9px;
                right: -9px;                
            }

            &.scnd {
                top: -6px;
                right: -6.5px;                
            }
        }

        &:hover, &.active {
            padding-bottom: 0;
            padding-left: 0;
            .border-circle {
                &.frst, &.scnd {
                    top: 0;
                    left: 0;
                    opacity: 0;
                }
            }
        }

        &.active {
            .nav-btn-line {
                transform: rotate(45deg) translate(4px, 3px);

                &.scnd {
                    width: 27px;
                    transform: rotate(-45deg) translate(2px, -1px);
                    margin-left: 0 !important;
                }
            }
        }

        &.consult-opened {
            .nav-btn-line {
                background: var(--dark-blue);
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
        z-index: 7;
        display: flex;
        justify-content: center;
        align-items: center;

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

        .nav__list {
            max-width: 835px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            row-gap: 25px;
            z-index: 5;
            font-family: var(--scnd-font);
            padding: 0 15px;

            &-item {
                max-width: 320px;
                width: 100%;
            }

            &-link {
                font-size: calc(25px + 17 * (100vw / 1920));
                text-transform: capitalize;
                opacity: .5;
                transition: .3s;
                display: flex;
                gap: 15px;

                &:hover, &.router-link-exact-active {
                    opacity: 1;
                }

                .link-num {
                    font-size: 20px;
                    font-family: var(--num-font);
                }
            }
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

.consult-enter-active,
.consult-leave-active {
  transition: .4s ease;
}

.consult-enter-from,
.consult-leave-to {
    opacity: 0;
}

@media (min-width: 1920px) {
    .nav__list-link {
        font-size: 42px !important;
    }

    .nav-contact {
        &-num {
            font-size: 22px !important;
        }

        &-btn {
            font-size: 14px !important;
        }
    }
}

@media (max-width: 1250px) {
    .nav__list-item {
        max-width: 270px !important;
    }
}

@media (max-width: 992px) {
    .nav-logo {
        max-width: 140px !important;
    }
}

@media (max-width: 678px) {
    .nav__list {
        flex-direction: column;
        align-items: center;
        row-gap: 15px !important;

        &-item {
            max-width: max-content !important;
        }
    }
}

</style>