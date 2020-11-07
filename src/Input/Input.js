/* eslint-disable no-restricted-globals */
import React from "react";
import "./Style.css";

let InputItem = (props) => {
  let {
    cost,
    mark,
    markChange,
    costChange,
    handleOnSubmit,
    handleClick,
  } = props;

  return (
    <div>
      <div class="grid-container">
        <div class="grid-item grid-6 grid-push-1">
          <div class="calculator-form">
            <form
              class="js-form-validate js-calculator-form"
              onSubmit={handleOnSubmit}
            >
              <input name="utf8" type="hidden" value="✓" />
              <div class="grid-container grid-container--halves">
                <label class="marketing-input-wrapper grid-item grid-item--fluid__half">
                  <span class="marketing-label marketing-label--in-field marketing-label--floating">
                    Cost of item ($)
                    </span>
                  <input
                    placeholder="Cost of item ($)"
                    onChange={costChange}
                    value={cost}
                    required="required"
                    class="marketing-input marketing-input--floating"
                    type="text"
                    name="profit_margin_calculator[cost]"
                    id="profit_margin_calculator_cost"
                  
                  />
                  <span class="marketing-form__messages" ></span>
                  <span class="marketing-form__messages">
                    <span class="suggest">
                      Cost of item you are going to resell
                      </span>
                  </span>
                </label>

                <label class="marketing-input-wrapper grid-item grid-item--fluid__half">
                  <span class="marketing-label marketing-label--in-field marketing-label--floating">
                    Markup (%)
                    </span>
                  <input
                    placeholder="Markup (%)"
                    required="required"
                    onChange={markChange}
                    value={mark}
                    class="marketing-input marketing-input--floating"
                    type="text"
                    name="profit_margin_calculator[markup]"
                    id="profit_margin_calculator_markup"
                  />
                  <span class="marketing-form__messages"></span>
                  <span class="marketing-form__messages">
                    <span class="suggest">
                      Markup percentage that is used to determine your selling
                      price
                      </span>
                  </span>
                </label>
              </div>
              <div class="grid-container">
                <input
                  type="submit"
                  name="commit"
                  value="Calculate profit"
                  class="marketing-button marketing-form__button marketing-button marketing-button--small calculator-form__button"
                  data-ga-label="submit"
                  data-disable-with="Calculate profit"
                />
                <button
                  name="button"
                  onClick={handleClick}
                  type="button"
                  class="calculator-form__button calculator-form__button--reset text-minor body-link"
                  data-ga-label="reset"
                >
                  Reset
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
        </div>
  );
};

export default InputItem;
