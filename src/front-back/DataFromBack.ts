type DataFromBack = { log?: string } & (
  | { isOk: true; result: unknown }
  | { isOk: false; err: string }
);
export type { DataFromBack as default };
