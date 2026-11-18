import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#141022] via-[#0c0a14] to-[#1a1308] text-center p-6 ${className}`}
      >
        <Sparkles className="w-7 h-7 text-amber-400/80 mb-3" aria-hidden="true" />
        <p className="font-display text-lg text-amber-100 tracking-wide">{fallbackTitle}</p>
        {fallbackSubtitle && (
          <p className="text-sm text-slate-400 mt-1 max-w-xs">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
