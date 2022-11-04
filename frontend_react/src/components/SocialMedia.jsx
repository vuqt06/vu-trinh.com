import React from 'react'
import { SocialIcon } from 'react-social-icons';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <SocialIcon url="https://www.linkedin.com/in/vu-trinh-umich/" target="_blank"/>
        </div>
        <div>
            <SocialIcon url="https://github.com/vuqt06" target="_blank"/>
        </div>
        <div>
            <SocialIcon url="https://www.facebook.com/vu.quang.trinh.6/" target="_blank"/>
        </div>
    </div>
  )
}

export default SocialMedia