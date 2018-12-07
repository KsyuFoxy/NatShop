const contactsStyles=`
  h2, p, a {
    color: teal;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    margin: 6px;
    text-decoration: none;
  }
  h2 {
    font-size: 34px;
    margin: 34px 0;
    text-align: center;
  }
  section {
    margin-top: 100px;
    margin: 100px 10px;
  }
  @media (min-width: 1024px) {
    max-width: 1400px;
    margin: 100px auto;
  }
  .contacts-box {
    margin: 100px 0;
    text-align: center;
  }
  .contacts-text {
    margin-bottom: 40px;
  }
  .contacts {
    display: flex;
    justify-content: space-evenly;
  }
  .phone, .email {
    display: flex;
    align-items: center;
  }
  img {
    width: 30px;
    margin-right: 10px;
  }

`;
export default contactsStyles;
