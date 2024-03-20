import { SubmitHandler, useForm } from "react-hook-form"
import { FAQ, sectionHeaders } from "../../data/typography"
import Button from "../Button/Button"
import SectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Contacts.module.css"
import { useEffect, useRef, useState } from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import { fadeIn, moveRight } from "../../utils/animations"

interface MyForm {
  name: string
  email: string
  text: string
}

export default function Contacts() {
  const ref = useRef<HTMLDivElement>(null)
  const isAnimated = useScrollAnimation(ref)
  const [isModalActive, setIsModalActive] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyForm>()

  useEffect(() => {
    if (isModalActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalActive])

  const onSubmit: SubmitHandler<MyForm> = (data) => {
    setIsModalActive(true)
    console.log(data)
  }

  const closeModal = () => {
    setIsModalActive(false)
    console.log(isModalActive)
  }

  return (
    <section className={styles.contacts} ref={ref} id="Contact">
      <div className={styles.title}>
        <SectionHeader inverse={true} {...sectionHeaders.contact} />
      </div>
      <div className={styles.container}>
        <div className={styles.faq}>
          {FAQ.map((QA, index) => (
            <details key={index} style={moveRight(isAnimated)}>
              <summary>{QA.question}</summary>
              <p>{QA.answer}</p>
            </details>
          ))}
        </div>
        <div className={styles.formWrapper}>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            style={fadeIn(isAnimated)}
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
              autoComplete="on"
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
              autoComplete="on"
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

            <Button disableAnimation={true}>Submit</Button>
          </form>
          <div
            className={`${styles.formModal} ${
              isModalActive && styles.formModal_active
            }`}
          >
            <div>
              <h3>Thank you for your message!</h3>
              <p>
                We've received it and will get back to you shortly. Your
                feedback is important to us. For urgent matters, please contact
                us directly at mfastauto@gmail.com.
              </p>
              <p>Best regards, M FAST AUTO</p>
            </div>
            <Button onClick={closeModal}>Close</Button>
          </div>
        </div>
      </div>
      {isModalActive && <div onClick={closeModal} className={styles.overlay} />}
    </section>
  )
}
