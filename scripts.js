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
    
        var nullcheck = 0;
        while(nullcheck == 0){
            var player_id = getRandomInt(1, 3092)
            const response = await fetch(`https://www.balldontlie.io/api/v1/players/${player_id}`)
            const data = await response.json()

            if(data.weight_pounds != null){
                nullcheck = 1;
                const card = document.createElement('div')
                card.setAttribute('class', 'card')

                const h1 = document.createElement('h1')
                h1.textContent = data.first_name

                const h2 = document.createElement('h2')
                h2.textContent = data.first_lastname

                container.appendChild(card)
                card.appendChild(h1)
                card.appendChild(p)
            }
        }    
    } 















