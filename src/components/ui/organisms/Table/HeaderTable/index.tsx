import { Button, Text } from '@/components/ui/atoms'
import { Button as ButtonNext } from '@nextui-org/react'
import { Filter, Plus } from 'lucide-react'

type HeaderTableProps = {
    title: string
    count: number
    onFilterClick?: () => void
    onAddClick?: () => void
}

export const HeaderTable: React.FC<HeaderTableProps> = ({
    title,
    count,
    onFilterClick,
    onAddClick,
}) => {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <Text.H2>{count}</Text.H2>
                <Text.Content>{title}</Text.Content>
            </div>
            <div className="flex gap-2">
                <ButtonNext
                    variant="light"
                    startContent={<Filter size={16} />}
                    onClick={onFilterClick}
                >
                    Filtros
                </ButtonNext>

                <Button
                    ui="primary"
                    endContent={<Plus size={16} color="white" />}
                    onClick={onAddClick}
                >
                    Adicionar
                </Button>
            </div>
        </div>
    )
}
