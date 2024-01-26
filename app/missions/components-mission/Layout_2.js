import React from "react";

export default function Layout_2() {
  return (
    <div>
      <div className="container">
        <div className="my-3 text-5xl font-extrabold">Title</div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 md:flex-row ">
            <div className="order-2 rounded-lg bg-red-500 md:order-1 md:w-1/2">
              Image
            </div>
            <div className="order-1 rounded-lg border-2 border-black border-opacity-15 bg-[var(--primary-light)] p-4 dark:border-slate-600 dark:bg-[var(--primary-dark)] md:order-2 md:w-1/2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              aut alias excepturi nam, tempora tenetur. Itaque facere accusamus
              adipisci totam! Consequatur qui quasi quas magnam ratione velit
              numquam odio vero. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Officia recusandae iste ratione maiores
              necessitatibus. Aperiam, quam voluptates.
            </div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <div className=" rounded-lg border-2 border-black border-opacity-15 bg-[var(--primary-light)] p-4 dark:border-slate-600 dark:bg-[var(--primary-dark)] md:w-1/2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              aut alias excepturi nam, tempora tenetur. Itaque facere accusamus
              adipisci totam! Consequatur qui quasi quas magnam ratione velit
              numquam odio vero. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Officia recusandae iste ratione maiores
              necessitatibus. Aperiam, quam voluptates.
            </div>
            <div className="rounded-lg bg-red-500 md:w-1/2">Image</div>
          </div>
        </div>
      </div>
    </div>
  );
}
