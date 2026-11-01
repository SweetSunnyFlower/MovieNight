export function epgChannelIdFromTvgId(tvgId?: string | null) {
  const value = (tvgId ?? '').trim();
  if (!value) return null;
  return value.split('@')[0];
}
