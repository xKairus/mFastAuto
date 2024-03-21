import { SubmitHandler } from "react-hook-form"
import { FAQ, sectionHeaders } from "../../data/typography"
import Button from "../Button/Button"
import SectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Contacts.module.css"
import { useEffect, useRef, useState } from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import { fadeIn, moveRight } from "../../utils/animations"
import Form from "../Form/Form"

interface MyForm {
  name: string
  email: string
  text: string
}

export default function Contacts() {
  const ref = useRef<HTMLDivElement>(null)
  const isAnimated = useScrollAnimation(ref)
  const [isModalActive, setIsModalActive] = useState(false)

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
        <div className={styles.formWrapper} style={fadeIn(isAnimated)}>
          <Form
            title="Make an appointment or leave feedback"
            subtitle="If you have any questions about us please don't hesitate to contact us with any car repair questions."
            fields={[
              {
                name: "name",
                type: "text",
                placeholder: "Enter your name",
                validation: { required: "Name is required" },
              },
              {
                name: "email",
                type: "email",
                placeholder: "Enter your email",
                validation: {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email format",
                  },
                },
              },
              {
                name: "text",
                type: "textarea",
                placeholder: "Enter your message",
                validation: { required: "Leave your feedback" },
              },
            ]}
            onSubmit={onSubmit}
          />
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
