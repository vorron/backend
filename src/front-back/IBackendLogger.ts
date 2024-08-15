export default interface BackendLogger {
  log: (value: string) => void;
  get: () => string | undefined;
}
