"use client";

import React, { useState } from "react";
import { TerminalWindow } from "../ui/terminal-window";
import { CommandLinePrompt } from "../ui/command-line-prompt";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, X, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    id: "heliix",
    name: "HeliiX",
    desc: "Federated social networking platform.",
    stack: ["FastAPI", "React", "Next.js", "Supabase", "GCP"],
    details: "A fully federated social network built for scalability. Uses activity pub and a robust distributed backend layout.",
    githubUrl: "https://github.com/federated-social-network"
  },
  {
    id: "cloudshield",
    name: "CloudShield",
    desc: "Distributed load balancing + monitoring.",
    stack: ["Docker", "Nginx", "Prometheus", "Grafana"],
    details: "Containerized architecture simulating real-world traffic proxying and robust system health monitoring.",
    githubUrl: "https://github.com/Harish1604/cloudshield.git"
  },
  {
    id: "certichain",
    name: "CertiChain",
    desc: "Blockchain based certification platform",
    stack: ["Next.js", "Solidity", "Web3", "Ethereum"],
    details: "Decentralized certification issuance and verification platform using smart contracts to ensure authenticity.",
    githubUrl: "https://github.com/Harish1604/certichain_.git"
  },
  {
    id: "deduvault",
    name: "DeduVault",
    desc: "Blockchain + IPFS deduplication platform",
    stack: ["Blockchain", "IPFS", "Solidity", "Node.js"],
    details: "Optimizes cloud storage continuously by stripping out duplicated byte-blocks via IPFS addressing.",
    githubUrl: "https://github.com/Harish1604/deduvault.git"
  },
  {
    id: "chediiai",
    name: "Chedii-AI",
    desc: "Azure AI crop disease detection",
    stack: ["Azure AI", "Python", "FastAPI"],
    details: "Leverages cloud-based computer vision APIs to detect, classify and recommend treatments for flora infections.",
    githubUrl: "https://github.com/Chedii-AI"
  },
  {
    id: "costpilot",
    name: "CostPilot",
    desc: "Cloud cost optimization platform",
    stack: ["React", "AWS", "Dashboard", "Charts"],
    details: "Interactive dashboard aggregating diverse cloud bills to suggest automated right-sizing tweaks.",
    githubUrl: "https://github.com/Harish1604/costpilot.git"
  }
];

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="bash">
          <CommandLinePrompt command="ls -la ./projects" path="~" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <div 
                  className={`border border-border/50 bg-card/10 backdrop-blur-sm p-5 h-full rounded transition-all duration-300 flex flex-col font-mono cursor-pointer hover:border-primary/50 hover:bg-card/30 group ${expandedId === project.id ? 'ring-2 ring-primary bg-card/40' : ''}`}
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-primary group-hover:text-secondary-foreground transition-colors">
                      <FolderGit2 size={18} />
                      <h3 className="font-bold text-lg">./{project.name}</h3>
                    </div>
                    {/* Fake permission string */}
                    <span className="text-[10px] text-muted-foreground/50">drwxr-xr-x</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.slice(0,3).map(tech => (
                      <span key={tech} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-black/50 border border-primary/20 text-primary/80">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-[10px] px-2 py-1 text-muted-foreground">+{project.stack.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {expandedId && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 border border-primary/40 bg-card/60 p-6 rounded"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="font-mono">
                    <span className="text-muted-foreground">$ cat details.txt</span>
                    <h2 className="text-2xl text-secondary-foreground font-bold mt-2">
                      {projects.find(p => p.id === expandedId)?.name}
                    </h2>
                  </div>
                  <button onClick={() => setExpandedId(null)} className="text-muted-foreground hover:text-destructive">
                    <X size={24} />
                  </button>
                </div>
                
                <p className="text-muted-foreground font-mono mb-6">
                   {projects.find(p => p.id === expandedId)?.details}
                </p>
                
                <div className="flex flex-wrap gap-3 font-mono">
                   {projects.find(p => p.id === expandedId)?.stack.map(tech => (
                     <span key={tech} className="text-xs px-2 py-1 bg-black/40 border border-primary/30 text-primary">
                       {tech}
                     </span>
                   ))}
                </div>

                <div className="mt-8 flex gap-4 font-mono text-sm">
                  <a href="#" className="flex items-center gap-2 text-primary hover:text-white transition-colors border-b border-transparent hover:border-primary pb-1">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={projects.find(p => p.id === expandedId)?.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                    <GitBranch size={16} /> Source Code
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </TerminalWindow>
      </div>
    </section>
  );
}
