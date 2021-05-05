export type User = {
   id:       number
   name:     string
   status:   string
   photos:   Photos
   followed: boolean
}

export type Photos = {
   small: string
   large: string
}
