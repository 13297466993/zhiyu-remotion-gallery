# 织羽穿线地图 · 功能展示片（Remotion）

用 [Remotion](https://www.remotion.dev/) 复刻 Motion Face 动效片段 **「六卡片 · 连续运镜空间画廊」**，卡片内容全部换成「织羽穿线地图」小程序的真实功能。

- 动效片段 ID：`4d16d9f6-2002-49f8-9b93-b7e3bb4b2c0e`
- 片段页面：https://motionface.cc/?recording=4d16d9f6-2002-49f8-9b93-b7e3bb4b2c0e

## 两个 Composition

| id | 尺寸 | 时长 | 用途 |
| --- | --- | --- | --- |
| `Promo` | 1080×1920 | 45s / 1350 帧 | 竖版功能展示片：钩子 → 六卡总览 → 五个功能特写 → 落版 |
| `Gallery` | 1920×1080 | 20s / 600 帧 | 横版六卡片一镜到底运镜片 |

## 复刻的四件事

| 要素 | 处理 |
| --- | --- |
| 空间 | `#08090a` 深色底 + 荧光绿光晕 + 暗角 |
| 卡片 | 600×400，10px 纯白边框，3px 圆角，重投影 |
| 运镜 | `perspective: 2400~2600`，`translate3d` 的 Z 轴推进 + `rotateX/rotateY` 倾斜 + `preserve-3d` |
| 节奏 | 竖版 5 个功能各 140 帧，横版 600 帧一镜到底 |

## 六张卡片 = 真实的五个功能 + 落版

| # | 卡片内容 | 屏上主张 |
| --- | --- | --- |
| 01 | 暗色地图 + 四个距离图钉 + 店铺卡（明码标价 / 立即预约） | 附近哪家穿得好，地图上一眼看到 |
| 02 | 时段 chip + 四步进度（已下单→待排单→穿线中→待取件） | 选好时段，进度自己看着走 |
| 03 | 用户提问气泡 + BG65 推荐卡 + 线径/磅数区间 | 不懂线？它按你的打法给答案 |
| 04 | 当前磅数 22.5 + 衰减曲线 + 重穿提醒 | 磅数会掉，它替你记着 |
| 05 | 待排单/穿线中/待取件 + 本月曝光与评分 | 单子自己排好，你只管穿线 |
| 06 | 荧光绿满版 + ZEYU 标 + 五功能清单 | 微信搜「织羽穿线地图」 |

## 运行

```bash
npm install
npm run dev          # Remotion Studio 预览，可拖时间轴
```

## 渲染

```bash
# 竖版功能展示片（1080×1920 / 30fps / 45s）
npx remotion render Promo out/promo-vertical.mp4

# 横版运镜片（1920×1080 / 30fps / 20s）
npx remotion render Gallery out/video.mp4

# 定点导出静帧素材
npx remotion render Promo out/stills --sequence --image-format=png --frames=60,200,560,700,840,980,1120,1290
```

## 目录

```
src/
  index.ts               入口
  Root.tsx               Composition 注册（Promo / Gallery）
  Promo.tsx              竖版：钩子、六卡总览、功能特写、落版
  Gallery.tsx            横版运镜 + 卡片墙面（导出 CARDS 供 Promo 复用）
  theme.ts               色板与字体
  components/Card.tsx    白边卡片 + 卡片字幕 + 进度点
  cards/                 六张卡片的内容（Map/Booking/Assistant/Gear/Merchant/End）
```

## 已知差异

- 参考视频的音轨没有复刻：原始 COS 签名链接在复刻时已过期（403 `Request has expired`），只拿到 480×270 缩略帧做构图参考，节奏按一镜到底慢推推定，音频待补。
- 卡片内是重绘的界面示意，不是小程序真实截图；店铺名、订单号、评分等为示意数据。
