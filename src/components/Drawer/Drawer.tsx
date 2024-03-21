import Form from "../Form/Form"
import styles from "./Drawer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Drawer() {
  const onSubmit = () => {
    console.log("first")
  }

  return (
    <div className={styles.drawer}>
      <Form
        title="Make an Appointment"
        horizontalRule={true}
        contacts={true}
        social={true}
        subtitle="Give us a call or fill in the form below and we will contact you. We endeavor to answer all inquiries within 24 hours on business days."
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
            name: "phone",
            type: "tel",
            placeholder: "Enter your phone",
            validation: {
              required: "Phone is required",
              maxLength: {
                value: 11,
                message: "Too Many Characters",
              },
              pattern: {
                value: /[0-9]{11}/,
                message: "Invalid phone format",
              },
            },
          },
          {
            name: "text",
            type: "textarea",
            placeholder: "Enter your message",
            validation: { required: "Leave your message" },
          },
        ]}
        onSubmit={onSubmit}
      />
      <div>
        <FontAwesomeIcon
          className={styles.close}
          icon={faXmark}
          style={{ color: "#1e266d" }}
        />
      </div>
    </div>
  )
}
