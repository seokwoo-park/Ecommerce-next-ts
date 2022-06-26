export const getAllProducts = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProducts = async (id) => {
  try {
    const data = fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json()
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
