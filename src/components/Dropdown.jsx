import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Dropdown({ value, onChange, label = 'Expires' }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = useMemo(() => [
    { label: '30 minutes', value: '30' },
    { label: '1 hour', value: '60' },
    { label: '24 hours', value: '1440' },
    { label: '7 days', value: '10080' },
  ], []);

  const currentLabel = useMemo(() => {
    const found = menuItems.find((m) => m.value === String(value));
    return found ? found.label : '24 hours';
  }, [menuItems, value]);

  return (
    <div className="relative inline-block z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative overflow-hidden group bg-transparent text-blue-400 border-2 border-blue-900 px-5 py-2.5 text-sm font-bold rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-2 uppercase tracking-wider hover:text-white"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        <span className="relative z-10 flex items-center gap-2">
          {label}: {currentLabel}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10, rotateX: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-black border-2 border-blue-900 rounded-xl shadow-2xl z-50 overflow-hidden p-2"
            >
              {/* Background subtle effect */}
              <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />

              <div className="relative z-10 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      onChange(item.value);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-colors text-sm font-semibold group text-left"
                  >
                    <span className="text-blue-900 group-hover:text-blue-500 transition-colors text-xs">◆</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
