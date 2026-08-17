/**
 * Shared visuals for GP Control tasks across micro-frontends.
 * Keys align with API task `type` / `status` strings.
 */

export const gpControlTaskTypePresentation: Record<
  string,
  { label: string; className: string }
> = {
  epic: { label: 'Épica', className: 'bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-300' },
  feature: { label: 'Feature', className: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300' },
  story: { label: 'Historia', className: 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300' },
  task: { label: 'Tarea', className: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' },
  bug: { label: 'Bug', className: 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-300' },
  todo: { label: 'To-Do', className: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300' },
};

export const gpControlTaskStatusPresentation: Record<
  string,
  { label: string; className: string }
> = {
  todo: { label: 'Por hacer', className: 'bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300' },
  in_progress: { label: 'En progreso', className: 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-300' },
  review: { label: 'En revisión', className: 'bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-300' },
  done: { label: 'Hecho', className: 'bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300' },
  cancelled: { label: 'Cancelado', className: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
};

export function resolveGpControlTaskType(type: string) {
  return gpControlTaskTypePresentation[type] ?? {
    label: type,
    className: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  };
}

export function resolveGpControlTaskStatus(status: string) {
  return gpControlTaskStatusPresentation[status] ?? {
    label: status,
    className: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  };
}
