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
      <p className="text-center font-bold text-3xl">Seeking</p>
      <div className="flex flex-col md:flex-row w-full gap-5 items-center justify-center">
        <div
          className={`max-w-xs w-full flex flex-col justify-center ${clientNeed === ClientNeeds.WEBSITE ? 'border  border-blue-200' : ''}`}
          role="button"
          onClick={() => handleSelection(ClientNeeds.WEBSITE)}
        >
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
          <span className="text-center text-2xl font-bold">Website</span>
        </div>
        <div
          className={`max-w-xs w-full flex flex-col justify-center ${clientNeed === ClientNeeds.MOBILE_APP ? 'border  border-blue-200' : ''}`}
          role="button"
          onClick={() => handleSelection(ClientNeeds.MOBILE_APP)}
        >
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
          <span className="text-center text-2xl font-bold">Mobile App</span>
        </div>
        <div
          className={`max-w-xs w-full flex flex-col justify-center ${clientNeed === ClientNeeds.CONSULTING ? 'border  border-blue-200' : ''}`}
          role="button"
          onClick={() => handleSelection(ClientNeeds.CONSULTING)}
        >
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
          <span className="text-center text-2xl font-bold">Consulting</span>
        </div>
      </div>
    </div>
  );
};
