import { LayoutDashboard, CheckSquare, Layers, FileText, Settings, Users, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'workflow', label: 'Month Close Tasks', icon: CheckSquare },
    { id: 'consolidation', label: 'Group Consolidation', icon: Layers },
    { id: 'reporting', label: 'Statutory Reports', icon: FileText },
    { id: 'team', label: 'Team & Oversight', icon: Users },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800">
      <div className="p-6 flex items-center gap-4">
        <div className="bg-white p-1 rounded overflow-hidden shadow-sm">
          <img 
            src="/input_file_0.png" 
            alt="Corporate Logo" 
            className="w-10 h-10 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-white text-lg tracking-tight leading-none">QUBE</span>
          <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-bold">MNC Suite v4.2</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        <div className="text-[10px] text-slate-600 uppercase font-black tracking-widest mb-4 px-3">Management Steps</div>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-semibold transition-all group",
                activeTab === tab.id 
                  ? "bg-corporate-accent text-slate-900 shadow-md shadow-yellow-500/10" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              )}
            >
              <Icon size={16} className={cn("transition-transform group-hover:scale-110", activeTab === tab.id ? "text-slate-900" : "text-slate-500")} />
              {tab.label}
            </button>
          );
        })}

        <div className="pt-10 text-[10px] text-slate-600 uppercase font-black tracking-widest mb-4 px-3">Administration</div>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800/50 group">
          <Settings size={16} className="text-slate-500 group-hover:rotate-45 transition-transform" />
          Settings
        </button>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-lg border border-slate-700/30">
          <div className="w-8 h-8 rounded bg-corporate-accent flex items-center justify-center text-[10px] font-black text-slate-900">
            FC
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-xs font-bold text-white truncate">Sarah Jenkins</div>
            <div className="text-[10px] text-slate-500 truncate">Group Controller</div>
          </div>
          <button className="text-slate-500 hover:text-white transition-colors">
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
