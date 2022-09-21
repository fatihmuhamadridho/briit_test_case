import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SliderMUI = dynamic(() => import("@components/mui/slider"));

const WeatherCardCore = ({
  icon,
  title,
  subtitle,
  background,
  mainParam,
  subParam,
  description,
  weatherDetail,
}: any) => {
  if (mainParam !== null) {
    return (
      <main
        className={`p-[27px] h-[307px] ${background} bg-cover bg-no-repeat bg-center flex flex-col justify-between border-[1px] rounded-[20px]`}>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[white] rounded-full">
            <FontAwesomeIcon className="text-[#F97F29] text-[20px]" icon={icon} />
          </div>
          <div className="leading-none space-y-[9px]">
            <h1 className="font-medium text-[14px]">{title}</h1>
            <p className="text-[12px]">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-col leading-none space-y-[9px]">
          <div className="flex items-center space-x-4">
            <h1 className="text-[36px] font-bold">{mainParam}</h1>
            <span className={`py-[5px] px-[6px] ${subParam === "AQI" ? "bg-[#CCE16A]" : "bg-[white]"} text-[14px] font-semibold rounded-[5px]`}>{subParam}</span>
          </div>
          <p className="text-[13px] capitalize">{description}</p>
        </div>
  
        {weatherDetail !== undefined && (
          <div className="grid grid-cols-3 gap-x-3">
            {weatherDetail?.map((detail: any, index: any) => {
              return (
                <div
                  key={index}
                  className={`px-[18px] py-[16px] ${detail?.backgroundColor} ${detail?.textColor} flex flex-col items-center justify-center rounded-[15px] space-y-[7px]`}>
                  <p className="text-[12px]">{detail?.name}</p>
                  <h1 className="text-[20px] font-medium">{detail?.value}</h1>
                </div>
              );
            })}
          </div>
        )}
  
        {subParam === "AQI" && (
        <div className='py-[10px] px-4 w-full min-h-[75px] flex flex-col items-center justify-center bg-[white] text-[12px] rounded-[20px]'>
          <div className='w-full flex items-center justify-between'>
            <h1>Good</h1>
            <h1>Hazardous</h1>
          </div>
          <SliderMUI mainParam={mainParam} />
        </div>
        )}
      </main>
    );
  }

  return <div>Loading...</div>
};

export default WeatherCardCore;
