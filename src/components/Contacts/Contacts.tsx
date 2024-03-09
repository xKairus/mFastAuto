import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { FAQ, sectionHeaders } from "../../data/typography"
import Button from "../Button/Button"
import { SectionHeaderInverse } from "../SectionHeader/SectionHeader"
import styles from "./Contacts.module.css"

interface MyForm {
  name: string
  email: string
  text: string
}

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyForm>()

  const onSubmit: SubmitHandler<MyForm> = (data) => {
    console.log(data)
  }

  // const error: SubmitErrorHandler<MyForm> = (data) => {
  //   console.log(data)
  // }

  // const isEmailValid = () => {
  //   console.log("valid")
  //   return false
  // }

  return (
    <section className={styles.contacts} id="Contact">
      {/* <div className={styles.title}>
        <SectionHeaderInverse {...sectionHeaders.contact} />
      </div> */}
      <div className={styles.container}>
        {/* <div className={styles.faq}>
          {FAQ.map((QA, index) => (
            <details key={index}>
              <summary>{QA.question}</summary>
              <p>{QA.answer}</p>
            </details>
          ))}
        </div> */}
        <div className={styles.formWrapper}>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <div className={styles.formText}>
              <h3>Make an appointment or leave feedback</h3>
              <p>
                If you have any questions about us please don't hesitate to
                contact us with any car repair questions.
              </p>
            </div>
            <input
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
              aria-invalid={errors.name ? true : false}
              type="text"
              placeholder="Enter your name"
            />
            {errors.name?.message && <p>{errors.name?.message}</p>}
            <input
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email format",
                },
              })}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email?.message && <p>{errors.email?.message}</p>}
            <textarea
              {...register("text", {
                required: { value: true, message: "Leave your feedback" },
              })}
              rows={5}
              placeholder="Enter your message"
            />
            {errors.text?.message && <p>{errors.text?.message}</p>}
            
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
