"use client"
import axios from "axios"
import React, { useState } from 'react'
import { Label, TextInput, Button } from 'flowbite-react';
import Image from 'next/image'
import { BsFillTelephoneFill } from "react-icons/bs"
const Form = () => {
        const [name, setName] = useState('')
        const [phone, setPhone] = useState('')
        const handleSubmit = (e: any) => {
                e.preventDefault()
                axios.post('https://script.google.com/macros/s/AKfycbx0NsCAB6UW2Mj2rDWOYqzuHFm0ctCHEE1__rPAdYBIGSqZss5_PkKmUypCIGXDQCQY8w/exec', {
                        name,
                        phone
                })
                        .then(() => {
                                console.log('succes');

                        })
                        .catch(err => {
                                alert()
                        })

        }
        return (
                <div className="w-full bg-[#F6D655] flex flex-col items-center px-4">
                        <p className="mt-4 font-bold uppercase text-blue-900 text-xl">Nhận tư vấn và báo giá tại đây</p>
                        <form className="flex w-full flex-col gap-2 py-4 px-8 justify-center" onSubmit={(e) => { handleSubmit(e) }}>
                                <div>
                                        <TextInput
                                                className="placeholder:italic"
                                                sizing="md"
                                                id="username"
                                                name="username"
                                                placeholder="Họ và Tên"
                                                required
                                                onChange={(e) => { setName(e.target.value); }}
                                        />
                                </div>
                                <div>

                                        <TextInput
                                                name="phone"
                                                type="number"
                                                sizing="md"
                                                id="phone"
                                                placeholder="Số điện thoại"
                                                required
                                                onChange={(e) => { setPhone(e.target.value); }}

                                        />
                                </div>
                                <Button className="mt-4" color="failure" type="submit">
                                        <span className="text-lg uppercase">Tư vấn</span>
                                </Button>
                                <p className="font-bold text-xl uppercase mt-2 text-end text-teal-800">Tổng đài tư vấn 24/24</p>
                        </form>
                </div>

        )
}

export default Form
