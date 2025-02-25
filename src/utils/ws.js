// WebSocketContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const WebSocketContext = createContext();

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState();

    useEffect(() => {
        // Conectar no WebSocket
        const ws = new WebSocket('ws://192.168.18.216:8080');

        ws.onopen = () => {
            console.log('Conectado ao WebSocket');
        };

        ws.onmessage = (event) => {
            setMessage((prevMessages) => event.data);
        };

        ws.onerror = (error) => {
            console.error('Erro no WebSocket:', error);
        };

        ws.onclose = () => {
            console.log('Desconectado do WebSocket');
        };

        setSocket(ws);

        return () => {
            if (ws) ws.close();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ socket, message }}>
            {children}
        </WebSocketContext.Provider>
    );
};
