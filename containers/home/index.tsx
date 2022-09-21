import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { weather } from '@redux/slices/weather.slice';
import { air } from '@redux/slices/air.slice';

const LayoutPage = dynamic(() => import('@containers/layout'));
const HeaderMainHomeSec = dynamic(() => import('@containers/home/section/header-main'));
const WeatherHomeSec = dynamic(() => import('@containers/home/section/weather'));
const TempHomeSec = dynamic(() => import('@containers/home/section/temperature'));
const OtherWidgetHomeSec = dynamic(() => import('@containers/home/section/other-widget'));

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const weatherState = useSelector((state: any) => state.weather);
  const airState = useSelector((state: any) => state.air);

  const [location, setLocation] = useState<any>({
    lat: null,
    lon: null
  });

  const fetchLocation = useCallback(async () => {
    await navigator.geolocation.getCurrentPosition((position: any) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }),
        (err: any) => console.log(err);
    });
  }, []);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation])

  useEffect(() => {
    if (location.lat !== null && location.lon !== null) {
      dispatch(weather.now(location));
      dispatch(weather.forecast(location));
      dispatch(air.now(location));
    }
  }, [dispatch, location]);

  // console.log("weatherState", weatherState);
  // console.log("airState", airState);
  // console.log('weatherState', weatherState);
  // console.log("locationHome", location)

  return (
    <LayoutPage>
      <Head>
        <title>Homepage</title>
      </Head>
      <main className="w-full flex justify-between over:flex-col xl:flex-row">
        <section className="pl-[25px] pr-[44px] w-full">
          <HeaderMainHomeSec />
          <WeatherHomeSec weather={weatherState} air={airState} />
          <TempHomeSec forecast={weatherState?.forecast} />
        </section>

        <OtherWidgetHomeSec forecast={weatherState?.forecast} />
      </main>
    </LayoutPage>
  );
};

export default HomePage;
