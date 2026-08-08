import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, UserPlus, Check, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

interface PeerMatch {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  matchScore: number;
  skills: string[];
  reason: string;
  isConnected?: boolean;
}

interface AINetworkingProps {
  onSendIcebreaker?: (peerName: string, role: string) => void;
}

export const AINetworking: React.FC<AINetworkingProps> = ({ onSendIcebreaker }) => {
  const [peers, setPeers] = useState<PeerMatch[]>([
    {
      id: 'p-1',
      name: 'Maya Lin',
      role: 'Staff AI Architect',
      company: 'Stripe',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
      matchScore: 98,
      skills: ['RAG Pipeline', 'LangGraph', 'Vector DBs'],
      reason: 'Both building multi-agent LLM systems with Pinecone vector DBs.',
      isConnected: false,
    },
    {
      id: 'p-2',
      name: 'David K. Chen',
      role: 'Senior ML Engineer',
      company: 'Scale AI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
      matchScore: 94,
      skills: ['LoRA Fine-tuning', 'PyTorch', 'Quantization'],
      reason: 'Shared interest in Module 8: Distributed LLM Fine-Tuning.',
      isConnected: true,
    },
    {
      id: 'p-3',
      name: 'Dr. Sophia Ramos',
      role: 'Principal Researcher',
      company: 'NVIDIA AI',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
      matchScore: 91,
      skills: ['TensorRT-LLM', 'HNSW Graphs', 'CUDA'],
      reason: 'Top match for high-throughput inference optimization.',
      isConnected: false,
    },
    {
      id: 'p-4',
      name: 'Kaito Takahashi',
      role: 'Lead Data Engineer',
      company: 'Databricks',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
      matchScore: 89,
      skills: ['Apache Spark', 'Milvus', 'Feature Store'],
      reason: 'Active in the same ABTalks vector indexing discussion thread.',
      isConnected: false,
    },
  ]);

  const toggleConnect = (id: string) => {
    setPeers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isConnected: !p.isConnected } : p))
    );
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#10192C] via-[#141F35] to-[#7C4DFF]/15 border border-[#7C4DFF]/30 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-['Space_Grotesk']">
              AI Peer Compatibility Engine
            </h4>
            <p className="text-[10px] text-[#94A3B8]">
              Matches based on skills, roadmap progress, and talk interactions
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#5EC8FF]/20 text-[#5EC8FF] border border-[#5EC8FF]/30">
          142 Peers
        </span>
      </div>

      {/* Recommended Peer Cards */}
      <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
        {peers.map((peer, idx) => (
          <motion.div
            key={peer.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-4 rounded-2xl bg-[#10192C] border border-white/10 hover:border-[#7C4DFF]/40 transition-all flex flex-col justify-between gap-3 group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={peer.avatar}
                    alt={peer.name}
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-[#7C4DFF]/40"
                  />
                  <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-[#060816] text-[#10B981]">
                    <ShieldCheck className="w-3.5 h-3.5 fill-[#10B981]/20 text-[#10B981]" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-xs font-bold text-white group-hover:text-[#5EC8FF] transition-colors">
                      {peer.name}
                    </h5>
                    <span className="px-1.5 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF] text-[9px] font-mono font-bold border border-[#7C4DFF]/30">
                      {peer.matchScore}% Match
                    </span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8]">
                    {peer.role} • <span className="text-slate-300">{peer.company}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* AI Why Matched Banner */}
            <div className="p-2 rounded-xl bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 text-[10px] text-[#5EC8FF] flex items-start gap-1.5">
              <Sparkles className="w-3 h-3 text-[#5EC8FF] shrink-0 mt-0.5" />
              <span>{peer.reason}</span>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-1.5">
              {peer.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2 py-0.5 rounded-md bg-[#141F35] text-[9px] font-mono text-slate-300 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
              {onSendIcebreaker && (
                <button
                  onClick={() => onSendIcebreaker(peer.name, peer.role)}
                  className="px-3 py-1.5 rounded-xl bg-[#141F35] hover:bg-[#7C4DFF]/20 text-[#5EC8FF] border border-white/10 text-[10px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3 h-3 text-[#5EC8FF]" />
                  <span>AI Icebreaker</span>
                </button>
              )}

              <button
                onClick={() => toggleConnect(peer.id)}
                className={`ml-auto px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  peer.isConnected
                    ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30'
                    : 'bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white shadow-md shadow-[#7C4DFF]/20 hover:opacity-90'
                }`}
              >
                {peer.isConnected ? (
                  <>
                    <Check className="w-3 h-3" />
                    Connected
                  </>
                ) : (
                  <>
                    <UserPlus className="w-3 h-3" />
                    Connect Peer
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
