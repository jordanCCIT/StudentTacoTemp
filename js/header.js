const createElementHeader = function (taco) {
  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `
      <h1 class="header-title">Taco Generator!</h1>
      <h3 class="header_taco-title">
        <span class="header_taco-element" id="header_title-base-layer">${taco.base_layer.name}</span> with
        <span class="header_taco-element" id="header_title-mixin">${taco.mixin.name}</span>, garnished with
        <span class="header_taco-element" id="header_title-condiment">${taco.condiment.name}</span>, topped off with
        <span class="header_taco-element" id="header_title-seasoning">${taco.seasoning.name}</span>and wrapped in delicious
        <span class="header_taco-element" id="header_title-shell">${taco.shell.name}</span>
      </h3>
      <button class="button">Generate New Taco</button>`;
  return header;
};

export { createElementHeader };
