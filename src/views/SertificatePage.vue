<template>
  <section class="docs__section">
    <div class="container">
      <div class="row">
        <h2 class="docs-title">{{ title }}</h2>

        <div class="docs__list">
          <figure class="docs__list-item" v-for="(doc, idx) in docs" :key="idx">
            <figcaption class="doc-caption">
              Сертификат
              <span class="doc-id">f0000{{ doc.id }}</span>
            </figcaption>

            <img :src="doc.img" alt="" class="doc-img">

            <button class="doc-btn" @click="docModal(idx)"><i class="far fa-eye"></i></button>
          </figure>
        </div>
      </div>
    </div>
  </section>

  <div class="doc-modal" :class="{'opened': modalOpened}" @click.self="modalOpened = false">
    <img :src="modalImg" alt="" class="doc-modal-img">
  </div>
</template>

<script>

export default {
  name: 'Sertificate Page',
  data() {
    return {
      title: 'документы и сертификаты',
      docs: [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Sertificates%2Fdoc-1.png?alt=media&token=343c082e-891f-4622-87a0-a4a3ac89d20b',
          id: Math.floor(Math.random() * 9999),
          bigImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Sertificates%2Fdoc-1-big.png?alt=media&token=c052b508-bdd6-45ca-b2e4-bcacf896f221'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Sertificates%2Fdoc-2.png?alt=media&token=1c31c831-28bf-4108-9cc4-9ab998d3565e',
          id: Math.floor(Math.random() * 9999),
          bigImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Sertificates%2Fdoc-2-big.png?alt=media&token=a6199d46-1f2b-46d5-a330-1270bb585e5b'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Sertificates%2Fdoc-3.png?alt=media&token=fb739f3c-f8d7-4e0d-bc4b-b4d45e98c278',
          id: Math.floor(Math.random() * 9999),
          bigImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Sertificates%2Fdoc-3-big.png?alt=media&token=cc47478c-f6e4-473e-81b6-2f8a38206d62'
        }
      ],
      modalImg: 'https://firebasestorage.googleapis.com/v0/b/weare-vr.appspot.com/o/Sertificates%2Fdoc-1-big.png?alt=media&token=c052b508-bdd6-45ca-b2e4-bcacf896f221',
      modalOpened: false
    }
  },
  methods: {
    docModal(idx) {
      this.modalImg = this.docs[idx].bigImg

      this.modalOpened = true
    }
  }
}

</script>

<style lang="scss" scoped>

.docs__section {
  width: 100%;
  padding-top: 70px;

  .row {
    flex-direction: column;
    row-gap: 50px;
  }

  .docs-title {
    font-size: 48px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }

  .docs__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &-item {
      max-width: 380px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 50px;
      border: solid 1px rgba($color: #fff, $alpha: .2);
      border-radius: 12px;
      overflow: hidden;
      padding: 20px 24px 60px;
      cursor: pointer;
      transition: .3s;
      position: relative;

      .doc-img {
        max-width: 230px;
        width: 100%;
      }

      .doc-caption {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: .8;
        font-size: 15px;
        transition: .3s;

        .doc-id {
          text-transform: uppercase;
        }
      }

      .doc-btn {
        width: 75px;
        height: 75px;
        display: grid;
        place-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(.5);
        background: var(--main-blue);
        border-radius: 50%;
        border: 0;
        font-size: 25px;
        opacity: 0;
        visibility: hidden;
        transition: .4s;
        box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: .3);
      }

      &:hover {
        background: var(--main-blue);

        .doc-caption {
          opacity: 1;
        }

        .doc-btn {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
  }
}

.doc-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  transition: .5s;
  background: rgba($color: #000000, $alpha: .5);
  z-index: 70;
  opacity: 0;
  visibility: hidden;
  padding: 0 15px;

  &-img {
    max-width: 510px;
    width: 100%;
    margin: 0 auto;
  }

  &.opened {
    opacity: 1;
    visibility: visible;
  }
}

</style>