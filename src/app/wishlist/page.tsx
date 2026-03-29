import React from "react";
import { fetchWishlist } from "../_api/fetchWishlist";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import deleteFromWishListAction from "../cartAction/deleteFromWishListAction";
import DeleteWishlistItem from "../_components/DeleteWishlistItem/DeleteWishlistItem";

export default async function page() {
  const wishlist = await fetchWishlist();
  console.log("wish", wishlist);

  return (
    <>
      <section className="py-4 pb-10 text-[#3f2417]">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-[2rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.78)] p-6 shadow-[0_20px_60px_rgba(90,53,35,0.08)] backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-[#4a2d1e] sm:text-5xl">
                  Wishlist
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#7b5843] sm:text-base">
                  {wishlist.length
                    ? "Review your wishlist. ❤️"
                    : "nothing in your wishlist 😭"}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#7a5036]/12 bg-[rgba(255,248,240,0.9)] p-5 shadow-[0_10px_30px_rgba(90,53,35,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(90,53,35,0.12)]">
                  <h2 className="text-lg font-semibold text-[#7b5843]">
                    Total Items
                  </h2>

                  <p className="mt-2 text-3xl font-bold text-[#4a2d1e]">
                    {wishlist?.length || 0}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {wishlist.data.map((el, index) => {
                return (
                  <Card
                    key={index}
                    className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.92)] pt-0 text-[#3f2417] shadow-[0_18px_40px_rgba(90,53,35,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_rgba(90,53,35,0.15)] flex flex-col h-full"
                  >
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#4a2d1e]/55 via-transparent to-transparent opacity-80" />

                    <img
                      src="/def.jpg"
                      alt={el.cover}
                      className="relative aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <CardHeader className="relative z-20 gap-3 px-5 pt-5 flex-grow">
                      <CardTitle className="text-2xl font-bold tracking-tight text-[#4a2d1e]">
                        {el.name}
                      </CardTitle>
                      <CardDescription className="mt-4 space-y-3">
                        <div className="grid grid-cols-1 gap-3 text-[#7b5843]">
                          <div className="container mx-auto px-4">
                            {/* <div className=" sm:grid-cols-2 lg:grid-cols-3"> */}
                            <div className="rounded-2xl border border-[#7a5036]/10 bg-[rgba(255,255,255,0.55)] px-4 py-3 shadow-[0_8px_20px_rgba(90,53,35,0.05)] text-center">
                              <p className="text-[11px] uppercase tracking-[0.18em] text-[#a18472]">
                                description
                              </p>
                              <p className="mt-1 text-base font-semibold text-[#6d432d]">
                                {el.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* </div> */}

                        <div className="flex justify-center items-center gap-3 flex-wrap text-[#7b5843]">
                          <div className="rounded-2xl border border-[#7a5036]/10 bg-[rgba(255,255,255,0.55)] px-4 py-3 shadow-[0_8px_20px_rgba(90,53,35,0.05)]">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-[#a18472]">
                              Quantity
                            </p>
                            <p className="mt-1 text-base font-semibold text-[#6d432d]">
                              {el.quantity}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-[#7a5036]/10 bg-[rgba(255,255,255,0.55)] px-4 py-3 shadow-[0_8px_20px_rgba(90,53,35,0.05)]">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-[#a18472]">
                              Category
                            </p>
                            <p className="mt-1 text-base font-semibold text-[#6d432d]">
                              {el.category.name}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-[#7a5036]/10 bg-[rgba(255,255,255,0.55)] px-4 py-3 shadow-[0_8px_20px_rgba(90,53,35,0.05)]">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-[#a18472]">
                              Subcategory
                            </p>
                            <p className="mt-1 text-base font-semibold text-[#6d432d]">
                              {el.subcategory.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-3 flex-wrap text-[#7b5843]">
                          <p className="text-base font-semibold text-[#6d432d]">
                            price ${el.price}
                          </p>
                          <p className="text-base font-semibold text-[#6d432d]">
                            sold ${el.sold}
                          </p>
                          <p className="text-base font-semibold text-[#6d432d]">
                            ratingAverage ${el.ratingAverage}
                          </p>
                          <p className="text-base font-semibold text-[#6d432d]">
                            ratingCount ${el.ratingCount}
                          </p>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="relative z-20 border-t border-[#7a5036]/10 bg-[rgba(246,230,214,0.72)] p-5 gap-2">
                      <DeleteWishlistItem itemId={el._id} />
                      {/* <Button
                        onClick={handleDelete}
                        className="flex-1 bg-[#6d432d] text-[#fff5eb] shadow-[0_8px_20px_rgba(90,53,35,0.15)] hover:bg-[#7b4f36] hover:-translate-y-0.5 transition-all"
                      >
                        delete from wishlist
                      </Button> */}

                      {/* <AddToCardButton elId={el._id}>add to el</AddToCardButton> */}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            {/* {wishlist.length && <ClearCartButton />} */}
          </div>
        </div>
      </section>
    </>
  );
}
