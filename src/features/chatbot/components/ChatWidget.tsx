import { useCallback, useState } from "react";
import ChatWindow from "./ChatWindow";
import { Button } from "@/components/ui/button";
import type { ChatState, Message } from "../types/chat";
import { MessageCircle } from "lucide-react";
import axios from "axios";

const ChatWidget = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isTyping: false,
  });

  const [sessionId, setSessionId] = useState<string>("");

  const handleSendMessage = useCallback(
    async (text: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: "user",
        timestamp: new Date(),
      };

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
        isTyping: true,
      }));

     try {
        const response = await axios.post(`${import.meta.env.VITE_CHAT_API_BASE_URL}/chat`, {
          session_id: sessionId, // ✅ send current session_id
          message: text,
        });

        // ✅ Save new session_id from response if updated
        if (response.data.session_id && sessionId !== response.data.session_id) {
          setSessionId(response.data.session_id);
        }

        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: response.data.message ?? "Sorry, I didn't get that.",
          sender: "bot",
          timestamp: new Date(),
        };

        setChatState((prev) => ({
          ...prev,
          messages: [...prev.messages, botResponse],
          isTyping: false,
        }));
      } catch (error) {
        const errorMessage: Message = {
          id: (Date.now() + 2).toString(),
          text: "❗ An error occurred. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        };

        setChatState((prev) => ({
          ...prev,
          messages: [...prev.messages, errorMessage],
          isTyping: false,
        }));
      }
    },
    [sessionId]
  );

  const toggleChat = () => {
    setChatState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const closeChat = () => {
    setChatState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };
  return (
    <>
      <Button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 z-40"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <ChatWindow
        isOpen={chatState.isOpen}
        onClose={closeChat}
        messages={chatState.messages}
        onSendMessage={handleSendMessage}
        isTyping={chatState.isTyping}
      />
    </>
  );
};

export default ChatWidget;
