import React from 'react'

function ConfirmationModal({ close }: { close: () => void }) {
  return (
    <div className='bg-[#00000061] z-50 fixed inset-0 grid place-content-center'>
      <div className='bg-gray-100 w-[472px] h-[314px] rounded-3xl relative'>
        <div className=' inset-x-0  text-white  flex justify-between items-center bg-primary-100 p-5 rounded-t-3xl'>
          <div>Start assessment</div>
          <button onClick={close} className='px-4 bg-[#F5F3FF33] outline-none border-0 rounded-lg py-1'>
            Close
          </button>
        </div>
        <div className='text-center pt-6 w-4/5 mx-auto'>
          <h2 className='text-primary-100 text-[20px] font-medium'>Proceed to start assessment</h2>
          <p className='text-[#675E8B] font-light pt-2'>
            Kindly keep to the rules of the assessment and
            sit up, stay in front of your camera/webcam and start your assessment.
          </p>
        </div>
        <div className='bottom-0 absolute inset-x-0 text-white flex justify-end rounded-2xl p-4 bg-white'>
          <button onClick={close} className='bg-primary-100 outline-none border-0 rounded-lg py-2 px-8'>
            Proceed
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal