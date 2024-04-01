'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  CpuChipIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const tabs = [
  { name: 'AI辅助V1', href: '/texas/gpt', icon: CpuChipIcon },
  { name: 'AI辅助V2', href: '/texas/userinfo', icon: UserIcon },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto pb-12">
        {children}
      </div>
      <div className="fixed inset-x-0 bottom-0 bg-white shadow-md">
        <div className="flex justify-between text-center">
        {tabs.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div className="flex-1 p-0 " key={link.name+"d"}>
          <Link
            key={link.name}
            href={link.href}
            className={
              clsx(
                'border-r border-dashed border-gray-300 flex h-[48px] grow items-center justify-center gap-2  bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )
            }
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
          </div>
        );
      })}
        </div>
      </div>
      </div>
  );
}
