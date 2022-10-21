/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Nomineeinformation() {
  return (
    <div className='grid grid-cols-2 gap-10 pl-[20rem] mt-10'>
    <div className=''>
    <div>
        <div className='flex gap-3 items-center'>
        <img src="/share/offshoreFormation.svg" alt="" />
        <h2 className='text-2xl font-medium'>Overview</h2>
        </div>
        <p className='text-base bg-text-dark py-1'>We will provide you with a copy of the nominee’s passport and proof of their address.</p>
        <div className='flex pt-5'>
        <div className='w-1/6'>
            <div className=''>
            <img src="/share/icon-power.svg" alt=""  className='oneibncclud-icon'/>
            </div>
        </div>
        <div className='w-5/6'>
            <h2 className='pb-3 text-lg font-medium'>Power of attorney for nominee director (with apostille)</h2>
            <p className='text-sm bg-text-dark'>Your company’s rights will be protected under a power of attorney. This will certify that you have full control of the company and the nominee director only represents you. All actions made by the nominee director will be taken under this contract until it ends. Then all rights will revert back to you and the nominee can no longer act on your behalf.</p>
        </div>
        </div>
        <div className='flex pt-5'>
        <div className='w-1/6'>
            <div className=''>
            <img src="/share/icon-declaraton.svg" alt=""  className='oneibncclud-icon'/>
            </div>
        </div>
        <div className='w-5/6'>
            <h2 className='pb-3 text-lg font-medium'>Declaration of trust for nominee shareholder</h2>
            <p className='text-sm bg-text-dark'>If you appoint a nominee shareholder, you will need to protect your rights to your shares. Issuing a declaration of trust without any loopholes helps you to confirm your full ownership of your shares while the nominee represents you. </p>
            <p className='text-sm bg-text-dark pt-3'>To help you understand, the picture below shows the structure.</p>
        </div>
        </div>
    </div>
    </div>
   <div className='w-full'>
    <img src="/share/nominee-overview.png" alt="" />
   </div>
</div>
    
  )
}

export default Nomineeinformation