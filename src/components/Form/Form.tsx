// Form.tsx
import React from "react"
import { useForm, SubmitHandler, FieldError } from "react-hook-form"
import Button from "../Button/Button"
import styles from "./Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faYelp } from "@fortawesome/free-brands-svg-icons"

interface Field {
  name: string
  type: string
  placeholder: string
  validation?: Record<string, any>
}

interface FormProps {
  horizontalRule?: boolean
  contacts?: boolean
  social?: boolean
  title: string
  subtitle: string
  fields: Field[]
  onSubmit: SubmitHandler<any>
}

const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  horizontalRule,
  contacts,
  social,
  fields,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formText}>
        <h3>{title}</h3>
        {horizontalRule && <hr />}
        <p>{subtitle}</p>
      </div>
      {contacts && (
        <div className={styles.contacts}>
          <a className={styles.contact} href="tel:1(323)660-9920">
            <FontAwesomeIcon
              className={styles.faicon}
              icon={faPhone}
              size="sm"
              style={{ color: "#377ef9" }}
            />
            <span>1(323) 660-9920</span>
          </a>
          <a className={styles.contact} href="mailto:mfastauto@gmail.com">
            <FontAwesomeIcon
              className={styles.faicon}
              icon={faEnvelope}
              size="sm"
              style={{ color: "#377ef9" }}
            />
            <span>mfastauto@gmail.com</span>
          </a>
        </div>
      )}
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
      {social && (
        <div className={styles.socials}>
          <a className={styles.social} href="https://www.facebook.com/MfastAutoRepair">
            <FontAwesomeIcon
              className={styles.faicon}
              icon={faFacebookF}
              size="sm"
              style={{ color: "#377ef9" }}
            />
          </a>
          <a className={styles.social} href="https://www.yelp.com/biz/mfast-auto-repair-los-angeles-3">
            <FontAwesomeIcon
              className={styles.faicon}
              icon={faYelp}
              size="sm"
              style={{ color: "#377ef9" }}
            />
          </a>
        </div>
      )}
    </form>
  )
}

export default Form
