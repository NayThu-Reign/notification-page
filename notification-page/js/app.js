const unReadMessages = document.querySelectorAll('.unread')
const unReadNumbers = document.querySelector('.unread-nums')
const markAll = document.getElementById('mark-read') 

unReadNumbers.innerText = unReadMessages.length

unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove('unread');
        const newUnReadMessages = document.querySelectorAll('.unread')
        unReadNumbers.innerText = newUnReadMessages.length
    })
})

markAll.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
        message.classList.remove('unread')
    })
    const newUnReadMessages = document.querySelectorAll('.unread')
    unReadNumbers.innerText = newUnReadMessages.length
})