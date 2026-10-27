import React from 'react';
import {C} from '../theme';

/** 03 · 装备档案：磅数会掉，它替你记着 */
export const TensionCard: React.FC<{t: number}> = ({t}) => {
  // 磅数衰减曲线：26 -> 22.5
  const pts = Array.from({length: 24}, (_, i) => {
    const x = 34 + (i / 23) * 520;
    const decay = 26 - 3.5 * Math.pow(i / 23, 0.65);
    const y = 300 - (decay - 20) * 26;
    return [x, y];
  });
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const draw = Math.min(1, t / 3.2);
  return (
    <div style={{width: '100%', height: '100%', background: '#121214', padding: '30px 34px', boxSizing: 'border-box', position: 'relative'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: '#fff', fontSize: 26, fontWeight: 600}}>我的球拍</div>
        <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: C.mute, fontSize: 15}}>穿线 41 天</div>
      </div>

      <div style={{display: 'flex', gap: 34, marginTop: 26}}>
        <div>
          <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 14, color: C.mute}}>当前磅数</div>
          <div style={{fontFamily: '"DIN Alternate",Arial,sans-serif', fontSize: 62, color: C.amber, lineHeight: 1.05, marginTop: 6}}>
            22.5<span style={{fontSize: 24, marginLeft: 6, color: 'rgba(255,255,255,0.5)'}}>磅</span>
          </div>
          <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 14, color: 'rgba(212,85,47,0.9)', marginTop: 6}}>
            ↓ 已掉 3.5 磅
          </div>
        </div>
        <div style={{flex: 1, position: 'relative', overflow: 'hidden'}}>
          <svg width="100%" height="180" viewBox="0 0 600 180" style={{position: 'absolute', right: 0, top: 4, overflow: 'visible'}}>
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="30" x2="560" y1={30 + i * 44} y2={30 + i * 44} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            ))}
            <path d={path} fill="none" stroke={C.amber} strokeWidth="3" strokeLinecap="round" strokeDasharray="1200" strokeDashoffset={1200 * (1 - draw)} />
          </svg>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 34,
          right: 34,
          bottom: 28,
          borderLeft: `3px solid ${C.ember}`,
          paddingLeft: 14,
          fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif',
          fontSize: 16,
          color: 'rgba(255,255,255,0.6)',
        }}
      >
        建议 7 天内重穿，否则控球会明显变飘。
      </div>
    </div>
  );
};
