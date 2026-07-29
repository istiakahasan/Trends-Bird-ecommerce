import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PermissionGuard } from '../components/PermissionGuard';
import {
  LayoutDashboard,
  Shield,
  Users,
  UserCog,
  Image,
  FolderTree,
  Tag,
  Sparkles,
  Package,
  LogOut,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, permission: 'dashboard:watch' },
  { name: 'Permissions', href: '/permissions', icon: Shield, permission: 'permission:watch' },
  { name: 'Roles', href: '/roles', icon: Users, permission: 'role:watch' },
  { name: 'Users', href: '/users', icon: UserCog, permission: 'user:watch' },
  { name: 'Media Library', href: '/media', icon: Image, permission: 'media:watch' },
  { name: 'Categories', href: '/categories', icon: FolderTree, permission: 'category:watch' },
  { name: 'Brands', href: '/brands', icon: Tag, permission: 'brand:watch' },
  { name: 'Attributes', href: '/attributes', icon: Sparkles, permission: 'attribute:watch' },
  { name: 'Products', href: '/products', icon: Package, permission: 'product:watch' },
];

interface SidebarProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}

export const Sidebar = ({ isMobile = false, onNavigate }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="flex h-16 items-center gap-2 px-6 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-1.5">
            <LayoutDashboard className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold">Trends Bird</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navigation.map((item) => (
          <PermissionGuard key={item.href} permission={item.permission}>
            <Link
              to={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-slate-700/50 hover:text-white",
                location.pathname === item.href
                  ? "bg-slate-700/50 text-white shadow-lg shadow-slate-700/30"
                  : "text-slate-300"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="flex-1">{item.name}</span>
              {location.pathname === item.href && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>
          </PermissionGuard>
        ))}
      </nav>

      <div className="border-t border-slate-700 p-4">
        <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
            {user?.name?.charAt(0)?.toUpperCase() || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium">{user?.name}</p>
            <p className="truncate text-xs text-slate-400">{user?.role}</p>
          </div>
        </div>

        <div className="mt-3 space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start text-slate-300 hover:bg-slate-700/50 hover:text-white"
            size="sm"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400 hover:bg-red-500/10 hover:text-red-300"
            size="sm"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};