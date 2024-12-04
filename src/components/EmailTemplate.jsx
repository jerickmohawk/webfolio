import React from 'react'

const EmailTemplate = ({firstname, service}) => {
  return (
    <div className='flex flex-col gap-4'>
        <h3>Dear {firstname},</h3>
        <p >Thank you for reaching out regarding your {service} needs. I am excited to learn more about your project and discuss how I can assist you.</p>
        <p >You can expect a detailed response from me within the next 24 hours. I look forward to discussing your project and exploring how I can assist you.</p>
        <p >Thank you for your patience.</p>
        <p>Best regards,</p>
        <div className='font-primary leading-normal'>
            Jerick Cabarloc <br />
            jerickcabarloc43@gmail.com <br />
            +1(365) 476-7119
        </div>
    </div>
  )
}

export default EmailTemplate