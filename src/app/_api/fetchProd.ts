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
    const res = await fetch(
      "https://nti-e-commerce-backend-project.vercel.app/api/v1/product",
    );
    const data = await res.json();
    console.log(data.data, "from here");

    return data.data || x;
  } catch (err) {
    console.log(err);
    return [];
  }
};
