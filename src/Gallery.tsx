import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Card, Caption} from './components/Card';
import {C} from './theme';
import {MapCard} from './cards/MapCard';
import {BookingCard} from './cards/BookingCard';
import {AssistantCard} from './cards/AssistantCard';
import {GearCard} from './cards/GearCard';
import {MerchantCard} from './cards/MerchantCard';
import {EndCard} from './cards/EndCard';

const EASE = Easing.bezier(0.33, 0, 0.18, 1);

export const CARDS = [
  {node: (t: number) => <MapCard t={t} />, cap: ['01', '地图找店', '附近穿线店一目了然']},
  {node: (t: number) => <BookingCard t={t} />, cap: ['02', '在线预约', '不用打电话，全程可查']},
  {node: (t: number) => <AssistantCard t={t} />, cap: ['03', '穿线助手', '60+ 线型库，AI 给答案']},
  {node: (t: number) => <GearCard t={t} />, cap: ['04', '装备库', '磅数会掉，它替你记着']},
  {node: (t: number) => <MerchantCard t={t} />, cap: ['05', '商家工作台', '单子自己排好']},
  {node: (t: number) => <EndCard t={t} />, cap: ['06', '织羽穿线地图', '微信搜，直接用']},
];

/** 横版：六卡片连续运镜空间画廊 */
export const Gallery: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / 30;

  const p = interpolate(frame, [0, 540], [0, 1], {extrapolateRight: 'clamp', easing: EASE});
  const camZ = interpolate(p, [0, 1], [-1900, -450]);
  const camX = interpolate(p, [0, 1], [340, -40]);
  const camY = interpolate(p, [0, 1], [175, -55]);
  const rotY = interpolate(p, [0, 1], [-15, 4]);
  const rotX = interpolate(p, [0, 1], [9, 1]);
  const driftX = Math.sin(t * 0.55) * 7;
  const driftY = Math.cos(t * 0.42) * 5;
  const fadeIn = interpolate(frame, [0, 26], [0, 1], {extrapolateRight: 'clamp'});
  const vignette = interpolate(p, [0, 0.5, 1], [0.42, 0.72, 0.58]);

  const gapX = 62;
  const gapY = 108;
  const w = 600;
  const cellH = 470;

  return (
    <AbsoluteFill style={{background: C.bg, overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(1100px 700px at 76% 20%, rgba(198,245,46,0.10), rgba(0,0,0,0) 62%), radial-gradient(900px 620px at 14% 84%, rgba(198,245,46,0.06), rgba(0,0,0,0) 60%)',
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
          {CARDS.map((c, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const delay = 6 + i * 3.5;
            const enter = interpolate(frame, [delay, delay + 30], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: EASE,
            });
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: col * (w + gapX),
                  top: row * (cellH + gapY),
                  width: w,
                  height: cellH,
                  transform: `translateY(${(1 - enter) * 34}px) rotate(${(i % 2 === 0 ? -1 : 1) * 1.1}deg) scale(${0.965 + enter * 0.035})`,
                  opacity: enter,
                }}
              >
                <Card>{c.node(t)}</Card>
                <Caption index={c.cap[0]} title={c.cap[1]} sub={c.cap[2]} />
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{background: `radial-gradient(120% 90% at 50% 48%, rgba(0,0,0,0) 32%, rgba(0,0,0,${vignette}) 100%)`}}
      />
      <AbsoluteFill style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0) 22%, rgba(0,0,0,0) 74%, rgba(0,0,0,0.62))'}} />

      <div style={{position: 'absolute', left: 56, top: 46, display: 'flex', alignItems: 'center', gap: 12, opacity: interpolate(frame, [10, 40], [0, 0.8], {extrapolateRight: 'clamp'})}}>
        <div style={{width: 9, height: 9, borderRadius: 9, background: C.green}} />
        <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 17, letterSpacing: 5, color: 'rgba(255,255,255,0.72)'}}>织羽穿线地图</div>
      </div>

      <AbsoluteFill style={{background: '#000', opacity: 1 - fadeIn}} />
    </AbsoluteFill>
  );
};
