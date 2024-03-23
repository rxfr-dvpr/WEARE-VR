import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'главная',
                url: '/'
            },
            {
                name: 'технологиии',
                url: '/technology'
            },
            {
                name: 'услуги',
                url: '/'
            },
            {
                name: 'кейсы',
                url: '/'
            },
            {
                name: 'о компании',
                url: '/'
            },
            {
                name: 'сертификаты',
                url: '/'
            },
            {
                name: 'команда',
                url: '/'
            },
            {
                name: 'отзывы',
                url: '/'
            },
            {
                name: 'блог',
                url: '/'
            },
            {
                name: 'контакты',
                url: '/'
            }
        ]
    })
})