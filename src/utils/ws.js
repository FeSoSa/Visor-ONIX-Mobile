import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const WebSocketContext = createContext();

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState();
    const socketUrl = 'ws://192.168.18.216:8080';
    const wsRef = useRef(null);

    const connect = useCallback(() => {
        if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) {
            return; // já está aberto ou tentando abrir
        }

        const ws = new WebSocket(socketUrl);

        ws.onopen = () => {
            console.log('Conectado ao WebSocket');
        };

        ws.onmessage = (event) => {
            setMessage(event.data);
        };

        ws.onerror = (error) => {
            console.error('Erro no WebSocket:', error);
        };

        ws.onclose = () => {
            console.log('Desconectado do WebSocket');
        };

        wsRef.current = ws;
        setSocket(ws);
    }, []);

    const disconnect = useCallback(() => {
        if (wsRef.current) {
            wsRef.current.close();
            wsRef.current = null;
            setSocket(null);
        }
    }, []);

    useEffect(() => {
        connect();
        return () => disconnect();
    }, [connect, disconnect]);

    return (
        <WebSocketContext.Provider value={{ socket, message, connect, disconnect }}>
            {children}
        </WebSocketContext.Provider>
    );
};
