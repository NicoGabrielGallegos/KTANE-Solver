import type { BatteryMap } from "../widgets/batteries/batteries.types.ts";
import type { Indicator } from "../widgets/indicators/indicators.types.ts";
import type { PortMap } from "../widgets/ports/ports.types.ts";
import type { SerialNumber } from "../widgets/serial/serial.types.ts";

export interface BombEdgework {
    serial: SerialNumber
    ports: PortMap
    batteries: BatteryMap
    indicators: Indicator[]
    strikes?: number
}