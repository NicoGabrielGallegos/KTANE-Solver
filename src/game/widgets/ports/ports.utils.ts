import type { PortMap } from "./ports.types.ts";

export const hasPort = () => null
export const countPort = () => null
export const hasAnyPort = () => null

export const hasParallel = (ports: PortMap) => (ports.Parallel ?? 0) > 0
