import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCloud, faCloudRain, faSun } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PredictionCardCore = dynamic(() => import('@components/core/card/prediction'));

const OtherWidgetHomeSec = ({ forecast }: any) => {
  const router = useRouter();
  const [isTime, setIsTime] = useState<any>(null);
  const tomorrowPredic = forecast?.list?.find(
    (data: any) =>
      new Date().getDate() + 1 === new Date(data?.dt * 1000).getDate() &&
      new Date(data?.dt * 1000).getHours() < 2
  );
  const afterTomorrowPredic = forecast?.list?.find(
    (data: any) =>
      new Date().getDate() + 2 === new Date(data?.dt * 1000).getDate() &&
      new Date(data?.dt * 1000).getHours() < 2
  );

  const convertTime = (t: any) => {
    const dt = new Date(t);
    const hr = dt.getHours();
    const m = '0' + dt.getMinutes();
    const s = '0' + dt.getSeconds();

    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
  };

  useEffect(() => {
    setInterval(() => {
      const dt = new Date().getTime();
      setIsTime(convertTime(dt));
    }, 1000);
  }, []);

  return (
    <section className="p-7 bg-[#F7F7F7] space-y-8 over:w-full sm:min-h-auto xl:w-[340px] xl:min-h-[100vh]">
      <div className="pb-[21px] w-full flex items-center justify-between border-b-[1px] border-[black]">
        <div>
          <h1 className="font-semibold text-[16px]">Sun</h1>
          <button className="flex items-center text-[12px] cursor-pointer space-x-1">
            <h1>Banten, Indonesia</h1>
            <KeyboardArrowDownIcon className="text-[12px]" />
          </button>
        </div>
        <h1 className="text-[20px] font-bold text-[#F97F29]">{isTime}</h1>
      </div>
      <PredictionCardCore icon={faSun} iconColor={'text-[#FF953F]'} bgColor={'bg-[#19283F]'}>
        <div className="flex flex-col text-[white] leading-none space-y-2">
          <div className="flex items-center space-x-2">
            <h1 className="text-[22px] font-bold">20 UVI</h1>
            <p className="py-1 px-2 bg-[#CCE16A] text-[12px] text-[black] rounded-[10px]">
              Moderate
            </p>
          </div>
          <p className="text-[10px] font-light">Moderate risk of from UV rays</p>
        </div>
      </PredictionCardCore>
      <div className="w-full flex flex-col space-y-6">
        <h1 className="text-[22px] font-semibold text-center">Weather Prediction</h1>
        <div className="space-y-3">
          {forecast?.list?.map((weather: any, index: any) => {
            if (index === 0) {
              return (
                <PredictionCardCore
                  key={index}
                  icon={faCloudRain}
                  iconColor={'text-[#93C2E5]'}
                  bgColor={'bg-[white]'}>
                  <div className="w-full leading-none space-y-2">
                    <p className="text-[12px]">Tomorrow</p>
                    <div className="w-full text-[14px] font-semibold flex justify-between">
                      <h1>
                        {
                          tomorrowPredic?.weather?.find((data: any, index: any) => index === 0)
                            ?.main
                        }
                      </h1>
                      <h1>
                        {Math.floor(tomorrowPredic?.main?.temp_min - 273.15)}° /{' '}
                        {Math.floor(tomorrowPredic?.main?.temp_max - 273.15)}°
                      </h1>
                    </div>
                  </div>
                </PredictionCardCore>
              );
            }

            if (index === 1) {
              return (
                <PredictionCardCore
                  key={index}
                  icon={faCloudRain}
                  iconColor={'text-[#93C2E5]'}
                  bgColor={'bg-[white]'}>
                  <div className="w-full leading-none space-y-2">
                    <p className="text-[12px]">Tomorrow</p>
                    <div className="w-full text-[14px] font-semibold flex justify-between">
                      <h1>
                        {
                          afterTomorrowPredic?.weather?.find((data: any, index: any) => index === 0)
                            ?.main
                        }
                      </h1>
                      <h1>
                        {Math.floor(afterTomorrowPredic?.main?.temp_min - 273.15)}° /{' '}
                        {Math.floor(afterTomorrowPredic?.main?.temp_max - 273.15)}°
                      </h1>
                    </div>
                  </div>
                </PredictionCardCore>
              );
            }

            return null;
          })}
        </div>
        <button
          className="self-end py-[18px] px-[21px] bg-[#F97F29] flex items-center border-[1px] text-[white] rounded-[15px] space-x-2"
          onClick={() => router.push('/calendar')}>
          <span className="text-[15px] text-[white]">
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          <p className="text-[12px] font-semibold">Next 5 Days</p>
        </button>
      </div>
    </section>
  );
};

export default OtherWidgetHomeSec;
