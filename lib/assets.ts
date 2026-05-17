export const PLACEHOLDER_IMAGE = "/speakers/sponsor-areeb-siddiqui.png";

export function assetPath(path: string | undefined): string {
  return path && path.length > 0 ? path : PLACEHOLDER_IMAGE;
}
