import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApis = async (url) => {

    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '955d43fb48msh40017eb900c910fp1196ebjsne15da31c1b64'
        }
    })
    return data;
}