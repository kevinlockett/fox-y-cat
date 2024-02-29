fetch('https://randomfox.ca/floof')
    .then(response => response.json())
    .then(
        (data) => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src = data.image
        }
    )