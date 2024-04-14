export let useRapidDebugger: typeof import('./useRapidDebugger').useRapidDebugger;

// @ts-ignore process.env.NODE_ENV is defined by metro transform plugins
if (process.env.NODE_ENV !== 'production') {
  useRapidDebugger = require('./useRapidDebugger').useRapidDebugger;
} else {
  useRapidDebugger = () => {};
}
