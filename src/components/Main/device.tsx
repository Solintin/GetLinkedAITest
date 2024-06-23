import "react-circular-progressbar/dist/styles.css";

import { InternetSpeed } from "./_component/DeviceInternetSpeedCheck";
import { DeviceMicCheck } from "./_component/DeviceMicCheck";
import { useState } from "react";
import DeviceWebcamScreen from "./_component/DeviceWebcamScreen";
import { DeviceWebCamChecker } from "./_component/DeviceWebcamCheck";
import { DeviceLightingCheck } from "./_component/DeviceLightingCheck";


function Devices() {
    const [isFaceDetected, setIsFaceDetected] = useState(false)
    const [brightness, setBrightness] = useState(0);

    return (
        <div className='w-full mt-10 flex items-center space-x-6'>
            <DeviceWebcamScreen setIsFaceDetected={setIsFaceDetected} setBrightness={setBrightness} />
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-[200px] ">
                <DeviceWebCamChecker isFaceDetected={isFaceDetected} />
                <InternetSpeed />
                <DeviceMicCheck />
                <DeviceLightingCheck brightness={brightness} />
            </div>
        </div>
    )
}



export default Devices;

