#!/usr/bin/env bun

/**
 * Build script for @elizaos/config
 */

import { createBuildRunner } from '../../build-utils.ts';

const run = createBuildRunner({
	packageName: '@elizaos/config',
	buildOptions: {
		entrypoints: ['src/index.ts'],
		outdir: 'dist',
		target: 'node',
		format: 'esm',
		sourcemap: false,
		minify: false,
	},
});

await run();
