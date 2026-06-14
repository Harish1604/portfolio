"use client";

import React from "react";
import { TerminalWindow } from "../ui/terminal-window";
import { CommandLinePrompt } from "../ui/command-line-prompt";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function Achievements() {
  const logs = [
    { text: "[INFO] Presented Paper at ICGPC 26: Hybrid Blockchain-IPFS Framework", url: "https://www.linkedin.com/feed/update/urn:li:activity:7469699979951935488/" },
    { text: "[INFO] Certified: Snowflake Data Warehousing", url: "https://achieve.snowflake.com/0aee9b77-d783-45db-abd7-cf2d4904106c" },
    { text: "[INFO] Certified: Oracle Database @ AWS Certified Architect Professional", url: "https://www.linkedin.com/posts/harish16042005_oracle-aws-cloudcomputing-activity-7394405506494160896-4ir1" },
    { text: "[INFO] Completed: Google ML Crash Course", url: "https://www.linkedin.com/posts/harish16042005_ml-machinelearning-activity-7342031031501234176-x6Hd" },
    { text: "[SUCCESS] Finalist: Sony AITRIOS Hackathon 2025", url: "https://www.linkedin.com/posts/harish16042005_hackathon-sonyaitrios-innovation-activity-7310329656962863105-3uRh" },
    { text: "[INFO] Certified: AWS Cloud Practitioner", url: "https://www.linkedin.com/posts/harish16042005_aws-cloudcomputing-amritavishwavidyapeetham-activity-7308464834092679170-jSjs" },
    { text: "[INFO] Certified: Postman API Fundamentals", url: "https://www.linkedin.com/posts/harish16042005_api-postmanapi-apitesting-activity-7278613156363386881-3dCb" },
    { text: "[SUCCESS] Shipped multiple production-style systems", url: "" },
    { text: "[WARN] Refactoring legacy logic... Done", url: "" },
    { text: "[OK] Continuous learning mode active.", url: "" }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="system.log">
          <CommandLinePrompt command="cat achievements.log" path="~/logs" />
          
          <div className="mt-6 font-mono text-sm space-y-2">
            {logs.map((log, index) => {
              const textColorClass = log.text.includes("[INFO]") ? "text-blue-400" :
                                     log.text.includes("[SUCCESS]") ? "text-primary" :
                                     log.text.includes("[WARN]") ? "text-yellow-400" :
                                     "text-muted-foreground";
              
              const LogContent = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.3 }}
                  className={`flex items-start group ${textColorClass} ${log.url ? "hover:text-white cursor-pointer transition-colors" : ""}`}
                >
                  <span className="opacity-50 text-xs mr-4 whitespace-nowrap mt-0.5">
                    {new Date().toISOString().split('T')[0]} {`10:0${index}:${index * 13}`}
                  </span>
                  <span className="flex-1 flex items-center gap-2">
                    {log.text}
                    {log.url && <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </span>
                </motion.div>
              );

              if (log.url) {
                return (
                  <a key={index} href={log.url} target="_blank" rel="noopener noreferrer" className="block">
                    {LogContent}
                  </a>
                );
              }

              return LogContent;
            })}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
