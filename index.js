const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const searchButton = document.getElementById('submit')
const input = document.getElementById('search-input')
const list = document.querySelector("#list")

searchButton.addEventListener('click', handleSubmit)

function handleSubmit(event){
    const searchTerm = input.value
    // grab search team value 
    // make call to the api
    makeCallToApi(searchTerm)
}

function makeCallToApi(search){
    // make a fetch request 
    console.log(baseUrl + search)
    fetch(baseUrl + search)
      .then(resp => resp.json())
    //   .then(addMealsToDOM)  // the argument will be data 
      .then(data => {
          console.log("hi")  // will print second 
          addMealsToDOM(data)
      })
      .catch(error => console.log(error))
    
    console.log("bye") // will print first
}

function addMealsToDOM(data){
    const mealArray = data["meals"]


    //turned the meal data into li elements
   const liElements = mealArray.map((m)=> {
        let li = document.createElement('li')
        li.innerText = m["strMeal"]
        li.id = m["idMeal"]
        console.log(li)
        return li 
    })

    // append --> createElement('li') for each item in our array 
    list.innerHTML = ""
    liElements.forEach(element => {
        list.append(element)
    });
 
    // grab the area we want to add things to
   // iterate and add meals to DOM
}

