import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: process.env.SENTRY_BACKEND_DSN,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0, 
});

export default Sentry;
