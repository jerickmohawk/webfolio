'use client'

import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import { ThemeContext } from '@/provider/ThemeProvider';
// ui imports

import { Button } from '@/components/ui/button';
import {Input} from '@/components/ui/input'
import { IoIosSend } from "react-icons/io";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa'
import { MdClose } from "react-icons/md";
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';
import { Textarea } from '@/components/ui/textarea';
import { ToastContainer, toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import 'react-toastify/dist/ReactToastify.css';
const info = [
    {
        icon: <FaEnvelope />,
        name: 'Email',
        value: 'jerick.cabarloc@mohawkcollege.ca'
    },
    {
        icon: <FaMapMarkedAlt />,
        name: 'Address',
        value: 'Hamilton, Ontario Canada'
    },
]

const Loader = (loading) =>{
    const {theme} = useContext(ThemeContext)
    const color = theme === 'dark' ? 'white' : 'black'
    return(
        <ClipLoader className='-translate-x-1' size={20} loading={loading} color={color} />
    )
}

const Contact = () => {
    const [isLoading, setLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const [capVal, setCapVal] = useState(null)
    const [showCap, setShowCap] = useState(false)
    const [data, setData] = useState(null)

    const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
    } = useForm()

    // 6LdO_BsqAAAAAHWxu1R05eX5o8Q9G05iRxdpK997

    const sendEmail = async () =>{
        try {
            setLoading(true)
            await fetch('/api/send',{
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json',
                },
                body: JSON.stringify(data)
            })
        } catch (error) {
            throw new Error(error)
        }finally{
            toast.success('Email sent')
            setLoading(false)
            reset()
            setSelectedOption('')
        }
    }

    const  onSubmit = async (data) => {
        data.service = selectedOption
        setData(data)
        isValid && setShowCap(true)
    }   
  return (
    <section className='py-6'>
        {
            showCap &&
            <div className='z-50 transition  duration-300 bg-black bg-opacity-50 flex justify-center items-center fixed inset-0 leading-4'>
                <div className='h-[200px] w-[380px] bg-white absolute flex items-center justify-center rounded-lg'>
                    <MdClose onClick={()=>setShowCap(false)} className='text-2xl absolute top-4 right-4 cursor-pointer text-black' />
                    <ReCAPTCHA 
                        sitekey='6LfqeB8qAAAAABKol2bd3MUV_HfIePHPtGgEbzIA'
                        onChange={val => 
                            {
                                setCapVal(val), 
                                setTimeout(()=>{
                                    setShowCap(false)
                                    sendEmail()
                                },[1000])
                            }}  
                    />
                </div>
            </div>
        }
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row gap-12  '>
                {/* form */}
                <div className='lg:h-1/2 order-2 lg:order-none'>
                    <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col gap-6 p-10 rounded-md dark:bg-darkBg bg-lightBg`}>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-4xl font-primary text-accent'>Send a Message</h3>
                            <div className='w-32 border-b-2 border-b-accent'></div>
                        </div>
                        {/* input */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            <Input className={`${errors.firstname?.type ===  'required' ? 'placeholder:text-red-500' : ''}`} type='firstname' placeholder={`${errors.firstname?.type ===  'required' ?  'Firstname required!' :  'Firstname '}`} 
                                {...register("firstname", { required: true })}
                            />
                            <Input className={`${errors.lastname?.type ===  'required' ? 'placeholder:text-red-500' : ''}`} type='lastname' placeholder={`${errors.lastname?.type ===  'required' ?  'Lastname required!' :  'Lastname '}`} 
                                {...register("lastname", { required: true })}
                            />
                            <Input className={`${errors.email?.type ===  'required' ? 'placeholder:text-red-500' : ''}`} type='email' placeholder={`${errors.email?.type ===  'required' ?  'Email required!' :  'Email '}`} 
                                {...register("email", { required: true })}
                            />
                            <Input className={`${errors.number?.type ===  'required' ? 'placeholder:text-red-500' : ''}`} type='number' placeholder={`${errors.number?.type ===  'required' ?  'Phone required!' :  'Phone number'}`} 
                                {...register("number", { required: true })}
                            />
                        </div>
                        {/* select */}
                        <Select 
                            value={selectedOption}
                            onValueChange={(value) =>{
                                setSelectedOption(value)
                            }}
                            {...register('service')}
                            type='service'
                            >
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Select a service'></SelectValue>
                            </SelectTrigger>
                            <SelectContent type='service'>
                                <SelectGroup >
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value='Web Development'>Web Development</SelectItem>
                                    <SelectItem value='Mobile Development'>Mobile Development</SelectItem>
                                    <SelectItem value='Graphic Design'>Graphic Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>   
                        
                        {/* textarea */}
                        <Textarea 
                            className={`${errors.message?.type ===  'required' ? 'placeholder:text-red-500' : ''} h-[220px]`}
                            placeholder={`${errors.message?.type ===  'required' ?  'Message field is empty!' :  'Type your message here!'}`} 
                            type='message'
                            {...register("message", {required: true})}
                        />
                        <Button disabled={isLoading} type='submit' variant='send' className='w-40 mx-auto gap-2'>
                            {isLoading ? <Loader loading={isLoading} /> : <><span>Send</span> <IoIosSend className='text-xl' /> </>  }</Button>
                        <ToastContainer />
                    </form>
                </div>
                {/* info */}
                <div className='flex-1 flex flex-col gap-4  order-1 lg:order-none mb-8 lg:mb-0'>
                    <div className='flex  flex-col gap-2'>
                        <h3 className='text-3xl lg:text-4xl font-primary text-accent'>Let&apos;s work together.</h3>
                        <p className='text-placeholder'>Excited to bring my skills to your team and support your company&apos;s growth. Let&apos;s connect to discuss how I can contribute!</p>
                    </div>
                    <ul className='flex flex-col gap-10'>
                        {
                            info.map((item, index)=>{
                                return(
                                    <li 
                                        key={index}
                                        className='flex items-center gap-6 font-primary'
                                        >
                                        <div className='w-12 h-12 lg:w-18 lg:h-18 dark:bg-darkBg bg-lightBg rounded-sm text-accent flex items-center justify-center'>
                                            <div className='text-[24px]'>{item.icon}</div>
                                        </div>
                                        <div>
                                            <p>{item.name}</p>
                                            <h3>{item.value}</h3>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact