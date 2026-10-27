import React from 'react';

/**
 * 白边卡片：沿用参考视频的白色相纸边框 + 重投影
 */
export const Card: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({children, style}) => (
  <div
    style={{
      width: 600,
      height: 400,
      boxSizing: 'border-box',
      border: '10px solid #ffffff',
      borderRadius: 3,
      background: '#0f1113',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 50px 90px rgba(0,0,0,0.62), 0 4px 12px rgba(0,0,0,0.4)',
      ...style,
    }}
  >
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden'}}>{children}</div>
  </div>
);

export const Caption: React.FC<{
  index: string;
  title: string;
  sub: string;
}> = ({index, title, sub}) => (
  <div
    style={{
      position: 'absolute',
      left: 6,
      top: 408,
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      whiteSpace: 'nowrap',
    }}
  >
    <div style={{fontFamily: '"DIN Alternate",Arial,sans-serif', fontSize: 17, letterSpacing: 2, color: 'rgba(255,255,255,0.38)', paddingBottom: 3}}>
      {index}
    </div>
    <div>
      <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 26, fontWeight: 700, color: '#ffffff'}}>{title}</div>
      <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.46)', marginTop: 3}}>{sub}</div>
    </div>
  </div>
);
