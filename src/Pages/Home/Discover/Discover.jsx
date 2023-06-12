import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";

const Discover = () => {
  return (
    <section className="container mx-auto">
      <div>
        <div className="text-center py-10">
          <p>What we do </p>
          <h2 className="text-4xl font-semibold">How it works?</h2>
        </div>

        

        <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
        <div className="bg-[#1d1d1d]  border  p-14  space-y-4 text-center">
            <div className="text-center  m-auto border rounded-lg bg-[#ffffffe1] py-4">
              <img className="m-auto" src={icon1} alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-[#e0e0e0]"> Sign Up </h2>

            <button className="font-semibold text-[#ffffff]">read more</button>
          </div>

          <div className="bg-[#1d1d1d]  border  p-14 space-y-4 text-center">
            <div className="text-center  m-auto border rounded-lg bg-[#ffffffe1] py-4">
              <img className="m-auto" src={icon2} alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-[#e0e0e0]"> Select course</h2>

            <button className="font-semibold text-[#ffffff]">read more</button>
          </div>

          <div className="bg-[#1d1d1d]  border  p-14 space-y-4 text-center">
            <div className="text-center  m-auto border rounded-lg bg-[#ffffffe1] py-4">
              <img className="m-auto" src={icon3} alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-[#e0e0e0]"> Start Learning </h2>

            <button className="font-semibold text-[#ffffff]">read more</button>
          </div>

          <div className="bg-[#1d1d1d]  border  p-14 space-y-4 text-center">
            <div className="text-center  m-auto border rounded-lg bg-[#ffffffe1] py-4">
              <img className="m-auto" src={icon4} alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-[#e0e0e0]">
                Get Certificate </h2>

            <button className="font-semibold text-[#ffffff]">read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
