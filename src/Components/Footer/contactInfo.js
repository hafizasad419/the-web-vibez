import { Mail, Phone, MapPin } from "lucide-react";
import { ADDRESS, WHATSAPP_URL } from "@/constants.js";


export const contactInfo = [
    { icon: Mail, text: "team@thwebvibez.com", href: "mailto:team@thwebvibez.com" },
    { icon: Phone, text: "+1 901-270-6059", href: WHATSAPP_URL },
    { icon: MapPin, text: ADDRESS }
];