import { NextPage } from 'next';
import { ClientType, ClientNeeds } from '../../_enums';

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
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition-all duration-300"
          />
          <span className="text-center text-2xl font-bold">Website</span>
        </div>
        <div
          className={`max-w-xs w-full flex flex-col justify-center space-y-10 `}
          role="button"
          onClick={() => handleSelection(ClientNeeds.MOBILE_APP)}
        >
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition-all duration-300"
          />
          <span className="text-center text-2xl font-bold">Mobile App</span>
        </div>
        <div
          className={`max-w-xs w-full flex flex-col justify-center space-y-10 `}
          role="button"
          onClick={() => handleSelection(ClientNeeds.CONSULTING)}
        >
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition-all duration-300"
          />
          <span className="text-center text-2xl font-bold">Consulting</span>
        </div>
      </div>
    </div>
  );
};
