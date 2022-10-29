import axios from "axios";

const ContactsAPI = axios.create({
    baseURL: "https://635d6ac0cb6cf98e56b44e12.mockapi.io/api/contacts",
    params: {
        _limit: 12,
    }  
});

export const getContacts = async() => {
    const {data} = await ContactsAPI.get("/");
    return data;  
}

export const addContact = async(data) => {
    const {data: result} = await ContactsAPI.post("/", data);
    return result;  
}

export const removeContact = async(id) => {
    const {data} = await ContactsAPI.delete(`/${id}`);
    return data;  
}