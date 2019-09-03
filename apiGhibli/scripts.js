const request = new XMLHttpRequest()
const app = document.getElementById('root')
const logo = document.createElement('img')
const container = document.createElement('div')

logo.src='logo.png'
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400){
        data.forEach(movie => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            const p = document.createElement('p')
            p.textContent = `${movie.description}...`

            container.appendChild(card)

            card.appendChild(h1)
            card.appendChild(p)
          })
    }else{
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Failed to load`
        app.appendChild(errorMessage)
    }

}
request.send()
