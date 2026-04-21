"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalWindowProps extends HTMLMotionProps<"div"> {
  title?: string;
  children: React.ReactNode;
  wrapperClassName?: string;
}

export function TerminalWindow({
  title = "bash",
  children,
  className,
  wrapperClassName,
  ...props
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col w-full rounded-lg overflow-hidden border border-border/50 bg-card/40 backdrop-blur-md shadow-2xl relative",
        wrapperClassName
      )}
      {...props}
    >
      {/* Decorative top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Terminal Header */}
      <div className="h-10 bg-black/60 border-b border-border/50 flex items-center px-4 justify-between select-none">
        <div className="flex items-center gap-2">
          {/* Mac-style traffic lights but minimal/monochrome or matching theme */}
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
        </div>
        
        {/* Title bar content */}
        <div className="text-xs font-mono text-muted-foreground/80 absolute left-1/2 -translate-x-1/2">
          {title}
        </div>
        
        {/* Empty right area for balance */}
        <div className="w-[44px]" />
      </div>

      {/* Terminal Body */}
      <div className={cn("p-4 md:p-6 text-sm md:text-base overflow-x-auto", className)}>
        {children}
      </div>
    </motion.div>
  );
}
