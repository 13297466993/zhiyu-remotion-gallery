import React from 'react';
import {C} from '../theme';

/** 06 · 落版：白纸卡 + 朱红印章（对应参考视频里那张白底排版卡） */
export const BrandCard: React.FC<{t: number}> = ({t}) => {
  const seal = Math.max(0, Math.min(1, (t - 1.6) / 0.9));
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#efeae1',
        padding: '44px 46px',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif',
            fontSize: 14,
            letterSpacing: 4,
            color: '#8a8378',
          }}
        >
          织羽穿线地图
        </div>
        <div
          style={{
            fontFamily: '"Noto Serif SC","Source Han Serif SC",SimSun,serif',
            fontSize: 52,
            lineHeight: 1.42,
            color: '#191817',
            marginTop: 22,
            letterSpacing: 1,
          }}
        >
          你专心打球，
          <br />
          穿线交给我。
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 15, color: '#6f6a61', lineHeight: 1.7}}>
          附近哪家穿得好 · 地图上一眼看到
          <br />
          磅数掉了 · 它替你记着
        </div>
        <div
          style={{
            width: 84,
            height: 84,
            border: `2px solid ${C.seal}`,
            borderRadius: 3,
            color: C.seal,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Noto Serif SC",SimSun,serif',
            fontSize: 32,
            letterSpacing: 2,
            opacity: seal,
            transform: `scale(${0.86 + seal * 0.14}) rotate(${(1 - seal) * -8}deg)`,
          }}
        >
          织羽
        </div>
      </div>
    </div>
  );
};
