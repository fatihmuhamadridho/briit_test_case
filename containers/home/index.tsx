import dynamic from 'next/dynamic';
import { useState } from 'react';
import Head from 'next/head';

const LayoutPage = dynamic(() => import('@containers/layout'));
const HeaderMainHomeSec = dynamic(() => import('@containers/home/section/header-main'));
const WeatherHomeSec = dynamic(() => import('@containers/home/section/weather'));
const TempHomeSec = dynamic(() => import('@containers/home/section/temperature'));
const OtherWidgetHomeSec = dynamic(() => import('@containers/home/section/other-widget'));

const HomePage = () => {
  const [position, setPosition] = useState<any>(null);

  const positionHandle = async () => {
    await navigator.geolocation.getCurrentPosition((position: any) => {
      setPosition({
        lang: position.coords.latitude,
        long: position.coords.longitude
      }),
        (err: any) => console.log(err);
    });
  };

  console.log(position);

  return (
    <LayoutPage>
      <Head>
        <title>Homepage</title>
      </Head>
      <main className="w-full flex justify-between over:flex-col sm:flex-row">
        <section className="pl-[25px] pr-[44px] w-full">
          <HeaderMainHomeSec />
          <WeatherHomeSec />
          <TempHomeSec />
        </section>

        <OtherWidgetHomeSec />
      </main>
    </LayoutPage>
  );
};

export default HomePage;
