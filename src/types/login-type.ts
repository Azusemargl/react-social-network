import { WrappedFieldMetaProps } from "redux-form";

export type LoginFormProps = {
   meta: WrappedFieldMetaProps
   children: React.ReactNode
}

export type FormProps = {
   email: string
   password: string
   remember: boolean
}