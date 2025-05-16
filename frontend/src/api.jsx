import axios from "axios";

export async function submitCode({ language_id, source_code, stdin }){
    const data = {
        language_id: language_id,
        source_code: source_code,
        stdin: stdin
    }
    console.log(data)
    try {
        const response = await axios.post('http://localhost:3000/submit', data);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}