import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';

const TempTodayCore = dynamic(() => import('@components/core/card/tempToday'));
const TempTomorrowCore = dynamic(() => import('@components/core/card/tempTomorrow'));

const TempHomeSec = ({ forecast }: any) => {
  const tempToday = forecast?.list?.find((data: any, index: any) => index === 0);
  const tempTomorrow = forecast?.list?.find(
    (data: any) =>
      new Date().getDate() + 1 === new Date(data?.dt * 1000).getDate() &&
      new Date(data?.dt * 1000).getHours() < 2
  );

  console.log(forecast)

  const tempConditionList = [
    {
      icon: <FontAwesomeIcon className="w-[21px] h-[21px]" icon={faTemperatureHalf} />,
      active: tempToday?.weather[0]?.main?.toLowerCase() === '' ? true : false
    },
    {
      icon: <FontAwesomeIcon className="w-[21px] h-[21px]" icon={faUmbrella} />,
      active: tempToday?.weather[0]?.main?.toLowerCase() === 'rain' ? true : false
    },
    {
      icon: <FontAwesomeIcon className="w-[21px] h-[21px]" icon={faWind} />,
      active: tempToday?.weather[0]?.main?.toLowerCase() === '' ? true : false
    }
  ];

  return (
    <section className="mt-[20px] w-full flex justify-between over:flex-col over:space-y-8 md:flex-row md:space-y-0 md:space-x-4">
      <div className="w-full">
        <header className="w-full flex justify-between over:flex-col over:space-y-4 sm:flex-row sm:space-y-0">
          <div className="w-full text-[26px] font-semibold leading-none space-y-[7px]">
            <h1>How&apos;s the</h1>
            <h1>temperature today?</h1>
          </div>
          <div className="flex items-center space-x-3">
            {tempConditionList.map((temp: any, index: any) => {
              return (
                <span
                  key={index}
                  className={`p-3 ${
                    temp.active === true ? 'bg-[#F97F29] text-[white]' : 'bg-[white] text-[black]'
                  } flex rounded-[14px]`}>
                  {temp.icon}
                </span>
              );
            })}
          </div>
        </header>
        <div className="mt-[27px] w-full">
          <TempTodayCore forecast={forecast} />
        </div>
      </div>
      <div className='flex w-full over:justify-center over:!mb-5 md:!mb-auto md:max-w-[258px]'>
        <TempTomorrowCore tempTomorrow={tempTomorrow} />
      </div>
    </section>
  );
};

export default TempHomeSec;
