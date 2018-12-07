const cartStyles=`
p, .cart-table {
  color: teal;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  margin: 6px;
  text-decoration: none;
}
.button {

  padding: 10px;
  margin: 20px 0 10px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #4eada9;
  color: white;
  font-size: 16px;
}
.button:hover {
  border-color: #4eada9;
  cursor: pointer;
  color: teal;
  background-color: white;
}
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
}
.modal-content {
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 1px solid #4eada9;
    border-radius: 10px;
    width: 80%;
}
.close {
    color: #4eada9;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: teal;
    text-decoration: none;
    cursor: pointer;
}
.cart-table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
table, th, td {
  border: 1px solid #4eada9;
  height: 20px;
}
.table-header {
  text-align: center;
  font-size: 22px;
  font-weight: 900;
}

`;
export default cartStyles;
