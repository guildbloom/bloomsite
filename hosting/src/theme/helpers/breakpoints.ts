export const breakpointList = [576, 768, 992, 1200];

export const mediaQuery = breakpointList
  .map((bp) => `@media screen and (max-width: ${bp}px)`)
  .reverse();
