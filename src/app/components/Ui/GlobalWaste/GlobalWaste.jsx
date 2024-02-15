import React from "react";

const GlobalWaste = () => {
  return (
    <div className="my-24">
      <div className="grid lg:grid-cols-3 mx-12 gap-16">
        <div className="rounded-md flex items-center">
          <img
            className="rounded-lg border-red-300 border-2"
            src="https://i.ibb.co/KwMtRMJ/original.png"
            alt=""
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-5xl font-bold text-[green]">Global Fashion Industry Waste</h1>
          <ul className="list-disc my-5 text-black">
            <li className="my-2 text-2xl">
              Up to <strong>100 billion</strong> garments are produced by the
              fashion industry every year.
            </li>
            <li className="my-2 text-2xl">
              And each year, as much as <strong>92 million tons</strong> of
              clothing ends up in landfills.
            </li>
            <li className="my-2 text-2xl">
              Only <strong>20%</strong> of textiles are collected for reuse or
              recycling globally.
            </li>
            <li className="my-2 text-2xl">
              Almost <strong>60%</strong> of all clothing material is actually
              plastic. Nylon, acrylic, and polyester textiles are just a few
              examples of these synthetic fibers that have become so ubiquitous
              in our wardrobes.
            </li>
            <li className="my-2 text-2xl">
              Textile production generates{" "}
              <strong>42 million tons of plastic waste</strong> per year, making
              the textile industry the second-highest industrial sector after
              packaging.
            </li>
            <li className="my-2 text-2xl">
              Every time a synthetic garment is washed, it releases tiny plastic
              microfibers into the water. Up to <strong>500,000 tons</strong> of
              microfibers end up in the ocean every year.
            </li>
            <li className="my-2 text-2xl">
              Textiles and fashion waste account for <strong>9%</strong> of
              annual microplastic pollution added to our oceans.
            </li>
            <li className="my-2 text-2xl">
              Additionally, the footwear industry and garment industry combined
              are responsible for <strong>8%</strong> of global greenhouse gas
              emissions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalWaste;
