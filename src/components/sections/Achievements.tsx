"use client";

import React from "react";
import { TerminalWindow } from "../ui/terminal-window";
import { CommandLinePrompt } from "../ui/command-line-prompt";
import { motion } from "framer-motion";

export function Achievements() {
  const logs = [
    "[INFO] Sony AITRIOS Hackathon Finalist (Top 15 India)",
    "[INFO] Certified: AWS Cloud Practitioner",
    "[SUCCESS] Shipped multiple production-style systems",
    "[WARN] Refactoring legacy logic... Done",
    "[OK] Continuous learning mode active."
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="system.log">
          <CommandLinePrompt command="cat achievements.log" path="~/logs" />
          
          <div className="mt-6 font-mono text-sm space-y-2">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.3 }}
                className={
                  log.includes("[INFO]") ? "text-blue-400" :
                  log.includes("[SUCCESS]") ? "text-primary" :
                  log.includes("[WARN]") ? "text-yellow-400" :
                  "text-muted-foreground"
                }
              >
                <span className="opacity-50 text-xs mr-4">
                  {new Date().toISOString().split('T')[0]} {`10:0${index}:${index * 13}`}
                </span>
                {log}
              </motion.div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
