const WeatherCardCore = ({ children }: any) => {
  return (
    <main className="p-[27px]  h-[307px] bg-[#F7F7F7] flex flex-col justify-between border-[1px] rounded-[20px]">
      <div className="flex items-center space-x-3">
        <div className="w-[32px] h-[32px] bg-[white] rounded-full">
          <img
            className="rounded-full"
            src="/images/illustrations/male_person.png"
            alt=""
            width={32}
            height={32}
          />
        </div>
        <div className="leading-none space-y-[9px]">
          <h1 className="font-medium text-[14px]">Weather</h1>
          <p className="text-[12px]">What's the weather.</p>
        </div>
      </div>
      <div className="flex flex-col leading-none space-y-[9px]">
        <div className="flex items-center space-x-4">
        <h1 className="text-[36px] font-bold">22 C</h1>
          <span className="py-[5px] px-[6px] bg-[white] rounded-[5px]">11 C</span>
        </div>
          <p className="text-[13px]">Partly Cloudy</p>
      </div>
      <div className="grid grid-cols-3 gap-x-3">
        <div className="h-[75px] bg-[white] border-[1px] rounded-[15px]"></div>
        <div className="h-[75px] bg-[white] border-[1px] rounded-[15px]"></div>
        <div className="h-[75px] bg-[white] border-[1px] rounded-[15px]"></div>
      </div>
    </main>
  );
};

export default WeatherCardCore;
