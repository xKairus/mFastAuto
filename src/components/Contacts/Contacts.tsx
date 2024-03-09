import { FAQ, sectionHeaders } from "../../data/typography"
import Button from "../Button/Button"
import { SectionHeaderInverse } from "../SectionHeader/SectionHeader"
import styles from "./Contacts.module.css"

export default function Contacts() {
  return (
    <section className={styles.contacts} id="Contact">
      <div className={styles.title}>
        <SectionHeaderInverse {...sectionHeaders.contact} />
      </div>
      <div className={styles.container}>
        <div className={styles.faq}>
          {FAQ.map((QA, index) => (
            <details key={index}>
              <summary>{QA.question}</summary>
              <p>{QA.answer}</p>
            </details>
          ))}
        </div>
        <div className={styles.formWrapper}>
          <form action="" method="post" className={styles.form}>
            <div className={styles.formText}>
              <h3>Make an appointment or leave feedback</h3>
              <p>
                If you have any questions about us please don't hesitate to
                contact us with any car repair questions.
              </p>
            </div>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              id=""
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id=""
              required
            />
            <textarea
              rows={5}
              placeholder="Enter your message"
              name="message"
              id=""
              required
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
