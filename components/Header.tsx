"use client"
import React from 'react'
import { Label, TextInput, Button } from 'flowbite-react';
import Image from 'next/image'
import { BsFillTelephoneFill } from "react-icons/bs"

import Form from "~/components/Form"
const Header = () => {
        return (
                <div className="bg-white">
                        <img className="w-full mx-auto" src="/logo.png" alt="" />
                        <Form />
                </div>
        )
}

export default Header
