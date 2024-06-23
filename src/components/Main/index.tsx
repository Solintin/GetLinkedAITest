import { useState } from 'react'
import Devices from './device'
import ConfirmationModal from './_component/ConfimationModal'

function Main() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='mx-auto max-w-5xl bg-white rounded-xl p-10 mt-8'>
            <h2>System check</h2>
            <p className='text-justify text-[#4A4A68] mt-4 font-light tracking-[-0.24px]'>We utilize your camera image to ensure fairness for all participants, and we also employ both your camera and microphone for a video questions where you will be prompted to record a response using your camera or webcam, so it's essential to verify that your camera and microphone are functioning correctly and that you have a stable internet connection. To do this, please position yourself in front of your camera, ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears, nose, and lips. You can initiate a 5-second recording of yourself by clicking the button below.</p>
            <Devices />
            {isOpen && <ConfirmationModal close={() => setIsOpen(!isOpen)} />}
            <button onClick={() => setIsOpen(true)} className='text-white bg-primary-100 p-3 mt-10 rounded-lg'> Take picture and continue</button>
        </div>
    )
}

export default Main
