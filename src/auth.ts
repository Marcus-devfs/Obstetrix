import NextAuth, { Account, User, type DefaultSession } from 'next-auth'
import { AdapterUser } from '@auth/core/adapters'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { fetchApi } from './services/api'
import { createMD5 } from './helpers/utils'

declare module 'next-auth' {
    interface User {
        accessToken: string
    }

    interface Session {
        accessToken: string
        provider: string
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: 'jwt' },
    trustHost: true,
    providers: [
        Google,
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' },
            },
            authorize: async (credentials) => {
                try {
                    const data = { ...credentials, provider: 'credentials' }
                    return await getCredentialUser(data)
                } catch (error) {
                    if (error instanceof Error) {
                        throw new Error(error.message)
                    }
                    throw new Error('Erro desconhecido')
                }
            },
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/login',
    },
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth
        },
        signIn: async ({ account, user }) => {
            if (account) {
                return await setProviderInDatabase(user, account)
            }
            return true
        },
        jwt: async ({ token, user, account }) => {
            if (user) {
                //no login social, temos que ir no banco buscar os dados que faltam do usuario, somente o google não fornece todos os dados
                if (account?.provider !== 'credentials') {
                    user = await getCredentialUser({
                        email: user.email,
                        provider: account?.provider,
                    })
                }

                token.id = user.id
                token.email = user.email
                token.name = user.name
                token.accessToken = user.accessToken
                token.provider = account?.provider
                token.avatar = user.image
            }
            return token
        },
        session: async ({ session, token }) => {
            const data = {
                ...session,
                accessToken: token.accessToken,
                provider: token.provider,
                user: {
                    ...session.user,
                    id: token.id as string,
                },
            }

            return data
        },
        redirect: async ({ url, baseUrl }) => {
            return url.startsWith(baseUrl) ? baseUrl : url
        },
    },
})

const getCredentialUser = async (
    credentials: Partial<Record<'password' | 'email' | 'provider', unknown>>
) => {
    const data = {
        email: credentials.email as string,
        password: credentials.password as string,
        provider: credentials.provider as string,
    }

    try {
        const res = await fetchApi(`/auth/signIn`, {
            method: 'post',
            body: JSON.stringify(data),
        })

        const { data: sessionData } = res
        const { user, token } = sessionData

        console.log(user, 'user')

        return {
            ...user,
            accessToken: token,
        } as any
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message)
        } else {
            throw new Error('Ocorreu um erro inesperado')
        }
    }
}

const setProviderInDatabase = async (
    user: User | AdapterUser,
    account: Account
) => {
    try {
        if (account.provider === 'credentials') {
            return true
        }

        const data = {
            provider: account.provider,
            name: user.name,
            email: user.email,
            avatar: user.image ? user.image : ``,
            accountId: createMD5(account.providerAccountId),
        }

        // const res = await fetchApi(`/signUp`, {
        //   method: 'post',
        //   body: JSON.stringify(data),
        // })
        // const { success } = res
        // if (!success) {
        //   return false
        // }
        return true
    } catch (error) {
        return false
    }
}
