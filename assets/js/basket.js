let list = document.getElementById("list")
let db

//////////////////////////////////// get data
function getProducts() {
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            db.forEach(element => {
                let cardBox = document.createElement("div")
                cardBox.className = "cart"
                cardBox.innerHTML = `
            
            <img src=${element['0'].avatar} alt="">
            <h5>${element['0'].name}</h5>
            <p>$${element['0'].price}</p>
            <button onclick="sil(${element.id})">Remove Basket</button>
            
            
            `
                list.appendChild(cardBox)
            });
        })
}

window.onload = () => {
    getProducts()
}


async function sil(id) {
    await axios.delete(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/${id}`)
    list.innerHTML = ''
    getProducts()
}

