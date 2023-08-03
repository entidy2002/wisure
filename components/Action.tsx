"use client"
import React from 'react'
import Image from 'next/image'
import { BsFillTelephoneFill } from "react-icons/bs"
import Link from 'next/link'
const Action = () => {
        return (
                <div className="sticky bottom-0 bg-white flex flex-col w-full md:w-[420px] items-center">
                        <div className="p-1 bg-[#FF1616] w-full text-center">
                                <h6 className="uppercase font-bold text-[#FBFB03] text-sm">hết đau nhức xương khớp sau 10 ngày</h6>
                        </div>
                        <div className="w-full flex items-center mt-2">
                                <div className="w-1/2">
                                        <Link href="tel:0367023785">
                                                <img className="w-full cursor-pointer" src="/hotline.png" alt="" />
                                        </Link>
                                </div>

                                <div className="w-1/2">
                                        <div className="cursor-pointer p-2 rounded-[18px] uppercase font-bold text-2xl bg-[#FF1616] flex justify-center text-white animation-zoom">nhận ưu đãi</div>
                                </div>
                        </div>

                </div>
        )
}

export default Action
