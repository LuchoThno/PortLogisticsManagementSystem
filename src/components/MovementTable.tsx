import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import type { Movement } from '../types';
import { MovementFilters } from './MovementFilters';

interface Props {
  movements: Movement[];
}

export function MovementTable({ movements }: Props) {
  const [filters, setFilters] = React.useState({
    type: '',
    dateRange: '',
    search: '',
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredMovements = movements.filter((movement) => {
    if (filters.type && movement.type !== filters.type) return false;

    if (filters.dateRange) {
      const movementDate = new Date(movement.date);
      const today = new Date();
      const startOfDay = new Date(today.setHours(0, 0, 0, 0));
      
      switch (filters.dateRange) {
        case 'today':
          if (movementDate < startOfDay) return false;
          break;
        case 'week':
          const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
          if (movementDate < startOfWeek) return false;
          break;
        case 'month':
          const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
          if (movementDate < startOfMonth) return false;
          break;
      }
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        movement.productId.toLowerCase().includes(searchTerm) ||
        movement.company.toLowerCase().includes(searchTerm)
      );
    }

    return true;
  });

  return (
    <div className="space-y-4">
      <MovementFilters filters={filters} onFilterChange={handleFilterChange} />
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Movements</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredMovements.length > 0 ? (
                filteredMovements.map((movement) => (
                  <tr key={movement.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {movement.type === 'entry' ? (
                          <ArrowDownLeft className="w-5 h-5 text-green-500 mr-2" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-red-500 mr-2" />
                        )}
                        <span className={`text-sm ${movement.type === 'entry' ? 'text-green-600' : 'text-red-600'}`}>
                          {movement.type === 'entry' ? 'Entry' : 'Exit'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{movement.productId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{movement.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{movement.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{movement.operator}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(movement.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-sm text-gray-500">
                    No movements found matching your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}