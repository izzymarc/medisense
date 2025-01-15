import { useState, useEffect, useRef, useCallback } from 'react';

interface WebSocketOptions {
  onMessage?: (message: string) => void;
  onError?: (error: Event) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export function useWebSocket(url: string, options: WebSocketOptions = {}) {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  const sendMessage = useCallback((message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    }
  }, []);

  useEffect(() => {
    socketRef.current = new WebSocket(url);
    const socket = socketRef.current;

    socket.onopen = () => {
      setIsConnected(true);
      if (options.onOpen) options.onOpen();
    };

    socket.onmessage = (event) => {
      if (options.onMessage) options.onMessage(event.data);
    };

    socket.onerror = (error) => {
      if (options.onError) options.onError(error);
    };

    socket.onclose = () => {
      setIsConnected(false);
      if (options.onClose) options.onClose();
    };

    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, [url, options]);

  return { isConnected, sendMessage };
}
