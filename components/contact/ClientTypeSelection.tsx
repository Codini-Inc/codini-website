import { FC } from 'react';
import { ClientType, ClientNeeds } from '../../_enums';
import next from 'next';

interface ClientTypeSelectionProps {
  clientType: ClientType | null;
  setClientType: (clientType: ClientType) => void;
  nextStep: () => void;
}

export const ClientTypeSelection: FC<ClientTypeSelectionProps> = ({
  clientType,
  setClientType,
  nextStep,
}) => {
  const handleSelection = (type: ClientType) => {
    setClientType(type);
    nextStep();
  };

  return (
    <div className=" w-full step h-full">
      <div className='space-y-10 w-full mt-40'>
        <p className="text-center font-bold text-3xl">Are you </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div
            className={`max-w-xs w-full flex flex-col justify-center ${clientType === ClientType.ENTERPRISE ? 'border  border-blue-200' : ''}`}
            role="button"
            onClick={() => handleSelection(ClientType.ENTERPRISE)}
          >
            <img
              src="https://placehold.co/100x100"
              alt=""
              className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
            />
            <span className="text-center text-2xl font-bold">Enterprise</span>
          </div>
          <div
            className={`max-w-xs w-full flex flex-col justify-center ${clientType === ClientType.INDIVIDUAL ? 'border  border-blue-200' : ''}`}
            role="button"
            onClick={() => handleSelection(ClientType.INDIVIDUAL)}
          >
            <img
              src="https://placehold.co/100x100"
              alt=""
              className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
            />
            <span className="text-center text-2xl font-bold">Individual</span>
          </div>
        </div>
      </div>
    </div>
  );
};
