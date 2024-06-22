import Logo from '../../assets/logo.svg'
import { TimerStart, Eye } from 'iconsax-react';


function TobBar() {
    return (
        <div className='layout bg-white pt-6 pb-5'>
            <div className="container w-full mx-auto px-10 ">
                <div className="items-center flex justify-between">

                    <LeftComp
                        imgSrc={Logo}
                        header="Frontend developer"
                        title='Skill assessment test'
                    />
                    <RightComp />
                </div>
            </div>
        </div>
    )
}

const LeftComp = ({ imgSrc, header, title }: { imgSrc?: string, header?: string, title?: string }) => {
    return (
        <div>
            <div className='flex items-center space-x-4'>
                <div>{imgSrc && <img src={imgSrc} alt="" />}</div>
                <div>
                    {header && <h5 className='text-lg font-medium'>{header}</h5>}
                    {title && <h5 className='text-[#8C8CA1]'>{title}</h5>}
                </div>

            </div>
        </div>
    )
}
const RightComp = () => {
    return (
        <div className='flex space-x-2 items-center'>
            <div className="rounded-md bg-[#ECE8FF] py-2 pl-3 pr-6 w-full flex items-center space-x-3">
                <div className='w-6 h-6 rounded-full grid place-content-center p-4 bg-[#E6E0FF]'>
                    <TimerStart
                        size="22"
                        color="#755AE2"
                        className='font-bold'
                    />
                </div>
                <div className='flex items-center text-lg text-[#755AE2]'>
                    <span className='font-bold text-xl mr-1'>29:10</span><span className='text-sm'>time left</span>
                </div>
            </div>
            <div className='w-6 h-6 rounded-full grid place-content-center p-4 bg-[#E6E0FF]'>
                <Eye
                    size="20"
                    color="#755AE2"
                    className='font-bold'
                />
            </div>
        </div>
    )
}

export default TobBar
