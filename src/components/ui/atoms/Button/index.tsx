import { Button as B, ButtonProps } from '@nextui-org/react'
import { Text } from '../Text'

interface thisProps extends ButtonProps {
    ui?: 'primary' | 'secondary'
    className?: string
}

export const Button: React.FC<thisProps> = ({ ui, className, ...props }) => {
    let classNameBtn = ''
    let textClass = ''

    props.variant = props.variant || 'solid'
    props.size = props.size || 'md'
    props.radius = props.radius || 'full'

    if (ui === 'primary') {
        classNameBtn = 'bg-primary'
        textClass = 'text-white'
    } else if (ui === 'secondary') {
        classNameBtn = 'bg-gray-100'
    }

    return (
        <B className={`${classNameBtn} ${className}`} {...props}>
            {typeof props.children === 'string' && (
                <Text.Button className={textClass}>
                    {props.children}
                </Text.Button>
            )}
            {typeof props.children !== 'string' && props.children}
        </B>
    )
}
