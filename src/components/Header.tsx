import { Search, Bell, Calendar, ChevronDown, Filter } from 'lucide-react';
import { CloseType } from '../types';
import { cn } from '../lib/utils';

interface HeaderProps {
  closeType: CloseType;
  setCloseType: (type: CloseType) => void;
  title: string;
}

export default function Header({ closeType, setCloseType, title }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20 shadow-sm">
      <div className="flex items-center gap-8">
        <h1 className="text-lg font-extrabold text-slate-800 tracking-tight">
          {title} <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full ml-3 uppercase tracking-widest font-black">Internal Only</span>
        </h1>
        
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setCloseType('MONTHLY')}
            className={cn(
              "px-4 py-1 rounded-md text-xs font-bold transition-all",
              closeType === 'MONTHLY' 
                ? "bg-white text-slate-900 shadow-sm" 
                : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
            )}
          >
            Month Close
          </button>
          <button
            onClick={() => setCloseType('QUARTERLY')}
            className={cn(
              "px-4 py-1 rounded-md text-xs font-bold transition-all",
              closeType === 'QUARTERLY' 
                ? "bg-white text-slate-900 shadow-sm" 
                : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
            )}
          >
            Quarter Close
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors" size={14} />
          <input 
            type="text" 
            placeholder="Search GL codes..." 
            className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-corporate-accent/30 focus:border-corporate-accent focus:bg-white transition-all w-56 placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-corporate-red rounded-full border border-white"></span>
          </button>
          <div className="h-6 w-px bg-slate-200 mx-1"></div>
          <div className="flex flex-col items-end mr-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Current Period</span>
            <span className="text-xs font-bold text-slate-700">October 2023 | Q4 Fiscal</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-black rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md active:scale-95 uppercase tracking-wide">
            <Filter size={14} className="text-corporate-accent" />
            <span>Audit Filters</span>
          </button>
        </div>
      </div>
    </header>
  );
}
