import React from 'react';
import Queue from './queue.js';
import VideoPlayer from './videoPlayer.js';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const PartyPage = ({
  video,
  userPlaylist,
  hostPartyClicked,
  toggleHost,
  dropHostParty,
  HostParty,
  listClickHandler,
  voteUpdate,
  clickHostParty,
  accessCode,
  userId,
  nowPlaying,
  partyPlaylist
}) => {
  const buttonText = hostPartyClicked ? 'Drop Hosted Party' : 'Leave Party';
  return (
    <div style={{ color: "black", backgroundColor: "#ECEBEB", fontFamily: "fantasy", textalign: "center", fontSize: 65, fontWeight: 600, textAlign: "center", padding: "10px 20px" }}>
      Your Party Access Code is: {`${accessCode}`}
      <VideoPlayer video={video} nowPlaying={nowPlaying} />
      <Queue
        accessCode={accessCode}
        partyPlaylist={partyPlaylist}
        listClickHandler={listClickHandler}
        voteUpdate={voteUpdate}
        userId={userId}
      />
          <Button onClick={() => dropHostParty()}>Drop Hosted Party</Button>{' '}
    </div>
  );
};

export default PartyPage;
