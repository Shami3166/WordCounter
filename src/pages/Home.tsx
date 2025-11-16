import { useState } from "react";
import CounterCard from "@/components/CounterCard";

export default function Home() {
  const [text, setText] = useState<string>("");

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-primary to-primary/80 rounded-2xl mb-4 shadow-lg">
          <svg
            className="w-8 h-8 text-primary-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Word Counter Tool
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Count words, characters, sentences, and paragraphs in real-time.
          Perfect for writers, students, and professionals.
        </p>
      </div>

      {/* Counter Card */}
      <div className="max-w-6xl mx-auto px-4">
        <CounterCard
          text={text}
          onTextChange={handleTextChange}
          onClear={handleClear}
        />
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-inner">
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-2 text-foreground">
            Real-time Counting
          </h3>
          <p className="text-sm text-muted-foreground">
            Watch your stats update instantly as you type
          </p>
        </div>

        <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-inner">
            <svg
              className="w-6 h-6 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-2 text-foreground">Reading Time</h3>
          <p className="text-sm text-muted-foreground">
            Estimate how long it takes to read your text
          </p>
        </div>

        <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-inner">
            <svg
              className="w-6 h-6 text-purple-600 dark:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-2 text-foreground">
            Multiple Metrics
          </h3>
          <p className="text-sm text-muted-foreground">
            Words, characters, sentences, paragraphs and more
          </p>
        </div>
      </div>
    </div>
  );
}
