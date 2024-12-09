import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! I\'m your Ganga Mitra assistant. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'I understand your query about water quality. Currently, this is a demo response. In a production environment, I would provide detailed information about water parameters and analysis.'
      }]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && !isMinimized && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 transition-colors z-50"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
        </motion.button>
      )}

      {/* Minimized Chat */}
      {isMinimized && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 bg-sky-600 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer z-50"
          onClick={() => setIsMinimized(false)}
        >
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span className="text-sm font-medium whitespace-nowrap">Chat with Ganga Mitra</span>
          </div>
        </motion.div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-full sm:w-[400px] max-h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50"
          >
            {/* Chat Header */}
            <div className="bg-sky-600 dark:bg-sky-700 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Chat with Ganga Mitra</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="hover:bg-sky-700 dark:hover:bg-sky-800 p-1 rounded transition-colors"
                >
                  <MinusCircle className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-sky-700 dark:hover:bg-sky-800 p-1 rounded transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-sky-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 resize-none border dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-100 max-h-32"
                  rows="1"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-700 transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};