import { useCallback, useState } from "react";
import ChatWindow from "./ChatWindow";
import { Button } from "@/components/ui/button";
import type { ChatState, Message } from "../types/chat";
import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isTyping: false,
  });

  const generateResponse = useCallback((userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes("insat")) {
      return "INSAT is India's meteorological satellite system.";
    } else if (message.includes("rainfall")) {
      return "In June 2023, Kerala received 128.3mm of rainfall.";
    } else {
      return "I'm checking that for you...";
    }
  }, []);

  const handleSendMessage = useCallback(
    (text: string) => {
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

      // Simulate bot response with delay
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: generateResponse(text),
          sender: "bot",
          timestamp: new Date(),
        };

        setChatState((prev) => ({
          ...prev,
          messages: [...prev.messages, botResponse],
          isTyping: false,
        }));
      }, 1000);
    },
    [generateResponse]
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
