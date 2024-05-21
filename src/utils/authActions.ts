import Cookies from "js-cookie";
import { ErrorResponse } from "../types/response.types";
import { notifyError, notifySuccess } from "./toast";

// Function to check if an authentication token is present
export function hasAuthToken() {
    const authToken = Cookies.get("authToken");
    return authToken !== undefined && authToken !== null;
}

// Function that return authn token
export function getAuthToken() {
    const authToken = Cookies.get("authToken");
    return authToken;
}

// Function to redirect to the home page after a delay
export function redirectToHomePageAfterDelay() {
    setTimeout(() => {
        window.location.href = "/login";
    }, 1000);
}

// Define a function to handle SignIn success message
export const handleSuccessfulSignIn = (result: { token: string, name: string, email: string }) => {
    Cookies.set("authToken", result.token);
    Cookies.set("name", result.name);
    Cookies.set("email", result.email);
    notifySuccess("SignIn Successful!"); // ends in 3000

    setTimeout(() => {
        window.location.href = "/";
    }, 3000);
};

export const redirectTospecificURL = (url: string, replace = false) => {
    setTimeout(() => {
        if (replace) {
            window.location.replace(url)
            return
        }
        window.location.href = url
    }, 3000);
}

// Define a function to handle SignIn errors
export const handleError = ({ response }: ErrorResponse) => {
    if (response && response.data && response.data.error) {
        notifyError(response.data.error);
        return response.data.error;
    } else {
        return response;
    }
};

// Function to logout the user and redirect to the home page after a delay
export function logout() {
    // Clear the authentication token from cookies or wherever it's stored
    Cookies.remove("authToken");
    Cookies.remove("name");
    Cookies.remove("email");

    // Perform additional logout actions if needed, e.g., redirect to a signin page
    // After clearing the authentication token, redirect to the home page with a delay
    redirectToHomePageAfterDelay();
}