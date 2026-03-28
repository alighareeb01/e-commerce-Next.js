export const fetchAllCategories = async () => {
  const categories = [
    { name: "one", image: "asdasd", title: "asd" },
    { name: "one", image: "asdasd", title: "asd" },
    { name: "one", image: "asdasd", title: "asd" },
    { name: "one", image: "asdasd", title: "asd" },
  ];
  try {
    const res = await fetch(
      "https://nti-e-commerce-backend-project.vercel.app/api/v1/category/",
    );
    const data = await res.json();
    // console.log(data.data, "data cat");

    return data.data || categories;
  } catch (err) {
    console.log(err);
    return [];
  }
};
