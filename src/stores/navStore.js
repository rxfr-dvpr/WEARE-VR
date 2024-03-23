import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'главная'
            },
            {
                name: 'технологиии'
            },
            {
                name: 'услуги'
            },
            {
                name: 'кейсы'
            },
            {
                name: 'о компании'
            },
            {
                name: 'сертификаты'
            },
            {
                name: 'команда'
            },
            {
                name: 'отзывы'
            },
            {
                name: 'блог'
            },
            {
                name: 'контакты'
            }
        ]
    })
})