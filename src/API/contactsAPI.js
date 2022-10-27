import axios from "axios";

const ContactsAPI = axios.create({
    baseURL: "https://6359a48938725a1746b56b05.mockapi.io/contacts",
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