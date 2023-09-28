const restDiv = document.createElement('div')

fetch("http://localhost:3000/restaurants")
.then(resp => resp.json())
.then((restaurantArr) => renderRestaurants(restaurantArr))

const restaurantCollection = document.querySelector("#restaurant-collection")

function renderCard (restaurant) {    
    const restaurantCard = document.createElement('div')
    restaurantCard.className = 'card'
    const h2 = document.createElement('h2')
    h2.textContent = restaurant.name
    const img = document.createElement('img')
    img.src = restaurant.image
    img.alt = "Delicious breakfast foods"
    img.className = 'restaurant-avatar'
    restaurantCard.append(h2,img)
    restaurantCollection.append(restaurantCard)
}

function renderRestaurants(restaurantArr){
    restaurantArr.forEach(renderCard)
}
  
const newRestaurant = document.querySelector(".add-restaurant")
newRestaurant.addEventListener("submit",(e) =>{
    e.preventDefault()
    const newName = e.target.name.value
    const newImage = e.target.image.value
    const newLocation = e.target.location.value
    const newDiner ={
        name: newName,
        image:newImage ,
        location : newLocation
    }
    renderCard(newDiner)
    e.target.reset()
})


 