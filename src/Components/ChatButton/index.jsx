import { WHATSAPP_URL } from "@/constants.js"

export const ChatButton = () => {
    return (
        <>
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 z-50 transition-transform transform hover:scale-110 duration-300 text-[10px]"
                aria-label="Contact on WhatsApp">
                <img
                    className='w-10'
                    src="/chat.svg" alt="Chat Icon" />
                Let's Chat
            </a >
        </>
    )
}