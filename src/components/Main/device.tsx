import { MonitorRecorder, Wifi, Danger } from "iconsax-react";
import { ReactInternetSpeedMeter } from "react-internet-meter";
//import 'react-internet-speed-meter/dist/index.css'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  MediaPermissionsError,
  MediaPermissionsErrorType,
  requestMediaPermissions,
} from "mic-check";
import { toast } from "react-toastify";
import { useState } from "react";
import { cn } from "lib/utils";

const handleMicCheck = () => {
  requestMediaPermissions()
    .then(() => {
      // can successfully access camera and microphone streams
      // DO SOMETHING HERE
      toast.success("Microphone Working fine");
    })
    .catch((err: MediaPermissionsError) => {
      const { type, name, message } = err;
      console.log(name);

      if (type === MediaPermissionsErrorType.SystemPermissionDenied) {
        toast.error(message);
        // browser does not have permission to access camera or microphone
      } else if (type === MediaPermissionsErrorType.UserPermissionDenied) {
        toast.error(message);

        // user didn't allow app to access camera or microphone
      } else if (type === MediaPermissionsErrorType.CouldNotStartVideoSource) {
        toast.error(message);
        // camera is in use by another application (Zoom, Skype) or browser tab (Google Meet, Messenger Video)
        // (mostly Windows specific problem)
      } else {
        toast.error("Microphone can not be accessed");

        // not all error types are handled by this library
      }
    });
};

function Devices() {
  return (
    <div className="w-full mt-10 flex items-center space-x-6">
      <div className="w-[315px] h-[188px] rounded-[10px] border border-primary-100"></div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-[200px] ">
        <SingleDevice />
        <InternetSpeed />
        <SingleDevice />
        <SingleDevice />
      </div>
    </div>
  );
}
const SingleDevice = () => {
  return (
    <div className="rounded-[10px] bg-[#F5F3FF] px-12 py-3  grid place-content-center relative">
      <div className="absolute size-5 rounded-full bg-primary-100 top-0 right-0"></div>
      <div className="bg-[#E6E0FF] rounded-full size-full flex  justify-start items-center p-3">
        <MonitorRecorder
          size="22"
          color="#755AE2"
          className="font-bold"
          onClick={handleMicCheck}
        />
      </div>
      <h5 className="text-[10px] text-center font-light">Webcam</h5>
    </div>
  );
};

const InternetSpeed = () => {
  const [wifiSpeed, setWifiSpeed] = useState<number>(0);

  return (
    <div
      className={cn(
        "rounded-[10px] bg-[#F5F3FF] px-12 py-3  grid place-content-center relative",
        wifiSpeed < 1 && "bg-orange-100"
      )}
    >
      {wifiSpeed > 1 ? (
        <div className="absolute w-5 h-5 rounded-full bg-primary-100 top-0 right-0"></div>
      ) : (
        <div className="bg-orange-500 rounded-full text-white flex items-center justify-center w-5 h-5 absolute top-0 right-0">
          <Wifi size="16" color="#ffffff" className="font-bold" />
        </div>
      )}
      <div
        className={cn(
          "bg-[#E6E0FF] rounded-full relative size-full flex  justify-start items-center p-3",
          wifiSpeed < 1 && "bg-orange-200"
        )}
      >
         
        {wifiSpeed < 1 ? (
            <>
         <div className="w-full inset-0 h-full absolute z-10">
          <CircularProgressbar
          styles={buildStyles({
            pathColor: "#f97316",
            trailColor: "#fed7aa",
            textColor: "black",
            textSize: "50px",
            
          })}
          strokeWidth={5}
          minValue={0}
          maxValue={1}
          value={wifiSpeed}
          text={''}
        />
          </div>
         <Danger size="32" color="#f97316" className="font-bold" />
            </>
         
        ) : (
          <Wifi size="22" color="#755AE2" className="font-bold" />
        )}
        <ReactInternetSpeedMeter
          // txtSubHeading="Internet is too slow"
          outputType="empty"
          // txtMainHeading="Opps..."
          pingInterval={4000} // milliseconds
          thresholdUnit="megabyte"
          threshold={1} /// MB/sec, below 1mb per sec shows low network
          imageUrl="https://res.cloudinary.com/dkdrbjfdt/image/upload/v1718833967/w8fcvsztvak416tmny45.webp"
          downloadSize="94924" //bytes
          callbackFunctionOnNetworkDown={(speed) =>
            console.log(`Internet speed is down ${speed}`)
          }
          callbackFunctionOnNetworkTest={(speed) => setWifiSpeed(speed)}
        />
      </div>
      <h5 className="text-[10px] text-center font-light">Internet Speed</h5>
    </div>
  );
};

export default Devices;

/**
<Danger size="32" color="#FF8A65"/>
 */
