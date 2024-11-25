import React from 'react';
import { Package, Truck, Ship } from 'lucide-react';

interface DashboardStatsProps {
  stats: {
    totalProducts: number;
    inTransit: number;
    departed: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard
        title="Total Products"
        value={stats.totalProducts}
        icon={<Package className="w-8 h-8 text-blue-500" />}
        trend={+12}
      />
      <StatsCard
        title="In Transit"
        value={stats.inTransit}
        icon={<Truck className="w-8 h-8 text-yellow-500" />}
        trend={-3}
      />
      <StatsCard
        title="Departed"
        value={stats.departed}
        icon={<Ship className="w-8 h-8 text-green-500" />}
        trend={+8}
      />
    </div>
  );
}

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: number;
}

function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        {icon}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}% from last month
          </p>
        </div>
      </div>
    </div>
  );
}
