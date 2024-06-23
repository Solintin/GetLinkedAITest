import { Danger, Microphone } from "iconsax-react";
import "react-circular-progressbar/dist/styles.css";
import {
    MediaPermissionsError,
    MediaPermissionsErrorType,
    requestMediaPermissions
} from 'mic-check';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import Success from "./success";
import { cn } from "lib/utils";



export const DeviceMicCheck = () => {

    const [isError, setIsError] = useState(true)
    const handleMicCheck = () => {
        requestMediaPermissions()
            .then(() => {
                // can successfully access camera and microphone streams
                // DO SOMETHING HERE
                setIsError(false)
            })
            .catch((err: MediaPermissionsError) => {
                const { type, name, message } = err;
                console.log(name);
                setIsError(true)
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

    useEffect(() => {
        handleMicCheck()
    }, [])

    return (
        <div className="rounded-[10px] bg-[#F5F3FF] px-12 py-3  flex flex-col justify-center items-center relative">
            <div className={cn(!isError ? "bg-primary-100" : "bg-orange-500", " rounded-full  flex items-center justify-center w-5 h-5 absolute top-0 right-0")}>
                {<Microphone
                    size="10"
                    color="#ffffff"
                />}
            </div>

            {isError ? <div className="bg-orange-200 rounded-full h-12 w-12 flex  justify-start items-center p-3">
                <Danger
                    size="22"
                    color="#f97316"
                    variant="Bold"
                /></div> : <Success />
            }
            <h5 className="text-[10px] text-center font-light mt-1">Microphone</h5>
        </div>
    );
};




