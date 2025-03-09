
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full w-9 h-9 transition-smooth ${
        theme === "light" 
          ? "border-gray-300 bg-white hover:bg-gray-100" 
          : "border-gray-700 bg-gray-800 hover:bg-gray-700"
      }`}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
        className="flex items-center justify-center"
      >
        {theme === "light" ? 
          <Moon size={18} className="text-gray-700" /> : 
          <Sun size={18} className="text-yellow-300" />
        }
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
