// Form.tsx
import React from "react"
import { useForm, SubmitHandler, FieldError } from "react-hook-form"
import Button from "../Button/Button"
import styles from "./Form.module.css"

interface Field {
  name: string
  type: string
  placeholder: string
  validation: Record<string, any>
}

interface FormProps {
  title: string
  subtitle: string
  fields: Field[]
  onSubmit: SubmitHandler<any>
}

const Form: React.FC<FormProps> = ({ title, subtitle, fields, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formText}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {fields.map((field, index) => (
        <div key={index} className={styles.inputField}>
          {field.type === "textarea" ? (
            <textarea
              {...register(field.name, field.validation)}
              rows={5}
              placeholder={field.placeholder}
            />
          ) : (
            <input
              {...register(field.name, field.validation)}
              aria-invalid={errors[field.name] ? true : false}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete="on"
            />
          )}

          {errors[field.name] && typeof errors[field.name] === "object" && (
            <p>{(errors[field.name] as FieldError).message}</p>
          )}
        </div>
      ))}
      <Button disableAnimation={true} newClass={"form"}>
        Submit
      </Button>
    </form>
  )
}

export default Form
