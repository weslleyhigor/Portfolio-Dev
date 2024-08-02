import { projects } from "../database/data.js"

const containerProjects = document.querySelector('.projects__card__container')

export function createCardProject () {

    projects.forEach((element) => {
        console.log(element)

        containerProjects.insertAdjacentHTML("beforeend", `
            <li class="project__card">
              <img src="${element.imgPreviewUrl}">
            </li>
        `)
    })
}