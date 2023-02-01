import "../styles/style.css";
import { Movies } from "./Movies";
import { DOM } from "./DOM";

DOM.Horror.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes("horror")).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      `<div class="cool">
      <p>${Movies.name}</p>
      <p>${Movies.tomatoes} Rotten Tomatoes</p>
      <img class="image" src="${Movies.img}">
      </div>`
    )
  );
});

DOM.Comedy.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes("comedy")).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      `<div class="cool">
      <p>${Movies.name}</p>
      <p>${Movies.tomatoes} Rotten Tomatoes</p>
      <img class="image" src="${Movies.img}">
      </div>`
    )
  );
});

DOM.Action.addEventListener("click", function () {
  DOM.Display.innerHTML = "";
  Movies.filter((Movies) => Movies.genre.includes("action")).forEach((Movies) =>
    DOM.Display.insertAdjacentHTML(
      "beforeend",
      `<div class="cool">
      <p>${Movies.name}</p>
      <p>${Movies.tomatoes} Rotten Tomatoes</p>
      <img class="image" src="${Movies.img}">
      </div>`
    )
  );
});
DOM.Theme.addEventListener("click", function () {
  if (document.DOM.Cool.classList.contains("cool")) {
    document.DOM.Cool.classList.add("warm");
    document.DOM.Cool.classList.remove("cool");
  } else {
    document.DOM.Cool.classList.add("cool");
    document.DOM.Cool.classList.remove("warm");
  }
});
