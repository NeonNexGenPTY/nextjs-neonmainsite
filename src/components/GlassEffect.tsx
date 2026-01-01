import React from 'react';
import { cn } from '@/lib/utils';

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'minimal' | 'card' | 'header' | 'footer';
}

export const GlassEffect: React.FC<GlassEffectProps> = ({ 
  children, 
  className,
  variant = 'default' 
}) => {
  const variantClasses = {
    default: "backdrop-blur-3xl border border-white/10",
    strong: "backdrop-blur-3xl border border-white/20 bg-black/20",
    minimal: "backdrop-blur-xl border border-white/5",
    card: "backdrop-blur-2xl border border-white/10 bg-black/10 rounded-lg",
    header: "backdrop-blur-2xl border-b border-white/10 bg-black/5",
    footer: "backdrop-blur-3xl border-t border-white/10 bg-black/5"
  };

  return (
    <div
      className={cn(
        variantClasses[variant],
        "mb-4",
        className
      )}
    >
      {children}
    </div>
  );
};