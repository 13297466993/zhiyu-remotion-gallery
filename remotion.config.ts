import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setConcurrency(4);
// 标准 8bit 4:2:0 + bt709，避免 yuvj420p（JPEG 全范围）在部分播放器上无法解码
Config.setPixelFormat('yuv420p');
Config.setColorSpace('bt709');
