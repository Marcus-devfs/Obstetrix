import CriptoJS from 'crypto-js'

export function maskPhone(numero: string): string {
    // Remove qualquer caractere que não seja número
    numero = numero.replace(/\D/g, '')

    // Aplica a máscara (XX) XXXXX-XXXX
    numero = numero.replace(/^(\d{2})(\d)/, '($1) $2')
    numero = numero.replace(/(\d{5})(\d)/, '$1-$2')

    return numero
}

export function createMD5(hash: string) {
    return CriptoJS.MD5(hash).toString()
}
