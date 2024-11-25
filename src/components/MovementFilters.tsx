import React from 'react';
import { Filter } from 'lucide-react';

interface Props {
  filters: {
    type: string;
    dateRange: string;
    search: string;
  };
  onFilterChange: (key: keyof Props['filters'], value: string) => void;
}

export function MovementFilters({ filters, onFilterChange }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-gray-500" />
        <h3 className="text-sm font-medium text-gray-700">Filter Movements</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Movement Type
          </label>
          <select
            id="type"
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">All Types</option>
            <option value="entry">Entry</option>
            <option value="exit">Exit</option>
          </select>
        </div>

        <div>
          <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
            Date Range
          </label>
          <select
            id="dateRange"
            value={filters.dateRange}
            onChange={(e) => onFilterChange('dateRange', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>

        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            placeholder="Search by ID or company..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}