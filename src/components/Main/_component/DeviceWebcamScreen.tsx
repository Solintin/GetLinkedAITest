import Webcam from 'react-webcam';
import { CameraOptions, useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import { useEffect } from 'react';
function DeviceWebcamScreen({ setIsFaceDetected, setBrightness }: { setIsFaceDetected: (v: boolean) => void; setBrightness: (v: number) => void }) {
    const width = 315;
    const height = 188;
    const { webcamRef, boundingBox, isLoading, detected, } = useFaceDetection({
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

    const calculateBrightness = (frame: ImageData) => {
        let totalBrightness = 0;
        const length = frame.data.length;

        for (let i = 0; i < length; i += 4) {
            const r = frame.data[i];
            const g = frame.data[i + 1];
            const b = frame.data[i + 2];
            const brightness = (r + g + b) / 3;
            totalBrightness += brightness;
        }

        return (totalBrightness / (length / 4)) / 255 * 100;
    };

    const analyzeFrame = () => {
        const video = (webcamRef as any)?.current?.video
        if (video && video.videoWidth > 0 && video.videoHeight > 0) {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const brightness = calculateBrightness(frame);
                setBrightness(brightness);
            }
        }
    };
    useEffect(() => {
        const interval = setInterval(analyzeFrame, 1000); // Analyze every second
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        setIsFaceDetected(detected)
    }, [detected, setIsFaceDetected])
    return (
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
    )
}

export default DeviceWebcamScreen
