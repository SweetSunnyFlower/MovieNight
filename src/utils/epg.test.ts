import { describe, expect, it } from 'vitest';
import { epgChannelIdFromTvgId } from './epg';

describe('epgChannelIdFromTvgId', () => {
  it('strips the feed suffix from an iptv-org tvg-id', () => {
    expect(epgChannelIdFromTvgId('CCTV1.cn@SD')).toBe('CCTV1.cn');
  });

  it('keeps an id without a feed suffix unchanged', () => {
    expect(epgChannelIdFromTvgId('CCTV1.cn')).toBe('CCTV1.cn');
  });

  it('returns null for empty or missing values', () => {
    expect(epgChannelIdFromTvgId('')).toBeNull();
    expect(epgChannelIdFromTvgId(null)).toBeNull();
    expect(epgChannelIdFromTvgId(undefined)).toBeNull();
  });
});
