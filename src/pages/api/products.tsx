export const getAllProducts = async () => {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return data;
};
