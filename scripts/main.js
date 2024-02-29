//Intro to using  fetch

fetch('https://randomfox.ca/floof')
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src = convertedData.image
        }
)

//The same process used to get a cat image
// fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
//     .then(response => response.json())
//     .then(data => {
//         const catImgElement = document.querySelector("#cat")
//         catImgElement.src = data[0]
//     })


//Intro to using await -- to fetch a cat image from the same API
//const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
//const convertedData = await response.json()

//const catImgElement = document.querySelector("#cat")
//catImgElement.src = convertedData[0]

//When calling async fetch with a function, 'async' must be used in function

const getCatImg = async () => {
     const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
     const convertedData = await response.json()

     const catImgElement = document.querySelector("#cat")
         catImgElement.src = convertedData[0]
 }

getCatImg()
    

