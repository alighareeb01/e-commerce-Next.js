export const fetchAllProducts = async () => {
  let x = [
    {
      title: "one",
      name: "asd",
    },
    {
      title: "one",
      name: "asd",
    },
    {
      title: "one",
      name: "asd",
    },
  ];
  try {
    const data = await fetch(
      "https://nti-ecommerce.vercel.app/api/v1/products",
    );
    const res = await data.json();

    return res.Products || x;
  } catch (err) {
    console.log(err);
    return [];
  }
};
