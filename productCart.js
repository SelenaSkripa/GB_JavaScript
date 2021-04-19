//Создаем блок для каталога
var catalog = document.getElementById('catalog');
catalog.className = 'catalog';

//Заголовок каталога
var catalogName = document.createElement('h3');
catalogName.className = 'catalog-name';
catalog.append(catalogName);
catalogName.append('Каталог товаров');

//Товары
var goods = {
    "prod1": {
        prodName: "Босоножки женские",
        prodImg: "https://cdn3.iconfinder.com/data/icons/shoes-color/200/21-128.png",
        prodCategory: 'Босоножки',
        color: 'Красный',
        size: '39',
        price: 2800.00,
        manufacturer: 'Laura Potti'
    },
    "prod2": {
        prodName: "Босоножки женские",
        prodImg: 'https://cdn3.iconfinder.com/data/icons/shoes-color/200/21-128.png',
        prodCategory: 'Босоножки',
        color: 'Белый',
        size: '38',
        price: 2800.00,
        manufacturer: 'Laura'
    },
    "prod3": {
        prodName: "Босоножки женские",
        prodImg: 'https://cdn3.iconfinder.com/data/icons/shoes-color/200/21-128.png',
        prodCategory: 'Босоножки',
        color: 'Зеленый',
        size: '37',
        price: 2800.00,
        manufacturer: 'Potti'
    },
    "prod33": {
        prodName: "Босоножки женские",
        prodImg: 'https://cdn3.iconfinder.com/data/icons/shoes-color/200/21-128.png',
        prodCategory: 'Босоножки',
        color: 'Черный',
        size: '36',
        price: 2800.00,
        manufacturer: 'Potti Potti'
    },
    "prod4": {
        prodName: "Туфли женские",
        prodImg: 'https://cdn1.iconfinder.com/data/icons/fashion-beauty-vol-2/512/high_heels_high_heel_shoes-128.png',
        prodCategory: 'Туфли',
        color: 'Красный',
        size: '39',
        price: 2200.00,
        manufacturer: 'Laura Potti'
    },
    "prod5": {
        prodName: "Туфли женские",
        prodImg: 'https://cdn1.iconfinder.com/data/icons/fashion-beauty-vol-2/512/high_heels_high_heel_shoes-128.png',
        prodCategory: 'Туфли',
        color: 'Белый',
        size: '38',
        price: 2200.00,
        manufacturer: 'Potti'
    },
    "prod6": {
        prodName: "Туфли женские",
        prodImg: 'https://cdn1.iconfinder.com/data/icons/fashion-beauty-vol-2/512/high_heels_high_heel_shoes-128.png',
        prodCategory: 'Туфли',
        color: 'Зеленый',
        size: '37',
        price: 2200.00,
        manufacturer: 'Laura'
    },
    "prod66": {
        prodName: "Туфли женские",
        prodImg: 'https://cdn1.iconfinder.com/data/icons/fashion-beauty-vol-2/512/high_heels_high_heel_shoes-128.png',
        prodCategory: 'Туфли',
        color: 'Черный',
        size: '36',
        price: 2200.00,
        manufacturer: 'Laura Laura'
    },
    "prod7": {
        prodName: "Сапоги женские",
        prodImg: 'https://cdn0.iconfinder.com/data/icons/clothing-27/500/SingleCartoonClothesTwoYulia_3-256.png',
        prodCategory: 'Сапоги',
        color: 'Красный',
        size: '39',
        price: 5000.00,
        manufacturer: 'Laura Potti'
    },
    "prod8": {
        prodName: "Сапоги женские",
        prodImg: 'https://cdn0.iconfinder.com/data/icons/clothing-27/500/SingleCartoonClothesTwoYulia_3-256.png',
        prodCategory: 'Сапоги',
        color: 'Белый',
        size: '38',
        price: 5000.00,
        manufacturer: 'Potti'
    },
    "prod9": {
        prodName: "Сапоги женские",
        prodImg: 'https://cdn0.iconfinder.com/data/icons/clothing-27/500/SingleCartoonClothesTwoYulia_3-256.png',
        prodCategory: 'Сапоги',
        color: 'Зеленый',
        size: '37',
        price: 5000.00,
        manufacturer: 'Laura'
    },
    "prod99": {
        prodName: "Сапоги женские",
        prodImg: 'https://cdn0.iconfinder.com/data/icons/clothing-27/500/SingleCartoonClothesTwoYulia_3-256.png',
        prodCategory: 'Сапоги',
        color: 'Черный',
        size: '36',
        price: 5000.00,
        manufacturer: 'Laura Laura'
    }
};

//Блок для карточек товаров
var catalogBlock = document.createElement('div');
catalogBlock.className = 'catalog-block';
catalog.append(catalogBlock);

//Карточки
var catalogItem = document.createElement('div');
catalogItem.className = 'catalog-item';
catalogBlock.append(catalogItem);
catalogItem = '';

for (var prod in goods) {
    catalogItem += '<div class="catalog-item-prod">';
    catalogItem += '<h4> ' + goods[prod].prodName + '</h4>' + '<br>';
    catalogItem += '<img src="' + goods[prod].prodImg + '">' + '<br>';
    catalogItem += '<b>Размер:</b> ' + goods[prod].size + '<br>';
    catalogItem += '<b>Цвет: </b>' + goods[prod].color + '<br>';
    catalogItem += '<b>Цена: </b>' + goods[prod].price + ' рублей.' + '<br>';
    catalogItem += '<button class="add-cart" data-art="' + prod + '">Купить</button>';
    catalogItem += '</div>';
}
document.querySelector('.catalog-item').innerHTML = catalogItem;

document.onclick = event => {
    if (event.target.classList.contains('add-cart')) {
        console.log(event.target.dataset.art);
    }
}

//Блок для корзины
var cart = document.getElementById('cart');
cart.className = 'cart';

//Создаем ее заголовок
var cartName = document.createElement('h3');
cartName.className = 'cart-name';
cart.appendChild(cartName);
cartName.append('Корзина покупок');

//Товары в корзине
var cartItem = document.createElement('div');
cartItem.className = 'cart-item';
cart.appendChild(cartItem);
cartItem = {};

//Сообщение в корзине
var cartMessege = document.createElement('p');
cartMessege.className = 'cart-messege';
cart.append(cartMessege);

//Сумма заказа
var cartTotalSumm = function () {
    var result = 0;
    for (var prod in cartItem) {
        result += cartItem[prod].price * cartItem[prod].amount;
        if (result == 0) {
            cartMessege.innerHTML = ('Ваша корзина пуста.');
        } else {
            cartMessege.innerHTML = '<p>Сумма вашего заказа: ' + result + '</p>';
        }
    }
    return result;
}
console.log(cartTotalSumm());