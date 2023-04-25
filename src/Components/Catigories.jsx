import React from "react";

function Catigories({value, onChangeCategory}) {
  const catigories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {/* <li
          onClick={() => onClickCategory(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Все
        </li> */}
        {catigories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catigories;
