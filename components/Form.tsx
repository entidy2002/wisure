"use client"
import React from 'react'
import { Label, TextInput, Button } from 'flowbite-react';
import Image from 'next/image'
import { BsFillTelephoneFill } from "react-icons/bs"
const Form = () => {
        return (
                <div className="w-full bg-[#F6D655] flex flex-col items-center px-4">
                        <p className="mt-4 font-bold uppercase text-blue-900 text-xl">Nhận tư vấn và báo giá tại đây</p>
                        <form className="flex w-full flex-col gap-2 py-4 px-8 justify-center">
                                <div>
                                        <TextInput
                                                className="placeholder:italic"
                                                sizing="md"
                                                id="username"
                                                placeholder="Họ và Tên"
                                                required
                                        />
                                </div>
                                <div>

                                        <TextInput

                                                type="number"
                                                sizing="md"
                                                id="phone"
                                                placeholder="Số điện thoại"
                                                required
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
