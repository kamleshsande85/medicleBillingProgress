import React, { useState, useEffect, useRef } from "react";
import "./MyDropdown.css";

const MyDropdown = ({ label, options, onSelect , placeholder}) => {
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef();

  // 🧠 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setInput(option);
    setShowOptions(false);
    onSelect(option);
  };

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      {/* <label className="dropdown-label">{label}</label> */}
      <input
        className="dropdown-input"
        type="text"
        value={input}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowOptions(true)}
      />
      {showOptions && (
        <div className="dropdown-options">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt, i) => (
              <div
                key={i}
                className="dropdown-option"
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </div>
            ))
          ) : (
            <div className="dropdown-option disabled">No match found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyDropdown;
