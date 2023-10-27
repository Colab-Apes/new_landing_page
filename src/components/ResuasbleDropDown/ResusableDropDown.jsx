import React, { useState } from "react";
import "./reusable_dropdown.css";
import arrowDown from "../../assets/icons/arrow-down.svg";

const ReusableDropdown = ({ options, onSelect, defaultText }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div
        className={`selected-option focus:outline-none  bg-[#fff]/[20%] py-4 px-5 border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5] flex justify-between ${selectedOption.label ? "text-[#333]" : "text-[#999]" }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption.label || defaultText}
        <img src={arrowDown} alt="" />
      </div>
      <ul
        className={`options-list bg-[#fff]/[100%] py-[16px] px-6 rounded-[10px] text-[16px] text-[#333] font-bold gap-[16px] mb-[40px] ${
          isOpen ? "open" : "hidden"
        }`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className="option p-3 rounded-[8px] hover:bg-[#E8F5EA]"
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReusableDropdown;
