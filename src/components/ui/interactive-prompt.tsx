"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export function InteractivePrompt({ className }: { className?: string }) {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep input focused when clicking on the container
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      
      let output: React.ReactNode = "";

      if (cmd === "") {
        output = "";
      } else if (cmd === "help") {
        output = (
          <div className="text-muted-foreground space-y-1 my-2">
            <p><span className="text-primary">about</span>    - Learn more about me</p>
            <p><span className="text-primary">projects</span> - View my projects</p>
            <p><span className="text-primary">resume</span>   - Open my resume</p>
            <p><span className="text-primary">clear</span>    - Clear the terminal</p>
            <p><span className="text-primary">sudo</span>     - Admin mode</p>
          </div>
        );
      } else if (cmd === "about") {
        output = (
          <p className="text-muted-foreground my-2">
            Hi, I'm Harish J. A Full Stack Developer & Backend Engineer focused on building scalable systems. Type 'projects' to see my work!
          </p>
        );
      } else if (cmd === "projects" || cmd === "cd projects") {
        output = (
          <p className="text-blue-400 my-2">
            Navigating to projects... Scroll down or click 'View Projects' above!
          </p>
        );
        setTimeout(() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else if (cmd === "resume") {
        output = <p className="text-primary my-2">Opening resume...</p>;
        window.open("/resume/resume-harish.pdf", "_blank");
      } else if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      } else if (cmd === "sudo") {
        output = <p className="text-destructive my-2">harish is not in the sudoers file. This incident will be reported.</p>;
      } else {
        output = <p className="text-destructive my-2">Command not found: {cmd}. Type 'help' for available commands.</p>;
      }

      setHistory((prev) => [...prev, { command: input, output }]);
      setInput("");
    }
  };

  const Prefix = () => (
    <div className="flex items-center text-primary/80 shrink-0 select-none mr-2">
      <span className="text-secondary-foreground">harish</span>
      <span className="text-muted-foreground">@</span>
      <span className="text-primary">portfolio</span>
      <span className="text-muted-foreground ml-1">:</span>
      <span className="text-blue-400 ml-1">~</span>
      <span className="text-primary ml-2">$</span>
    </div>
  );

  return (
    <div className={cn("font-mono mt-8", className)}>
      {history.map((entry, i) => (
        <div key={i} className="mb-2">
          <div className="flex">
            <Prefix />
            <span className="text-foreground">{entry.command}</span>
          </div>
          {entry.output}
        </div>
      ))}
      
      <div className="flex items-center" ref={containerRef}>
        <Prefix />
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none text-foreground flex-1 min-w-[50px]"
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
