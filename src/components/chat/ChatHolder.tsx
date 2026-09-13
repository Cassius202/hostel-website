'use client'

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, Phone, WifiOff, MapPin, MessageCircle } from "lucide-react";
import useSessionStorage from "@/hooks/useSessionStoage";
import MarkdownText from "./MarkDown";
import { assets } from "@/constants/assets";
import Image, { StaticImageData } from "next/image";

type Message = { role: 'user' | 'ai', content: string, isError?: boolean };

const SUGGESTED = [
  "What rooms are available?",
  "How far from Faculty of Tech?",
  "What's the price per session?",
  "Is there a waiting list?",
];

const ChatHolder = () => {
  const { botImage, backgroundImage } = assets;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useSessionStorage<Message[]>("iyalode-chats", []);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const chatRef = useRef<HTMLDivElement>(null);

  const iconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

useEffect(() => {
  const handler = (e: MouseEvent) => {
    if (
      chatRef.current && 
      !chatRef.current.contains(e.target as Node) &&
      !iconRef.current?.contains(e.target as Node) // ← exclude the FAB
    ) {
      setIsOpen(false);
    }
  };
  if (isOpen) document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
}, [isOpen]);;

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleSend = async (text?: string) => {
    const msg = text ?? input;
    if (!msg.trim() || loading || !isOnline) return;

    const userMsg: Message = { role: 'user', content: msg };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: msg,
          history: messages
            .filter(m => m.content && !m.isError)
            .slice(-10)
            .map(m => ({
              role: m.role === 'user' ? 'user' : 'model',
              parts: [{ text: m.content }]
            }))
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.text) throw new Error(data.error || "AI_DOWN");
      setMessages([...newMessages, { role: 'ai', content: data.text }]);
    } catch {
      setMessages([...newMessages, {
        role: 'ai',
        content: "⚠️ **Lucy is temporarily unavailable.**\n\nPlease try again in a moment, or tap the phone button to call us directly.",
        isError: true
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 max-sm:right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 w-[calc(100vw-32px)] sm:w-96 h-[32rem] bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-2xl shadow-black/10 flex flex-col overflow-hidden"
          >
            {/* ── Header with background image ── */}
            <div className="relative p-4 flex items-center justify-between overflow-hidden">
              <div className="absolute inset-0">
                <Image src={backgroundImage} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-stone-950/75" />
              </div>

              {/* Lucy's avatar + info */}
              <div className="relative flex items-center gap-3">
                <div className="relative size-10 rounded-full overflow-hidden border-2 border-rose-400/50 shrink-0">
                  <Image src={botImage} alt="Lucy" fill className="object-cover object-top" />
                  <span className={`absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-stone-900 ${isOnline ? 'bg-emerald-400' : 'bg-stone-500'}`} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Lucy</h3>
                  <p className="text-[10px] text-white/60 flex items-center gap-1">
                    <MapPin size={9} />
                    Iyalode Taofikat Hub · UI
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="relative text-white/60 hover:text-white transition-colors p-1"
              >
                <X size={17} />
              </button>
            </div>

            {/* ── Messages ── */}
            <TextArea
              messages={messages}
              loading={loading}
              botImage={botImage}
              onSuggest={handleSend}
              showSuggestions={messages.length === 0}
            />

            {/* ── Input ── */}
            <div className="p-3 border-t border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  disabled={!isOnline || loading}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={isOnline ? "Ask Lucy anything..." : "Connection lost..."}
                  className="flex-1 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 text-stone-900 dark:text-white placeholder:text-stone-400 transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={loading || !isOnline || !input.trim()}
                  className="bg-rose-600 hover:bg-rose-700 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all shrink-0"
                >
                  {loading
                    ? <Loader2 className="animate-spin" size={16} />
                    : isOnline
                      ? <Send size={16} />
                      : <WifiOff size={16} />
                  }
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating buttons ── */}
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.a
              href="tel:+2348000000000"
              initial={{ opacity: 0, scale: 0, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
            >
              <Phone size={20} />
            </motion.a>
          )}
        </AnimatePresence>

        {/* FAB — Animated Chat/X Icon */}
        <button
          ref={iconRef}
          onClick={
            (e) => {
              e.preventDefault();
              e.stopPropagation();
              return setIsOpen(prev => !prev);
            }
          }
          className="relative flex items-center justify-center size-14 z-30 rounded-full bg-rose-600 text-white shadow-lg shadow-rose-600/30 hover:scale-110 hover:bg-rose-700 transition-all border-none"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export const TextArea = ({
  messages,
  loading,
  botImage,
  onSuggest,
  showSuggestions,
}: {
  messages: Message[];
  loading: boolean;
  botImage: StaticImageData;
  onSuggest: (text: string) => void;
  showSuggestions: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
      {/* Empty state */}
      {showSuggestions && (
        <div className="flex flex-col items-center text-center gap-4 pt-2">
          <div className="relative size-16 rounded-full overflow-hidden border-2 border-rose-200 dark:border-rose-800">
            <Image src={botImage} alt="Lucy" fill className="object-cover object-top" />
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">{`Hi, I'm Lucy 👋`}</p>
            <p className="text-xs text-stone-400 mt-0.5">Your Iyalode Taofikat Hub concierge</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {SUGGESTED.map((s) => (
              <button
                key={s}
                onClick={() => onSuggest(s)}
                className="text-left text-xs px-3 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-rose-300 dark:hover:border-rose-800 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-white dark:bg-stone-800/50"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {messages.map((msg, i) => (
        <div key={i} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          {msg.role === 'ai' && (
            <div className="relative size-6 rounded-full overflow-hidden shrink-0 mb-0.5">
              <Image src={botImage} alt="Lucy" fill className="object-cover object-top" />
            </div>
          )}

          <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
            msg.role === 'user'
              ? 'bg-rose-600 text-white rounded-br-sm'
              : msg.isError
                ? 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 rounded-bl-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-bl-sm'
          }`}>
            <MarkdownText text={msg.content} />
          </div>
        </div>
      ))}

      {/* Typing indicator */}
      {loading && (
        <div className="flex items-end gap-2 justify-start">
          <div className="relative size-6 rounded-full overflow-hidden shrink-0">
            <Image src={botImage} alt="Lucy" fill className="object-cover object-top" />
          </div>
          <div className="bg-stone-100 dark:bg-stone-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
            {[0, 0.2, 0.4].map((delay, i) => (
              <div key={i} className="size-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHolder;