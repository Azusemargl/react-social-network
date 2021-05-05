export const required: FiledValidate = (value) => {
   if (value) return undefined
   return 'Обязательное поле'
}

// Types
export type FiledValidate = (value: string | undefined) => void
