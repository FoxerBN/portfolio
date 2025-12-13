"use client";
import React, { useState, useEffect } from "react";

interface ChatBotProps {
  className?: string;
}

export default function ChatBot({ className = "" }: ChatBotProps) {
  const [openChatbot, setOpenChatbot] = useState<boolean>(false);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Load iframe only when first opened and persist state
  useEffect(() => {
    // Check localStorage for previous state
    const savedState = localStorage.getItem('chatbot-ever-opened');
    if (savedState === 'true') {
      setIframeLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (openChatbot && !iframeLoaded) {
      setIsLoading(true);
      setIframeLoaded(true);
      // Remember that chatbot was opened
      localStorage.setItem('chatbot-ever-opened', 'true');
    }
  }, [openChatbot, iframeLoaded]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Keyboard shortcut to toggle chatbot (Ctrl + /)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === '/') {
        event.preventDefault();
        setOpenChatbot(prev => !prev);
      }
      // ESC to close chatbot
      if (event.key === 'Escape' && openChatbot) {
        setOpenChatbot(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openChatbot]);

  return (
    <div className={className}>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          {/* Floating particles */}
          <div className="chatbot-particles absolute inset-0 rounded-full"></div>
          <button
            onClick={() => setOpenChatbot(!openChatbot)}
            className={`
              relative overflow-hidden
              bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700
              backdrop-blur-sm bg-opacity-90 border border-white/20
              text-white p-3 sm:p-4 rounded-full shadow-2xl 
              transition-all duration-300 hover:scale-110 active:scale-95
              focus:outline-none focus:ring-4 focus:ring-purple-300/50 dark:focus:ring-blue-400/50
              ${openChatbot ? 'rotate-180 shadow-purple-500/25' : 'rotate-0 chatbot-pulse shadow-blue-500/25'}
              ${!openChatbot ? 'chatbot-gradient-animation' : ''}
            `}
            aria-label={openChatbot ? "Close Chatbot" : "Open Chatbot"}
            title={openChatbot ? "Close Chatbot" : "Open Chatbot"}
          >
            {openChatbot ? (
              // Close icon with gradient
              <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Chat icon with gradient
              <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 21l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Chatbot Iframe */}
      <div className={`fixed bottom-20 right-4 left-4 sm:left-auto sm:right-4 z-[100] transition-all duration-300 ${
        openChatbot ? 'chatbot-slide-in opacity-100 visible' : 'opacity-0 invisible translate-y-4'
      }`}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-sm sm:max-w-md lg:max-w-2xl mx-auto sm:mx-0 relative border border-gray-200 dark:border-gray-600">
          <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <h3 className="font-semibold text-sm bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                AI Assistant
              </h3>
            </div>
            <button
              onClick={() => setOpenChatbot(false)}
              className="text-white/80 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full"
              aria-label="Close Chatbot"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/95 to-blue-50/95 backdrop-blur-md flex items-center justify-center border-t border-white/10">
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <div className="animate-spin rounded-full h-10 w-10 border-4 border-transparent border-t-purple-600 border-r-blue-600"></div>
                  <div className="absolute inset-0 animate-ping rounded-full h-10 w-10 border border-purple-400/20"></div>
                </div>
                <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Initializing AI Assistant...
                </p>
              </div>
            </div>
          )}
          <div className="chatbot-iframe-container relative bg-white dark:bg-gray-800">
            <iframe
              src={iframeLoaded ? "https://my-chatty.streamlit.app/?embed=true" : "about:blank"}
              className="w-full h-[75vh] sm:h-[70vh] lg:h-[600px] border-0 bg-white dark:bg-gray-800"
              title="Chatbot Assistant"
              allow="microphone; camera; clipboard-write"
              loading="lazy"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
}