"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CommandLinePromptProps {
  command: string;
  path?: string;
  user?: string;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

export function CommandLinePrompt({
  command,
  path = "~",
  user = "harish",
  delay = 0,
  onComplete,
  className,
}: CommandLinePromptProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (hasStarted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsTyping(true);
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= command.length) {
          setDisplayedText(command.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, 50); // Typing speed

      return () => clearInterval(interval);
    } else {
      timeout = setTimeout(() => setHasStarted(true), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [command, delay, hasStarted, onComplete]);

  return (
    <div className={cn("font-mono flex items-center gap-2 mb-4", className)}>
      {/* Prompt Prefix */}
      <div className="flex items-center text-primary/80 shrink-0">
        <span className="text-secondary-foreground">{user}</span>
        <span className="text-muted-foreground">@</span>
        <span className="text-primary">portfolio</span>
        <span className="text-muted-foreground ml-1">:</span>
        <span className="text-blue-400 ml-1">{path}</span>
        <span className="text-primary ml-2">$</span>
      </div>

      {/* Command Text */}
      <div className="flexitems-center text-foreground font-semibold break-all">
        {hasStarted ? displayedText : ""}
        {isTyping && (
          <span className="inline-block w-2.5 h-4 md:h-5 bg-primary ml-1 animate-pulse translate-y-1" />
        )}
      </div>
    </div>
  );
}
