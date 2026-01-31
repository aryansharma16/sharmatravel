'use client';

import { useState, useRef, useEffect } from 'react';

export type MultiSelectOption = { value: string; label: string };

type CustomMultiSelectDropdownProps = {
  label: string;
  name: string;
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  error?: string;
};

export function CustomMultiSelectDropdown({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  placeholder = 'Search and select...',
  className = '',
  error,
}: CustomMultiSelectDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.trim().toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggle = (optValue: string) => {
    if (value.includes(optValue)) {
      onChange(value.filter((v) => v !== optValue));
    } else {
      onChange([...value, optValue]);
    }
  };

  const remove = (e: React.MouseEvent, optValue: string) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== optValue));
  };

  const selectedLabels = value
    .map((v) => options.find((o) => o.value === v)?.label)
    .filter(Boolean) as string[];

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`flex h-11 min-h-11 w-full items-center gap-2 rounded-lg border bg-white px-3 py-2 text-left text-slate-900 focus:outline-none focus:ring-1 dark:bg-slate-800 dark:text-slate-100 ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500'
              : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500 dark:border-slate-600 dark:focus:border-primary-400 dark:focus:ring-primary-400'
          }`}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {selectedLabels.length > 0 ? (
            <span className="scrollbar-custom flex min-w-0 flex-1 flex-nowrap items-center gap-1.5 overflow-x-auto overflow-y-hidden py-0.5">
              {selectedLabels.map((label) => (
                <span
                  key={label}
                  className="inline-flex shrink-0 items-center gap-1 rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900/40 dark:text-primary-200"
                >
                  {label}
                  <button
                    type="button"
                    onClick={(e) => remove(e, options.find((o) => o.label === label)?.value ?? '')}
                    className="hover:text-primary-600 dark:hover:text-primary-300"
                    aria-label={`Remove ${label}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </span>
          ) : (
            <span className="flex-1 text-slate-500 dark:text-slate-400">{placeholder}</span>
          )}
          <span className="shrink-0 text-slate-400">
            <svg
              className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {open && (
          <div
            className="absolute z-10 mt-1 flex max-h-64 w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-600 dark:bg-slate-800"
            role="listbox"
          >
            <div className="shrink-0 border-b border-slate-200 bg-white p-2 dark:border-slate-600 dark:bg-slate-800">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search cars..."
                className="w-full rounded border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400"
                autoFocus
                onKeyDown={(e) => e.stopPropagation()}
              />
            </div>
            <ul className="scrollbar-custom max-h-52 flex-1 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <li className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">
                  No matches
                </li>
              ) : (
                filtered.map((opt) => (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={value.includes(opt.value)}
                    onClick={() => toggle(opt.value)}
                    className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <input
                      type="checkbox"
                      checked={value.includes(opt.value)}
                      onChange={() => {}}
                      className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-700"
                    />
                    {opt.label}
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
      {/* Hidden inputs for form submit: multi values as car_type[] or repeated name */}
      {value.map((v) => (
        <input key={v} type="hidden" name={name} value={v} readOnly />
      ))}
    </div>
  );
}
