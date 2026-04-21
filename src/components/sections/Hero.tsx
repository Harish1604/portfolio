"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TerminalWindow } from "../ui/terminal-window";
import { CommandLinePrompt } from "../ui/command-line-prompt";

export function Hero() {
  const [showRole, setShowRole] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showActions, setShowActions] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 py-20 relative">
      <div className="w-full max-w-4xl z-10">
        <TerminalWindow title="harish@portfolio:~">
          <CommandLinePrompt 
            command="whoami" 
            onComplete={() => setShowRole(true)} 
          />
          
          {showRole && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">
                HARISH <span className="text-primary">J</span>
              </h1>
            </motion.div>
          )}

          {showRole && (
            <CommandLinePrompt 
              command="cat roles.txt" 
              delay={0.5}
              onComplete={() => setShowStatus(true)} 
            />
          )}

          {showStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 font-mono space-y-1 text-muted-foreground"
            >
              <p>Full Stack Developer</p>
              <p>Backend Engineer</p>
              <p>Cloud & Systems Builder</p>
            </motion.div>
          )}

          {showStatus && (
            <CommandLinePrompt 
              command="./status.sh" 
              delay={0.5}
              onComplete={() => setShowActions(true)} 
            />
          )}

          {showActions && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-green-400 mb-8 font-mono">
                [OK] Building scalable systems and real products.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
                <a href="#projects" className="group flex items-center gap-2 border border-primary/50 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded transition-colors text-primary">
                  <span>[</span> View Projects <span>]</span>
                </a>
                <a href="/resume-afford.pdf" target="_blank" className="group flex items-center gap-2 border border-border bg-card/50 hover:bg-card px-4 py-2 rounded transition-colors">
                  <span>[</span> Resume <span>]</span>
                </a>
                <a href="#contact" className="group flex items-center gap-2 border border-border bg-card/50 hover:bg-card px-4 py-2 rounded transition-colors">
                  <span>[</span> Contact <span>]</span>
                </a>
              </div>
            </motion.div>
          )}

          {/* Persistent Blinking Cursor if everything is done */}
          {showActions && (
            <div className="mt-8 flex text-primary/80 shrink-0 font-mono items-center gap-2">
              <span className="text-secondary-foreground">harish</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-primary">portfolio</span>
              <span className="text-muted-foreground ml-1">:</span>
              <span className="text-blue-400 ml-1">~</span>
              <span className="text-primary ml-2">$</span>
              <span className="inline-block w-2.5 h-5 bg-primary ml-1 animate-pulse translate-y-1" />
            </div>
          )}
        </TerminalWindow>
      </div>

      {/* Background Matrix/Grid hints */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00ff8808_1px,transparent_1px),linear-gradient(to_bottom,#00ff8808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </section>
  );
}
