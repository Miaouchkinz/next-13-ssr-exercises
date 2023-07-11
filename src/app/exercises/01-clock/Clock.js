'use client';

import React from 'react';
import format from 'date-fns/format';

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  /**
   * @suppressHydrationWarning — escape hatch for hydration mismatch for very specific situations (ex: timestamps).
   *
   * Caveats with using this prop:
   * 1. Only use this prop when the hydration mismatch
   * is between the text value of a text node.
   *
   * 2. Adding this prop will not only dismiss the warning, but it
   * also means that client hydration doesn't actually change the DOM when it discovers
   * a mismatch.
   */
  return (
    <p suppressHydrationWarning className="clock">
      {format(time, 'hh:mm:ss.S a')}
    </p>
  );
}

export default Clock;
