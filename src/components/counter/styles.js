export const styles=`
    .counter-content {
      display: flex;
      align-items: center;
      font-family: 'Lato', sans-serif;
      font-size: 16px;
      color: teal;
    }
    .counter-buttons {
      display: flex;
      flex-direction: column;
    }

    .button {
        margin: 2px 5px;
        background: none;
        border: 1px solid teal;
        border-radius: 10px;
        cursor: pointer;
        color: teal;
    }
    .button:hover:not(.disabled) {
      background-color: teal;
      color: white;
    }
    .button:focus {
      outline: none;
    }
    #counter-value {
        font-weight: bold;
    }

    .disabled {
      border-color: darkgray;
      color: darkgray;
      background-color: none;
    }
`;
