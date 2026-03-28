import { fetchCart } from "../_api/fetchCart";

import Allcart from "../_components/Allcart/page";

export default async function cart() {
  // const session = await getServerSession(authOptions);
  // console.log(session, "a");

  const cart = await fetchCart();
  // console.log("items", cart[0].cart.name);

  console.log("carttt", cart);

  // return (
  //   // <div>asd</div>
  //   <div>
  //     {/* <AllCart cart={cart} /> */}
  //     {cart.map((el, index) => {
  //       return <CartCard key={el._id ?? index} cart={el} />;
  //     })}
  //   </div>
  // );
  return <Allcart cart={cart} />;
}
