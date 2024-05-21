import React from 'react'

type Props = {
    title: string;
    Icon: React.ElementType;
    count: number;
    color?: string;
}

const CountCard = ({ title, count, Icon, color }: Props) => {
    return (
        <div className='flex justify-between items-center p-5 border rounded-md shadow-lg'>
            <div className="">
                <h1 className='text-3xl font-medium '>{count}</h1>
                <h6 className='text-md text-gray-600'>{title}</h6>
            </div>
            <div>
                <Icon size={30} color={color} />
            </div>
        </div>
    )
}

export default CountCard