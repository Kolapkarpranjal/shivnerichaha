"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale; // replace [lang]
    router.push(segments.join('/'));
  };

  return (
    <div className="flex space-x-2">
      {['en', 'hi', 'mr'].map(loc => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
