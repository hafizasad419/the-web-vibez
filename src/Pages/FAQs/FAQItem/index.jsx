import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"


const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                className="flex justify-between items-center w-full py-4 text-left rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-xl font-semibold pr-8">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                    <ChevronDown className="w-6 h-6 text-orange" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="pb-4 text-lg">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FAQItem

