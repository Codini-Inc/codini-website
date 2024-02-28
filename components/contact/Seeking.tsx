export const Seeking = () => {
    return (
        <div className="space-y-10">
        <p className="text-center font-bold text-3xl">Seeking</p>
        <div className="flex flex-wrap gap-5 items-center justify-center">
            <div className="max-w-xs w-full flex flex-col justify-center">
            <img
                src="https://placehold.co/100x100"
                alt=""
                className="object-cover w-full h-full rounded-full"
            />
            <span className="text-center text-2xl font-bold">Website</span>
            </div>
            <div className="max-w-xs w-full flex flex-col justify-center">
            <img
                src="https://placehold.co/100x100"
                alt=""
                className="object-cover w-full h-full rounded-full"
            />
            <span className="text-center text-2xl font-bold">Mobile App</span>
            </div>
            <div className="max-w-xs w-full flex flex-col justify-center">
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
}