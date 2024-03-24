<template>
  <section class="technologies__section">
    <div class="container">
        <div class="row">
            <h2 class="technologies-title">{{ title }}</h2>

            <div class="techno__list">
                <div class="techno__list-item" v-for="(item, idx) in list" :key="idx">
                    <img :src="item.img" alt="" class="techno-img">

                    <p class="techno-title">{{ item.title }}</p>

                    <p class="techno-txt">{{ item.txt }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Technologies',
    data() {
        return {
            title: 'Отличия виртуальной реальности от дополненной',
            list: [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Technologies%2Ftechno-img-1.png?alt=media&token=53d40779-01ee-484d-9785-27cb12dda04a',
                    title: 'Виртуальная реальность',
                    txt: 'Отличается от дополненной реальности (AR) тем, что видимая действительность искусственна. Пользователю предлагают полное погружение, задействуя дополнительные органы чувств. Мы внедряем новейшие разработки VR — используем не только шлем, а ещё перчатки, костюмы и контроллеры движения.'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Technologies%2Ftechno-img-2.png?alt=media&token=f0feb4f4-efab-4e22-bf05-4dc4a00c984c',
                    title: 'Дополненная реальность',
                    txt: 'Технология, с помощью которой в видимую действительность помещают виртуальные объекты. Представьте, что вы на презентации архитектора надеваете специальные очки, и на пустом столе появляется макет здания. Движением руки вы сможете вращать объект, приближать, отдалять или даже что-то в нём поменять.'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.technologies__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 25px;
        padding-top: 70px;
    }

    .technologies-title {
        max-width: 930px;
        width: 100%;
        font-weight: 400;
        font-size: 52px;
        text-transform: uppercase;
    }

    .techno__list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-left: 55px;

        &-item {
            max-width: 540px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 10px;

            .techno-img {
                max-width: max-content;
                width: 100%;
                object-fit: contain;
            }

            .techno-title {
                font-size: 25px;
                font-weight: 600;
            }

            .techno-txt {
                font-size: 15px;
                font-family: var(--scnd-font);
                opacity: .8;
                font-weight: 200;
            }
        }
    }
}

</style>