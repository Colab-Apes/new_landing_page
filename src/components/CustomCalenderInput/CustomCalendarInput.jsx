import React from 'react';

import calendarIcon from "../../assets/icons/calendar-icon.svg"

export default function CustomCalendarInput({ value, onClick }) {
    return (
      <div className="focus:outline-none text-[#999] bg-[#fff]/[20%] py-4 px-5 border-2 w-full rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]">
        <input
          type="text"
          className="border-none focus:outline-none w-full relative"
          value={value}
          onClick={onClick}
          readOnly
        //   width={150}
        />
        <div className='absolute right-5 top-4 z-0'>
        <img src={calendarIcon} />
        </div>
      </div>
    );
  }