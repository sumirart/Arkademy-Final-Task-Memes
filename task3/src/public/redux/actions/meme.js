import axios from 'axios';

const IP = 'http://d8b64f35.ngrok.io/meme/bootcamp/';

export const fetch = () => {
    return {
        type: "FETCH_MEMES",
        payload: axios.get(IP + 'memes')
    }
}

export const fetchSingleMeme = id => {
    return {
        type: "FETCH_SINGLE_MEME",
        payload: axios.get(IP + 'meme/' + id)
    }
}

export const postComment = data => {
    return {
        type: "POST_COMMENT",
        payload: axios.post(IP + 'comment', data)
    }
}

// export const addProduct = (data, token) => {
//     return {
//         type: "ADD_PRODUCT",
//         payload: axios.post(IP, data, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             }
//         })
//     }
// }

// export const editProduct = (id, data, token) => {
//     return {
//         type: "EDIT_PRODUCT",
//         payload: axios.put(`${IP}/${id}`, data, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             }
//         })
//     }
// }

// export const removeProduct = (id, token) => {
//     return {
//         type: "REMOVE_PRODUCT",
//         payload: axios.delete(`${IP}/${id}`, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             }
//         })
//     }
// }