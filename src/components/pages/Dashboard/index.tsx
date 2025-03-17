import { Text } from '@/components/ui/atoms'
import { IndicatorsCard } from './IndicatorsCard'
import { FaUserCheck } from 'react-icons/fa'
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6'
import { auth } from '@/auth'

export const Dashboard = async () => {
    const session = await auth()
    const firstName = session?.user?.name?.split(' ')[0]
    return (
        <div className="flex flex-col gap-2">
            <Text.Customize className="text-2xl">
                {`Seja Bem-Vindo, ${firstName}!`}
            </Text.Customize>
            <Text.Stick>
                Você possúi <strong>3 consultas pendentes</strong>, e{' '}
                <strong>2 novos pacientes</strong>.
            </Text.Stick>

            <div className="flex gap-4 mt-6">
                <div className="grid grid-cols-3 gap-4 w-full">
                    <IndicatorsCard
                        title="Novos Pacientes"
                        icon={
                            <div className="flex items-center px-1.5 py-1.5 justify-center rounded border border-gray">
                                <FaUserCheck className="text-primary" />
                            </div>
                        }
                    >
                        <div className="flex gap-2 items-center">
                            <Text.H3>48</Text.H3>
                            <div className="flex gap-1 items-center">
                                <FaArrowTrendUp color="green" size={16} />
                                <Text.Customize className="text-green-700 text-sm">
                                    10%
                                </Text.Customize>
                                <Text.Content>
                                    Current vs Last Month
                                </Text.Content>
                            </div>
                        </div>
                    </IndicatorsCard>
                    <IndicatorsCard
                        title="Consultas Pendentes"
                        icon={
                            <div className="flex items-center px-1.5 py-1.5 justify-center rounded border border-gray">
                                <FaUserCheck className="text-primary" />
                            </div>
                        }
                    >
                        <div className="flex gap-2 items-center">
                            <Text.H3>48</Text.H3>
                            <div className="flex gap-1 items-center">
                                <FaArrowTrendUp color="green" size={16} />
                                <Text.Customize className="text-green-700 text-sm">
                                    10%
                                </Text.Customize>
                                <Text.Content>
                                    Current vs Last Month
                                </Text.Content>
                            </div>
                        </div>
                    </IndicatorsCard>

                    <IndicatorsCard
                        title="Consultas Confirmadas"
                        icon={
                            <div className="flex items-center px-1.5 py-1.5 justify-center rounded border border-gray">
                                <FaUserCheck className="text-primary" />
                            </div>
                        }
                    >
                        <div className="flex gap-2 items-center">
                            <Text.H3>48</Text.H3>
                            <div className="flex gap-1 items-center">
                                <FaArrowTrendDown
                                    className="text-red-600"
                                    size={16}
                                />
                                <Text.Customize className="text-red-600 text-sm">
                                    -10%
                                </Text.Customize>
                                <Text.Content>
                                    Current vs Last Month
                                </Text.Content>
                            </div>
                        </div>
                    </IndicatorsCard>
                </div>
            </div>
        </div>
    )
}
