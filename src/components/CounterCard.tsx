import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { calculateTextStats, copyToClipboard } from "@/utils/textUtils";

interface CounterCardProps {
  text: string;
  onTextChange: (text: string) => void;
  onClear: () => void;
}

export default function CounterCard({
  text,
  onTextChange,
  onClear,
}: CounterCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const stats = calculateTextStats(text);

  const handleCopy = async () => {
    if (!text.trim()) return;

    const success = await copyToClipboard(text);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleClear = () => {
    onClear();
  };

  const StatItem = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: number;
    icon: string;
  }) => (
    <div className="text-center p-4 bg-muted/30 dark:bg-muted/50 rounded-lg border border-border/50 backdrop-blur-sm">
      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        <span>{icon}</span>
        {label}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Text Input Section */}
      <Card className="lg:col-span-2 shadow-xl border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-foreground">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Your Text
          </CardTitle>
          <CardDescription>
            Start typing or paste your text below to see real-time statistics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="Enter your text here... You'll see word count, character count, and other statistics update in real-time as you type!"
            className="min-h-[300px] resize-none text-lg leading-relaxed border-2 border-border/50 focus:border-primary transition-all duration-300 bg-background/50 backdrop-blur-sm"
          />
          <div className="flex flex-wrap gap-3 justify-between">
            <div className="flex gap-3">
              <Button
                onClick={handleCopy}
                disabled={!text.trim()}
                variant={isCopied ? "default" : "outline"}
                size="sm"
                className={`flex items-center gap-2 transition-all duration-300 ${
                  isCopied
                    ? "bg-green-500 hover:bg-green-600 text-white border-green-500 shadow-lg shadow-green-500/25"
                    : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border-blue-200 dark:border-gray-600 text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 hover:border-blue-300 dark:hover:border-blue-400 hover:shadow-lg backdrop-blur-sm"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {isCopied ? "Copied!" : "Copy Text"}
              </Button>
              <Button
                onClick={handleClear}
                disabled={!text.trim()}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:border-red-300 dark:hover:border-red-600 hover:shadow-lg backdrop-blur-sm transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Clear All
              </Button>
            </div>
            <Badge
              variant="secondary"
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50 backdrop-blur-sm"
            >
              {text.length > 0 ? "Editing..." : "Ready to type"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Section */}
      <div className="space-y-6">
        {/* Summary Card */}
        <Card className="shadow-xl border-border/50 bg-linear-to-br from-blue-50 to-blue-100/50 dark:from-primary/5 dark:to-primary/10 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Text Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <StatItem label="Words" value={stats.words} icon="📝" />
              <StatItem label="Characters" value={stats.characters} icon="🔤" />
              <StatItem
                label="No Spaces"
                value={stats.charactersWithoutSpaces}
                icon="␣"
              />
              <StatItem label="Sentences" value={stats.sentences} icon="💬" />
            </div>
          </CardContent>
        </Card>

        {/* Additional Stats Card */}
        <Card className="shadow-xl border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <svg
                className="w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              Additional Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/20 dark:bg-muted/30 rounded-lg border border-border/30">
                <span className="text-sm font-medium text-foreground">
                  Paragraphs
                </span>
                <Badge
                  variant="secondary"
                  className="text-base px-3 py-1 bg-primary/10 text-primary border-primary/20"
                >
                  {stats.paragraphs}
                </Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 dark:bg-muted/30 rounded-lg border border-border/30">
                <span className="text-sm font-medium text-foreground">
                  Reading Time
                </span>
                <Badge
                  variant="secondary"
                  className="text-base px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800/50"
                >
                  {stats.readingTime} min
                </Badge>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground">Text Density</span>
                <span className="text-primary font-medium">
                  {Math.round(
                    (stats.words / Math.max(stats.characters, 1)) * 100
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-linear-to-r from-primary to-primary/80 h-2.5 rounded-full transition-all duration-700 ease-out shadow-inner"
                  style={{
                    width: `${Math.min(
                      (stats.words / Math.max(stats.characters, 1)) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card className="shadow-xl border-blue-200/50 dark:border-blue-800/50 bg-linear-to-br from-blue-50 to-blue-100/70 dark:from-blue-950/20 dark:to-blue-900/30 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Pro Tip
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-600/80 dark:text-blue-400/80 leading-relaxed">
              Aim for 15-20 words per sentence for better readability. Keep
              paragraphs under 150 words.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
