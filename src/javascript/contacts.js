const inputOptionChannel = document.querySelector("#channel__option__input")
const optionsContainer = document.querySelector(".channel__options__list")
const inputValue = document.querySelector('.channel__option__input__value')
const messageValue = document.querySelector('#message')
const submitFormButton = document.querySelector('.submit__form__button')


export function showOptionsChannelList () {
    inputOptionChannel.addEventListener("click", () => {
        if (optionsContainer.className.includes("display")){
            displayOptionsOn()
        } else {
            displayOptionsOff()
        }
        
        selectOptionsChannel()
    })
}

function displayOptionsOn () {
    optionsContainer.classList.remove('display')
}

function displayOptionsOff () {
    optionsContainer.classList.add('display')
}

function selectOptionsChannel() {
    const options = optionsContainer.children

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', ()=> {
            inputValue.innerText = `${options[i].innerText}`

            displayOptionsOff()
        })
    }
}

function sendForm () {
    submitFormButton.addEventListener('click', (event) => {
        event.preventDefault()

        if (inputValue.innerHTML == "CANAL") {
            return alert('Selecione o canal de contato')
        }

        if (messageValue.value.length == 0) {
            return alert('O campo Mensagem é obrigatório.')
        }

        if (inputValue.innerHTML == "Whatsapp") {
            let newMessage = messageValue.value.replace(" ", "%20")

            window.open(`https://api.whatsapp.com/send/?phone=5568996102021&text=${newMessage}`, "_blank");

            messageValue.value = "";
        }

    })
}

sendForm()