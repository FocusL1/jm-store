"use client";

import { ReactNode } from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export default function EmptyState({
  title = "No hay información",
  description = "Todavía no existen registros para mostrar.",
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 px-8 py-16">

      <div className="mb-6 text-zinc-500">

        {icon ?? <Inbox size={60} />}

      </div>

      <h2 className="text-2xl font-bold text-white">

        {title}

      </h2>

      <p className="mt-3 max-w-md text-center text-zinc-400">

        {description}

      </p>

      {action && (

        <div className="mt-8">

          {action}

        </div>

      )}

    </div>
  );
}