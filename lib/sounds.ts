"use client";

// Sound utility using Web Audio API - no external files needed!
let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioContext;
}

// Play a simple tone
function playTone(frequency: number, duration: number, type: OscillatorType = "sine", volume: number = 0.3) {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(volume, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
  
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
}

// Play multiple tones in sequence
function playSequence(notes: { freq: number; dur: number; delay: number }[], type: OscillatorType = "sine") {
  notes.forEach(({ freq, dur, delay }) => {
    setTimeout(() => playTone(freq, dur, type), delay * 1000);
  });
}

export const sounds = {
  // Button click - short pop
  click: () => {
    playTone(800, 0.08, "sine", 0.2);
  },
  
  // Hover sound - gentle blip
  hover: () => {
    playTone(600, 0.05, "sine", 0.1);
  },
  
  // Start game - ascending happy melody
  start: () => {
    playSequence([
      { freq: 523, dur: 0.1, delay: 0 },    // C5
      { freq: 659, dur: 0.1, delay: 0.1 },  // E5
      { freq: 784, dur: 0.15, delay: 0.2 }, // G5
      { freq: 1047, dur: 0.3, delay: 0.3 }, // C6
    ], "sine");
  },
  
  // Select module - cheerful ding
  select: () => {
    playSequence([
      { freq: 880, dur: 0.1, delay: 0 },
      { freq: 1108, dur: 0.15, delay: 0.08 },
    ], "sine");
  },
  
  // Make a choice - whoosh sound
  choose: () => {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.15);
    oscillator.type = "sine";
    
    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.2);
  },
  
  // 1 star - okay sound
  star1: () => {
    playSequence([
      { freq: 440, dur: 0.2, delay: 0 },
      { freq: 523, dur: 0.3, delay: 0.15 },
    ], "sine");
  },
  
  // 2 stars - good sound
  star2: () => {
    playSequence([
      { freq: 523, dur: 0.15, delay: 0 },
      { freq: 659, dur: 0.15, delay: 0.12 },
      { freq: 784, dur: 0.25, delay: 0.24 },
    ], "sine");
  },
  
  // 3 stars - amazing fanfare!
  star3: () => {
    playSequence([
      { freq: 523, dur: 0.12, delay: 0 },      // C5
      { freq: 659, dur: 0.12, delay: 0.1 },    // E5
      { freq: 784, dur: 0.12, delay: 0.2 },    // G5
      { freq: 1047, dur: 0.15, delay: 0.3 },   // C6
      { freq: 1319, dur: 0.4, delay: 0.42 },   // E6
    ], "sine");
  },
  
  // Try again - encouraging bounce
  tryAgain: () => {
    playSequence([
      { freq: 392, dur: 0.1, delay: 0 },
      { freq: 523, dur: 0.1, delay: 0.1 },
      { freq: 659, dur: 0.15, delay: 0.2 },
    ], "triangle");
  },
  
  // Back/menu - soft descending
  back: () => {
    playSequence([
      { freq: 659, dur: 0.08, delay: 0 },
      { freq: 523, dur: 0.12, delay: 0.06 },
    ], "sine");
  },
  
  // Next adventure - exciting whoosh up
  next: () => {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(300, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.25);
    oscillator.type = "sine";
    
    gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  },
  
  // Completion celebration
  complete: () => {
    playSequence([
      { freq: 523, dur: 0.15, delay: 0 },
      { freq: 659, dur: 0.15, delay: 0.12 },
      { freq: 784, dur: 0.15, delay: 0.24 },
      { freq: 1047, dur: 0.2, delay: 0.36 },
      { freq: 784, dur: 0.1, delay: 0.5 },
      { freq: 1047, dur: 0.4, delay: 0.58 },
    ], "sine");
  },
};
