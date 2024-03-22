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
            
            <button class="nav-btn">
                <span class="nav-btn-line"></span>
                <span class="nav-btn-line scnd"></span>

                <span class="nav-btn-txt">закрыть</span>
            </button>

            <div class="nav-wrapper">
                <ul class="nav__list">
                    <li class="nav__list-item">
                        <a href="" class="nav__list-link"></a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  </nav>
</template>

<script>

export default {
    name: 'Navigation'
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
        }
    }

    &-wrapper {
        position: absolute;
    }
}

</style>