import dynamic from 'next/dynamic';

const SidebarCore = dynamic(() => import('@components/core/sidebar'));

const LayoutPage = ({ children }: any) => {
  return (
    <div className="flex">
      <SidebarCore />
      {children}
    </div>
  );
};

export default LayoutPage;
