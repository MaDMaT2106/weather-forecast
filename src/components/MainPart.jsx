import React from 'react';
import WeekOrDayForecast from './WeekOrDayForecast/WeekOrDayForecast';
import TodaysHighlights from './TodaysHighlights/TodaysHighlights';

export default function MainPart() {
  return (
    <div className="mainPart">
      <WeekOrDayForecast />
      <TodaysHighlights/>
    </div>
  );
}
