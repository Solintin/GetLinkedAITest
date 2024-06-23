import { MonitorRecorder } from "iconsax-react";
import Success from "./success";


export const DeviceWebCamChecker = ({ isFaceDetected }: { isFaceDetected?: boolean }) => {
    return (
        <div className="rounded-[10px] bg-[#F5F3FF] px-12 py-3  grid place-content-center relative">
            <div className="absolute h-5 w-5 rounded-full grid place-content-center bg-primary-100 top-0 right-0">
                {isFaceDetected && <MonitorRecorder
                    size="10"
                    color="#ffffff"
                />}
            </div>
            {!isFaceDetected ? <div className="bg-[#E6E0FF] rounded-full size-full flex  justify-start items-center p-3">
                <MonitorRecorder
                    size="22"
                    color="#755AE2"
                />
            </div> : <Success />}
            <h5 className="text-[10px] text-center font-light mt-1">Webcam</h5>
        </div>
    );
};
