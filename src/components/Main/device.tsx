import { MonitorRecorder } from 'iconsax-react'
import React from 'react'





function Devices() {
    return (
        <div className='w-full mt-10 flex items-center space-x-6'>
            <div className="w-[315px] h-[188px] rounded-[10px] border border-primary-100">

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
                />
            </div>
            <h5 className='text-[10px] text-center font-light'>Webcam</h5>
        </div>
    )
}
export default Devices
