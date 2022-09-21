import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PredictionCardCore = ({ children, icon, iconColor, bgColor }: any) => {
  return (
    <main className={`px-4 py-4 flex items-center ${bgColor} rounded-[15px] space-x-3`}>
      <div className={`text-[28px] ${iconColor}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      {children}
    </main>
  );
};

export default PredictionCardCore;
