export const fetchAllCategories = async () => {
  const categories = [
    { name: "one", image: "asdasd", title: "asd" },
    { name: "one", image: "asdasd", title: "asd" },
    { name: "one", image: "asdasd", title: "asd" },
    { name: "one", image: "asdasd", title: "asd" },
  ];
  try {
    const data = await fetch(
      "https://nti-ecommerce.vercel.app/api/v1/categories",
    );
    const res = await data.json();

    return res.categories || categories;
  } catch (err) {
    console.log(err);
    return [];
  }
};
