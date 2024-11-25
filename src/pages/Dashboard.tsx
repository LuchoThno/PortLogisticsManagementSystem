import React from 'react';
import { DashboardStats } from '../components/DashboardStats';
import { MovementTable } from '../components/MovementTable';
import type { Movement } from '../types';

const mockMovements: Movement[] = [
  {
    id: '1',
    productId: 'PRD001',
    type: 'entry',
    quantity: 100,
    company: 'Global Shipping Co.',
    operator: 'John Doe',
    date: '2024-03-15T10:30:00Z',
  },
  {
    id: '2',
    productId: 'PRD002',
    type: 'exit',
    quantity: 50,
    company: 'Local Distribution Ltd.',
    operator: 'Jane Smith',
    date: '2024-03-14T15:45:00Z',
  },
];

const mockDashboardStats = {
  totalProducts: 156,
  inTransit: 23,
  departed: 89,
};

export function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardStats stats={mockDashboardStats} />
      <MovementTable movements={mockMovements} />
    </div>
  );
}