import { Facebook, Linkedin, } from "lucide-react";
import { WhatsApp } from "./Icons";
import { FACEBOOK_URL, LINKEDIN_URL, WHATSAPP_URL } from "@/constants.js";


export const socialLinks = [
    { icon: Linkedin, href: LINKEDIN_URL },
    { icon: WhatsApp, href: WHATSAPP_URL },
    { icon: Facebook, href: FACEBOOK_URL },
];