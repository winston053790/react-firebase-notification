import React from 'react'

export interface LoadingProps {
  label: string
}

const Loading: React.FC<LoadingProps> = ({label}) => (
  <div className='flex flex-col h-full overflow-auto bg-white rounded-t-3xl items-center justify-center px-10'>
    <p className='text-sm font-semibold text-center mb-4'>{label}</p>
  </div>
)


export default Loading