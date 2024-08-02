import { skillsFrontend, skillsBackend } from "../database/data.js";

const cardFrontend = document.querySelector('.skill__frontend__card__container')
const cardBackend = document.querySelector('.skill__backend__card__container')


export function createCardSkills () {

    skillsFrontend.forEach((element)=>{
        cardFrontend.insertAdjacentHTML('beforeend', `
            <li class="skill__frontend__card">
                <img src="${element.logoUrl}">
                <p>${element.name}</p>
            </li>
        `)
    })

    skillsBackend.forEach((element)=>{
        cardBackend.insertAdjacentHTML("beforeend", `
            <li class="skill__backend__card">
                <img src="${element.logoUrl}">
                <p>${element.name}</p>
            </li>
        `)
    })
}
