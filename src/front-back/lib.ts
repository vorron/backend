import { container } from '../resolveDI';

export const lib = <T>(name: string) => container.get<T>(name);
