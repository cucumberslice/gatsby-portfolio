import React from 'react'
import { Howl, Howler } from 'howler'

import yeshi from '../assets/audioClips/yeshi.mp3'

const audioClips = [
  {
    sound: yeshi,
    label: 'yeshi',
  },
]

class Sound extends React.Component {
  soundPLay = (src) => {
    const sound = new Howl({
      src,
    })
    sound.play()
  }

  renderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button
          key={index}
          onClick={() => this.soundPLay(soundObj.sound)}
          className="fa fa-volume-up"
          style={{ background: 'none', border: 'none' }}
        ></button>
      )
    })
  }
  render() {
    Howler.volume(0.5)
    return this.renderButtonAndSound()
  }
}

export default Sound

//
