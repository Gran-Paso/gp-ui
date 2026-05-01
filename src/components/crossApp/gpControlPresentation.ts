/**
 * Shared visuals for GP Control tasks across micro-frontends.
 * Keys align with API task `type` / `status` strings.
 */

export const gpControlTaskTypePresentation: Record<
  string,
  { label: string; className: string }
> = {
  epic: { label: 'Épica', className: 'bg-purple-100 text-purple-800' },
  feature: { label: 'Feature', className: 'bg-indigo-100 text-indigo-800' },
  story: { label: 'Historia', className: 'bg-blue-100 text-blue-800' },
  task: { label: 'Tarea', className: 'bg-gray-100 text-gray-700' },
  bug: { label: 'Bug', className: 'bg-red-100 text-red-800' },
  todo: { label: 'To-Do', className: 'bg-emerald-100 text-emerald-800' },
};

export const gpControlTaskStatusPresentation: Record<
  string,
  { label: string; className: string }
> = {
  todo: { label: 'Por hacer', className: 'bg-slate-100 text-slate-700' },
  in_progress: { label: 'En progreso', className: 'bg-amber-100 text-amber-900' },
  review: { label: 'En revisión', className: 'bg-violet-100 text-violet-800' },
  done: { label: 'Hecho', className: 'bg-green-100 text-green-800' },
  cancelled: { label: 'Cancelado', className: 'bg-gray-100 text-gray-600' },
};

export function resolveGpControlTaskType(type: string) {
  return gpControlTaskTypePresentation[type] ?? {
    label: type,
    className: 'bg-gray-100 text-gray-600',
  };
}

export function resolveGpControlTaskStatus(status: string) {
  return gpControlTaskStatusPresentation[status] ?? {
    label: status,
    className: 'bg-gray-100 text-gray-600',
  };
}
