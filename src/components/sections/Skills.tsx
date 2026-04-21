"use client";

import React from "react";
import { TerminalWindow } from "../ui/terminal-window";
import { CommandLinePrompt } from "../ui/command-line-prompt";
import { motion } from "framer-motion";

const skills = {
  "Frontend": [
    { name: "React / Next.js", level: 9 },
    { name: "Tailwind CSS", level: 9 },
    { name: "TypeScript", level: 8 }
  ],
  "Backend": [
    { name: "Node.js / Express", level: 9 },
    { name: "Go", level: 7 },
    { name: "Python / FastAPI", level: 8 },
    { name: "Django", level: 7 }
  ],
  "Cloud & DevOps": [
    { name: "AWS / GCP", level: 8 },
    { name: "Docker / K8s", level: 7 },
    { name: "Linux / Nginx", level: 9 }
  ],
  "Databases": [
    { name: "PostgreSQL", level: 8 },
    { name: "MongoDB", level: 8 },
    { name: "Redis", level: 7 }
  ]
};

function AsciiMeter({ level, max = 10 }: { level: number, max?: number }) {
  const filled = Math.min(level, max);
  const empty = max - filled;
  return (
    <span className="text-xs tracking-widest text-primary/80">
      [{"#".repeat(filled)}{"-".repeat(empty)}]
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="bash">
          <CommandLinePrompt command="skills --list" path="~" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="font-mono"
              >
                <div className="text-secondary-foreground font-bold mb-4 border-b border-border/50 pb-2">
                  <span className="text-muted-foreground mr-2">#</span>
                  {category}
                </div>
                <div className="space-y-3">
                  {items.map(skill => (
                    <div key={skill.name} className="flex justify-between items-center group">
                      <span className="text-muted-foreground/90 group-hover:text-white transition-colors">{skill.name}</span>
                      <AsciiMeter level={skill.level} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="mt-8 pt-4 border-t border-border/50 font-mono text-xs text-muted-foreground"
          >
            <p className="mb-2">Other concepts:</p>
            <div className="flex flex-wrap gap-2 text-primary/60">
              {['System Design', 'APIs', 'Microservices', 'Monitoring', 'CI/CD'].map(concept => (
                 <span key={concept} className="bg-black/40 px-2 py-1 rounded">
                   {concept}
                 </span>
              ))}
            </div>
          </motion.div>
        </TerminalWindow>
      </div>
    </section>
  );
}
