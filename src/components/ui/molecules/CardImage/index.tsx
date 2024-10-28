import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface CardImageProps {
    active: boolean
    onClick?: () => void
    src: string | StaticImageData
}

export const CardImage: React.FC<CardImageProps> = ({
    active = false,
    onClick = () => {},
    src,
}) => {
    return (
        <div
            onClick={onClick}
            className={`rounded-xl w-20 cursor-pointer h-20 ${active ? 'border border-primary bg-blue-100' : 'bg-gray-100'}`}
        >
            <Image
                src={src}
                alt="iconImage"
                width={120}
                height={120}
                className={`w-full h-full object-contain ${!active && 'grayscale'}`}
            />
        </div>
    )
}
