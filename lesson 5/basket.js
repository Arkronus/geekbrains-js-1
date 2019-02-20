let basket = {
    goodList: [],

    putToBasket(good){
        this.goodList.push(good);
    },
    
    countTotalPrice(){
        let totalPrice = 0;
        this.goodList.forEach( function(element, index) {
            totalPrice += element.price * element.quantity;
        });
        return totalPrice;

    },

    countTotalNumber(){
        let totalNumber = 0;
        this.goodList.forEach(function(element, index) {
            totalNumber += element.quantity;
        });
        return totalNumber;
    }
}


let placeToCartButton = document.getElementById('placeToCart')
placeToCartButton.addEventListener('click', function(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let quantity
     = parseInt(document.getElementById('quantity').value);
    let price = parseFloat(document.getElementById('price').value);
    let good_item = {
        name: name,
        quantity: quantity,
        price: price
    }
    basket.putToBasket(good_item);
    console.log(basket);

    let totals = document.getElementById('totals');
    totals.innerText = "В корзине " + basket.countTotalNumber() + " товаров на общую сумму " + basket.countTotalPrice() + " рублей."

    // обновляем таблицу
    let goodsBlock = document.getElementById('goodsList');
    let table = document.getElementById('table');
    let newTable = buildTable(basket);
    goodsBlock.removeChild(table);
    goodsBlock.appendChild(newTable);
})

function htmlToElement(html) {
    // сравнительно честно заимствованный из Stackoverflow кусок кода
    var template = document.createElement('template');
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
}

function buildTable(basket){
    let table = document.createElement('table');
    table.className = 'table';
    table.id = 'table';
    let header = htmlToElement('<tr><th>Название</th><th>Количество</th><th>Цена за единицу</th><th>Итого по строке</th></tr>');
    table.appendChild(header);
    basket.goodList.forEach(function(good){
        let row_string = '<tr><td>' + good['name'] + '</td>' + 
        '<td>' + good['quantity'] + '</td>' +
        '<td>' + good['price'] + '</td>' +
        '<td>' + good['quantity'] * good['price'] + '</td></tr>'
        table.appendChild(htmlToElement(row_string));
    })
    return table;
}