import { hc } from 'hono/client';
import type { ApiRoutes } from '../../../server/app';

export const getApi = () => hc<ApiRoutes>('/').api;
