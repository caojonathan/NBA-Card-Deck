function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }






const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


for(let i =0; i < 6; i++){
    make_Card();
}

async function make_Card() {
    

    var player_id = getRandomInt(0, 500)
    const response = await fetch(`https://www.balldontlie.io/api/v1/players/${player_id}`)
    const data = await response.json()

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h1 = document.createElement('h1')
     h1.textContent = data.first_name

    const h2 = document.createElement('h2')
    h2.textContent = data.last_name

    const h3 = document.createElement('h3')
     if(data.height_feet != null){
         h3.textContent = "Height: " + data.height_feet + "'" + data.height_inches
     }
     else{
        h3.textContent = "Height: Unavailable"
    }

    const h4 = document.createElement('h4')
    if(data.height_feet != null){
        h4.textContent = "Weight: " + data.weight_pounds + "lbs"
    }
    else{
        h4.textContent = "Weight: Unavailable"
    }

    const h5 = document.createElement('h5')
    h5.textContent = data.team.abbreviation + " " + data.team.full_name
   

    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(h2)
    card.appendChild(h3)
    card.appendChild(h4)
    card.appendChild(h5)
}















