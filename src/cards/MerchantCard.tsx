import React from 'react';
import {C, F} from '../theme';

/** 05 商家工作台：订单管理 + 店铺展示，解决「消息疏漏 / 全靠朋友圈」 */
export const MerchantCard: React.FC<{t: number}> = ({t}) => {
  const cols = [
    {n: '待排单', v: 3, c: '#ff6b4a'},
    {n: '穿线中', v: 2, c: C.green},
    {n: '待取件', v: 5, c: '#7fb3d5'},
  ];
  return (
    <div style={{width: '100%', height: '100%', background: C.panel, padding: '24px 28px', boxSizing: 'border-box', position: 'relative'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <div style={{fontFamily: F.heavy, fontSize: 22, fontWeight: 700, color: '#fff'}}>商家工作台</div>
        <div style={{fontFamily: F.heavy, fontSize: 12, color: C.dim}}>天河体育穿线工作室</div>
      </div>

      <div style={{display: 'flex', gap: 10, marginTop: 18}}>
        {cols.map((c, i) => {
          const lift = (Math.sin(t * 1.6 + i) + 1) / 2;
          return (
            <div
              key={c.n}
              style={{
                flex: 1,
                background: C.panel2,
                border: `1px solid ${C.line}`,
                borderRadius: 6,
                padding: '12px 12px',
                transform: `translateY(${-lift * 4}px)`,
              }}
            >
              <div style={{fontFamily: F.heavy, fontSize: 11, color: C.dim}}>{c.n}</div>
              <div style={{fontFamily: F.num, fontSize: 30, color: c.c, lineHeight: 1.2, marginTop: 2}}>{c.v}</div>
            </div>
          );
        })}
      </div>

      <div style={{marginTop: 16}}>
        {[
          ['球拍 · BG65 26 磅', '10:20 取'],
          ['球拍 · BG80 28 磅', '11:30 取'],
        ].map(([a, b], i) => (
          <div key={i} style={{display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${C.line}`, padding: '10px 0'}}>
            <div style={{fontFamily: F.heavy, fontSize: 12, color: 'rgba(255,255,255,0.8)'}}>{a}</div>
            <div style={{fontFamily: F.heavy, fontSize: 12, color: C.green}}>{b}</div>
          </div>
        ))}
      </div>

      <div style={{display: 'flex', gap: 10, marginTop: 14}}>
        <div style={{flex: 1, background: 'rgba(198,245,46,0.07)', border: `1px solid ${C.greenLine}`, borderRadius: 6, padding: '10px 12px'}}>
          <div style={{fontFamily: F.heavy, fontSize: 10, color: C.dim}}>本月店铺曝光</div>
          <div style={{fontFamily: F.num, fontSize: 21, color: C.green, marginTop: 2}}>1,286</div>
        </div>
        <div style={{flex: 1, background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.line}`, borderRadius: 6, padding: '10px 12px'}}>
          <div style={{fontFamily: F.heavy, fontSize: 10, color: C.dim}}>店铺评分</div>
          <div style={{fontFamily: F.num, fontSize: 21, color: '#fff', marginTop: 2}}>4.9</div>
        </div>
      </div>
    </div>
  );
};
