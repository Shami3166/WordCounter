export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur ">
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  W
                </span>
              </div>
              <h2 className="text-xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                WordCounter
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              A free online word counter tool that helps writers, students, and
              professionals analyze their text with real-time statistics and
              insights.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Real-time word counting
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Character statistics
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Reading time estimation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Dark/Light mode
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} WordCounter. Made with ❤️ for writers.
          </div>

          {/* Simple Credits */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <div className="flex space-x-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded text-xs font-medium">
                React
              </span>
              <span className="px-2 py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300 rounded text-xs font-medium">
                Tailwind
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded text-xs font-medium">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
