type MemoryNumber = 1 | 2 | 3 | 4

export interface MemoryStage {
    display: MemoryNumber
    buttons: MemoryNumber[]
}

export interface MemoryModule {
    stages: MemoryStage[]
}

export interface MemorySolution {
    description: string
    correctButtons: MemoryNumber[]
    correctPositions: MemoryNumber[]
}