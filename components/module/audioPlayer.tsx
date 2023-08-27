import React, { useState, useRef, useContext } from 'react';
import TimeSlider from 'react-input-slider';

import PrevIcon from '../icons/PrevIcon';
import NextIcon from '../icons/NextIcon';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import { useRouter } from 'next/router';
import { contextProvider } from '../context/context';

const AudioPlayer = (props: object) => {
  const { value, setValue }: object | any = useContext(contextProvider);

  const { src, name, artist, FT, slug, albumlngth }: string | any = props;
  const router = useRouter();
  //   console.log('props', src);
  const audioRef: any = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }: any) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const prevHandler = () => {
    if (slug) {
      if (slug[1] == 1) {
        router.push(`/albums/${slug[0]}/8`);
      } else {
        router.push(`/albums/${slug[0]}/${Number(slug[1]) - 1}`);
      }
    } else {
      const {
        query: { musicId },
      } = router;
      if (musicId && +musicId == 1) {
        router.push(`/${value.tracklng}`);
      } else {
        router.push(`/${Number(musicId) - 1}`);
      }
    }
  };

  const nextHandler = () => {
    if (slug) {
      if (slug[1] == albumlngth) {
        router.push(`/albums/${slug[0]}/1`);
      } else {
        router.push(`/albums/${slug[0]}/${Number(slug[1]) + 1}`);
      }
    } else {
      const {
        query: { musicId },
      } = router;
      if (musicId && +musicId == value.tracklng) {
        router.push('/1');
      } else {
        router.push(`/${Number(musicId) + 1}`);
      }
    }
  };

  return (
    <div className='App'>
      <div className='player'>
        <img className='Song-Thumbnail' src='/images/rap.png' alt='tet' />

        <h2 className='Song-Title'>{name}</h2>
        <p className='Singer'>
          {artist} ft {FT}
        </p>
        <div className='Control-Button-Group'>
          <div className='Prev-Button' onClick={prevHandler}>
            <PrevIcon />
          </div>
          <div className='Pause-Play-Button' onClick={handlePausePlayClick}>
            {isPlay ? <PauseIcon /> : <PlayIcon />}
          </div>
          <div className='Next-Button' onClick={nextHandler}>
            <NextIcon />
          </div>
        </div>
        <TimeSlider
          axis='x'
          xmax={duration}
          x={currentTime}
          onChange={handleTimeSliderChange}
          styles={{
            track: {
              backgroundColor: '#e3e3e3',
              height: '2px',
            },
            active: {
              backgroundColor: '#333',
              height: '2px',
            },
            thumb: {
              marginTop: '-3px',
              width: '8px',
              height: '8px',
              backgroundColor: '#333',
              borderRadius: 0,
            },
          }}
        />
        <audio
          ref={audioRef}
          src={src}
          onLoadedData={handleLoadedData}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
          onEnded={() => setPlay(false)}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
