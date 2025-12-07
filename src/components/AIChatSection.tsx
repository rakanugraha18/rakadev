import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Loader2, MessageCircle, X, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "What are Raka’s main skills?",
  "Tell us about Raka’s work experience.",
  "What projects has Raka worked on?",
];

const AIChatSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I am an AI assistant that can answer questions about Raka Nugraha. Feel free to ask anything about his skills, experience, or projects!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages
        .filter(m => m.id !== "1")
        .map(m => ({
          role: m.role,
          content: m.content
        }));

      const { data, error } = await supabase.functions.invoke('chat-groq', {
        body: {
          messages: [
            ...chatHistory,
            { role: 'user', content: currentInput }
          ]
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "Maaf, saya tidak bisa memproses permintaan Anda.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: "Gagal menghubungi AI. Silakan coba lagi.",
        variant: "destructive",
      });

      setMessages((prev) => prev.filter(m => m.id !== userMessage.id));
      setInput(currentInput);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110",
          isOpen
            ? "bg-destructive hover:bg-destructive/90"
            : "bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-chart-1 rounded-full animate-pulse" />
          </>
        )}
      </button>

      {/* Floating Chat Window */}
      <div
        className={cn(
          "fixed bottom-20 right-6 z-40 w-[300px] md:w-[320px] transition-all duration-300 transform",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
          {/* Chat Header */}
          <div className="p-2.5 border-b border-border bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold flex items-center gap-1">
                    Raka AI
                    <Sparkles className="w-2.5 h-2.5 text-primary" />
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-chart-1 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Minimize chat"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[200px] overflow-y-auto p-2.5 space-y-2.5 bg-gradient-to-b from-background to-muted/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2 animate-in slide-in-from-bottom-2 duration-300",
                  message.role === "user" ? "flex-row-reverse" : ""
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                    message.role === "user"
                      ? "bg-secondary"
                      : "bg-primary"
                  )}
                >
                  {message.role === "user" ? (
                    <User className="w-3 h-3 text-secondary-foreground" />
                  ) : (
                    <Bot className="w-3 h-3 text-primary-foreground" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[75%] p-2 rounded-lg shadow-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-card border border-border rounded-tl-sm"
                  )}
                >
                  <p className="text-xs whitespace-pre-wrap">{message.content}</p>
                  <p
                    className={cn(
                      "text-xs mt-1 opacity-60",
                      message.role === "user"
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {message.timestamp.toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2 animate-in slide-in-from-bottom-2 duration-300">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-3 h-3 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border p-2 rounded-lg rounded-tl-sm shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-2.5 py-1.5 flex flex-wrap gap-1.5 border-t border-border bg-muted/30">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => handleSuggestedQuestion(question)}
                className="px-2 py-0.5 text-xs rounded-full bg-background border border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-2.5 border-t border-border bg-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-1.5"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 text-xs h-8"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="shrink-0 h-8 w-8"
              >
                <Send className="w-3 h-3" />
              </Button>
            </form>
            <p className="text-center text-xs text-muted-foreground mt-1.5">
              Powered by Groq AI
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatSection;
