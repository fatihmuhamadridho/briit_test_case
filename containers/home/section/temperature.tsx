import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTemperatureHalf,
  faUmbrella,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

const TempHomeSec = () => {
  return (
    <section className="mt-[20px] w-full flex justify-between over:flex-col over:space-y-8 sm:flex-row sm:space-y-0 sm:space-x-4">
      <div className="w-full">
        <header className="w-full flex justify-between over:flex-col sm:flex-row">
          <div className="w-full text-[26px] font-semibold leading-none space-y-[7px]">
            <h1>How&apos;s the</h1>
            <h1>temperature today?</h1>
          </div>
          <div className="flex items-center space-x-3">
            <span className="p-3 bg-[#F97F29] flex rounded-[14px]">
              <FontAwesomeIcon className="w-[21px] h-[21px] text-[white]" icon={faTemperatureHalf} />
            </span>
            <span className="p-3 bg-[white] flex rounded-[14px]">
              <FontAwesomeIcon className="w-[21px] h-[21px] text-[black]" icon={faUmbrella} />
            </span>
            <span className="p-3 bg-[white] flex rounded-[14px]">
              <FontAwesomeIcon className="w-[21px] h-[21px] text-[black]" icon={faWind} />
            </span>
          </div>
        </header>
        <div>
          <h1>CHART</h1>
        </div>
      </div>
      <div className="w-full h-[280px] bg-[#F7F7F7] border-[1px] rounded-[20px] sm:max-w-[258px]"></div>
    </section>
  );
};

export default TempHomeSec;
