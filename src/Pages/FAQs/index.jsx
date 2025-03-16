import HighlightedHeading from "@src/Components/HighlightedHeading"
import FAQItem from "./FAQItem"
import { OrangeCircle } from "./DecorativeElements"
import { faqData } from "./faqData"
import { sendMailTo } from "@/utils"

const FAQs = () => {
  return (

    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-700 relative overflow-hidden">
        <OrangeCircle className="-top-24 -left-24" />
        <OrangeCircle className="bottom-0 right-0 transform translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span
                className="lg:hidden block"
              >
                <HighlightedHeading>
                  Frequently Asked
                </HighlightedHeading>
                <HighlightedHeading>
                  Questions
                </HighlightedHeading>

              </span>

              <HighlightedHeading>
                <span
                  className="hidden lg:block"
                >Frequently Asked Questions</span>
              </HighlightedHeading>
            </h1>
            <p className="mt-4 text-xl">Find answers to common questions about our services</p>
          </div>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl mb-4">Still have questions?</p>

          <button
            className="btn-primary cursor-pointer !px-10"
            onClick={() => sendMailTo({ emailAddress: "team@thewebvibez.com", body: "Hi Team @The Web Vibez, I have a question about your services", subject: "Question about your web design and development services" })}
          >
            Contact Us

          </button>

        </div>
      </section>
    </>
  )
}

export default FAQs

