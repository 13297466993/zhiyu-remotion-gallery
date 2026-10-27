import React from 'react';
import {C} from '../theme';

/** 04 · 商家端：单子自己排好 */
export const OrderCard: React.FC<{t: number}> = ({t}) => {
  const rows = [
    {n: '待排单', c: 3, color: C.ember},
    {n: '穿线中', c: 2, color: C.amber},
    {n: '待取件', c: 5, color: '#7fa9c9'},
  ];
  return (
    <div style={{width: '100%', height: '100%', background: '#131316', padding: '30px 34px', boxSizing: 'border-box'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: '#fff', fontSize: 26, fontWeight: 600}}>今日订单</div>
        <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: C.mute, fontSize: 15}}>织羽工作室</div>
      </div>

      <div style={{display: 'flex', gap: 16, marginTop: 26}}>
        {rows.map((r, i) => {
          const lift = (Math.sin(t * 1.5 + i) + 1) / 2;
          return (
            <div
              key={r.n}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.035)',
                border: `1px solid ${C.line}`,
                borderRadius: 6,
                padding: '20px 18px',
                transform: `translateY(${-lift * 6}px)`,
              }}
            >
              <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.55)'}}>{r.n}</div>
              <div style={{fontFamily: '"DIN Alternate",Arial,sans-serif', fontSize: 52, color: r.color, lineHeight: 1.1, marginTop: 8}}>{r.c}</div>
            </div>
          );
        })}
      </div>

      <div style={{marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12}}>
        {[
          {p: '球拍 · BG65 26磅', u: '陈', s: '10:20 取'},
          {p: '球拍 · XB63 25磅', u: '林', s: '11:30 取'},
          {p: '球拍 · NBG95 27磅', u: '周', s: '13:00 取'},
        ].map((o, i) => (
          <div key={i} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${C.line}`, paddingTop: 12}}>
            <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.85)'}}>{o.p}</div>
            <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 15, color: C.amber}}>{o.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
