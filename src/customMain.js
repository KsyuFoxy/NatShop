const items = [
  {
    id: 1,
    img: 'assets/Xmas_2_candles_1.jpg',
    title: 'Рождественские свечи "Duo"',
    description: 'Две свечи в комплекте',
    price: '100,00'
  },
  {
    id: 22,
    img: 'assets/Xmas_3_candles_1.jpg',
    title: 'Рождественские свечи "Trio spruce forest"',
    description: 'Три свечи в комплекте',
    price: '150,00'
  },
  {
    id: 33,
    img: 'assets/Xmas_3_candles_2.jpg',
    title: 'Рождественские свечи "Trio shell"',
    description: 'Три свечи в комплекте',
    price: '150,00'
  },
  {
    id: 44,
    img: 'assets/Xmas_3_candles_3.jpg',
    title: 'Рождественские свечи "Trio fir-tree"',
    description: 'Три свечи в комплекте',
    price: '150,00'
  },
]

function addItem() {
  items.forEach(item => {
    const itemBox = document.createElement('div');
    itemBox.setAttribute('class', 'item');
    document.getElementById('itemsBox').appendChild(itemBox);

    const image = document.createElement('img');
    image.setAttribute('class', 'image');
    image.src = item.img;
    itemBox.appendChild(image);

    const itemContent = document.createElement('div');
    itemContent.setAttribute('class', 'item-content');
    itemContent.setAttribute('id', item.id);
    itemBox.appendChild(itemContent);

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.textContent = item.title;
    itemContent.appendChild(title);

    const description = document.createElement('p');
    description.setAttribute('class', 'description');
    description.textContent = item.description;
    itemContent.appendChild(description);

    const price = document.createElement('p');
    price.setAttribute('class', 'price');
    price.textContent = item.price + ' грн';
    itemContent.appendChild(price);

    const button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.textContent = 'В корзину';
    itemContent.appendChild(button);
  })
}
addItem();

let orderedItems = [];
const products = document.querySelectorAll('.item')
products.forEach(product => {
  const buyButton = product.getElementsByClassName('button')[0];

  buyButton.addEventListener('click', function() {
    const orderedId = this.parentNode.id;
    const orderedItem = items.find((item) => item.id == orderedId );
    buyButton.classList.toggle('in-cart');

    if (buyButton.classList.contains('in-cart')) {
      buyButton.innerHTML = 'Удалить из корзины';
      orderedItems.push(orderedItem);
      removeTable('cartTable');
      createTable();
    }  else {
      buyButton.innerHTML = 'В корзину';
      console.log('buyButton', buyButton);
    }

  })
})

const buyButton = document.getElementById('buyButton');
buyButton.style.display = 'none';
const header = document.getElementById('cartHeader');

// create Table for cart
function createTable() {
  let rowIds = [];

  if(!orderedItems.length) {
    header.innerHTML = "Ваша корзина пуста";
    buyButton.style.display = 'none';
    return;
  } else {
  header.innerHTML = "В вашей корзине:";
  buyButton.style.display = "block";
  const cart = document.getElementById('cartContent');
  const table = document.createElement('table');
  table.setAttribute('id', 'cartTable');
  table.setAttribute('class', 'cart-table');
  const tbody = document.createElement('tbody');

  for (let i = 0; i < orderedItems.length; i++) {

    const tr = document.createElement('tr');
    tr.id = 'row' + orderedItems[i].id;
    tr.insertCell(0).innerHTML = orderedItems[i].title;
    //input quantity cell
    const quantityCell = document.createElement("input");
    tr.insertCell(1).appendChild(quantityCell);

    tr.insertCell(2).innerHTML = orderedItems[i].price;
    const removeItemCell = tr.insertCell(3);
    removeItemCell.innerHTML = 'x';
    removeItemCell.classList.add("remove");

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  cart.appendChild(table);

  rowIds = table.querySelectorAll('tr');

  addTableHeader(table);
  }

  removeCartItem(rowIds)
}

function addTableHeader(table) {
  const tableHeader = table.insertRow(0);
  tableHeader.setAttribute('class', 'table-header');
  tableHeader.insertCell(0).innerHTML = "Наименование";
  tableHeader.insertCell(1).innerHTML = "К-во";
  tableHeader.insertCell(2).innerHTML = "Стоимость";
  tableHeader.insertCell(3).innerHTML = 'Удалить';
}

// Modal
const modal = document.getElementById('cartModal');
const cartButton = document.getElementById("cartButton");
const close = document.getElementsByClassName("close")[0];

cartButton.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}

function removeTable(id) {
    const tbl = document.getElementById(id);
    if (tbl) tbl.parentNode.removeChild(tbl);
    header.innerHTML = "Ваша корзина пуста";
    buyButton.style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//remove items from modal on click;
function removeCartItem(rowIds) {

  rowIds.forEach(row => {
    const removeItem = row.querySelector(".remove");
    removeItem.addEventListener('click', function(e) {
      const tableRow = e.target.parentNode;
      tableRow.parentNode.removeChild(tableRow);
      const table = document.getElementById('cartTable');

      //remove table if there is any items;
      if (table.querySelectorAll('tr').length == 1) {
        removeTable('cartTable');
      }
    })
  })
}

//make an order
buyButton.addEventListener('click', function() {
  sendMail();
})

function sendMail() {
  let order = [];
  const emailItems = orderedItems.forEach(item => {
    orderRow = 'id: ' + item.id + '; Q-ty: 1' + '; price: ' + item.price + '; //';
    order.push(orderRow);
  })
  var email = "mailto:NatShop@ukr.net"
         + "?subject=" + escape("NatShop order")
         + "&body=" + escape(order);

  window.location.href = email;
  modal.style.display = "none";
}
