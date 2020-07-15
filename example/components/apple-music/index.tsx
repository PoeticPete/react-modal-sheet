import * as React from 'react';
import styled from 'styled-components';

import { album } from './data';
import { BottomSheet } from '../../../dist';
import Album from './Album';
import Player from './Player';

const IOSMusicPlayer = () => {
  const [isPlayerOpen, setPlayerOpen] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState<string>(album.songs[0]);

  const openPlayer = () => setPlayerOpen(true);
  const closePlayer = () => setPlayerOpen(false);

  return (
    <Wrapper>
      <Album
        album={album}
        currentSong={currentSong}
        isPlayerOpen={isPlayerOpen}
        onMiniPlayerClick={openPlayer}
        onSongClick={setCurrentSong}
      />

      <PlayerBottomSheet
        isOpen={isPlayerOpen}
        onClose={closePlayer}
        rootId="root"
      >
        <Player album={album} song={currentSong} />
      </PlayerBottomSheet>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
`;

const PlayerBottomSheet = styled(BottomSheet)`
  margin: 0 auto;
  max-width: 680px;

  .bottom-sheet-container {
    background-color: #222;
  }

  .bottom-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .bottom-sheet-header::before {
    background-color: #666;
  }
`;

export default IOSMusicPlayer;