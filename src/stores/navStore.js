import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'главная',
                url: '/',
                active: true
            },
            {
                name: 'технологиии',
                url: '/technology',
                active: false
            },
            {
                name: 'услуги',
                url: '/services',
                active: false
            },
            {
                name: 'кейсы',
                url: '/cases',
                active: false
            },
            {
                name: 'о компании',
                url: '/about',
                active: false
            },
            {
                name: 'сертификаты',
                url: '/sertificate',
                active: false
            },
            {
                name: 'команда',
                url: '/team',
                active: false
            },
            {
                name: 'отзывы',
                url: '/reviews',
                active: false
            },
            {
                name: 'блог',
                url: '/news',
                active: false
            },
            {
                name: 'контакты',
                url: '/contact',
                active: false
            }
        ]
    })
})