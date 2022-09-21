import dynamic from 'next/dynamic';
import { faCloud, faWind } from '@fortawesome/free-solid-svg-icons';

const WeatherCardCore = dynamic(() => import('@components/core/card/weather'));

const WeatherHomeSec = ({ weather, air }: any) => {
  const celcius = Math.floor(weather?.data?.main?.temp - 273.15);
  const minCelcius = Math.floor(weather?.data?.main?.temp_min - 273.15);
  const description = weather?.data?.weather?.reduce((obj: any, item: any) => {
    Object.assign(obj, {
      id: item?.id,
      icon: item?.icon,
      main: item?.main,
      description: item?.description
    });
  });

  const airList = air?.data?.list?.reduce((obj: any, item: any) => {
    Object.assign(obj, {
      components: item.components,
      dt: item.dt,
      main: item.main
    });
  });
  const AQIValue = Math.floor(
    (airList?.components?.no2 +
      airList?.components?.pm10 +
      airList?.components?.o3 +
      airList?.components?.pm2_5) /
      4
  );

  const weatherDetail = [
    {
      name: 'Pressure',
      value: `${weather?.data?.main?.pressure}mb`,
      backgroundColor: 'bg-[#19283F]',
      textColor: 'text-[#FFFFFF]'
    },
    {
      name: 'Visibility',
      value: `${weather?.data?.visibility / 1000} km`,
      backgroundColor: 'bg-[#CCE16A]',
      textColor: 'text-[#000000]'
    },
    {
      name: 'Humadity',
      value: `${weather?.data?.main?.humidity}%`,
      backgroundColor: 'bg-[#FFFFFF]',
      textColor: 'text-[#000000]'
    }
  ];

  return (
    <section className="grid gap-[18px] over:grid-cols-1 md:grid-cols-2">
      <WeatherCardCore
        icon={faCloud}
        title={'Weather'}
        subtitle={"What's the weather."}
        background={"bg-[url('/images/illustrations/kite.jpg')]"}
        mainParam={`${celcius} C`}
        subParam={`${minCelcius} C`}
        description={description?.description}
        weatherDetail={weatherDetail}
      />
      <WeatherCardCore
        icon={faWind}
        title={'Air Quality'}
        subtitle={'Main pollutan : PM 2.5'}
        background={"bg-[url('/images/illustrations/lake.jpg')]"}
        mainParam={AQIValue || null}
        subParam={'AQI'}
      />
    </section>
  );
};

export default WeatherHomeSec;
