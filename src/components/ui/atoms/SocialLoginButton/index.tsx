'use client'

import React from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa' // Ícones do Google e Facebook
import { AiOutlineMail } from 'react-icons/ai' // Ícone do Email
import { ButtonProps } from '../../shadcn/button'
import { Text } from '..'

interface thisProps extends ButtonProps {
    ui?: 'primary' | 'secondary'
    className?: string
}

export const SocialLoginButtons: React.FC<thisProps> = () => {
    return (
        <div className="flex gap-2">
            <button className="w-full h-12 bg-red-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition duration-200">
                <FaGoogle className="text-white" />
                <Text.Button>Google</Text.Button>
            </button>
            <button className="h-12 w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-200">
                <FaFacebook className="text-white" />
                <Text.Button>Facebook</Text.Button>
            </button>
        </div>
    )
}
