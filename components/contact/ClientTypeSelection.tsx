import { FC, useEffect } from 'react';
import { ClientType, ClientNeeds } from '../../_enums';
import { useState } from 'react';
import Image from 'next/image';

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
    <div className="w-full step h-full">
      <div className="space-y-10 w-full mt-20">
        <p className="text-center text-4xl font-semibold ">YOU'RE AN</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-14">
          <div
            className={`max-w-xs w-full flex flex-col justify-center space-y-10`}
            role="button"
            onClick={() => handleSelection(ClientType.ENTERPRISE)}
          >
            <div className=" bg-gradient-to-t from-fuchsia-700 to-blue-500 p-1 rounded-full">
              <div className="bg-white rounded-full">
                <Image
                  src="/images/entreprise.png"
                  height={200}
                  width={200}
                  alt=""
                  className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
                />
              </div>
            </div>
            <span className="text-center text-2xl ">Enterprise</span>
          </div>
          <div
            className={`max-w-xs w-full flex flex-col justify-center space-y-10`}
            role="button"
            onClick={() => handleSelection(ClientType.INDIVIDUAL)}
          >
            <div className=" bg-gradient-to-t from-fuchsia-700 to-blue-500 p-1 rounded-full">
              <div className="bg-white rounded-full">
                <Image
                  src="/images/indvidual.png"
                  height={200}
                  width={200}
                  alt=""
                  className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
                />
              </div>
            </div>
            <span className="text-center text-2xl">Individual</span>
          </div>
        </div>
      </div>
    </div>
  );
};