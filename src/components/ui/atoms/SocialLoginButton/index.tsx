'use client'

import React from 'react'
import { FaFacebook } from 'react-icons/fa' // Ícones do Google e Facebook
import { FcGoogle } from 'react-icons/fc' // Ícone do Email
import { ButtonProps } from '../../shadcn/button'
import { Text } from '..'

interface thisProps extends ButtonProps {
    ui?: 'primary' | 'secondary'
    className?: string
}

export const SocialLoginButtons: React.FC<thisProps> = () => {
    return (
        <div className="flex gap-2">
            <button className="w-full h-12 border border-gray py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200">
                <FcGoogle />
                <Text.Button>Google</Text.Button>
            </button>
            <button className="h-12 w-full py-2 border border-gray rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200">
                <FaFacebook className="text-[#3B5998]" />
                <Text.Button>Facebook</Text.Button>
            </button>
        </div>
    )
}
