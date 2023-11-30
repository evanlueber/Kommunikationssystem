import axios from 'axios';
let uri;
if (process.env.REACT_APP_BACKEND_URI === 'backend') {
     uri = 'http://localhost:5003';
} else {
     uri = process.env.REACT_APP_BACKEND_URI + ":5003";
}

const login = async (username, password) => {
    const response = await axios.post(uri+'/login', { username, password }, {withCredentials: true})
    return response.data;
};

const register = async (username, password) => {
    const response = await axios.post(uri+'/register', { username, password }, {withCredentials: true})
    return response.data;
}

const logout = async () => {
    const response = await axios.get(uri+'/logout', {}, {withCredentials: true})
    return response.data;
}

const getChannels = async () => {
    const response = await axios.get(uri+'/channels', {withCredentials: true});
    return response.data;
}

const joinChannel = async (joinId) => {
    const response = await axios.post(uri+'/join-channel', {joinId:joinId}, {withCredentials: true});
    return response.data;
}

const createChannel = async (name) => {
    const response = await axios.post(uri+'/create-channel', {channelName:name}, {withCredentials: true});
    return response.data;
}

const getMessages = async (channelId) => {
    const response = await axios.get(uri+`/channel/${channelId}/messages`, {}, {withCredentials: true});
    return response.data;
}

const sendMessage = async (userId, content, channelId) => {
    const response = await axios.post(uri+'/channel/'+channelId+'/send-message', { userId, content }, {withCredentials: true});
    return response.data;
}

const api = {
    login,
    register,
    getChannels,
    logout,
    joinChannel,
    createChannel,
    getMessages,
    sendMessage
};

export default api;
