import React from 'react';
import {C, F} from '../theme';

/** 04 装备库：球拍档案 + 磅数衰减 + 1-2 个月换线周期（真实数据） */
export const GearCard: React.FC<{t: number}> = ({t}) => {
  const pts = Array.from({length: 24}, (_, i) => {
    const x = 40 + (i / 23) * 300;
    const decay = 26 - 3.5 * Math.pow(i / 23, 0.65);
    const y = 132 - (decay - 20) * 15;
    return [x, y] as [number, number];
  });
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const draw = Math.min(1, t / 2.6);

  return (
    <div style={{width: '100%', height: '100%', background: C.panel, padding: '24px 28px', boxSizing: 'border-box', position: 'relative'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <div style={{fontFamily: F.heavy, fontSize: 22, fontWeight: 700, color: '#fff'}}>装备库</div>
        <div style={{fontFamily: F.heavy, fontSize: 12, color: C.dim}}>每支拍子都有档案</div>
      </div>

      <div style={{display: 'flex', gap: 22, marginTop: 20}}>
        <div>
          <div style={{fontFamily: F.heavy, fontSize: 11, color: C.dim}}>当前磅数</div>
          <div style={{fontFamily: F.num, fontSize: 52, color: '#fff', lineHeight: 1.02, marginTop: 4}}>
            22.5<span style={{fontSize: 15, fontFamily: F.heavy, color: C.dim, marginLeft: 5}}>磅</span>
          </div>
          <div style={{fontFamily: F.heavy, fontSize: 11.5, color: '#ff6b4a', marginTop: 6}}>↓ 已掉 3.5 磅</div>
          <div style={{fontFamily: F.heavy, fontSize: 11, color: C.dim, marginTop: 12}}>穿线 41 天 · BG65 26 磅</div>
        </div>

        <div style={{flex: 1, position: 'relative', height: 140}}>
          <svg width="100%" height="140" viewBox="0 0 360 140">
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="36" x2="340" y1={34 + i * 30} y2={34 + i * 30} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            ))}
            <path d={path} fill="none" stroke={C.green} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="600" strokeDashoffset={600 * (1 - draw)} />
          </svg>
        </div>
      </div>

      <div style={{position: 'absolute', left: 28, right: 28, bottom: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <div style={{borderLeft: `2px solid ${C.green}`, paddingLeft: 10, fontFamily: F.heavy, fontSize: 12, color: 'rgba(255,255,255,0.62)'}}>
          建议 7 天内重穿，手感才不会飘
        </div>
        <div style={{textAlign: 'right'}}>
          <div style={{fontFamily: F.num, fontSize: 22, color: C.green}}>1–2<span style={{fontSize: 11, fontFamily: F.heavy, marginLeft: 4, color: C.dim}}>个月</span></div>
          <div style={{fontFamily: F.heavy, fontSize: 10, color: 'rgba(255,255,255,0.32)', marginTop: 2}}>建议更换周期</div>
        </div>
      </div>
    </div>
  );
};
