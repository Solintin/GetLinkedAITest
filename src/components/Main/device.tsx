import { MonitorRecorder } from 'iconsax-react'

import {
    MediaPermissionsError,
    MediaPermissionsErrorType,
    requestMediaPermissions
} from 'mic-check';
import { toast } from 'react-toastify';
import Webcam from 'react-webcam';
import { CameraOptions, useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';


const handleMicCheck = () => {

    requestMediaPermissions()
        .then(() => {
            // can successfully access camera and microphone streams
            // DO SOMETHING HERE
            toast.success("Microphone Working fine")
        })
        .catch((err: MediaPermissionsError) => {
            const { type, name, message } = err;
            console.log(name);

            if (type === MediaPermissionsErrorType.SystemPermissionDenied) {
                toast.error(message)
                // browser does not have permission to access camera or microphone
            } else if (type === MediaPermissionsErrorType.UserPermissionDenied) {
                toast.error(message)

                // user didn't allow app to access camera or microphone
            } else if (type === MediaPermissionsErrorType.CouldNotStartVideoSource) {
                toast.error(message)
                // camera is in use by another application (Zoom, Skype) or browser tab (Google Meet, Messenger Video)
                // (mostly Windows specific problem)
            } else {
                toast.error("Microphone can not be accessed")

                // not all error types are handled by this library
            }
        });
}



function Devices() {
    const width = 315;
    const height = 188;
    const { webcamRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
        faceDetectionOptions: {
            model: 'short',
        },
        faceDetection: new FaceDetection.FaceDetection({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
        }),
        camera: ({ mediaSrc, onFrame }: CameraOptions) =>
            new Camera(mediaSrc, {
                onFrame,
                width,
                height,
            }),
    });
    return (
        <div className='w-full mt-10 flex items-center space-x-6'>
            <div className="w-[315px] h-[188px] relative rounded-[10px] border border-primary-100">
                {boundingBox.map((box, index) => (
                    <div
                        key={`${index + 1}`}
                        style={{
                            border: '2px solid lightgreen',
                            position: 'absolute',
                            borderRadius: "10px",
                            top: `${box.yCenter * 100}%`,
                            left: `${box.xCenter * 100}%`,
                            width: `${box.width * 100}%`,
                            height: `${box.height * 100}%`,
                            zIndex: 1,
                        }}
                        className="rounded-[10px]"
                    />
                ))}
                <Webcam
                    ref={webcamRef}
                    forceScreenshotSourceSize
                    style={{
                        height,
                        width,
                        position: 'absolute',
                        borderRadius: "10px",
                    }}
                />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-[200px] ">
                <SingleDevice />
                <SingleDevice />
                <SingleDevice />
                <SingleDevice />
            </div>
        </div>
    )
}
const SingleDevice = () => {
    return (
        <div className='rounded-[10px] bg-[#F5F3FF] px-12 py-3  grid place-content-center relative'>
            <div className="absolute size-5 rounded-full bg-primary-100 top-0 right-0"></div>
            <div className="bg-[#E6E0FF] rounded-full size-full flex  justify-start items-center p-3">
                <MonitorRecorder
                    size="22"
                    color="#755AE2"
                    className='font-bold'
                    onClick={handleMicCheck}
                />
            </div>
            <h5 className='text-[10px] text-center font-light'>Webcam</h5>
        </div>
    )
}
export default Devices
