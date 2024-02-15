import React from 'react';

const RecycleDetailsSection = () => {
    return (
        <div className='mx-[8%] p-10 my-10 rounded-tl-3xl border-2 border-green-200 rounded-tr-md rounded-bl-md rounded-br-3xl bg-[#c1ddff]'>
        <h1 className="text-5xl font-bold text-[green]">Facilities of Recycling</h1>
      <ul className="list-decimal ml-14 my-7 text-black">
        <li className="my-2 text-2xl">
        <strong>All textile products:</strong> placed on the EU market are:
        <ul className='list-disc ml-10'>
            <li>durable, repairable and recyclable</li>
            <li>to a great extent made of recycled fibres</li>
            <li>free of hazardous substances</li>
            <li>produced respecting social rights</li>
        </ul>

        </li>
        <li className="my-2 text-2xl">
          "Fast fashion is out of fashion" -consumers benefit longer from <strong>high quality textiles</strong> 
        </li>
        <li className="my-2 text-2xl">
          Profitable <strong>re-use and repair services</strong>  are widely available
        </li>
        <li className="my-2 text-2xl">
         In a <strong>competitive,resilient and innovative textile sector</strong>  producers take responsibility for their products along the value chain
        </li>
        <li className="my-2 text-2xl">
        <strong>Circular rather than throw-away clothes have become the norm,</strong> with sufficient capacities for recycling and minimal incineration and landfilling
        </li>
      </ul>
    </div>
    );
};

export default RecycleDetailsSection;