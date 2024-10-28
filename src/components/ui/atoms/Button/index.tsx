import { Button as B, ButtonProps } from '@nextui-org/react'
import { Text } from '../Text'

interface thisProps extends ButtonProps {
    ui?: 'primary' | 'secondary'
}

export const Button: React.FC<thisProps> = ({ ui, ...props }) => {
    let className = ''
    let textClass = ''

    props.variant = props.variant || 'solid'
    props.size = props.size || 'md'
    props.radius = props.radius || 'full'

    if (ui === 'primary') {
        className = 'bg-primary'
        textClass = 'text-white'
    } else if (ui === 'secondary') {
        className = 'bg-gray-100'
    }

    return (
        <B className={className} {...props}>
            {typeof props.children === 'string' && (
                <Text.Button className={textClass}>
                    {props.children}
                </Text.Button>
            )}
            {typeof props.children !== 'string' && props.children}
        </B>
    )
}
