"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const lang = pathname?.startsWith("/el") ? "el" : "en";

  useEffect(() => {
    setMounted(true);
  }, []);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { lang }
    }),
    onError: () => {
      alert("AI Error: Unable to connect. Please try again later.");
    }
  });

  const isProcessing = status === 'submitted' || status === 'streaming';
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const onFormSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const currentText = text.trim();
    if (!currentText || isProcessing) return;
    
    setText(""); // Clear immediately for better UX
    sendMessage({ text: currentText });
  };

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isProcessing, isOpen]);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 z-50 flex flex-col items-end w-[calc(100%-2rem)] sm:w-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10 w-full sm:w-[400px] max-h-[600px] h-[75vh]"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-4 text-white shadow-sm flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-lg">🤖</div>
                <div>
                  <h3 className="font-bold">GoGreeceNow AI</h3>
                  <p className="text-xs text-indigo-100 opacity-90">
                    {lang === 'el' 
                      ? 'Ρωτήστε οτιδήποτε για τους προορισμούς στη γλώσσα σας!' 
                      : 'Ask anything about your destinations in your language!'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
                aria-label={lang === 'el' ? 'Κλείσιμο' : 'Close Chat'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
              {messages.length === 0 && (
                <div className="flex h-full flex-col items-center justify-center text-center text-slate-500 space-y-4 p-4">
                  <motion.div 
                    className="text-4xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [-3, 3, -3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    🏝️
                  </motion.div>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-slate-600">
                      {lang === 'el' 
                        ? "Γεια! Είμαι ο βοηθός του GoGreeceNow. Μπορώ να σας βοηθήσω σε οποιαδήποτε γλώσσα!" 
                        : "Hi! I'm your GoGreeceNow assistant. I can help you in any language!"}
                    </p>
                  </div>
                </div>
              )}
              
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                      m.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-none'
                        : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">
                      {m.parts.map((part, index) => {
                        if (part.type === 'text') {
                          return (
                            <ReactMarkdown
                              key={index}
                              components={{
                                a: ({ node, ...props }) => (
                                  <a 
                                    {...props} 
                                    className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-4 decoration-amber-600/30 hover:decoration-amber-600 transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  />
                                ),
                                p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />
                              }}
                            >
                              {part.text}
                            </ReactMarkdown>
                          );
                        }
                        if (part.type === 'reasoning') {
                          return (
                            <div key={index} className="mb-2 text-xs text-slate-400 italic border-l-2 border-slate-200 pl-2">
                              {part.text}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl px-4 py-3 text-sm bg-white border border-slate-100 text-slate-500 rounded-tl-none shadow-sm flex items-center gap-2">
                    <span className="flex gap-1">
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0 }}>.</motion.span>
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}>.</motion.span>
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }}>.</motion.span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={onFormSubmit} className="border-t border-slate-200 bg-white p-3 z-10 block pointer-events-auto">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={lang === 'el' ? "Πληκτρολογήστε την ερώτησή σας..." : "Type your question..."}
                  className="w-full rounded-full border border-slate-300 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400 pointer-events-auto"
                  autoFocus
                />
                <button
                  type="submit"
                  onClick={() => onFormSubmit()}
                  disabled={isProcessing || !text.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-indigo-600 p-2 text-white transition hover:bg-indigo-700 disabled:opacity-50 disabled:bg-slate-400"
                  aria-label="Send"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                  </svg>
                </button>
              </div>
              <div className="text-[10px] text-center text-slate-400 mt-2">
                Powered by Focus AI
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all z-50 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/40"
        aria-label="Toggle Chat"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.img
              key="chat-gif"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              src="/images/chat-bot.gif"
              alt="Chat Assistant"
              width={56} // Original button is h-14 w-14, which is 56px
              height={56}
              className="w-full h-full rounded-full object-cover border-2 border-white/20"
            />
          ) : (
            <motion.svg
              key="close-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"
            >
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </motion.svg>
          )}
        </AnimatePresence>
        
        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute -z-10 h-full w-full animate-ping rounded-full bg-indigo-500 opacity-20"></span>
        )}
      </motion.button>
    </div>
  );
}
