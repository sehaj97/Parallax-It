import { useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css'
import TextBlock from './textBlock';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parallax pages={2} style={{ top: '0', left: '0' }} class='animation'>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.55}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.50}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
      {/* <Parallax pages={2} style={{ top: '0', left: '0' }} class='animation'>
      </Parallax> */}

    </>
  )
}

export default App
