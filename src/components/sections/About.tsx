"use client";

import React from "react";
import { TerminalWindow } from "../ui/terminal-window";
import { CommandLinePrompt } from "../ui/command-line-prompt";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="about_me.txt - vim">
          <CommandLinePrompt command="cat about.txt" path="~/about" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="font-mono text-muted-foreground leading-relaxed mt-4 border-l-2 border-primary/30 pl-4 py-2"
          >
            <p className="mb-4">
              Computer Science student focused on backend engineering, cloud systems, distributed architecture, and full-stack product development.
            </p>
            <p>
              Strong builder mindset with hands-on experience shipping real projects. 
              Always optimizing, abstracting, and writing scalable logic.
            </p>
          </motion.div>
        </TerminalWindow>
      </div>
    </section>
  );
}
