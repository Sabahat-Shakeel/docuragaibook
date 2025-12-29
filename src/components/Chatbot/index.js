import React, { useState, useRef, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { sendMessageToChatbot } from './ChatbotAPI'; 
import { MessageCircle, Send, X } from "lucide-react";

function Chatbot() {
  const { siteConfig } = useDocusaurusContext();
  const chatbotApiBaseUrl = siteConfig.customFields?.chatbotApiBaseUrl || 'http://localhost:8000';

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedText, setSelectedText] = useState(null);
  
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !currentSessionId) {
      setCurrentSessionId(Math.random().toString(36).substring(2, 15));
    }
    setSelectedText(null);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleTextSelection = () => {
      if (!isOpen) return;
      const selection = window.getSelection();
      const text = selection.toString().trim();
      if (text.length > 0) {
        setSelectedText(text);
      }
    };

    document.addEventListener('mouseup', handleTextSelection);
    return () => document.removeEventListener('mouseup', handleTextSelection);
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '' && !selectedText) return;

    // Constructing the query based on selection
    const displayMessage = selectedText 
      ? `[Context: ${selectedText.substring(0, 50)}...] ${inputMessage}` 
      : inputMessage;

    const queryToSend = selectedText 
      ? `Regarding this text: "${selectedText}", ${inputMessage || "explain this."}`
      : inputMessage;

    const userMessage = { sender: 'user', text: displayMessage };
    setMessages((prev) => [...prev, userMessage]);
    
    setInputMessage('');
    setSelectedText(null); // Clear selection after sending
    setIsLoading(true);

    try {
        const data = await sendMessageToChatbot(
            chatbotApiBaseUrl,
            queryToSend,
            currentSessionId,
            window.location.href 
        );

      
        const botMessage = { 
            sender: 'bot', 
            text: data.response, 
            sources: data.sources || [] 
        };

        setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
        console.error('Failed to send message:', error);
        setMessages((prev) => [
            ...prev,
            { sender: 'bot', text: 'Sorry, I am having trouble connecting to the backend at ' + chatbotApiBaseUrl },
        ]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotWrapper}>
      <button className={styles.chatbotToggleButton} onClick={toggleChatbot}>
        {isOpen ? <X size={30} color="red" /> : <MessageCircle size={30} color="black" />}
      </button>

      {isOpen && (
        <div className={styles.chatbotContainer}>
          <div className={styles.chatbotHeader}>
            <h3>Physical AI Assistant</h3>
            <button className={styles.chatbotCloseButton} onClick={toggleChatbot}>&times;</button>
          </div>

          <div className={styles.chatbotMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                <div className={styles.messageText}>{msg.text}</div>
                {msg.sender === 'bot' && msg.sources?.length > 0 && (
                  <div className={styles.chatbotSources}>
                    <p>Sources:</p>
                    {msg.sources.map((src, i) => (
                      <a key={i} href={src.url} target="_blank" className={styles.sourceTag}>
                        [{i + 1}] {src.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && <div className={`${styles.message} ${styles.bot}`}>Typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          {selectedText && (
            <div className={styles.selectedTextPrompt}>
              <small>Context Selected: "{selectedText.substring(0, 60)}..."</small>
              <button onClick={() => setSelectedText(null)}>clear</button>
            </div>
          )}

          <div className={styles.chatbotInputArea}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={selectedText ? "Ask about selected text..." : "Ask a question..."}
              className={styles.chatbotInputField}
            />
            <button onClick={handleSendMessage} className={styles.chatbotSendButton} disabled={isLoading}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;