export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromQuery(query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => data);
}

export async function saveEvaluation(productId, evaluation) {
  const value = localStorage.getItem(productId);
  let evaluations = [];
  if (value != null) {
    evaluations = JSON.parse(value);
  }
  evaluations.push(evaluation);
  localStorage.setItem(productId, JSON.stringify(evaluations));
}

export function getEvaluations(productId) {
  const value = localStorage.getItem(productId);
  let evaluations = [];
  if (value != null) {
    evaluations = JSON.parse(value);
  }
  return evaluations;
}
