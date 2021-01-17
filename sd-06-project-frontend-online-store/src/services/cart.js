function saveLocalStorage(productArray) {
  localStorage.setItem('products', JSON.stringify(productArray));
}

function loadLocalStorage() {
  return JSON.parse(localStorage.getItem('products') || '[]');
}

export default {
  createStorage: () => {
    const arrayProducts = loadLocalStorage();
    if (arrayProducts.length < 1) saveLocalStorage([]);
  },

  getItemsFromLocalStorage: () => loadLocalStorage(),

  addItem: (product) => {
    const products = loadLocalStorage();
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      amount: 1,
    };
    let uniqueProduct = false;
    products.forEach((element) => {
      if (item.id === element.id) {
        element.amount += 1;
        uniqueProduct = true;
      }
    });

    if (!uniqueProduct) products.push(item);
    saveLocalStorage(products);
  },

  removeItem: (id, quantity = 1) => {
    const arrayProducts = loadLocalStorage();
    arrayProducts
      .forEach((element) => {
        if (element.id === id && element.amount >= 1) {
          element.amount -= quantity;
        }
      });
    saveLocalStorage(arrayProducts);
  },

  deleteItem: (id) => {
    const arrayProducts = loadLocalStorage();
    const newArrayProducts = arrayProducts.filter(({ id: itemId }) => (itemId !== id));
    saveLocalStorage(newArrayProducts);
  },

  removeAll: () => {
    saveLocalStorage([]);
  },
};
