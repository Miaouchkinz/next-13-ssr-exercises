import './styles.css';

import Interview from './Interview';
import React from 'react';

//
/**
 * Acceptance Criteria:
 * - The initial code has a hydration mismatch on desktop/tablet window sizes (>500px). Your main task is to remove the mismatch.
 * - No other errors should be thrown, on the server or the client.
 * - The sidebar should not be visible when the window is less than 500px wide.
 */

function InterviewExercise() {
  return (
    <main>
      <Interview />
      <aside>
        <img src="/gwen-artist.png" alt="Portrait of the artist" />
        <h2>About the Artist</h2>
        <p>
          Gwen Altaria is a contemporary artist known for her unique
          blend of traditional oil painting techniques and pop culture
          references. Born and raised in London, England, Vivi had an
          early love for both the fine arts and the fantastical worlds
          of video games.
        </p>
      </aside>
    </main>
  );
}

export default InterviewExercise;
