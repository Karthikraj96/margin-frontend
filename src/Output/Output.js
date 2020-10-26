import React from "react";
import "../Input/Style.css";

let OutputItem = (props) => {
  let { profit, gross, salePrice } = props;
  return (
    <div class="page-width">
      <section class="section section--tight">
        <div class="calculator-result js-calculator-result">
          <h2 class="calculator-result__header">
            Profit margin calculator results
          </h2>
          <div class="grid-container grid-container--thirds">
            <div class="grid-item grid-item--flush-third calculator-result__block">
              <h3 class="heading--4">Your sale price</h3>
              <p class="heading--2 calculator-result__value">{salePrice}</p>
            </div>
            <div class="grid-item grid-item--flush-third calculator-result__block">
              <h3 class="heading--4">Your profit</h3>
              <p class="heading--2 calculator-result__value">{profit}</p>
            </div>
            <div class="grid-item grid-item--flush-third calculator-result__block">
              <h3 class="heading--4">Gross margin</h3>
              <p class="heading--2 calculator-result__value"> {gross}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutputItem;
