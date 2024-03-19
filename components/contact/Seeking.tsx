import { NextPage } from 'next';
import { ClientType, ClientNeeds } from '../../_enums';
import Image from 'next/image';

interface SeekingProps {
  setClientNeed: (clientNeed: ClientNeeds) => void;
  clientNeed: ClientNeeds | null;
  nextStep: () => void;
}

export const Seeking: NextPage<SeekingProps> = ({
  setClientNeed,
  clientNeed,
  nextStep,
}) => {
  const handleSelection = (type: ClientNeeds) => {
    setClientNeed(type);
    nextStep();
  };

  return (
    <div className="space-y-10 w-full  mx-auto step mt-20">
      <p className="text-center text-5xl font-semibold">Seeking</p>
      <div className="flex flex-col md:flex-row w-full gap-10 items-center justify-center">
        <div
          className={`max-w-xs w-full flex flex-col justify-center space-y-10  `}
          role="button"
          onClick={() => handleSelection(ClientNeeds.WEBSITE)}
        >
                      <div className=" bg-gradient-to-t from-fuchsia-700 to-blue-500 p-1 rounded-full">
              <div className="bg-white rounded-full">
             <Image
                  src="/images/website.png"
                  height={200}
                  width={200}
                  alt=""
                  className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
                />
           </div>
            </div>
          <span className="text-center text-2xl">Website</span>
        </div>
        <div
          className={`max-w-xs w-full flex flex-col justify-center space-y-10 `}
          role="button"
          onClick={() => handleSelection(ClientNeeds.MOBILE_APP)}
        >
                      <div className=" bg-gradient-to-t from-fuchsia-700 to-blue-500 p-1 rounded-full">
              <div className="bg-white rounded-full">
           <Image
                  src="/images/mobile-app.png"
                  height={200}
                  width={200}
                  alt=""
                  className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
                />
                 </div>
            </div>
          <span className="text-center text-2xl">Mobile App</span>
        </div>
        <div
          className={`max-w-xs w-full flex flex-col justify-center space-y-10 `}
          role="button"
          onClick={() => handleSelection(ClientNeeds.CONSULTING)}
        >
            <div className=" bg-gradient-to-t from-fuchsia-700 to-blue-500 p-1 rounded-full">
              <div className="bg-white rounded-full">
           <Image
                  src="/images/consultancy.png"
                  height={200}
                  width={200}
                  alt=""
                  className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
                />
                  </div>
            </div>
          <span className="text-center text-2xl">Consultancy</span>
        </div>
      </div>
    </div>
  );
};
