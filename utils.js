import * as yup from "yup";
import { WEB_VIBEZ_ACCESS } from "./constants";
// import { Store } from "react-notifications-component";


export const selectStyles = (hasError) => ({
    // Define your styles here
    control: (provided) => ({
        ...provided,
        borderColor: hasError ? 'red' : provided.borderColor,
    }),
    
});



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

{/*
export const success_alert = (message, title) => {
    let new_msg = "";
    if ((message[0] === '"' || message[0] === "'") && (message[message.length - 1] === '"' || message[message.length - 1] === "'")) {
        new_msg = message.substr(1, message.length - 2);
    } else {
        new_msg = message
    }
    Store.addNotification({
        title: title ? title : "",
        message: new_msg,
        className: "noti",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeInUp"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 7000,
            onScreen: true,
            showIcon: true
        }
    })
}

export const error_alert = (message, title) => {
    let new_msg = "";
    if ((message[0] === '"' || message[0] === "'") && (message[message.length - 1] === '"' || message[message.length - 1] === "'")) {
        new_msg = message.substr(1, message.length - 2);
    } else {
        new_msg = message
    }
    Store.addNotification({
        title: title ? title : "",
        message: new_msg,
        className: "noti",
        type: "danger",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__slideInRight"],
        animationOut: ["animate__animated", "animate__slideOutBottom"],
        dismiss: {
            duration: 7000,
            onScreen: true,
            showIcon: true
        }
    })
}

export const warning_alert = (message, title) => {
    Store.addNotification({
        title: title ? title : "",
        message: message,
        type: "warning",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 7000,
            onScreen: true,
            showIcon: true
        }
    })
}

*/}