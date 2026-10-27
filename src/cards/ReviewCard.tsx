import React from 'react';
import {C} from '../theme';

/** 05 · 真实评价：专业 / 迅速 / 热情 */
export const ReviewCard: React.FC<{t: number}> = ({t}) => {
  const tags = [
    {n: '专业', v: 128, sub: '穿线手法稳'},
    {n: '迅速', v: 96, sub: '当天可取'},
    {n: '热情', v: 74, sub: '会讲清参数'},
  ];
  return (
    <div style={{width: '100%', height: '100%', background: '#121214', padding: '30px 34px', boxSizing: 'border-box'}}>
      <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: '#fff', fontSize: 26, fontWeight: 600}}>球友怎么说</div>
      <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', color: C.mute, fontSize: 15, marginTop: 6}}>只让打过的人投票，不出广告位</div>

      <div style={{display: 'flex', gap: 18, marginTop: 34}}>
        {tags.map((tg, i) => {
          const glow = (Math.sin(t * 1.8 + i * 1.2) + 1) / 2;
          return (
            <div
              key={tg.n}
              style={{
                flex: 1,
                border: `1px solid rgba(232,163,61,${0.28 + glow * 0.4})`,
                borderRadius: 8,
                padding: '26px 18px',
                background: `rgba(232,163,61,${0.05 + glow * 0.06})`,
              }}
            >
              <div style={{fontFamily: '"Noto Serif SC",SimSun,serif', fontSize: 44, color: '#fff'}}>{tg.n}</div>
              <div style={{fontFamily: '"DIN Alternate",Arial,sans-serif', fontSize: 24, color: C.amber, marginTop: 12}}>{tg.v} 票</div>
              <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', marginTop: 8}}>{tg.sub}</div>
            </div>
          );
        })}
      </div>

      <div style={{position: 'absolute', left: 34, bottom: 26, fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.35)'}}>
        评价来自真实订单 · 不可刷
      </div>
    </div>
  );
};
