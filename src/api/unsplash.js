import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 1vqMddF8Nlyi91vdxag_S8uFPFak-wuPfPvlSjecZDk'
    }
})
