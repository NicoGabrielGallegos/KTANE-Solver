import type { BatteryMap } from "./batteries.types";

export const countTotalBatteries = (batteries: BatteryMap): number =>
    Object.values(batteries).reduce((s, q) => s + q, 0)
