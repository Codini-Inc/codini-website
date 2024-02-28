import { FC } from "react";
import { ClientType } from "../../pages/contact";

interface ClientTypeSelectionProps {
  clientType: ClientType;
  setClientType: (clientType: ClientType) => void;
}

export const ClientTypeSelection: FC<ClientTypeSelectionProps> = ( {clientType, setClientType}) => {

  console.log(clientType)
  
    return (
        <div className="space-y-10">
          <p className="text-center font-bold text-3xl">Are you </p>
          <div className="flex items-center justify-center gap-10">
            <div className={`max-w-xs w-full flex flex-col justify-center ${clientType === "enterprise"  ? "border  border-blue-200" : ""}`}  
              role="button"
              onClick={() => setClientType('enterprise')}
            >
              <img
                src="https://placehold.co/100x100"
                alt=""
                className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
              />
              <span className="text-center text-2xl font-bold">Enterprise</span>
            </div>
            <div className={`max-w-xs w-full flex flex-col justify-center ${clientType === "individual"  ? "border  border-blue-200" : ""}`}  role="button"

              onClick={() => setClientType("individual")}>
              <img
                src="https://placehold.co/100x100"
                alt=""
                className="object-cover w-full h-full rounded-full hover:scale-[1.1] transition duration-300 ease-in-out"
              />
              <span className="text-center text-2xl font-bold">Indivisual</span>
            </div>
          </div>
        </div>
    )
}