import { IoShirtSharp } from "react-icons/io5";

const GlobalTextileWaste = () => {
  return (
    <div className="grid grid-cols-3 mx-32 gap-5">
      <div className="col-span-2 flex flex-col gap-10">
        
          <div className="p-5  rounded-lg border-2 bg-[#FAFAFA] border-green-200 items-center">
            <div className="grid grid-cols-12 items-center my-auto">
              <small className="col-span-1 text-xl text-center font-bold">
                Up to
              </small>
              <div className="col-span-8">
                <p className="text-5xl font-bold">100 BiLLION</p>
                <small className="ml-40">new garments are made each year</small>
              </div>
              <div className="col-span-3 ">
                <img className="w-[80%]" src="https://i.ibb.co/582nLTH/shirt.png" alt="" />
              </div>
            </div>
          </div>
          <div className="p-5 rounded-lg border-2 bg-[#F1F3F1] border-red-200 ">
            <div className="flex gap-10">
              <div >
                <img src="https://i.ibb.co/yB8bsgV/Captur1.png" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-center">The World Produces</p>
                <p className="text-5xl font-bold text-center">
                  92 Million Tons
                </p>
                <p className="text-center">of textile waste every year</p>
              </div>
            </div>
          </div>
      
      </div>
      <div className="border-2 border-green-200 rounded-lg bg-[#F1F3F1] p-5">
        <div className="flex flex-col gap-2 justify-center items-center">
          <dir>
            <img src="https://i.ibb.co/7R0QKLN/Capture3.png" alt="" />
          </dir>
          <p className="text-red-500">Of materials used to make clothing</p>
          <p className="text-5xl font-bold">END UP IN LANDFILL</p>
          <div>
            <img  src="https://i.ibb.co/SNHNTTd/Capture7.png" alt="" />
          </div>
          <p className="text-red-500">Thats one truckload</p>
          <p className="text-3xl font-bold">EVERY SECOND</p>
        </div>
      </div>

      <div className="col-span-1 border-2 border-green-200 rounded-lg bg-[#F1F3F1] p-5">
        <div className="flex flex-col justify-center">
        <img src="https://i.ibb.co/cCKgj3r/Capture10.png" alt="" />
        <p className="text-red-500 text-center">of all new clothing materials are actually</p>
        <p className="text-5xl font-bold text-center">PLASTIC</p>
        </div>
      </div>
      <div className="col-span-1 border-2 border-green-200 rounded-lg bg-[#F1F3F1] p-5">
        <div className="flex flex-col justify-center">
      <p className="text-red-500 text-center my-5">Textile Production Causes</p>
      <p className="text-5xl font-bold text-center">42 MILLION TONS</p>
      <p className="text-red-500 text-center  my-5">Of plastic waste per year and contributes</p>
      <img src="https://i.ibb.co/CPswFmC/Capture11.png" alt="" />
      <p className="text-red-500 text-center">Of annual microplastic pollution added to our oceans</p>
        </div>
      </div>
      <div className="col-span-1 border-2 border-green-200 rounded-lg bg-[#F1F3F1] p-5">
      <div className="flex flex-col justify-center">
      <img src="https://i.ibb.co/tD92JYw/Capture6.png" alt="" />
      <p className="text-red-500 text-center my-5">Of clothes are</p>
      <p className="text-5xl font-bold text-center">RECYCLE INTO</p>
      <p className="text-5xl font-bold text-center">NEW GARMENTS</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalTextileWaste;
