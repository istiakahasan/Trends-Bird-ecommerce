import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { PermissionGuard } from '../PermissionGuard';

interface PageHeaderProps {
  title: string;
  description?: string;
  createButton?: {
    label: string;
    href: string;
    permission: string;
  };
}

export const PageHeader = ({ title, description, createButton }: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6 border-b">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-gray-500 mt-1">{description}</p>}
      </div>
      {createButton && (
        <PermissionGuard permission={createButton.permission}>
          <Button asChild>
            <a href={createButton.href}>
              <Plus className="mr-2 h-4 w-4" />
              {createButton.label}
            </a>
          </Button>
        </PermissionGuard>
      )}
    </div>
  );
};