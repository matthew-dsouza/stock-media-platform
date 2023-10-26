/**
 * @copyright matthewdsouza 2023
 * @author matthew <matthewdsouza.one@outlook.com>
 */

"use strict";

// IMPORTS
import { menu } from "./menu.js";

// Add filter functionality
// param $filterWrapper Filter Wrapper
// param Object {filterObj} Filter object
// param Function callback Callback function
export const filter = ($filterWrapper, filterObj, callback) => {
  const $filterClearBtn = $filterWrapper.querySelector("[data-filter-clear]");
  const $filterValue = $filterWrapper.querySelector("[data-filter-value]");
  const $filterChip = $filterWrapper.querySelector("[data-filter-chip]");
  const $filterColorField = $filterWrapper.querySelector("[data-color-field]");
  const filterKey = $filterWrapper.dataset.filter;
  const newObj = filterObj;

  menu($filterWrapper, (filterValue) => {
    $filterValue.innerText = filterValue;
    $filterChip.classList.add("selected");

    newObj[filterKey] = filterValue;
    callback(newObj);
  });

  $filterClearBtn.addEventListener("click", () => {
    $filterChip.classList.remove("selected");
    $filterValue.innerText = $filterValue.dataset.filterValue;

    delete newObj[filterKey];
    callback(newObj);
  });

  $filterColorField?.addEventListener("change", function () {
    const filterValue = this.value.toLowerCase();

    $filterValue.innerText = filterValue;
    $filterChip.classList.add("selected");

    newObj[filterKey] = filterValue;
    callback(newObj);
  });
};
