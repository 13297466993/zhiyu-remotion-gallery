import React from 'react';
import {C} from '../theme';

/** 02 · 球线库：参数可读，不再被店员一句话带走 */
export const StringCard: React.FC<{t: number}> = ({t}) => {
  const rows = [
    {c: '#d4552f', n: 'BG65', s: '耐打 · 0.70mm', v: 26},
    {c: '#e8a33d', n: 'NBG95', s: '弹性 · 0.69mm', v: 27},
    {c: '#8fb0c8', n: 'XB63', s: '细线 · 0.63mm', v: 25},
    {c: '#9fae86', n: 'VBS66', s: '控球 · 0.66mm', v: 26},
  ];
  return (
    <div style={{width: '100%', height: '100%', background: '#131316', padding: '30px 34px', boxSizing: 'border-box'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: '#fff', fontSize: 26, fontWeight: 600}}>球线库</div>
        <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: C.mute, fontSize: 15}}>按你的拍型筛过</div>
      </div>

      <div style={{marginTop: 18, display: 'flex', flexDirection: 'column', gap: 0}}>
        {rows.map((r, i) => {
          const hl = (Math.sin(t * 1.6 - i * 0.7) + 1) / 2;
          return (
            <div
              key={r.n}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '11px 12px',
                borderTop: i === 0 ? 'none' : `1px solid ${C.line}`,
                background: `rgba(232,163,61,${0.04 + hl * 0.05})`,
                borderRadius: 4,
              }}
            >
              <div style={{width: 10, height: 44, background: r.c, borderRadius: 2}} />
              <div style={{flex: 1}}>
                <div style={{fontFamily: '"DIN Alternate",Arial,sans-serif', color: '#fff', fontSize: 23, letterSpacing: 1}}>{r.n}</div>
                <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: C.mute, fontSize: 15, marginTop: 4}}>{r.s}</div>
              </div>
              <div style={{fontFamily: '"DIN Alternate",Arial,sans-serif', color: C.amber, fontSize: 26}}>{r.v}</div>
              <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: 'rgba(255,255,255,0.35)', fontSize: 13}}>磅</div>
            </div>
          );
        })}
      </div>

      <div style={{marginTop: 14, fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)'}}>
        不知道选哪根？问一句，它按你的打法给建议。
      </div>
    </div>
  );
};
