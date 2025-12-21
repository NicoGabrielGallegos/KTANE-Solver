import type { SerialNumber } from "./serial.types.ts";

export function createSerialNumber(value: string): Readonly<SerialNumber> {
    if (!/^[a-zA-z0-9]{5}\d$/.test(value)) {
        if (value.length !== 6) {
            throw Error("El número de serie debe tener 6 caracteres")
        } else {
            throw Error("El número de serie debe contener solo letras y números")
        }
    }
    if (!/[a-zA-z]/.test(value)) {
        throw Error("El número de serie debe tener al menos una letra")
    }

    const lastDigit = Number(value[value.length - 1])

    const serial = {
        string: value,
        hasVowel: /[aeiou]/i.test(value),
        lastDigit
    }

    return Object.freeze(serial)
}

export const isEven = (serial: SerialNumber) => serial.lastDigit % 2 === 0
export const isOdd = (serial: SerialNumber) => serial.lastDigit % 2 === 1