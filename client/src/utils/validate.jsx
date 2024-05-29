export const checkValidData = (email, password)=>{
    
    // const nameValid = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name);
    const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!nameValid) return "Name is invalid"
    if(!emailValid) return "Email is Invalid";
    if(!passwordValid) return "Password is invalid";

    return null;
}