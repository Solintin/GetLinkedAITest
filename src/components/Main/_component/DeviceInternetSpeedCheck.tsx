import { Wifi, Danger } from "iconsax-react";
import { ReactInternetSpeedMeter } from "react-internet-meter";
//import 'react-internet-speed-meter/dist/index.css'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { cn } from "lib/utils";
import { useEffect, useState } from 'react';
import Success from "./success";

export const InternetSpeed = () => {
    const [wifiSpeed, setWifiSpeed] = useState<number>(0);
    console.log(wifiSpeed);
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    const updateNetworkStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', updateNetworkStatus);
        window.addEventListener('offline', updateNetworkStatus);

        return () => {
            window.removeEventListener('online', updateNetworkStatus);
            window.removeEventListener('offline', updateNetworkStatus);
        };
    }, []);


    return (
        <div
            className={cn(
                "rounded-[10px] bg-[#F5F3FF] px-12 py-3  w-full flex flex-col items-center relative",
                wifiSpeed < 1 && "bg-[#F5F3FF]"
            )}
        >
            {
                <div className={cn(wifiSpeed > 1 && isOnline ? "bg-primary-100" : "bg-orange-500", " rounded-full text-white flex items-center justify-center w-5 h-5 absolute top-0 right-0")}>
                    <Wifi size="10" color="#ffffff" variant="Bold" />
                </div>
            }
            {wifiSpeed < 1 ? (<div
                className={cn(
                    "bg-[#E6E0FF] rounded-full relative h-12 w-12 flex  justify-start items-center p-3",
                    wifiSpeed < 1 && "bg-orange-200"
                )}
            >


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
                    <Danger size="22" color="#f97316" variant="Bold" />
                </>


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
            </div>) :
                (
                    <Success />
                )}
            <h5 className="text-[9px] text-center font-light mt-1 whitespace-nowrap">Internet Speed</h5>
        </div>
    );
};