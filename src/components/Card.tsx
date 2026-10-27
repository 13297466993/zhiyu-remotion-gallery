import React from 'react';

/**
 * 白边卡片：参考视频里六张卡片统一带白色相纸边框，投影很重，边角接近直角。
 */
export const Card: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({children, style}) => {
  return (
    <div
      style={{
        width: 600,
        height: 400,
        boxSizing: 'border-box',
        border: '12px solid #ffffff',
        borderRadius: 2,
        background: '#121214',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 50px 90px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.4)',
        ...style,
      }}
    >
      <div style={{position: 'absolute', inset: 0, overflow: 'hidden'}}>{children}</div>
    </div>
  );
};

export const Caption: React.FC<{
  index: string;
  title: string;
  sub: string;
  color?: string;
}> = ({index, title, sub, color = '#ffffff'}) => (
  <div style={{position: 'absolute', left: 8, top: 414, display: 'flex', gap: 14, alignItems: 'flex-end'}}>
    <div
      style={{
        fontFamily: '"DIN Alternate","Helvetica Neue",Arial,sans-serif',
        fontSize: 20,
        letterSpacing: 2,
        color: 'rgba(255,255,255,0.45)',
        paddingBottom: 3,
      }}
    >
      {index}
    </div>
    <div>
      <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 30, fontWeight: 600, color}}>{title}</div>
      <div style={{fontFamily: '"PingFang SC","Microsoft YaHei",sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.5)', marginTop: 4}}>
        {sub}
      </div>
    </div>
  </div>
);
