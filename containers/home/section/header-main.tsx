import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import dynamic from 'next/dynamic';

const DrawerMUI = dynamic(() => import("@components/mui/drawer"));

const HeaderMainHomeSec = () => {
  return (
    <header className="py-8 w-full flex justify-between over:flex-col over:space-y-4 sm:flex-row sm:space-y-0">
      <div className="flex items-center space-x-[18px]">
        <div className='over:flex sm:hidden'>
          <DrawerMUI />
        </div>
        <span className="w-[50px] h-[50px]">
          <img
            className="bg-[#F97F29] rounded-full"
            src="/images/illustrations/male_person.png"
            alt=""
            width={50}
            height={50}
          />
        </span>
        <div className="text-[28px] leading-none">
          <h1 className="font-light">Hello,</h1>
          <h1 className="leading-10">Welcome to WDay</h1>
        </div>
      </div>
      <div className="flex items-center space-x-4 over:w-full sm:w-auto">
        <input
          className="py-2 px-3 text-[12px] border-[1px] rounded-[10px] over:w-full sm:w-auto"
          type="text"
          placeholder="Search anything..."
        />
        <span className="w-[41px] h-[41px] flex items-center justify-center border-[1px] rounded-full">
          <NotificationsNoneIcon />
        </span>
      </div>
    </header>
  );
};

export default HeaderMainHomeSec;
