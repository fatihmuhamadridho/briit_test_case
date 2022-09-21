import BarChartIcon from '@mui/icons-material/BarChart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import SettingsIcon from '@mui/icons-material/Settings';
import OutputIcon from '@mui/icons-material/Output';
import { useRouter } from 'next/router';

const SidebarCore = () => {
  const router = useRouter();

  const menuSideBar = [
    {
      icon: <BarChartIcon />,
      url: '/'
    },
    {
      icon: <LocationOnIcon />,
      url: '/maps'
    },
    {
      icon: <TodayIcon />,
      url: '/calendar'
    },
    {
      icon: <SettingsIcon />,
      url: '/setting'
    }
  ];

  return (
    <main className="p-[30px] min-h-[100vh] flex-col border-r-[1px] justify-between items-center">
      <section className="space-y-8">
        <div
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => router.push('/')}>
          <img src="/favicon.ico" alt="" width={35} height={35} />
          <h1 className="font-bold">WDAY</h1>
        </div>
        <div className="flex flex-col items-center space-y-5">
          {menuSideBar.map((side: any, index: any) => {
            return (
              <button
                key={index}
                className={`w-[41px] h-[41px] flex items-center justify-center ${
                  router.pathname === side.url && 'bg-[#F97F29] text-[white]'
                } rounded-[14px] cursor-pointer ease-in duration-100 hover:bg-[#F97F29] hover:text-[white]`}
                onClick={() => router.push(side.url)}>
                {side.icon}
              </button>
            );
          })}
        </div>
      </section>
      {/* <section className="w-[41px] h-[41px] flex items-center justify-center rounded-[14px] cursor-pointer">
        <OutputIcon />
      </section> */}
    </main>
  );
};

export default SidebarCore;
