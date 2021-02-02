const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php'
fetch(baseUrl + '?s=chicken')
.then(res => {
    console.log(res)
    let newRes = res.json()
    console.log(newRes)
    return newRes
}).then(data => {
    console.log(data)
})