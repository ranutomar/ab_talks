import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  Lightbulb
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

interface AIMentorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  citations?: { title: string; timestamp: string }[];
}

export const AIMentorDrawer: React.FC<AIMentorDrawerProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: `Hello ${currentUser.name}! I am your ABTalks AI Co-Pilot & Learning Assistant. I have indexed your active roadmap ("${currentUser.role}") and all 1,400+ talk transcripts. How can I assist your learning today?`,
      timestamp: 'Just now',
    },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsThinking(true);

    // Simulate AI vector response
    setTimeout(() => {
      let aiResponseText = `Based on transcript analysis from Dr. Elena Rostova's keynote on Multi-Agent Networks:

1. **Orchestration Pattern**: LangGraph utilizes directed acyclic graphs (DAGs) to maintain state across agent steps.
2. **Memory Retention**: Short-term state is preserved in Redis checkpoints, while long-term memory relies on vector DB semantic search.
3. **Recommendation**: Complete Module 8 of your roadmap to unlock practical code implementation.`;

      if (query.toLowerCase().includes('rag')) {
        aiResponseText = `For RAG architecture optimization:
• Advanced chunking strategies (parent-child retrieval) increase precision by 34%.
• Reranking with Cohere/BGE rerankers removes irrelevant context before feeding to the LLM.
• Recommended Talk: "RAG Architecture Patterns: Beyond Basic Vector Search" by Prof. David Miller.`;
      } else if (query.toLowerCase().includes('career') || query.toLowerCase().includes('skills')) {
        aiResponseText = `To advance to **Principal AI Architect**:
• You have mastered: Vector Indexing, Multi-Agent Frameworks, RAG Evaluation (78% complete).
• Recommended next step: Fine-tuning distributed models using LoRA/QLoRA in Module 8.`;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: [
          { title: 'Building Autonomous Agent Networks (Min 14:20)', timestamp: '14:20' },
          { title: 'RAG Architecture Patterns (Min 28:05)', timestamp: '28:05' },
        ],
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsThinking(false);
    }, 900);
  };

  const quickPrompts = [
    'Synthesize key takeaways for Multi-Agent talk',
    'What skills do I need for Principal AI Architect?',
    'Explain difference between FP16 and INT4 quantization',
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-[#060816]/85 backdrop-blur-md">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-lg h-full glass-panel bg-[#060816]/95 border-l border-white/10 shadow-2xl flex flex-col justify-between"
        >
          {/* Drawer Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#10192C] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] p-0.5 shadow-lg shadow-[#7C4DFF]/25">
                <div className="w-full h-full bg-[#060816] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#5EC8FF] animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white font-['Space_Grotesk']">ABTalks AI Co-Pilot</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 font-mono">
                    RAG Active
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8]">Interrogate 1,400+ talk transcripts & roadmaps</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts Carousel */}
          <div className="p-3 bg-[#060816] border-b border-white/10 overflow-x-auto flex gap-2 no-scrollbar shrink-0">
            {quickPrompts.map((prompt, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSend(prompt)}
                className="px-3 py-1.5 rounded-xl bg-[#10192C] hover:bg-[#7C4DFF]/20 hover:border-[#7C4DFF]/40 border border-white/10 text-[11px] text-slate-300 hover:text-[#5EC8FF] whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>{prompt}</span>
              </motion.button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-xl bg-[#7C4DFF]/20 border border-[#7C4DFF]/40 flex items-center justify-center text-[#5EC8FF] shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white rounded-br-none shadow-lg shadow-[#7C4DFF]/20 font-medium'
                      : 'bg-[#10192C] border border-white/10 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text}</div>

                  {/* Citations if available */}
                  {msg.citations && (
                    <div className="mt-3 pt-2.5 border-t border-white/10">
                      <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider block mb-1.5 font-mono">
                        Verified Video Transcript Citations:
                      </span>
                      <div className="space-y-1.5">
                        {msg.citations.map((cite, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-center justify-between text-[10px] text-[#22D3EE] bg-[#22D3EE]/10 p-2 rounded-xl border border-[#22D3EE]/20 cursor-pointer hover:bg-[#22D3EE]/20 transition-colors font-mono"
                          >
                            <span className="truncate">{cite.title}</span>
                            <span className="font-semibold px-2 py-0.5 rounded bg-[#22D3EE]/20 text-[#22D3EE] shrink-0 ml-2">
                              Jump {cite.timestamp}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="text-[9px] text-[#94A3B8] block text-right mt-1.5 opacity-70 font-mono">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-7 h-7 rounded-xl object-cover ring-1 ring-[#7C4DFF] shrink-0 mt-0.5"
                  />
                )}
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-2 text-xs text-[#5EC8FF] p-3 rounded-xl bg-[#7C4DFF]/10 border border-[#7C4DFF]/30 w-fit">
                <Sparkles className="w-4 h-4 animate-spin text-[#5EC8FF]" />
                <span>Analyzing video transcripts and computing vector similarity...</span>
              </div>
            )}
          </div>

          {/* Input Footer */}
          <div className="p-4 border-t border-white/10 bg-[#060816] shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about talks, transcripts, or skills..."
                className="w-full pl-4 pr-12 py-3 bg-[#10192C] border border-white/10 rounded-xl text-xs text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 p-2 rounded-lg bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] disabled:opacity-50 text-white transition-all shadow-md shadow-[#7C4DFF]/30 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
            <p className="text-[10px] text-[#94A3B8] text-center mt-2 font-mono">
              Powered by ABTalks RAG Vector Index & Large Language Models
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
