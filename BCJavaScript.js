const restDiv = document.createElement('div')



//console.log("hello")
fetch("http://localhost:3000/restaurants")
.then(resp => resp.json())
.then((data) => renderRestaurants(data))

const restaurantCollection = document.querySelector("#restaurant-collection")

function renderRestaurants(restaurantArr){
    restaurantArr.forEach((restaurant) =>{
        const restaurantCard = document.createElement('div')
        restaurantCard.className = 'card'
          const h2 = document.createElement('h2')
          h2.textContent = restaurant.name
        const img = document.createElement('img')
        img.src = restaurant.image
        img.className = 'restaurant-avatar'
        // console.log("img")
        restaurantCard.append(h2,img)
  restaurantCollection.append(restaurantCard)
    })

}