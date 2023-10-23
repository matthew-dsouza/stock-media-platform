/**
 * @copyright matthewdsouza 2023
 * @author matthew <matthewdsouza.one@outlook.com>
 */

"use strict";

/**
 * IMPORTS
 */
import { ripple } from "./utils/ripple.js";

/**
 * CREATE PHOTO CARD
 */
export const photoCard = (photo) => {
  const /** STRING */ root = window.location.origin;
  console.log(photo);

  const {
    alt,
    avg_color: backdropColor,
    width,
    height,
    id,
    src: { large },
  } = photo;

  const /** NodeElement */ $card = document.createElement("div");
  $card.classList.add("card", "grid-item");
  $card.style.backgroundColor = backdropColor;

  $card.innerHTML = `
    <figure class="card-banner" style="--width: ${width}; --height: ${height};">
        <img src="${large}" width="${width}" height="${height}" loading="lazy" alt="${alt}"
        class="img-cover">
    </figure>

    <div class="card-content">

        <button class="icon-btn small" aria-labelledby="Add to favorite" data-ripple data-toggle-btn>
        <span class="material-symbols-outlined leading-icon" aria-hidden="true">favorite</span>

        <div class="state-layer"></div>
        </button>

    </div>

    <a href="${root}/pages/photos/photo_detail.js.html?id=${id}" class="state-layer"></a>
  `;

  const /** NodeElement */ $cardBanner = $card.querySelector("img");
  $cardBanner.style.opacity = 0;

  $cardBanner.addEventListener("load", function () {
    this.animate(
      {
        opacity: 1,
      },
      { duration: 400, fill: "forwards" }
    );
  });

  const /** NodeList */ $rippleElems = [
      $card,
      $card.querySelector("[data-ripple]"),
    ];

  $rippleElems.forEach(($rippleElem) => ripple($rippleElem));

  return $card;
};
