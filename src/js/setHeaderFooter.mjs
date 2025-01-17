import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
} 

  function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
  }