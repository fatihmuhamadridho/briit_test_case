import dynamic from "next/dynamic";

const PredictionCardCore = dynamic(() => import("@components/core/card/prediction"))

const OtherWidgetHomeSec = () => {
  return (
    <section className="p-8 min-h-[100vh] bg-[#F7F7F7] over:w-full sm:w-[340px]">
      <div className="w-full flex justify-between">
        <div>
          <h1>Sun</h1>
          <h1>Banten, Indonesia v</h1>
        </div>
        <div>22C</div>
      </div>
      <hr className="my-3" />
      <div>Chart</div>
      <div className="h-[90px] bg-[blue]"></div>
      <div className="space-y-2">
        <h1>Weather Prediction</h1>
        <div className="space-y-4">
          <PredictionCardCore />
          <PredictionCardCore />
        </div>
        <button className="w-[143px] h-[50px] bg-[blue] text-[white] rounded-[15px]">
          Next 5 Days
        </button>
      </div>
    </section>
  );
};

export default OtherWidgetHomeSec;
