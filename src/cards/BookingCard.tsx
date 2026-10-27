import React from 'react';
import {C, F} from '../theme';

/** 02 在线预约：选时段 + 订单进度（待排单 / 穿线中 / 待取件） */
export const BookingCard: React.FC<{t: number}> = ({t}) => {
  const active = Math.floor((t * 0.5) % 4);
  const steps = ['已下单', '待排单', '穿线中', '待取件'];
  return (
    <div style={{width: '100%', height: '100%', background: C.panel, padding: '24px 28px', boxSizing: 'border-box'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <div style={{fontFamily: F.heavy, fontSize: 22, fontWeight: 700, color: '#fff'}}>在线预约</div>
        <div style={{fontFamily: F.heavy, fontSize: 12, color: C.dim}}>不用打电话，不用等回复</div>
      </div>

      {/* 时段 */}
      <div style={{display: 'flex', gap: 9, marginTop: 18}}>
        {['今天 14:00', '今天 16:30', '明天 10:00'].map((s, i) => (
          <div
            key={s}
            style={{
              flex: i === 2 ? 1.1 : 1,
              textAlign: 'center',
              fontFamily: F.heavy,
              fontSize: 12.5,
              padding: '10px 0',
              borderRadius: 6,
              border: `1px solid ${i === 1 ? C.green : 'rgba(255,255,255,0.14)'}`,
              background: i === 1 ? 'rgba(198,245,46,0.10)' : 'transparent',
              color: i === 1 ? C.green : 'rgba(255,255,255,0.65)',
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {/* 进度 */}
      <div style={{marginTop: 26, display: 'flex', alignItems: 'center'}}>
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: 99,
                  background: i <= active ? C.green : 'rgba(255,255,255,0.16)',
                  boxShadow: i === active ? '0 0 14px rgba(198,245,46,0.85)' : 'none',
                }}
              />
              <div style={{fontFamily: F.heavy, fontSize: 11, color: i <= active ? '#fff' : 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap'}}>{s}</div>
            </div>
            {i < 3 && <div style={{flex: 1, height: 2, background: i < active ? C.green : 'rgba(255,255,255,0.12)', margin: '0 6px', marginBottom: 20}} />}
          </React.Fragment>
        ))}
      </div>

      <div
        style={{
          marginTop: 26,
          borderTop: `1px solid ${C.line}`,
          paddingTop: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <div style={{fontFamily: F.heavy, fontSize: 11.5, color: C.dim}}>当前订单</div>
          <div style={{fontFamily: F.heavy, fontSize: 16, color: '#fff', marginTop: 5}}>天河体育 · BG65 · 26 磅</div>
        </div>
        <div style={{fontFamily: F.num, fontSize: 26, color: C.green}}>2h<span style={{fontSize: 12, fontFamily: F.heavy, marginLeft: 5, color: C.dim}}>可取</span></div>
      </div>

      <div style={{position: 'absolute', right: 28, bottom: 22, fontFamily: F.heavy, fontSize: 11, color: 'rgba(255,255,255,0.3)'}}>
        全程可查进度 · 不用反复问
      </div>
    </div>
  );
};
