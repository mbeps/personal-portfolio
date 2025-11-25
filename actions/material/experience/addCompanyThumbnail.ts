/**
 * Centralizes how role and experience views resolve company logos so the page, cards, and command palette stay in sync.
 * Only this helper needs an update if the directory schema moves, keeping the database entries clean.
 *
 * @param key Company slug that mirrors the folder name in `public/companies`.
 * @returns Path string consumed by Next image components and markdown renderers.
 */
export default function addCompanyThumbnail(key: string): string {
  return `/companies/${key}/logo.png`;
}
