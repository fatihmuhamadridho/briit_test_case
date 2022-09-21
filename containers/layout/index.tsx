import dynamic from 'next/dynamic';

const SidebarCore = dynamic(() => import('@components/core/sidebar'));

const LayoutPage = ({ children }: any) => {
  return (
    <div className="flex">
      <div className="over:hidden sm:flex">
        <SidebarCore />
      </div>
      {children}
    </div>
  );
};

export default LayoutPage;
