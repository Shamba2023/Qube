import { CloseTask, EntitySubmission, FinancialMetric } from './types';

export const MOCK_TASKS: CloseTask[] = [
  {
    id: '1',
    title: 'Bank Reconciliation (All Entities)',
    description: 'Ensure all bank statements are uploaded and reconciled to the GL.',
    owner: 'John Doe',
    status: 'COMPLETED',
    deadline: '2026-04-05',
    category: 'ACCOUNTING',
  },
  {
    id: '2',
    title: 'Intercompany Matching',
    description: 'Reconcile intercompany balances and eliminate discrepancies across the group.',
    owner: 'Sarah Smith',
    status: 'IN_PROGRESS',
    deadline: '2026-04-07',
    category: 'INTERCOMPANY',
  },
  {
    id: '3',
    title: 'VAT & Tax Provisioning',
    description: 'Calculate monthly tax provisions and reconcile VAT accounts.',
    owner: 'Mike Ross',
    status: 'TO_DO',
    deadline: '2026-04-08',
    category: 'TAX',
  },
  {
    id: '4',
    title: 'Fixed Asset Deprecation Run',
    description: 'Execute the depreciation run for the current period.',
    owner: 'Jane Doe',
    status: 'IN_PROGRESS',
    deadline: '2026-04-06',
    category: 'ACCOUNTING',
  },
  {
    id: '5',
    title: 'Group Reporting Submission',
    description: 'Upload the final trial balance to the consolidation system.',
    owner: 'Sarah Smith',
    status: 'TO_DO',
    deadline: '2026-04-10',
    category: 'REPORTING',
  },
];

export const MOCK_METRICS: FinancialMetric[] = [
  {
    label: 'Total Revenue',
    current: 45200000,
    previous: 42500000,
    previousYear: 38900000,
    format: 'currency',
  },
  {
    label: 'EBITDA Margin',
    current: 24.5,
    previous: 23.8,
    previousYear: 22.1,
    format: 'percent',
  },
  {
    label: 'Operating Cash Flow',
    current: 12400000,
    previous: 11800000,
    previousYear: 10500000,
    format: 'currency',
  },
  {
    label: 'Net Working Capital',
    current: 8200000,
    previous: 8500000,
    previousYear: 7800000,
    format: 'currency',
  },
];

export const MOCK_SUBMISSIONS: EntitySubmission[] = [
  { id: 'e1', name: 'Shell Global BV', region: 'Europe', status: 'APPROVED', submittedAt: '2026-04-05', approver: 'Chief Controller' },
  { id: 'e2', name: 'Shell USA Inc.', region: 'Americas', status: 'SUBMITTED', submittedAt: '2026-04-06' },
  { id: 'e3', name: 'Shell Energy Asia', region: 'APAC', status: 'NOT_STARTED' },
  { id: 'e4', name: 'Shell Nigeria Explorer', region: 'MEA', status: 'REJECTED', submittedAt: '2026-04-04', approver: 'Regional Head' },
];
