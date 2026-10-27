import React from 'react';
import {C, F} from '../theme';

/** 06 落版：荧光绿满版 + 黑字，最响的一下 */
export const EndCard: React.FC<{t: number}> = ({t}) => {
  const rise = Math.min(1, Math.max(0, (t - 0.35) / 1.1));
  const ease = 1 - Math.pow(1 - rise, 3);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: C.green,
        padding: '34px 36px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
        <div
          style={{
            width: 30,
            height: 30,
            border: '2px solid #0a0a0a',
            borderRadius: 7,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{width: 12, height: 12, background: '#0a0a0a', borderRadius: 2, transform: 'rotate(45deg)'}} />
        </div>
        <div style={{fontFamily: F.heavy, fontSize: 15, fontWeight: 800, letterSpacing: 1, color: '#0a0a0a'}}>ZEYU</div>
      </div>

      <div style={{transform: `translateY(${(1 - ease) * 26}px)`, opacity: ease}}>
        <div style={{fontFamily: F.heavy, fontSize: 46, fontWeight: 800, lineHeight: 1.24, color: '#0a0a0a', letterSpacing: -1}}>
          织羽
          <br />
          穿线地图
        </div>
        <div style={{fontFamily: F.heavy, fontSize: 15, color: 'rgba(10,10,10,0.62)', marginTop: 14, letterSpacing: 1}}>
          羽毛球 · 网球 · 一站式穿线服务
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <div style={{fontFamily: F.heavy, fontSize: 13, color: 'rgba(10,10,10,0.66)', lineHeight: 1.7}}>
          微信搜「织羽穿线地图」
          <br />
          小程序直接用
        </div>
        <div style={{fontFamily: F.num, fontSize: 12, color: 'rgba(10,10,10,0.4)', letterSpacing: 2}}>AI + 热爱</div>
      </div>
    </div>
  );
};
