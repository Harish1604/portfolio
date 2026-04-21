"use client";

import React from "react";
import { TerminalWindow } from "../ui/terminal-window";
import { CommandLinePrompt } from "../ui/command-line-prompt";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Engineering Intern",
    company: "Wiztech Automation Solutions",
    period: "2023 - 2024",
    details: [
      "Built reusable React components",
      "Integrated REST APIs",
      "Agile collaboration"
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Heavy Vehicles Factory (AVNL)",
    period: "2023 - 2023",
    details: [
      "Testing automation",
      "Deployment workflows",
      "API integration support"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="bash">
          <CommandLinePrompt command="history --experience" path="~/work" />
          
          <div className="mt-8 space-y-8 pl-4 border-l-2 border-primary/20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-card border-2 border-primary rounded-full group-hover:bg-primary transition-colors" />
                
                <div className="font-mono">
                  <h3 className="text-secondary-foreground font-bold text-lg">{exp.company}</h3>
                  <p className="text-primary mt-1">{exp.role}</p>
                  <p className="text-muted-foreground text-sm mb-3">[{exp.period}]</p>
                  
                  <ul className="text-muted-foreground/90 space-y-1 list-none">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary/70">{">"}</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
