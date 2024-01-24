import React from 'react'
import BpIcon from '../bpIcons/BpIcon'

const CardInfo = ({
  icon,
  title,
  subtitle,
}: {
  icon: string
  title: string
  subtitle: string
}) => {
  return (
    <div className='rounded-[10px] max-w-[400px] px-4 py-6 shadow-xl border-secondary border mb-4 border-solid lg:text-left'>
      <BpIcon iconName={icon} />
      <h2 className='my-5 font-semibold text-2xl'>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

export default CardInfo
