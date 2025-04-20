const SESSION_TOKEN = 'bearer_token'


export const setSessionTokenStorage = (bearerToken) => {
    localStorage.setItem(SESSION_TOKEN,bearerToken)
};


export const getSessionTokenStorage = () => {
    localStorage.getItem(SESSION_TOKEN)
};


export const removeSessionTokenStorage = () => {
    localStorage.removeItem(SESSION_TOKEN)
};
