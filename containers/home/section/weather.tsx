import dynamic from 'next/dynamic';

const WeatherCardCore = dynamic(() => import("@components/core/card/weather"));

const WeatherHomeSec = () => {
  return (
    <section className="grid gap-[18px] over:grid-cols-1 sm:grid-cols-2">
      <WeatherCardCore />
      <WeatherCardCore />
    </section>
  );
};

export default WeatherHomeSec;
