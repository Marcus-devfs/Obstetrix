import { Text } from '../Text'
import { FcGoogle } from 'react-icons/fc'

interface thisProps {
    onClick: () => void
}

export const SocialButton: React.FC<thisProps> = ({ onClick }) => {
    return (
        <button
            className="w-full h-12 border border-gray py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200"
            onClick={onClick}
        >
            <FcGoogle />
            <Text.Button>Entre com o Google</Text.Button>
        </button>
    )
}
