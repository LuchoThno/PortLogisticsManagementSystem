import React, { useState } from 'react';
import { PackageX } from 'lucide-react';
import type { Product } from '../types';

interface Props {
  onSubmit: (exit: Omit<Product, 'id' | 'status' | 'name'>) => void;
}

export function ExitForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState({
    productId: '',
    quantity: '',
    company: '',
    operator: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      quantity: parseInt(formData.quantity),
      exitDate: new Date().toISOString(),
    });
    setFormData({ productId: '', quantity: '', company: '', operator: '' });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <PackageX className="w-6 h-6 text-red-500" />
        <h2 className="text-xl font-semibold text-gray-900">Product Exit</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="productId" className="block text-sm font-medium text-gray-700">
            Product ID
          </label>
          <input
            type="text"
            id="productId"
            value={formData.productId}
            onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
            className="mt-1 block w-full"
            required
            pattern="PRD\d{3}"
            title="Product ID format: PRD followed by 3 digits (e.g., PRD001)"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="mt-1 block w-full"
            required
            min="1"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Receiving Company
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="mt-1 block w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="operator" className="block text-sm font-medium text-gray-700">
            Operator
          </label>
          <input
            type="text"
            id="operator"
            value={formData.operator}
            onChange={(e) => setFormData({ ...formData, operator: e.target.value })}
            className="mt-1 block w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Register Exit
        </button>
      </form>
    </div>
  );
}