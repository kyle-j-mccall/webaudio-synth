import React, { useState } from "react";
import "./SynthLayout.css";

export default function SynthLayout() {
  const [waveform, setWaveform] = useState("");
  const ctx = new AudioContext();

  const osc = ctx.createOscillator();

  osc.connect(ctx.destination);

  const startOsc = () => {
    osc.type = waveform;
    osc.start();

    setTimeout(() => {
      osc.stop();
    }, 2000);
  };

  // const buffer = ctx.createBuffer(1, ctx.sampleRate * 1, ctx.sampleRate);

  // const channelData = buffer.getChannelData(0);

  return (
    <div className="synth-container">
      <select
        onChange={(e) => {
          setWaveform(e.target.value);
          console.log(waveform);
        }}
      >
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="sawtooth">Saw</option>
        <option value="sine">Sine</option>
      </select>
      <button onClick={startOsc}>Play</button>
    </div>
  );
}
