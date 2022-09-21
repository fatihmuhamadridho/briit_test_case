import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faCloud } from '@fortawesome/free-solid-svg-icons';

const TempTodayCore = ({ forecast }: any) => {
  return (
    <main className="grid grid-cols-4 gap-x-2">
      {forecast?.list?.map((temp: any, index: any) => {
        const weatherDetail = temp?.weather?.reduce((obj: any, item: any) => {
          Object.assign(obj, {
            id: item?.id,
            icon: item?.icon,
            main: item?.main,
            description: item?.description
          });
        });

        const isPartDay =
          new Date(temp?.dt * 1000).getHours() <= 12
            ? 'Morning'
            : new Date(temp?.dt * 1000).getHours() <= 15
            ? 'Afternoon'
            : new Date(temp?.dt * 1000).getHours() <= 18
            ? 'Evening'
            : new Date(temp?.dt * 1000).getHours() <= 24
            ? 'Night'
            : 'null';

        if (index < 4) {
          return (
            <div
              key={index}
              className="p-[18px] h-[200px] flex flex-col items-center justify-between border-[1px] rounded-[10px]">
              {weatherDetail.main.toLowerCase() === 'rain' && (
                <div className="w-[50px] h-[50px] bg-[black] flex items-center justify-center border-[1px] rounded-full">
                  <FontAwesomeIcon className="text-[#93C2E5] text-[20px]" icon={faCloudRain} />
                </div>
              )}
              {weatherDetail.main.toLowerCase() === 'clouds' && (
                <div className="w-[50px] h-[50px] bg-[white] flex items-center justify-center border-[1px] rounded-full">
                  <FontAwesomeIcon className="text-[#93C2E5] text-[20px]" icon={faCloud} />
                </div>
              )}
              <div className="text-center leading-none space-y-3">
                <h1 className="text-[16px] font-semibold">
                  {Math.floor(temp?.main?.temp - 273.15)}°C
                </h1>
                <div className="text-[12px] font-medium flex flex-col space-y-1">
                  <p className="text-[14px]">{isPartDay}</p>
                  <p>{new Date(temp?.dt * 1000).getHours() + ':00'}</p>
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </main>
  );
};

export default TempTodayCore;
