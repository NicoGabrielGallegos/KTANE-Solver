export type MazeDirection = "up" | "left" | "down" | "right"

export interface MazePosition {
    row: number
    column: number
}

export interface MazeModule {
    circles: MazePosition[]
    triangle: MazePosition
    goal: MazePosition
}

export interface MazeSolution {
    description: string
    path: MazeDirection
}