import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Card, Caption} from './components/Card';
import {C} from './theme';
import {MapCard} from './cards/MapCard';
import {StringCard} from './cards/StringCard';
import {TensionCard} from './cards/TensionCard';
import {OrderCard} from './cards/OrderCard';
import {ReviewCard} from './cards/ReviewCard';
import {BrandCard} from './cards/BrandCard';

const EASE = Easing.bezier(0.33, 0, 0.18, 1);

/** 连续运镜：镜头一路推进，中途轻微横移，卡片保持共面但各自有微小倾角 */
export const Gallery: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / 30; // 秒

  // 主运镜进度
  const p = interpolate(frame, [0, 540], [0, 1], {
    extrapolateRight: 'clamp',
    easing: EASE,
  });

  const camZ = interpolate(p, [0, 1], [-1900, -450]);
  const camX = interpolate(p, [0, 1], [340, -40]);
  const camY = interpolate(p, [0, 1], [175, -55]);
  const rotY = interpolate(p, [0, 1], [-15, 4]);
  const rotX = interpolate(p, [0, 1], [9, 1]);

  // 手持轻微漂移，让画面不是机械滑轨
  const driftX = Math.sin(t * 0.55) * 7;
  const driftY = Math.cos(t * 0.42) * 5;

  // 整体入场 / 收尾
  const fadeIn = interpolate(frame, [0, 26], [0, 1], {extrapolateRight: 'clamp'});
  const vignette = interpolate(p, [0, 0.5, 1], [0.42, 0.72, 0.58]);

  // 六张卡片：3 列 × 2 行
  const cards = [
    {node: <MapCard t={t} />, cap: ['01', '附近哪家穿得好', '地图上一眼看到']},
    {node: <StringCard t={t} />, cap: ['02', '什么线适合你', '参数里写着答案']},
    {node: <TensionCard t={t} />, cap: ['03', '磅数会掉', '它替你记着']},
    {node: <OrderCard t={t} />, cap: ['04', '单子自己排好', '你只管穿线']},
    {node: <ReviewCard t={t} />, cap: ['05', '只让打过的人投票', '不出广告位']},
    {node: <BrandCard t={t} />, cap: ['06', '说一句，到点响', '织羽穿线地图']},
  ];

  const gapX = 62;
  const gapY = 108;
  const w = 600;
  const h = 400;
  const cellH = 470;

  return (
    <AbsoluteFill style={{background: C.bg, overflow: 'hidden'}}>
      {/* 背景：深灰空间，一侧有暖光晕 */}
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(1100px 700px at 78% 22%, rgba(232,163,61,0.10), rgba(0,0,0,0) 62%), radial-gradient(900px 620px at 12% 84%, rgba(212,85,47,0.08), rgba(0,0,0,0) 60%)',
        }}
      />

      <AbsoluteFill style={{perspective: 2600, perspectiveOrigin: '50% 46%'}}>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: w * 3 + gapX * 2,
            height: cellH * 2 + gapY,
            marginLeft: -(w * 3 + gapX * 2) / 2,
            marginTop: -(cellH * 2 + gapY) / 2,
            transformStyle: 'preserve-3d',
            transform: `translate3d(${camX + driftX}px, ${camY + driftY}px, ${camZ}px) rotateY(${rotY}deg) rotateX(${rotX}deg)`,
          }}
        >
          {cards.map((c, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            // 每张卡片独立入场：轻微上浮 + 微角度
            const delay = 6 + i * 3.5;
            const enter = interpolate(frame, [delay, delay + 30], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: EASE,
            });
            const tiltZ = (i % 2 === 0 ? -1 : 1) * (0.9 + (i % 3) * 0.25);
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: col * (w + gapX),
                  top: row * (cellH + gapY),
                  width: w,
                  height: cellH,
                  transform: `translateY(${(1 - enter) * 34}px) rotate(${tiltZ}deg) scale(${0.965 + enter * 0.035})`,
                  opacity: enter,
                  transformStyle: 'preserve-3d',
                }}
              >
                <Card>{c.node}</Card>
                <Caption index={c.cap[0]} title={c.cap[1]} sub={c.cap[2]} />
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      {/* 暗角 + 顶底压暗 */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(120% 90% at 50% 48%, rgba(0,0,0,0) 32%, rgba(0,0,0,${vignette}) 100%)`,
          pointerEvents: 'none',
        }}
      />
      <AbsoluteFill
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0) 22%, rgba(0,0,0,0) 74%, rgba(0,0,0,0.62))',
          pointerEvents: 'none',
        }}
      />

      {/* 左上角品牌标 */}
      <div
        style={{
          position: 'absolute',
          left: 56,
          top: 46,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          opacity: interpolate(frame, [10, 40], [0, 0.8], {extrapolateRight: 'clamp'}),
        }}
      >
        <div style={{width: 9, height: 9, borderRadius: 9, background: C.seal}} />
        <div
          style={{
            fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif',
            fontSize: 17,
            letterSpacing: 5,
            color: 'rgba(255,255,255,0.72)',
          }}
        >
          织羽穿线地图
        </div>
      </div>

      {/* 全片淡入 */}
      <AbsoluteFill style={{background: '#000', opacity: 1 - fadeIn}} />
    </AbsoluteFill>
  );
};
