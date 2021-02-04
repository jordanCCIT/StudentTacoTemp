import { createElementHeader } from "./header.js";

const updatingTacoHtml = function (tacoJson) {
  console.log(tacoJson);
  console.log(
    `The title of the main ingredient is ${tacoJson.base_layer.name}`
  );

  const container = document.querySelector(".container");
  const header = createElementHeader(tacoJson);
  container.prepend(header);
  const tacoBaseLayerTitle = document.querySelector(".taco-base-layer_title");
  tacoBaseLayerTitle.innerText = tacoJson.base_layer.name;
  const tacoBaseLayerRecipe = document.querySelector(".taco-base-layer_recipe");
  tacoBaseLayerRecipe.innerText = tacoJson.base_layer.recipe;
  const tacoMixinTitle = document.querySelector(".taco-mixin_title");
  tacoMixinTitle.innerText = tacoJson.mixin.name;
  const tacoMixinRecipe = document.querySelector(".taco-mixin_recipe");
  tacoMixinRecipe.innerText = tacoJson.mixin.recipe;
  const tacoCondTitle = document.querySelector(".taco-condiment_title");
  tacoCondTitle.innerText = tacoJson.condiment.name;
  const tacoCondRecipe = document.querySelector(".taco-condiment_recipe");
  tacoCondRecipe.innerText = tacoJson.condiment.recipe;
  const tacoSeasonTitle = document.querySelector(".taco-seasoning_title");
  tacoSeasonTitle.innerText = tacoJson.seasoning.name;
  const tacoSeasonRecipe = document.querySelector(".taco-seasoning_recipe");
  tacoSeasonRecipe.innerText = tacoJson.seasoning.recipe;
  const tacoShellTitle = document.querySelector(".taco-shell_title");
  tacoShellTitle.innerText = tacoJson.shell.name;
  const tacoShellRecipe = document.querySelector(".taco-shell_recipe");
  tacoShellRecipe.innerText = tacoJson.shell.recipe;
};

export { updatingTacoHtml };
