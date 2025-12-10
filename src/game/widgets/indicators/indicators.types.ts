export type IndicatorLabel = "SND" | "CLR" | "CAR" | "IND" | "FRQ" | "SIG" | "NSA" | "MSA" | "TRN" | "BOB" | "FRK"

export interface Indicator {
    label: IndicatorLabel
    isLit: boolean
}