import { Button, Text } from '@/components/ui/atoms'
import { Checkbox } from '@nextui-org/react'
import { MdArrowForward } from 'react-icons/md'

export const Permissions = () => {
    const permissions = [
        {
            id: 1,
            name: 'Administrador',
        },
        {
            id: 2,
            name: 'Doutor(a)',
        },
        {
            id: 3,
            name: 'Colaborador',
        },
    ]

    return (
        <div className="flex flex-col gap-3">
            <Text.H4>Tipo de Permissões</Text.H4>
            {permissions.map((permission, index) => (
                <div key={`${permission.id}-${permission.name}-${index}`}>
                    <Checkbox aria-label={`Selecionar ${permission.name}`}>
                        <Text.Content>{permission.name}</Text.Content>
                    </Checkbox>
                </div>
            ))}

            <div className="w-full md:w-fit pt-4">
                <Button
                    className="w-full"
                    ui="primary"
                    endContent={<MdArrowForward color="white" />}
                    type="submit"
                >
                    Salvar Permissões
                </Button>
            </div>
        </div>
    )
}
