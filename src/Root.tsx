import React from 'react';
import {Composition} from 'remotion';
import {Gallery} from './Gallery';
import {Promo} from './Promo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 竖版功能展示片 · 1080×1920 · 45s */}
      <Composition id="Promo" component={Promo} durationInFrames={1350} fps={30} width={1080} height={1920} />
      {/* 横版六卡空间画廊 · 1920×1080 · 20s */}
      <Composition id="Gallery" component={Gallery} durationInFrames={600} fps={30} width={1920} height={1080} />
    </>
  );
};
