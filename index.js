const adviceId = document.getElementById('advice-id')
const adviceTxt = document.getElementById('advice-txt')
const btn = document.querySelector('#btn')


btn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        adviceId.textContent = `Advice #${data.slip.id}`
        adviceTxt.textContent = `${data.slip.advice}`
    })
    
})
    


