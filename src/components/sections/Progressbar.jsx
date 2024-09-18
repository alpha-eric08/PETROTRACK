import React from 'react'

const Progressbar = () => {
  return (
    <div className="flex flex-col gap-3">
        <div>
            <label className='font-medium text-sm'>Seamless product inventory management</label>
            <progress min={0} className='w-full' max={100} value={50}></progress>
        </div>
        <div>
            <label className='font-medium text-sm'>Efficiency and accurate sales tracking</label>
            <progress min={0} className='w-full' max={100} value={30}></progress>
        </div>
        <div>
            <label className='font-medium text-sm'>User-friendly interface</label>
            <progress min={0} className='w-full' max={100} value={80}></progress>
        </div>
        <div>
            <label className='font-medium text-sm'>Dedicated support team</label>
            <progress min={0} className='w-full' max={100} value={60}></progress>
        </div>
    </div>

  )
}

export default Progressbar
    
  