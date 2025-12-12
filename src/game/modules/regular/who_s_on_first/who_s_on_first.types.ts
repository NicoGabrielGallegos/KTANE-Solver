export type DisplayLabel = "Próxima" | "Voy" | "Primero" | "Haya" | "Vaya" | "Va" | "Espera" | "Rápido" | "Monitor" | "Última" | "Sí" | "Dale" | "Hay" | "Otra" | "Bien" | "Palabra" | "Nada" | "Baya" | "Listo" | "Okay" | "Bueno" | "No" | "Allá" | "Explotó" | "Ahí" | "Halla" | "Valla" | "Otro"

export type ButtonLabel = "Espera" | "¿Qué?" | "No" | "Otro" | "¿Cómo?" | "Listo" | "¿Ésta?" | "Esta" | "No está" | "Okay" | "Vale" | "Va" | "No es" | "¿Esa?" | "Ok" | "¿Dónde?" | "Bueno" | "Ésta" | "Está" | "No sé" | "Rápido" | "¿Cuál?" | "Sí" | "Otra" | "Bien" | "Ya está" | "Dale" | "¿Seguro?"

type ButtonRow = "top" | "middle" | "bottom"
type ButtonColumn = "left" | "right"
export type ButtonPosition = `${ButtonRow}-${ButtonColumn}`

export interface WhosOnFirstStage {
    display: DisplayLabel
    buttons: ButtonLabel
}

export interface WhosOnFirstModule {
    stages: WhosOnFirstStage[]
}

export interface WhosOnFirstSolution {
    description: string
    buttonPositions: ButtonPosition[]
    buttonLabels: ButtonLabel[]
}