const items = [
  {
    id: 1,
    img: 'assets/image1.jpg',
    title: 'Рождественский снеговички',
    description: 'Три снеговичка в наборе',
    price: '120,00'
  },
  {
    id: 22,
    img: 'assets/image2.jpg',
    title: 'Игрушки на елку "Парочка"',
    description: 'Размер 120х30х100 см',
    price: '80,00'
  },
  {
    id: 33,
    img: 'assets/image3.jpeg',
    title: 'Игрушка на елку "Домовенок"',
    description: 'Домовенок для охраны и уюта',
    price: '100,00'
  },
  {
    id: 44,
    img: 'assets/image4.jpg',
    title: 'Рождественские звезвы',
    description: 'Размер 20х30х100 см',
    price: '10,00'
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
    button.textContent = 'Заказать';
    itemContent.appendChild(button);
  })
}
addItem();

const products = document.querySelectorAll('.item')
products.forEach(product => {
  const buyButton = product.getElementsByClassName('button')[0];

  buyButton.addEventListener('click', function() {
    orderedId = this.parentNode.id;
    console.log('orderedId', orderedId)
  })
})
