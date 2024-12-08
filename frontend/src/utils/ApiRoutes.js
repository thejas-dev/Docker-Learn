export const HOST = process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";


export const generateTokenUrl = `${HOST}/generateToken`;
export const fetchMessageUrl = `${HOST}/hello`;