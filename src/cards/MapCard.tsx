import React from 'react';
import {C} from '../theme';

/** 01 · 地图找店：暗色地图 + 暖色店家标记 */
export const MapCard: React.FC<{t: number}> = ({t}) => {
  const stores = [
    {x: 130, y: 120, d: '0.4km'},
    {x: 320, y: 200, d: '1.1km'},
    {x: 470, y: 110, d: '1.8km'},
    {x: 210, y: 300, d: '2.4km'},
    {x: 430, y: 310, d: '3.2km'},
  ];
  return (
    <div style={{width: '100%', height: '100%', background: '#15171b', position: 'relative'}}>
      {/* 路网 */}
      {[100, 220, 340, 460].map((y) => (
        <div key={y} style={{position: 'absolute', left: 0, right: 0, top: y, height: 2, background: 'rgba(255,255,255,0.07)'}} />
      ))}
      {[120, 280, 430].map((x) => (
        <div key={x} style={{position: 'absolute', top: 0, bottom: 0, left: x, width: 2, background: 'rgba(255,255,255,0.07)'}} />
      ))}
      {/* 主干道 */}
      <div style={{position: 'absolute', left: 0, top: 168, right: 0, height: 14, background: 'rgba(232,163,61,0.10)'}} />
      <div style={{position: 'absolute', top: 0, left: 330, bottom: 0, width: 12, background: 'rgba(232,163,61,0.08)'}} />
      {/* 店家标记 */}
      {stores.map((s, i) => {
        const pulse = (Math.sin(t * 2.4 + i * 1.1) + 1) / 2;
        return (
          <div key={i} style={{position: 'absolute', left: s.x, top: s.y}}>
            <div
              style={{
                width: 26 + pulse * 26,
                height: 26 + pulse * 26,
                borderRadius: 999,
                background: `rgba(232,163,61,${0.18 - pulse * 0.12})`,
                transform: 'translate(-50%,-50%)',
                position: 'absolute',
              }}
            />
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: C.amber,
                transform: 'translate(-50%,-50%)',
                boxShadow: '0 0 18px rgba(232,163,61,0.75)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 14,
                top: -14,
                fontSize: 15,
                color: 'rgba(255,255,255,0.62)',
                fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              {s.d}
            </div>
          </div>
        );
      })}
      {/* 底部信息条 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '22px 28px',
          background: 'linear-gradient(to top, rgba(10,10,12,0.96), rgba(10,10,12,0))',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', letterSpacing: 1}}>
            说一句 · 附近穿线
          </div>
          <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 30, color: '#fff', fontWeight: 600, marginTop: 6}}>
            3.2 公里内 12 家
          </div>
        </div>
        <div
          style={{
            fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif',
            fontSize: 16,
            color: C.amber,
            border: `1px solid ${C.amber}`,
            borderRadius: 999,
            padding: '8px 16px',
          }}
        >
          按距离排序
        </div>
      </div>
    </div>
  );
};
