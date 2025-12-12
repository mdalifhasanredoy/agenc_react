import React from 'react'

const ContactInput = ({text,place}) => {
    return (
        <label className='text-base text-black font-inter font-medium ' htmlFor="name">{text}
            <input id='name' className='w-full border border-[#E8E8E8] rounded-md py-4 px-6 mt-2.5 mb-5 text-base placeholder:text-sm ' type="text" placeholder={place} />
        </label>
    )
}

export default ContactInput