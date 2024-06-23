import { Danger, MonitorRecorder } from "iconsax-react";
import { cn } from "lib/utils";
import Success from "./success";


export const DeviceWebCamChecker = ({ isFaceDetected }: { isFaceDetected?: boolean }) => {
    return (
        <div className="rounded-[10px] bg-[#F5F3FF] px-12 py-3  grid place-content-center relative">
            <div className={cn(isFaceDetected ? "bg-primary-100" : "bg-orange-500", " rounded-full  flex items-center justify-center w-5 h-5 absolute top-0 right-0")}>
                {<MonitorRecorder
                    size="10"
                    color="#ffffff"
                />}
            </div>
            {!isFaceDetected ? (<div
                className={cn(
                    " rounded-full relative h-12 w-12 flex  justify-start items-center p-3",
                    !isFaceDetected ? "bg-orange-200" : "bg-[#E6E0FF]"
                )}
            >
                <>
                    <Danger size="22" color="#f97316" variant="Bold" />
                </>

            </div>) : <Success />}
            <h5 className="text-[10px] text-center font-light mt-1">Webcam</h5>
        </div>
    );
};
