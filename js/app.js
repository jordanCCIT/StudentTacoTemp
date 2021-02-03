import { sampleTaco } from "./sampleTaco.js";
import { createElementHeader } from "./header.js";

console.log(sampleTaco);
console.log(
  `The title of the main ingredient is ${sampleTaco.base_layer.name}`
);

const container = document.querySelector(".container");
const header = createElementHeader(sampleTaco);

container.prepend(header);

const tacoBaseLayerTitle = document.querySelector(".taco-base-layer_title");
tacoBaseLayerTitle.innerText = sampleTaco.base_layer.name;
const tacoBaseLayerRecipe = document.querySelector(".taco-base-layer_recipe");
tacoBaseLayerRecipe.innerText = sampleTaco.base_layer.recipe;

const tacoMixinTitle = document.querySelector(".taco-mixin_title");
tacoMixinTitle.innerText = sampleTaco.mixin.name;
const tacoMixinRecipe = document.querySelector(".taco-mixin_recipe");
tacoMixinRecipe.innerText = sampleTaco.mixin.recipe;

const tacoCondTitle = document.querySelector(".taco-condiment_title");
tacoCondTitle.innerText = sampleTaco.condiment.name;
const tacoCondRecipe = document.querySelector(".taco-condiment_recipe");
tacoCondRecipe.innerText = sampleTaco.condiment.recipe;

const tacoSeasonTitle = document.querySelector(".taco-seasoning_title");
tacoSeasonTitle.innerText = sampleTaco.seasoning.name;
const tacoSeasonRecipe = document.querySelector(".taco-seasoning_recipe");
tacoSeasonRecipe.innerText = sampleTaco.seasoning.recipe;

const tacoShellTitle = document.querySelector(".taco-shell_title");
tacoShellTitle.innerText = sampleTaco.shell.name;
const tacoShellRecipe = document.querySelector(".taco-shell_recipe");
tacoShellRecipe.innerText = sampleTaco.shell.recipe;