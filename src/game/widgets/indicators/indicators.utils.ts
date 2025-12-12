import type { Indicator } from "./indicators.types";

export const hasIndicator = (indicators: Indicator[], match: Indicator) =>
    indicators.some(i => i.label === match.label && i.isLit === match.isLit)
