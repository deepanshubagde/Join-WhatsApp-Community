/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { WhatsAppLogo } from './components/WhatsAppLogo';
import { ResilientImage } from './components/ResilientImage';

const WHATSAPP_INVITE_URL = 'https://chat.whatsapp.com/Fo2HqeVQ5HM5leOvF4BZL2';
const HERO_BANNER_SRC = '/src/assets/images/monkood_club_banner_1795032715067.jpg';

export default function App() {
  const prefersReducedMotion = useReducedMotion();

  const memberContext = useMemo(() => {
    if (typeof window === 'undefined') {
      return { name: '', paymentRef: '' };
    }
    const params = new URLSearchParams(window.location.search);
    const rawName =
      params.get('name') ||
      params.get('customer_name') ||
      params.get('first_name') ||
      '';
    const rawPaymentRef =
      params.get('payment_id') ||
      params.get('razorpay_payment_id') ||
      params.get('order_id') ||
      '';

    return {
      name: rawName.trim().slice(0, 60),
      paymentRef: rawPaymentRef.trim().slice(0, 48),
    };
  }, []);

  return (
    <main className="min-h-[100dvh] w-full bg-[#05040a] text-slate-100 flex items-center justify-center px-3 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 relative overflow-hidden">
      {/* Subtle nocturnal indigo & gold ambient backdrop matching join.monkhood.in */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.10)_0%,_rgba(18,15,36,0.45)_42%,_#05040a_85%)]"
      />

      <motion.section
        aria-label="Monkhood Club Welcome Confirmation"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-400/30 bg-[#0d091e] shadow-2xl shadow-black/70 min-h-[calc(100dvh-2rem)] sm:min-h-[620px] lg:min-h-[680px] flex flex-col"
      >
        {/* Huge Monkhood Club Banner Visual */}
        <ResilientImage
          src={HERO_BANNER_SRC}
          alt="Monkhood Club nocturnal obsidian sanctuary courtyard illuminated by warm golden lanterns"
          fallbackTitle="Monkhood Club"
          fallbackSubtitle="Welcome to the Monkhood community"
          priority={true}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Balanced contrast scrim keeping lanterns visible while ensuring crisp center text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#05040a]/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(5,4,10,0.74)_0%,_rgba(10,7,20,0.48)_60%,_rgba(5,4,10,0.82)_100%)]"
        />

        {/* Top Banner Brand Lockup & Confirmation Status */}
        <div className="relative z-10 px-6 py-5 sm:px-10 sm:py-7 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left border-b border-amber-400/15 bg-[#05040a]/40">
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.14em] uppercase bg-gradient-to-r from-amber-200 via-[#f5d77f] to-amber-400 bg-clip-text text-transparent">
              Monkhood Club
            </span>
            <span className="font-editorial italic text-sm sm:text-base text-amber-200/85 mt-0.5">
              Your Digital Sangha
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-200 tracking-wide">
            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
            <span>Subscription Activated</span>
            {memberContext.paymentRef && (
              <>
                <span aria-hidden="true" className="text-amber-200/40">
                  ·
                </span>
                <span className="font-mono tabular-nums text-xs text-slate-300">
                  Ref {memberContext.paymentRef}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Centered Welcome Message & WhatsApp Community Redirection over the Sanctuary Image */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 max-w-4xl mx-auto w-full">
          <div
            aria-hidden="true"
            className="w-14 h-px bg-gradient-to-r from-transparent via-[#f5d77f]/75 to-transparent mb-6 sm:mb-7"
          />

          <p className="font-editorial italic text-xl sm:text-2xl lg:text-[28px] text-[#f5d77f] mb-3 leading-snug">
            {memberContext.name
              ? `Thank you, ${memberContext.name}, for joining Monkhood Club.`
              : 'Thank you for joining Monkhood Club.'}
          </p>

          <h1
            className="font-display font-bold text-amber-50 text-balance tracking-tight leading-[1.15]"
            style={{ fontSize: 'clamp(2rem, 4.6vw, 3.85rem)' }}
          >
            Welcome to the Monkhood community
          </h1>

          {/* Primary WhatsApp Community CTA */}
          <div className="mt-9 sm:mt-11 w-full sm:w-auto flex justify-center">
            <a
              href={WHATSAPP_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 min-h-[56px] px-6 sm:px-9 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-[#041a0d] font-semibold text-base sm:text-lg transition-all duration-150 shadow-xl shadow-[#25D366]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05040a]"
            >
              <WhatsAppLogo className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
              <span>Join the official WhatsApp community</span>
              <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
