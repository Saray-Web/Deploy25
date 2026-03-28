let demo = document.getElementById("demo");
let url = 'https://fakestoreapi.com/products'
axios.get(url)
.then(res => {
    let products = res.data;
    let cards = "";

    products.forEach(p => {
        cards += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">
                <img src="${p.image}" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body text-center">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-text">Price: $${p.price}</p>
                    <p class="card-text">Qty: ${p.description}</p>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
        `;
    });

    demo.innerHTML = cards;
})
.catch(err => console.log(err));