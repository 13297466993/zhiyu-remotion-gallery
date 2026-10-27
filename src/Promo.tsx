import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Card} from './components/Card';
import {C, F} from './theme';
import {CARDS} from './Gallery';

const EASE = Easing.bezier(0.33, 0, 0.18, 1);

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 场景时间表（30fps） */
const T = {
  hook: [0, 100],
  wall: [100, 470],
  features: 470,
  featureLen: 140,
  end: [1170, 1350],
};

const window_ = (f: number, [s, e]: number[], fadeIn = 10, fadeOut = 10) => {
  const a = fadeIn === 0 ? 1 : interpolate(f, [s, s + fadeIn], [0, 1], clamp);
  const b = fadeOut === 0 ? 1 : interpolate(f, [e - fadeOut, e], [1, 0], clamp);
  return Math.min(a, b);
};

const FEATURES = [
  {
    k: '01', name: '地图找店', head: ['附近哪家穿得好，', '地图上一眼看到。'], sub: '明码标价 · 按距离排序 · 只看真实店铺',
    points: [['3.2km 内', '12 家店'], ['按距离', '自动排序'], ['价格', '全部公开']],
  },
  {
    k: '02', name: '在线预约', head: ['选好时段，', '进度自己看着走。'], sub: '不用打电话，也不用反复问「好了没」',
    points: [['30 秒', '提交预约'], ['四步', '实时进度'], ['2 小时', '最快取拍']],
  },
  {
    k: '03', name: '穿线助手', head: ['不懂线？', '它按你的打法给答案。'], sub: '60+ 主流线型库 · AI 智能推荐磅数',
    points: [['60+', '主流线型'], ['AI', '推荐磅数'], ['新手', '也能选对']],
  },
  {
    k: '04', name: '装备库', head: ['磅数会掉，', '它替你记着。'], sub: '穿线 41 天 · 已掉 3.5 磅 · 建议 7 天内重穿',
    points: [['穿线天数', '自动累计'], ['磅数衰减', '看得见'], ['该换了', '提前提醒']],
  },
  {
    k: '05', name: '商家工作台', head: ['单子自己排好，', '你只管穿线。'], sub: '线上接单 · 店铺展示 · 不抽成、不经手钱',
    points: [['订单', '自动排期'], ['店铺', '线上展示'], ['平台', '不抽成']],
  },
];

const Hook: React.FC<{f: number}> = ({f}) => {
  const snap = 44;
  const amp = f < snap ? 5 : 0;
  const kick = f < snap ? 0 : Math.min(1, (f - snap) / 16);
  return (
    <AbsoluteFill style={{background: '#050506'}}>
      {/* 球线 */}
      <div style={{position: 'absolute', left: 0, right: 0, top: 940, height: 3}}>
        <div
          style={{
            position: 'absolute',
            left: -40,
            right: '50%',
            height: 3,
            background: C.green,
            transformOrigin: 'right center',
            transform: `rotate(${amp * 0.12}deg) translateX(${-kick * 30}px) translateY(${kick * 16}px)`,
            opacity: 1 - kick * 0.55,
            boxShadow: '0 0 24px rgba(198,245,46,0.55)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            right: -40,
            height: 3,
            background: C.green,
            transformOrigin: 'left center',
            transform: `rotate(${-amp * 0.12}deg) translateX(${kick * 30}px) translateY(${kick * 16}px)`,
            opacity: 1 - kick * 0.55,
            boxShadow: '0 0 24px rgba(198,245,46,0.55)',
          }}
        />
      </div>

      <div style={{position: 'absolute', left: 88, top: 640}}>
        <div
          style={{
            fontFamily: F.heavy,
            fontSize: 108,
            fontWeight: 800,
            color: '#fff',
            letterSpacing: -2,
            opacity: interpolate(f, [12, 28], [0, 1], clamp),
            transform: `translateY(${interpolate(f, [12, 32], [26, 0], {easing: EASE, ...clamp})}px)`,
          }}
        >
          又断了。
        </div>
        <div
          style={{
            fontFamily: F.heavy,
            fontSize: 34,
            color: 'rgba(255,255,255,0.55)',
            marginTop: 26,
            opacity: interpolate(f, [52, 72], [0, 1], clamp),
            transform: `translateY(${interpolate(f, [52, 76], [18, 0], {easing: EASE, ...clamp})}px)`,
          }}
        >
          问遍群聊，还是不知道该去哪穿。
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Wall: React.FC<{f: number; local: number}> = ({local}) => {
  const dur = T.wall[1] - T.wall[0];
  const p = interpolate(local, [0, dur], [0, 1], {extrapolateRight: 'clamp', easing: EASE});
  const t = local / 30;
  const camZ = interpolate(p, [0, 1], [-700, -250]);
  const camY = interpolate(p, [0, 1], [90, -30]);
  const rotX = interpolate(p, [0, 1], [7, 1]);
  const rotY = interpolate(p, [0, 1], [-9, 3]);
  const w = 600;
  const h = 400;
  const gapX = 56;
  const gapY = 96;
  const cellH = 470;

  return (
    <AbsoluteFill style={{background: C.bg}}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(800px 800px at 62% 18%, rgba(198,245,46,0.10), rgba(0,0,0,0) 62%)',
        }}
      />
      <div style={{position: 'absolute', inset: 0, transform: 'scale(1)', transformOrigin: '50% 50%'}}>
        <AbsoluteFill style={{perspective: 2400, perspectiveOrigin: '50% 50%'}}>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: w * 2 + gapX,
              height: cellH * 3 + gapY * 2,
              marginLeft: -(w * 2 + gapX) / 2,
              marginTop: -(cellH * 3 + gapY * 2) / 2,
              transformStyle: 'preserve-3d',
              transform: `translate3d(0px, ${camY}px, ${camZ}px) rotateY(${rotY}deg) rotateX(${rotX}deg)`,
            }}
          >
            {CARDS.map((c, i) => {
              const col = i % 2;
              const row = Math.floor(i / 2);
              const enter = interpolate(local, [6 + i * 5, 36 + i * 5], [0, 1], {easing: EASE, ...clamp});
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: col * (w + gapX),
                    top: row * (cellH + gapY),
                    width: w,
                    height: cellH,
                    opacity: enter,
                    transform: `translateY(${(1 - enter) * 30}px) scale(${0.96 + enter * 0.04})`,
                  }}
                >
                  <Card>{c.node(t)}</Card>
                  <div
                    style={{
                      position: 'absolute',
                      left: 4,
                      top: 410,
                      display: 'flex',
                      gap: 10,
                      alignItems: 'baseline',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <div style={{fontFamily: F.num, fontSize: 16, color: 'rgba(255,255,255,0.35)', letterSpacing: 2}}>{c.cap[0]}</div>
                    <div style={{fontFamily: F.heavy, fontSize: 24, fontWeight: 700, color: '#fff'}}>{c.cap[1]}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </div>
      <AbsoluteFill style={{background: 'radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.72) 100%)'}} />
    </AbsoluteFill>
  );
};

const Feature: React.FC<{f: number; i: number}> = ({f, i}) => {
  const meta = FEATURES[i];
  const card = CARDS[i];
  const local = f - (T.features + i * T.featureLen);
  const t = local / 30;
  const enterHead = interpolate(local, [0, 18], [0, 1], {easing: EASE, ...clamp});
  const cardIn = interpolate(local, [6, 34], [0, 1], {easing: EASE, ...clamp});

  return (
    <AbsoluteFill style={{background: C.bg}}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(760px 760px at 50% 34%, rgba(198,245,46,0.08), rgba(0,0,0,0) 64%)',
        }}
      />

      <div style={{position: 'absolute', left: 90, top: 168}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, opacity: enterHead}}>
          <div style={{fontFamily: F.num, fontSize: 22, color: C.green, letterSpacing: 3}}>{meta.k}</div>
          <div style={{width: 24, height: 2, background: C.green, opacity: 0.6}} />
          <div style={{fontFamily: F.heavy, fontSize: 22, color: C.green, letterSpacing: 4, fontWeight: 600}}>{meta.name}</div>
        </div>

        <div style={{marginTop: 26}}>
          {meta.head.map((line, li) => {
            const e = interpolate(local, [4 + li * 7, 24 + li * 7], [0, 1], {easing: EASE, ...clamp});
            return (
              <div
                key={li}
                style={{
                  fontFamily: F.heavy,
                  fontSize: 62,
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.36,
                  letterSpacing: -1.5,
                  opacity: e,
                  transform: `translateY(${(1 - e) * 24}px)`,
                  whiteSpace: 'nowrap',
                }}
              >
                {line}
              </div>
            );
          })}
        </div>

        <div
          style={{
            fontFamily: F.heavy,
            fontSize: 22,
            color: 'rgba(255,255,255,0.42)',
            marginTop: 22,
            opacity: interpolate(local, [22, 40], [0, 1], clamp),
            whiteSpace: 'nowrap',
          }}
        >
          {meta.sub}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 995,
          marginLeft: -300,
          marginTop: -200,
          opacity: cardIn,
          transform: `translateY(${(1 - cardIn) * 70}px) scale(${1.52 + (1 - cardIn) * -0.05})`,
          transformOrigin: '50% 50%',
        }}
      >
        <Card style={{boxShadow: '0 60px 110px rgba(0,0,0,0.75)'}}>{card.node(t)}</Card>
      </div>

      {/* 规格条 */}
      <div
        style={{
          position: 'absolute',
          left: 90,
          right: 90,
          top: 1412,
          display: 'flex',
          gap: 34,
          paddingTop: 30,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          opacity: interpolate(local, [30, 52], [0, 1], clamp),
          transform: `translateY(${interpolate(local, [30, 56], [22, 0], {easing: EASE, ...clamp})}px)`,
        }}
      >
        {meta.points.map(([v, l], pi) => (
          <div key={pi} style={{flex: 1}}>
            <div style={{fontFamily: F.heavy, fontSize: 30, fontWeight: 700, color: '#fff', letterSpacing: -0.5}}>
              {v}
            </div>
            <div style={{fontFamily: F.heavy, fontSize: 19, color: 'rgba(255,255,255,0.38)', marginTop: 10, letterSpacing: 1}}>
              {l}
            </div>
          </div>
        ))}
      </div>

      {/* 进度 */}
      <div style={{position: 'absolute', left: 90, bottom: 96, display: 'flex', gap: 8}}>
        {FEATURES.map((_, k) => (
          <div
            key={k}
            style={{
              width: k === i ? 46 : 18,
              height: 3,
              background: k === i ? C.green : 'rgba(255,255,255,0.18)',
              transition: 'none',
            }}
          />
        ))}
      </div>
      <div style={{position: 'absolute', right: 90, bottom: 88, fontFamily: F.num, fontSize: 15, color: 'rgba(255,255,255,0.3)', letterSpacing: 3}}>
        ZEYU
      </div>
    </AbsoluteFill>
  );
};

const End: React.FC<{f: number}> = ({f}) => {
  const local = f - T.end[0];
  const a = interpolate(local, [4, 26], [0, 1], {easing: EASE, ...clamp});
  return (
    <AbsoluteFill style={{background: C.green}}>
      <div style={{position: 'absolute', left: 88, top: 250, opacity: a, transform: `translateY(${(1 - a) * 30}px)`}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <div
            style={{
              width: 64,
              height: 64,
              border: '3px solid #0a0a0a',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{width: 26, height: 26, background: '#0a0a0a', borderRadius: 4, transform: 'rotate(45deg)'}} />
          </div>
          <div style={{fontFamily: F.heavy, fontSize: 34, fontWeight: 800, letterSpacing: 2, color: '#0a0a0a'}}>ZEYU</div>
        </div>

        <div style={{fontFamily: F.heavy, fontSize: 118, fontWeight: 800, color: '#0a0a0a', lineHeight: 1.16, letterSpacing: -3, marginTop: 64}}>
          织羽
          <br />
          穿线地图
        </div>

        <div style={{fontFamily: F.heavy, fontSize: 32, color: 'rgba(10,10,10,0.66)', marginTop: 34, letterSpacing: 1}}>
          羽毛球 · 网球 · 一站式穿线服务
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 88,
          right: 88,
          top: 1060,
          opacity: interpolate(local, [16, 38], [0, 1], clamp),
        }}
      >
        {['地图找店', '在线预约', '穿线助手', '装备库', '商家工作台'].map((n, i) => (
          <div
            key={n}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '18px 0',
              borderTop: i === 0 ? 'none' : '1px solid rgba(10,10,10,0.18)',
            }}
          >
            <div style={{fontFamily: F.num, fontSize: 18, color: 'rgba(10,10,10,0.45)', width: 34}}>0{i + 1}</div>
            <div style={{fontFamily: F.heavy, fontSize: 34, fontWeight: 700, color: '#0a0a0a', letterSpacing: 1}}>{n}</div>
            <div style={{flex: 1, height: 1, background: 'rgba(10,10,10,0.14)', marginLeft: 10}} />
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'absolute',
          left: 88,
          right: 88,
          bottom: 190,
          borderTop: '2px solid rgba(10,10,10,0.28)',
          paddingTop: 30,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          opacity: interpolate(local, [26, 48], [0, 1], clamp),
        }}
      >
        <div>
          <div style={{fontFamily: F.heavy, fontSize: 22, color: 'rgba(10,10,10,0.6)'}}>微信搜小程序</div>
          <div style={{fontFamily: F.heavy, fontSize: 44, fontWeight: 800, color: '#0a0a0a', marginTop: 8}}>织羽穿线地图</div>
        </div>
        <div style={{fontFamily: F.num, fontSize: 18, color: 'rgba(10,10,10,0.45)', letterSpacing: 3}}>AI + 热爱</div>
      </div>
    </AbsoluteFill>
  );
};

/** 竖版：功能展示片，1080×1920 */
export const Promo: React.FC = () => {
  const f = useCurrentFrame();

  return (
    <AbsoluteFill style={{background: '#000'}}>
      {/* 钩子 */}
      <AbsoluteFill style={{opacity: window_(f, T.hook, 0, 12)}}>
        <Hook f={f} />
      </AbsoluteFill>

      {/* 六卡总览 */}
      <AbsoluteFill style={{opacity: window_(f, T.wall, 12, 12)}}>
        <Wall f={f} local={f - T.wall[0]} />
      </AbsoluteFill>

      {/* 五个功能特写 */}
      {FEATURES.map((_, i) => {
        const s = T.features + i * T.featureLen;
        const e = s + T.featureLen;
        return (
          <AbsoluteFill key={i} style={{opacity: window_(f, [s, e], 8, 8)}}>
            <Feature f={f} i={i} />
          </AbsoluteFill>
        );
      })}

      {/* 落版 */}
      <AbsoluteFill style={{opacity: window_(f, T.end, 12, 0)}}>
        <End f={f} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
