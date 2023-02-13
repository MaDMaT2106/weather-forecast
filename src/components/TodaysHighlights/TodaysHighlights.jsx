import React from 'react';
import HighlightsBlocks from './HighlightsBlocks';
import './TodaysHighlights.scss'

export default function TodaysHighlights() {
  return (
    <div className="todaysHighlights container">
      <h2>Today's Highlights</h2>
      <HighlightsBlocks />
    </div>
  );
}
