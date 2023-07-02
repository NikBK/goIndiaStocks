import Image from 'next/image';
import React from 'react'

const FeaturedCompany = ({ company }) => {
    return (
        <li className='mx-2.5 hover:cursor-pointer'>
            <Image
                src={company.url}
                alt="featured company logo"
                width={100}
                height={100}
                className='h-12 max-w-max'
            />
        </li>
    )
}

export default FeaturedCompany;
