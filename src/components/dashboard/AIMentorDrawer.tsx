import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  BookOpen, 
  Lightbulb, 
  GraduationCap,
  RotateCcw,
  CheckCircle2
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

export const AIMentorDrawer: React.FC<AIMentorDrawerProps> = ({ isOpen, onClose, initialQuery }) => {
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
    }, 1000);
  };

  const quickPrompts = [
    'Synthesize key takeaways for Multi-Agent talk',
    'What skills do I need for Principal AI Architect?',
    'Explain difference between FP16 and INT4 quantization',
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg h-full glass-panel bg-slate-950/95 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white font-['Space_Grotesk']">ABTalks AI Co-Pilot</h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  RAG Active
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Interrogate 1,400+ talk transcripts & roadmaps</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompts Carousel */}
        <div className="p-3 bg-slate-900/40 border-b border-slate-800/60 overflow-x-auto flex gap-2 no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-purple-600/20 hover:border-purple-500/40 border border-slate-700/60 text-[11px] text-slate-300 hover:text-purple-200 whitespace-nowrap transition-all flex items-center gap-1.5"
            >
              <Lightbulb className="w-3 h-3 text-amber-400" />
              <span>{prompt}</span>
            </button>
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
                <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-purple-600 text-white rounded-br-none shadow-lg shadow-purple-600/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Citations if available */}
                {msg.citations && (
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Verified Video Transcript Citations:
                    </span>
                    <div className="space-y-1">
                      {msg.citations.map((cite, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center justify-between text-[10px] text-cyan-300 bg-cyan-950/30 p-1.5 rounded border border-cyan-500/20 cursor-pointer hover:bg-cyan-900/40"
                        >
                          <span className="truncate">{cite.title}</span>
                          <span className="font-semibold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-200">
                            Jump {cite.timestamp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <span className="text-[9px] text-slate-400 block text-right mt-1.5 opacity-70">
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-7 h-7 rounded-lg object-cover ring-1 ring-purple-400 flex-shrink-0 mt-0.5"
                />
              )}
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center gap-2 text-xs text-purple-400 p-3 rounded-xl bg-purple-950/20 border border-purple-500/30 w-fit">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Analyzing video transcripts and computing vector similarity...</span>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950">
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
              className="w-full pl-4 pr-12 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 p-2 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white transition-all shadow-md shadow-purple-600/30"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-[10px] text-slate-500 text-center mt-2">
            Powered by ABTalks RAG Vector Index & Large Language Models
          </p>
        </div>
      </div>
    </div>
  );
};
