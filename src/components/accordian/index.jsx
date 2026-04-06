//Single selection accordian component

import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelection = (getCurrId) => {
    setSelected(selected == getCurrId ? null : getCurrId);
  };

  const handleMultiSelection = (getCurrId) => {
    const copyMultiSelected = [...multiSelected];
    const findIndexOfCurrentId = copyMultiSelected.indexOf(getCurrId);
    if (findIndexOfCurrentId === -1) {
      copyMultiSelected.push(getCurrId);
    } else {
      copyMultiSelected.splice(findIndexOfCurrentId, 1);
    }
    setMultiSelected(copyMultiSelected);
  };

  console.log(selected, multiSelected);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  className="title"
                  onClick={
                    enableMultiSelect
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                <div>
                  {enableMultiSelect
                    ? multiSelected.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.answer}</div>
                      )
                    : selected === dataItem.id && (
                        <div className="content">{dataItem.answer}</div>
                      )}
                </div>
              </div>
            ))
          : "No data found"}
      </div>
    </div>
  );
};

export default Accordian;
