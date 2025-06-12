import React from "react";

function Input({
  type = "text",
  placeholder = "Enter text...",
  required = false,
  value,
  onChange,
  onClick,
  
}) {
  const style = {
    width: "200px",
    padding: "9px",
    // border: "1px solid #ccc",
    border: "1px solid #aaa",
    borderRadius: "5px",
    outline: "none",
    fontSize: "16px",
    background: "white",
  };
  // const style = {
  //   width: "199px",
  //   padding: "12px",
  //   border: "1px solid #aaa",
  //   borderRadius: "5px",
  //   outline: "none",
  //   fontSize: "16px",
  //   background: "white",
  // };

  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      style={style}
      onClick={onClick}
       
    />
  );
}

export default Input;




function OptionInput({ options = [] , required=false}) {
    const style = {
        width: "200px",
        padding: "8px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        background: "white",
        color: "#333",
        cursor: "pointer",
      };
    return (
      <select style={style}  required={required} >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
       
      </select>
    );
  }




export {Input , OptionInput};


const buttonStyles = {
  order: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  view: {
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  delete: {
    backgroundColor: '#F44336',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const CustomButton = ({ type, onClick, children }) => {
  const style = buttonStyles[type] || buttonStyles.order;
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export {CustomButton} ;
