"use client";

import React, { useState } from "react";
import { TerminalWindow } from "../ui/terminal-window";
import { CommandLinePrompt } from "../ui/command-line-prompt";
import { motion } from "framer-motion";
import { Mail, GitBranch, Briefcase } from "lucide-react";

export function Contact() {
  const [showStatus, setShowStatus] = useState(false);

  return (
    <section id="contact" className="py-20 px-4 min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <TerminalWindow title="bash">
          <CommandLinePrompt 
            command="ping harish" 
            path="~" 
            onComplete={() => setShowStatus(true)}
          />
          
          {showStatus && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 font-mono"
            >
              <div className="space-y-1 text-muted-foreground animate-pulse mb-6">
                <p>PING harish (127.0.0.1): 56 data bytes</p>
                <p>64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms</p>
                <p>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms</p>
              </div>

              <div className="border border-primary/30 bg-black/40 p-6 rounded text-center">
                <h2 className="text-xl text-white font-bold mb-2">Connection Established.</h2>
                <p className="text-primary mb-8">Let’s build something impactful.</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="mailto:harish16042005@gmail.com" className="group flex items-center justify-center gap-3 border border-border bg-card/50 hover:bg-card hover:border-primary/50 px-6 py-3 rounded transition-all">
                    <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span>Email</span>
                  </a>
                  <a href="https://linkedin.com/in/harish16042005" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 border border-border bg-card/50 hover:bg-card hover:border-primary/50 px-6 py-3 rounded transition-all">
                    <Briefcase size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/Harish1604" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 border border-border bg-card/50 hover:bg-card hover:border-primary/50 px-6 py-3 rounded transition-all">
                    <GitBranch size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </TerminalWindow>
      </div>
      
      <footer className="mt-20 text-center font-mono text-xs text-muted-foreground/50">
        <p>System halted. End of portfolio.</p>
        <p className="mt-1 flex items-center justify-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary/50 inline-block"></span>
          200 OK
        </p>
      </footer>
    </section>
  );
}
