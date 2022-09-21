const TempTomorrowCore = ({ tempTomorrow }: any) => {
  return (
    <main className="py-[30px] px-[26px] w-full max-w-[258px] h-[280px] bg-[url('/images/illustrations/kite.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-between border-[1px] rounded-[20px]">
      <div className="leading-none space-y-3">
        <p className="text-[12px]">Tomorrow</p>
        <h1 className="text-[24px] font-bold capitalize">{tempTomorrow?.weather[0]?.description}</h1>
      </div>
      <div>
        <h1 className="text-[36px] font-bold">{Math.floor(tempTomorrow?.main?.temp - 273.15)} C</h1>
        <p className="text-[13px] font-semibold">{tempTomorrow?.weather[0]?.main}</p>
      </div>
    </main>
  );
};

export default TempTomorrowCore;
