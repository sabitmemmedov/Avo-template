let list = document.getElementById("list")
let limit = 4
let page = 1
let db

//////////////////////////////////// get data
function getProducts() {
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/products?limit=${limit}&page=${page}`)
        .then(res => {
            db = res.data
            db.forEach(element => {
                let cardBox = document.createElement("div")
                cardBox.className = "cart"
                cardBox.innerHTML = `
            
            <img src=${element.avatar} alt="">
            <h5>${element.name}</h5>
            <p>$${element.price}</p>
            <button onclick="ad(${element.id})">Ad Basket</button>
            
            
            `
                list.appendChild(cardBox)
            });
            page++
        })
}

//laodMore
document.getElementById("loadMore").addEventListener("click", getProducts)


window.onload = () => {
    getProducts()
}


////////////////////////////////////////////////////////////// search by name

let inp = document.getElementById("inp")
function getByName() {
    list.innerHTML = ''

    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/products?name=${inp.value}`)
        .then(res => {
            db = res.data
            db.forEach(element => {
                let cardBox = document.createElement("div")
                cardBox.className = "cart"
                cardBox.innerHTML = `
            
            <img src=${element.avatar} alt="">
            <h5>${element.name}</h5>
            <p>$${element.price}</p>
            <button onclick="ad(${element.id})">Ad Basket</button>
            
            
            `
                list.appendChild(cardBox)
            });
        })
}

document.getElementById("axtar").addEventListener("click", getByName)


//////////Sort by name


function getSort() {
    list.innerHTML = ''

    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/products`)
        .then(res => {
            db = res.data
            let sorted = db.sort((a, b) => a.name.localeCompare(b.name))
            sorted.forEach(element => {
                let cardBox = document.createElement("div")
                cardBox.className = "cart"
                cardBox.innerHTML = `
            
            <img src=${element.avatar} alt="">
            <h5>${element.name}</h5>
            <p>$${element.price}</p>
            <button onclick="ad(${element.id})">Ad Basket</button>
            
            
            `
                list.appendChild(cardBox)
            });
        })
}

document.getElementById("sorted").addEventListener("click", getSort)



////////////////    ad Basketttt

 async function ad(id) {
    let data = []
    data.push(db.find(element => element.id == id))
    await axios.post(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/`,data)

}





















































































// const list = document.getElementById("list");
// const inp = document.getElementById("inp");
// let page = 1;
// const limit = 4;

// const getProducts = (url) => axios.get(url).then(res => res.data.forEach(createProductCard)).catch(console.error);
// const createProductCard = (element) => {
//     const cardBox = document.createElement("div");
//     cardBox.className = "cart";
//     cardBox.innerHTML = `<img src=${element.avatar} alt=""><h5>${element.name}</h5><p>$${element.price}</p><button onclick="ad(${element.id})">Ad Basket</button>`;
//     list.appendChild(cardBox);
// };

// const loadProducts = () => {
    
//     const url = `https://6569b50bde53105b0dd78115.mockapi.io/products?limit=${limit}&page=${page}`;
//     getProducts(url);
// };

// const searchByName = () => {
//     const url = `https://6569b50bde53105b0dd78115.mockapi.io/products?name=${inp.value}`;
//     list.innerHTML = '';
//     getProducts(url);
// };

// const sortByname = () => {
//     const url = `https://6569b50bde53105b0dd78115.mockapi.io/products`;
//     list.innerHTML = '';
//     axios.get(url).then(res => res.data.sort((a, b) => a.name.localeCompare(b.name)).forEach(createProductCard)).catch(console.error);
// };

// document.getElementById("loadMore").addEventListener("click", loadProducts);
// window.onload = loadProducts;
// document.getElementById("axtar").addEventListener("click", searchByName);
// document.getElementById("sorted").addEventListener("click", sortByname);
