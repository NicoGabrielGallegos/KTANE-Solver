import type { SerialNumber } from "./serial.types.ts";

export const isEven = (serial: SerialNumber) => serial.lastDigit % 2 === 0
export const isOdd = (serial: SerialNumber) => serial.lastDigit % 2 === 1