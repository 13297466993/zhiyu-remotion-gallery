import React from 'react';
import {C, F} from '../theme';

/** 01 地图找店：真实店铺卡（天河体育穿线工作室 / ★5.0 / 月售 300+ / ¥60 起） */
export const MapCard: React.FC<{t: number}> = ({t}) => {
  const pins = [
    {x: 404, y: 96, d: '0.3km'},
    {x: 500, y: 168, d: '0.8km'},
    {x: 300, y: 176, d: '1.4km'},
    {x: 452, y: 250, d: '2.1km'},
  ];
  return (
    <div style={{width: '100%', height: '100%', background: '#0c0d0f', position: 'relative'}}>
      {[70, 150, 230, 310].map((y) => (
        <div key={y} style={{position: 'absolute', left: 0, right: 0, top: y, height: 1, background: 'rgba(255,255,255,0.07)'}} />
      ))}
      {[130, 280, 430].map((x) => (
        <div key={x} style={{position: 'absolute', top: 0, bottom: 0, left: x, width: 1, background: 'rgba(255,255,255,0.07)'}} />
      ))}
      <div style={{position: 'absolute', left: 0, right: 0, top: 146, height: 10, background: 'rgba(198,245,46,0.10)'}} />
      <div style={{position: 'absolute', top: 0, left: 276, bottom: 0, width: 9, background: 'rgba(198,245,46,0.08)'}} />

      {pins.map((p, i) => {
        const pulse = (Math.sin(t * 2.6 + i) + 1) / 2;
        return (
          <div key={i} style={{position: 'absolute', left: p.x, top: p.y}}>
            <div style={{position: 'absolute', width: 22 + pulse * 22, height: 22 + pulse * 22, borderRadius: 99, background: `rgba(198,245,46,${0.2 - pulse * 0.14})`, transform: 'translate(-50%,-50%)'}} />
            <div style={{width: 13, height: 13, borderRadius: 99, background: C.green, transform: 'translate(-50%,-50%)', boxShadow: '0 0 16px rgba(198,245,46,0.8)'}} />
            <div style={{position: 'absolute', left: 12, top: -10, fontSize: 12, color: C.dim, fontFamily: F.num}}>{p.d}</div>
          </div>
        );
      })}

      {/* 店铺卡 */}
      <div
        style={{
          position: 'absolute',
          left: 20,
          bottom: 20,
          width: 330,
          background: '#fff',
          borderRadius: 10,
          padding: '13px 15px',
          boxShadow: '0 18px 40px rgba(0,0,0,0.55)',
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 5, fontFamily: F.heavy, fontSize: 11, color: '#0a0a0a'}}>
            <span style={{width: 5, height: 5, borderRadius: 9, background: '#5ec42b'}} />
            营业中
          </div>
          <div style={{fontFamily: F.heavy, fontSize: 11, color: '#8b8f93'}}>距您 800m</div>
        </div>
        <div style={{fontFamily: F.heavy, fontSize: 17, fontWeight: 700, color: '#0a0a0a', marginTop: 7}}>天河体育穿线工作室</div>
        <div style={{fontFamily: F.heavy, fontSize: 11.5, color: '#4b5563', marginTop: 5}}>
          <span style={{color: '#f5a623'}}>★ 5.0</span> · 月售 300+ · 羽毛球 / 网球
        </div>
        <div style={{fontFamily: F.heavy, fontSize: 11.5, color: '#4b5563', marginTop: 3}}>
          穿线 <span style={{color: '#0a0a0a', fontWeight: 700}}>¥60</span> 起 · 明码标价
        </div>
        <div
          style={{
            marginTop: 10,
            background: C.green,
            color: '#0a0a0a',
            fontFamily: F.heavy,
            fontSize: 13,
            fontWeight: 700,
            textAlign: 'center',
            borderRadius: 6,
            padding: '7px 0',
          }}
        >
          立即预约
        </div>
      </div>

      <div style={{position: 'absolute', right: 18, top: 16, fontFamily: F.heavy, fontSize: 12, color: C.green, letterSpacing: 2}}>
        附近 3.2km · 12 家
      </div>
    </div>
  );
};
