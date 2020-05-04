import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, source }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.calories}>Total Calories : {calories}</p>
      <a href={source} target="_blank" className={style.source}>
        Click For Source
      </a>
    </div>
  );
};

export default Recipe;
