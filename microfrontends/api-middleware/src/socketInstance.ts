import io from "socket.io-client";
const SOCKET_BASE_URL = "/chat";

const socket = io(SOCKET_BASE_URL);

export default socket;