export const getApiUrl = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API as string
    return apiUrl
}

export async function fetchApi(
    endpoint: string,
    options: RequestInit = {},
    clientSide: boolean = false,
    formData: boolean = false
) {
    const baseURL = getApiUrl()

    let defaultHeaders = {}
    if (!clientSide) {
        defaultHeaders = {
            ...(!formData ? { 'Content-Type': 'application/json' } : {}),
            'Cache-Control': 'no-cache',
        }
    } else {
        defaultHeaders = { 'Content-Type': 'application/json' }
    }

    const { headers: customHeaders, ...otherOptions } = options
    const finalOptions = {
        ...otherOptions,
        headers: {
            ...defaultHeaders,
            ...customHeaders,
        },
    }

    const response = await fetch(`${baseURL}${endpoint}`, finalOptions)

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Erro ao processar a requisição')
    }

    return response.json()
}
