import { Danger, LampCharge } from "iconsax-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { cn } from "lib/utils"; import Success from "./success";


export const DeviceLightingCheck = ({ brightness }: { brightness: number }) => {
    console.log(brightness);
    return (
        <div className="rounded-[10px] bg-[#F5F3FF] px-12 py-3  grid place-content-center relative">
            <div className={cn(brightness > 50 ? "bg-primary-100" : "bg-orange-500", " rounded-full  flex items-center justify-center w-5 h-5 absolute top-0 right-0")}>
                {<LampCharge
                    size="10"
                    color="#ffffff"
                />}
            </div>




            {brightness < 50 ? (<div
                className={cn(
                    "bg-[#E6E0FF] rounded-full relative size-full flex  justify-start items-center p-3",
                    brightness < 50 && "bg-orange-200"
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
                            maxValue={100}
                            value={brightness}
                            text={''}
                        />
                    </div>
                    <Danger size="22" color="#f97316" variant="Bold" />
                </>

            </div>) :
                (
                    <Success />
                )}

            <h5 className="text-[10px] text-center font-light mt-1">Lighting</h5>
        </div>
    );
};
