import BarChartIcon from '@mui/icons-material/BarChart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import SettingsIcon from '@mui/icons-material/Settings';
import OutputIcon from '@mui/icons-material/Output';

const SidebarCore = () => {
  return (
    <main className="p-[30px] min-h-[100vh] flex-col border-r-[1px] justify-between items-center over:hidden sm:flex">
      <section className="space-y-8">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <img src="/favicon.ico" alt="" width={35} height={35} />
          <h1 className="font-bold">WDAY</h1>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <span className="w-[41px] h-[41px] flex items-center justify-center bg-[#F97F29] rounded-[14px] cursor-pointer">
            <BarChartIcon className="text-[white] " />
          </span>
          <span className="w-[41px] h-[41px] flex items-center justify-center rounded-[14px] cursor-pointer">
            <LocationOnIcon className="" />
          </span>
          <span className="w-[41px] h-[41px] flex items-center justify-center rounded-[14px] cursor-pointer">
            <TodayIcon className="" />
          </span>
          <span className="w-[41px] h-[41px] flex items-center justify-center rounded-[14px] cursor-pointer">
            <SettingsIcon className="" />
          </span>
        </div>
      </section>
      <section className="w-[41px] h-[41px] flex items-center justify-center rounded-[14px] cursor-pointer">
        <OutputIcon />
      </section>
    </main>
  );
};

export default SidebarCore;
