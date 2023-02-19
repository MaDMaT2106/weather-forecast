import { useEffect, useState } from 'react';

export const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function TimeAndDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const dayOfWeek = date?.getDay();
  const time = `${
    date?.getHours() < 10 ? '0' + date?.getHours() : date?.getHours()
  }:${date?.getMinutes() < 10 ? '0' + date?.getMinutes() : date?.getMinutes()}`;
  return (
    <div className="todaySidebar-timeAndDate">
      <p>
        {week[dayOfWeek]}, <span className="timeAndDate-time">{time}</span>
      </p>
    </div>
  );
}
