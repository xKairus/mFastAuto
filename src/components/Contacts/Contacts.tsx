import { FAQ, sectionHeaders } from "../../data/typography"
import Button from "../Button/Button"
import { SectionHeader } from "../SectionHeader/SectionHeader"

export default function Contacts() {
  return (
    <section>
      <SectionHeader {...sectionHeaders.contact} />
      <div>
        {FAQ.map((QA, index) => (
          <details key={index}>
            <summary>{QA.question}</summary>
            <p>{QA.answer}</p>
          </details>
        ))}
      </div>
      <form action="">
        <input type="text" name="" id="" />
        <input type="email" name="" id="" />
        <input type="text" name="" id="" />
        <Button>Submit</Button>
      </form>
    </section>
  )
}
