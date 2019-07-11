/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const entry = document.querySelector('.cards')

axios.get('https://api.github.com/users/rhokath')
.then(data => {
  //handle success
  console.log('response:', data)

    const element = createCard(data)
    entry.appendChild(element)
})
.catch(error => {
  //handle errors
  console.log("this isn't working", error)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard(obj){
  //create elements
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const locationInfo = document.createElement('p')
  const profileInfo = document.createElement('p')
  const address = document.createElement('a')
  const followerInfo = document.createElement('p')
  const followingInfo = document.createElement('p')
  const bio = document.createElement('p')

  // set styles
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  // set content
  img.src = obj.data.avatar_url
  name.textContent = obj.data.name
  userName.textContent = obj.data.login
  locationInfo.textContent = obj.data.location
  profileInfo.textContent = "Profile:"
  address.href = obj.data.html_url 
  followerInfo.textContent = `Followers: ${obj.data.followers}`
  followingInfo.textContent = `Following: ${obj.data.following}`
  bio.textContent = `Bio: ${obj.data.bio}`

  //put together

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(locationInfo)
  cardInfo.appendChild(profileInfo)
  profileInfo.appendChild(address)
  cardInfo.appendChild(followerInfo)
  cardInfo.appendChild(followingInfo)
  cardInfo.appendChild(bio)

return card;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
