import { xpAcademic, xpProfessional } from "../database/data.js";

const cardAcademic = document.querySelector('.xp__academic__card__container')
const cardProfessional = document.querySelector('.xp__professional__card__container')


export function createCardExperiences () {
    xpAcademic.forEach((element)=>{
        cardAcademic.insertAdjacentHTML("beforeend", `
            <li class="xp__academic__card">
                <img src="${element.logoUrl}">
                <p class="school__name">${element.nameCompany}</p>
                <p class="course__name">${element.occupation}</p>
                <p class="course__date"><span>${element.timeStart} - ${element.timeEnd}</p>
            </li>
        `)
    })

    xpProfessional.forEach((element)=>{
        cardProfessional.insertAdjacentHTML("beforeend", `
            <li class="xp__professional__card">
                <img src="${element.logoUrl}">
                <p class="company__name">${element.nameCompany}</p>
                <p class="employment__name">${element.occupation}</p>
                <p class="employment__date"><span>${element.timeStart} - ${element.timeEnd}</span></p>
            </li>
        `)
    })
}
