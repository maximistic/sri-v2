'use client';

import { useEffect, useState } from 'react';

const fmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export default function Clock({ className = '' }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return <span className={className}>IST --:--</span>;

  const [hh, mm] = fmt.format(now).split(':');
  return (
    <span className={className}>
      IST {hh}
      <span style={{ animation: 'blink 1s steps(1) infinite' }}>:</span>
      {mm}
    </span>
  );
}
