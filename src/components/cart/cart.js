import cartTemplate from './template';
import cartStyles from './styles';

class CartComponent extends HTMLElement {
  constructor() {
      super();
      const shadowRoot= this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
      <style>
        ${cartStyles}
      </style>
      ${cartTemplate}
      `;

      // Modal
      this.modal = this.shadowRoot.querySelector('#cartModal');
      this.cartButton = this.shadowRoot.getElementById("cartButton");
      this.close = this.shadowRoot.querySelector(".close");

      this.cartButton.addEventListener("click", this.openModal.bind(this));
      this.close.addEventListener("click", this.closeModal.bind(this));

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = (event) => {
        // console.log('hi', event.target)
          if (event.target == this.modal) {
              this.modal.style.display = "none";
          }
      }

  }
  openModal() {
    this.createTable();
    this.modal.style.display = "block";
  }
  closeModal() {
    this.removeTable('cartTable');
    this.modal.style.display = "none";
  }
  removeTable(id) {
      const tbl = document.getElementById(id);
      if (tbl) tbl.parentNode.removeChild(tbl);
  }


  // create Table for cart
  createTable() {
    const cart = document.getElementById('cartContent');
    const table = document.createElement('table');
    table.setAttribute('id', 'cartTable');
    table.setAttribute('class', 'cart-table');
    const tbody = document.createElement('tbody');

    for (let i = 0; i < orderedItems.length; i++) {

      const tr = document.createElement('tr');
      const td = document.createElement('td');
      tr.insertCell(0).innerHTML = orderedItems[i].title;
      tr.insertCell(1).innerHTML = 1;
      tr.insertCell(2).innerHTML = orderedItems[i].price;
      tr.insertCell(3).innerHTML = 'x';

      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    cart.appendChild(table);

    addTableHeader(table);
  }

  addTableHeader(table) {
    const tableHeader = table.insertRow(0);
    tableHeader.setAttribute('class', 'table-header');
    tableHeader.insertCell(0).innerHTML = "Наименование";
    tableHeader.insertCell(1).innerHTML = "К-во";
    tableHeader.insertCell(2).innerHTML = "Стоимость";
    tableHeader.insertCell(3).innerHTML = 'Удалить';
  }

}

customElements.define("cart-component", CartComponent);
export default CartComponent;
