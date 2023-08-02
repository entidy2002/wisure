"use client"
import React from 'react'
import Image from 'next/image'
import { BsFillSendFill } from "react-icons/bs"
import { BiSolidCheckShield, BiSolidTruck } from "react-icons/bi"
import { MdPayment } from "react-icons/md"
const Footer = () => {
        return (
                <div className="bg-white border-t border-2">
                        <p className="uppercase font-bold text-2xl text-center text-blue-500">Sữa xương khớp wisure canxi</p>
                        <p className="uppercase font-bold text-2xl text-center text-red-500">CÔNG TY TNHH DƯỢC PHẨM WI</p>
                        <p className="px-8 font-bold">Địa chỉ: Số nhà 8, ngõ 164 Vương Thừa Vũ, Phường Khương Trung, Quận Thanh Xuân, TP. Hà Nội.</p>
                        <p className="px-8 font-bold">Hotline: 0367.023.785</p>
                        <p className="uppercase font-bold text-2xl text-center text-yellow-300 mt-5">CÔNG TY TNHH DƯỢC PHẨM WI</p>
                        <div className="flex flex-col gap-3 px-8">
                                <div className="flex items-center gap-4">
                                        <BiSolidCheckShield size="32" color="#004AAD" />
                                        <p className="flex-1 text-lg">Chính sách bảo mật</p>
                                </div>
                                <div className="flex items-center gap-4">
                                        <BsFillSendFill size="32" color="#004AAD" />
                                        <p className="flex-1 text-lg">Chính sách đối trả</p>
                                </div>
                                <div className="flex items-center gap-4">
                                        <MdPayment size="32" color="#004AAD" />
                                        <p className="flex-1 text-lg">Chính sách thanh toán</p>
                                </div>
                                <div className="flex items-center gap-4">
                                        <BiSolidTruck size="32" color="#004AAD" />
                                        <p className="flex-1 text-lg">Chính sách vận chuyển</p>
                                </div>
                        </div>
                </div>
        )
}

export default Footer
