import { PHONE_NUMBER, WEB_VIBEZ_ACCESS, WHATSAPP_URL } from "./constants";


export const getToken = () => {
    let token = localStorage.getItem(WEB_VIBEZ_ACCESS);
    if (token) {
        return JSON.parse(token).access_token;
    } else {
        return false;
    }
}


export const getAuthUser = () => {
    let token = localStorage.getItem(WEB_VIBEZ_ACCESS);
    if (token) {
        return JSON.parse(token).user;
    } else {
        return false;
    }
}


export const setToken = (access_token) => {
    localStorage.setItem(WEB_VIBEZ_ACCESS, JSON.stringify(access_token));
}

export const removeToken = () => {
    localStorage.removeItem(WEB_VIBEZ_ACCESS);
}


export const calculateDiscountInPercentage = (originalPrice, discountedPrice) => {
    return (((originalPrice - discountedPrice) / originalPrice) * 100).toFixed();
};

export const sendMailTo = ({ emailAddress, subject = "Hello", body = "I would like to connect with you." }) => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
};


export const sendWhatsappMessage = ({ message = "I am intersted in your services, Please tell me more." }) => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`)
};

