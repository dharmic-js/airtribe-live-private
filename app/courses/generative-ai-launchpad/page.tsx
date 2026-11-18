'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Download, 
  Star, 
  Cpu, 
  Code, 
  Terminal, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

const syllabus = [
  {
    week: 'Week 1',
    title: 'Foundations of LLMs, Prompt Engineering & API Architecture',
    desc: 'Tokenization, temperature, top_p, context windows, structured outputs with function calling, and robust error handling across OpenAI, Anthropic, and open-source models (Llama 3).',
  },
  {
    week: 'Week 2',
    title: 'Vector Embeddings & Semantic Search Pipelines',
    desc: 'Dense vs sparse embeddings, embedding dimensions, cosine similarity, vector indexing strategies (HNSW, IVF), and setting up production vector databases (Pinecone, Qdrant, Weaviate).',
  },
  {
    week: 'Week 3',
    title: 'Advanced Retrieval-Augmented Generation (RAG)',
    desc: 'Chunking algorithms (recursive character, semantic chunking), hybrid search (BM25 + Dense vector), rerankers (Cohere Rerank), contextual compression, and handling tabular data.',
  },
  {
    week: 'Week 4',
    title: 'GraphRAG & Knowledge Graph Powered Intelligence',
    desc: 'Constructing dynamic knowledge graphs from unstructured documentation, combining graph traversals with vector retrieval, and mitigating hallucinations.',
  },
  {
    week: 'Week 5',
    title: 'Building Autonomous AI Agents with LangChain & LangGraph',
    desc: 'ReAct reasoning loops, Plan-and-Solve patterns, tool integration (code execution, SQL database querying, web search), and multi-turn stateful persistence.',
  },
  {
    week: 'Week 6',
    title: 'Multi-Agent Orchestration & CrewAI Workflows',
    desc: 'Designing hierarchical and collaborative agent swarms: research agents, writer agents, critique agents, and code-review bots working together to solve end-to-end tasks.',
  },
  {
    week: 'Week 7',
    title: 'Fine-Tuning, LoRA & Model Alignment',
    desc: 'Dataset preparation for supervised fine-tuning (SFT), Parameter Efficient Fine-Tuning (PEFT / LoRA / QLoRA) using Unsloth and HuggingFace, and evaluating model drift.',
  },
  {
    week: 'Week 8',
    title: 'Production LLM Ops, Tracing & Capstone Demo Day',
    desc: 'Observability with LangSmith / Langfuse, token cost optimization, caching with Redis, latency profiling, and live presentation of your production capstone to VP mentors.',
  },
];

export default function GenAILaunchpadPage() {
  const { openModal } = useApplyModal();
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-purple-400" />
          Airtribe Flagship Cohort • Dec 2026 Batch
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          The GenAI Launchpad
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Become a production-grade Generative AI engineer. Learn to architect enterprise RAG pipelines, fine-tune models, and deploy autonomous multi-agent systems with industry staff engineers.
        </p>

        {/* Cohort Meta Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-300 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Clock className="w-4 h-4 text-brand-400" />
            <span>8 Weeks (Weekend Live Cohort)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Users className="w-4 h-4 text-brand-400" />
            <span>Strictly 40 Seats Per Batch</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>4.95/5 Rating (840+ reviews)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModal('The GenAI Launchpad')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/30 active:scale-95 text-base"
          >
            Apply for Dec 2026 Batch
          </button>
          <button
            onClick={() => openModal('The GenAI Launchpad - Syllabus Download')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-gray-300 bg-dark-850 hover:bg-dark-800 border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-gray-400" />
            Download Syllabus (PDF)
          </button>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 max-w-5xl mx-auto mb-20 text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Tools & Frameworks Mastered Hands-On
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-gray-200">
          {['LangChain', 'LangGraph', 'LlamaIndex', 'CrewAI', 'OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Pinecone', 'Qdrant', 'HuggingFace', 'DSPy', 'Ollama', 'Docker', 'FastAPI'].map((t, idx) => (
            <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2 block">
            Comprehensive Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            8 Weeks from Fundamentals to Production Multi-Agent Systems
          </h2>
        </div>

        <div className="space-y-4">
          {syllabus.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-dark-850 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenWeek(openWeek === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-4">
                  <span className="px-2.5 py-1 rounded bg-brand-500/10 text-brand-300 text-xs font-bold shrink-0">
                    {item.week}
                  </span>
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>
                {openWeek === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>

              {openWeek === idx && (
                <div className="px-5 pb-5 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/5">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Capstone Projects */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2 block">
            Portfolio Evidence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What You Build in the Cohort
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Autonomous Dev Agent</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              A multi-agent codebase inspection tool that parses GitHub pull requests, runs security scanners, writes unit tests, and posts code reviews automatically.
            </p>
            <span className="text-[11px] text-brand-400 font-semibold">Tech: LangGraph, Python, AST, Claude API</span>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Enterprise Hybrid RAG</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              A high-precision document search system indexing 100,000+ financial reports with hybrid BM25 + dense vectors, Cohere reranking, and citation tracking.
            </p>
            <span className="text-[11px] text-blue-400 font-semibold">Tech: Qdrant, LlamaIndex, FastAPI, Docker</span>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Domain LoRA Fine-Tuned Model</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Fine-tune an open-source Llama 3 model on customized SQL queries and clinical notes, benchmarked against GPT-4o with latency under 150ms.
            </p>
            <span className="text-[11px] text-emerald-400 font-semibold">Tech: PyTorch, Unsloth, HuggingFace</span>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center border border-brand-500/30 bg-gradient-to-b from-brand-500/10 to-transparent">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Become the AI Engineer Tech Companies Need
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Admissions are selective to maintain high cohort peer quality. Apply now to speak with our admissions lead and reserve your seat.
        </p>
        <button
          onClick={() => openModal('The GenAI Launchpad')}
          className="px-8 py-4 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/30 active:scale-95"
        >
          Apply for Next Cohort
        </button>
      </div>

    </div>
  );
}
