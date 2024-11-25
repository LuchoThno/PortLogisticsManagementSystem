import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your application preferences and system settings.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        <div className="px-4 py-6 sm:p-8">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-8 divide-y divide-gray-900/10">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Notifications
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Configure how you want to receive notifications.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="email-notifications"
                          name="email-notifications"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="email-notifications" className="font-medium text-gray-900">
                          Email notifications
                        </label>
                        <p className="text-gray-500">
                          Receive email notifications when important events occur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-8 pt-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Language and Region
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Choose your preferred language and regional settings.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
                        Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-x-3">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}