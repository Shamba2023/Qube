/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import SummaryCharts from './components/SummaryCharts';
import TaskList from './components/TaskList';
import SubmissionStatus from './components/SubmissionStatus';
import { CloseType } from './types';
import { MOCK_METRICS, MOCK_TASKS, MOCK_SUBMISSIONS } from './constants';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Download, FileSpreadsheet } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [closeType, setCloseType] = useState<CloseType>('MONTHLY');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-slate-800 tracking-tight leading-tight uppercase">Performance KPI Monitor</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Variance Analysis | Current Month vs Benchmark</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                  <FileSpreadsheet size={12} className="text-emerald-600" />
                  Excel Data
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-corporate-accent border border-corporate-navy/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-900 hover:brightness-95 transition-all shadow-sm">
                 <Download size={12} />
                  Export PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {MOCK_METRICS.map((metric) => (
                <MetricCard key={metric.label} metric={metric} closeType={closeType} />
              ))}
            </div>

            <SummaryCharts closeType={closeType} />

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
                 <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Group Consolidation Monitor</h3>
                 <button className="text-[10px] text-slate-400 font-black uppercase" onClick={() => setActiveTab('consolidation')}>Full Map View →</button>
              </div>
              <SubmissionStatus submissions={MOCK_SUBMISSIONS} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <TaskList tasks={MOCK_TASKS.slice(0, 4)} />
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 text-white p-5 rounded-xl shadow-xl relative overflow-hidden border border-slate-800 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-slate-500">Consolidation Progress</h3>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-3xl font-extrabold tracking-tighter">64%</span>
                      <span className="text-[9px] font-black text-emerald-500 mb-1 tracking-widest uppercase">Validated</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-6 border border-slate-700">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '64%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      />
                    </div>
                  </div>
                  <button className="w-full py-2.5 bg-corporate-accent text-slate-900 rounded-lg text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all active:scale-[0.98]">
                    Initiate Final Sign-Off
                  </button>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5 border-b border-slate-50 pb-3">Close Deadlines</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Trial Balance Run', date: 'Apr 06', status: 'WD+04', urgent: true },
                      { label: 'Elimination Entries', date: 'Apr 07', status: 'WD+05', urgent: false },
                      { label: 'Tax Validation', date: 'Apr 08', status: 'WD+06', urgent: false },
                    ].map((d, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-slate-700">{d.label}</span>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">{d.date}</span>
                        </div>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded border ${d.urgent ? 'bg-red-50 text-corporate-red border-red-100' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                          {d.status}
                        </span>
                      </div>
                    ))}
                    <div className="pt-2">
                       <p className="text-[10px] text-slate-400 italic">Financial books remain locked until regional audit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'workflow':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
             <div className="mb-6">
              <h2 className="text-2xl font-bold text-corporate-navy tracking-tight">Full Close Workflow</h2>
              <p className="text-sm text-slate-500 mt-1">Managing all critical steps for the {closeType.toLowerCase()} accounting cycle.</p>
            </div>
            <TaskList tasks={MOCK_TASKS} />
          </motion.div>
        );
      case 'consolidation':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-corporate-navy tracking-tight">Group Submission Status</h2>
              <p className="text-sm text-slate-500 mt-1">Real-time visibility into entity book closures and group eliminations.</p>
            </div>
            <SubmissionStatus submissions={MOCK_SUBMISSIONS} />
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4">
              <div className="bg-amber-100 p-2 rounded-xl h-fit">
                <AlertCircle className="text-amber-600" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-800">Critical Consolidation Warning</h4>
                <p className="text-xs text-amber-700/80 mt-1 leading-relaxed">
                  3 entities are currently offline or failed their initial validation tests. 
                  Group elimination for Shell Energy Asia will be blocked until the intercompany matching task is marked as complete.
                </p>
                <button className="mt-4 text-xs font-bold text-amber-900 underline">Investigate Mismatches</button>
              </div>
            </div>
          </motion.div>
        );
      default:
        return (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
             <h2 className="text-2xl font-bold text-corporate-navy opacity-50">Content Restricted</h2>
             <p className="text-slate-400 mt-2">Please contact your administrator for access.</p>
          </div>
        );
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Executive Controller Dashboard';
      case 'workflow': return 'Accounting Close Workflow';
      case 'consolidation': return 'Global Group Consolidation';
      case 'reporting': return 'Statutory Reporting Engine';
      case 'team': return 'Resource Management';
      default: return 'FinanceClose Suite';
    }
  };

  return (
    <div className="flex min-h-screen bg-corporate-bg font-sans selection:bg-corporate-accent selection:text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Header 
          closeType={closeType} 
          setCloseType={setCloseType} 
          title={getPageTitle()}
        />
        
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
          
          <footer className="mt-20 pt-8 border-t border-slate-200 flex items-center justify-between text-[11px] font-medium text-slate-400 uppercase tracking-widest pb-8">
            <span>© 2026 Shell Global Finance Systems - Confidential Audit Tool</span>
            <div className="flex gap-6">
              <span className="hover:text-corporate-navy cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-corporate-navy cursor-pointer transition-colors">Compliance Hub</span>
              <span className="hover:text-corporate-navy cursor-pointer transition-colors">System Health: Normal</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
