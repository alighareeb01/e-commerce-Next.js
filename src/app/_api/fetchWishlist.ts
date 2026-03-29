import getMyToken from "../utils/getMyToken";

export const fetchWishlist = async () => {
  const token = await getMyToken();
  console.log("tok", token);

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
      "https://nti-e-commerce-backend-project.vercel.app/api/v1/wishlist",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    console.log(data.data, "from here");

    return data || x;
  } catch (err) {
    console.log(err);
    return [];
  }
};
