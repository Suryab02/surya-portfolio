import { motion } from "framer-motion";
import { skills } from "../../data/data";
import { 
  Code2, 
  Server, 
  LayoutTemplate, 
  Database, 
  ShieldCheck, 
  Sparkles, 
  TerminalSquare 
} from "lucide-react";

const getIcon = (name) => {
  switch (name) {
    case "code": return <Code2 size={16} className="text-terracotta/70" />;
    case "server": return <Server size={16} className="text-terracotta/70" />;
    case "layout": return <LayoutTemplate size={16} className="text-terracotta/70" />;
    case "database": return <Database size={16} className="text-terracotta/70" />;
    case "shield-check": return <ShieldCheck size={16} className="text-terracotta/70" />;
    case "sparkles": return <Sparkles size={16} className="text-terracotta/70" />;
    case "terminal": return <TerminalSquare size={16} className="text-terracotta/70" />;
    default: return <Code2 size={16} className="text-terracotta/70" />;
  }
};

export default function Skills() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-10"
      >
        Stack
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 border-b border-rule/50 pb-2 mb-1">
              {getIcon(group.icon)}
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-ink">
                {group.category}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span 
                  key={item} 
                  className="text-sm text-muted bg-cream-dark/50 px-2.5 py-1 rounded-md border border-rule/30 transition-colors hover:border-terracotta/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
