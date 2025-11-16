import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo/Title */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">W</span>
          </div>
          <h1 className="text-2xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            WordCounter
          </h1>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
