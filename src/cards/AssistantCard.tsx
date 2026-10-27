import React from 'react';
import {C, F} from '../theme';

/** 03 穿线助手：60+ 线型库 + AI 推荐（BG65 / BG80 / 66 ULTIMAX 均为真实线型） */
export const AssistantCard: React.FC<{t: number}> = ({t}) => {
  const beat = Math.min(1, t / 1.8);
  return (
    <div style={{width: '100%', height: '100%', background: C.panel, padding: '24px 28px', boxSizing: 'border-box', position: 'relative'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <div style={{fontFamily: F.heavy, fontSize: 22, fontWeight: 700, color: '#fff'}}>穿线助手</div>
        <div style={{fontFamily: F.heavy, fontSize: 12, color: C.green}}>60+ 主流线型库</div>
      </div>

      {/* 用户提问 */}
      <div style={{marginTop: 16, display: 'flex', justifyContent: 'flex-end'}}>
        <div
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '12px 12px 3px 12px',
            padding: '10px 14px',
            fontFamily: F.heavy,
            fontSize: 13,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          新手，想耐打一点，预算别太高
        </div>
      </div>

      {/* 推荐 */}
      <div
        style={{
          marginTop: 14,
          border: `1px solid ${C.greenLine}`,
          background: 'rgba(198,245,46,0.06)',
          borderRadius: 8,
          padding: '14px 16px',
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
          <div style={{fontFamily: F.num, fontSize: 26, color: '#fff', letterSpacing: 1}}>BG65</div>
          <div style={{fontFamily: F.heavy, fontSize: 11, color: C.ink, background: C.green, borderRadius: 99, padding: '3px 9px'}}>耐打标杆</div>
        </div>
        <div style={{fontFamily: F.heavy, fontSize: 12, color: C.dim, marginTop: 6}}>耐久 0.70mm · 经典耐打线，容错高</div>
        <div style={{fontFamily: F.heavy, fontSize: 11.5, color: 'rgba(255,255,255,0.55)', marginTop: 6}}>
          对照　李宁 N70 / 威克多 VBS-70
        </div>
        <div style={{display: 'flex', gap: 6, marginTop: 10}}>
          {['耐打', '稳定', '性价比高'].map((g) => (
            <div key={g} style={{fontFamily: F.heavy, fontSize: 11, color: C.green, border: `1px solid ${C.greenLine}`, borderRadius: 99, padding: '3px 9px'}}>{g}</div>
          ))}
        </div>
      </div>

      {/* 推荐参数 */}
      <div style={{marginTop: 14, display: 'flex', gap: 10}}>
        {[
          ['推荐线径', '0.65–0.70mm'],
          ['推荐磅数', '25–26 lbs'],
        ].map(([k, v], i) => (
          <div key={k} style={{flex: 1, background: C.panel2, borderRadius: 6, padding: '10px 12px', opacity: beat}}>
            <div style={{fontFamily: F.heavy, fontSize: 10.5, color: C.dim}}>{k}</div>
            <div style={{fontFamily: F.num, fontSize: 19, color: C.green, marginTop: 3}}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
