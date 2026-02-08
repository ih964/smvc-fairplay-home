import { motion } from "framer-motion";
import { UserPlus, Trophy, Phone } from "lucide-react";

const MobileQuickActions = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-secondary/95 backdrop-blur-md border-t border-secondary-foreground/10 safe-area-bottom"
    >
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-xs transition-all active:scale-95"
        >
          <UserPlus className="w-5 h-5" />
          <span>Word Lid</span>
        </a>
        <a
          href="#uitslagen"
          className="flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-lg bg-field-green text-white font-heading font-bold text-xs transition-all active:scale-95"
        >
          <Trophy className="w-5 h-5" />
          <span>Uitslagen</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-lg bg-secondary-foreground/20 text-secondary-foreground font-heading font-bold text-xs transition-all active:scale-95"
        >
          <Phone className="w-5 h-5" />
          <span>Contact</span>
        </a>
      </div>
    </motion.div>
  );
};

export default MobileQuickActions;
