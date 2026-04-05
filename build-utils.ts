/**
 * Root-level build utilities re-export for monorepo packages.
 * Re-exports the shared build runner and helpers from @elizaos/core's build tooling.
 */
export {
	createBuildRunner,
	createElizaBuildConfig,
	runBuild,
	cleanBuild,
	copyAssets,
	generateDts,
	watchFiles,
	getTimer,
} from './packages/typescript/build.ts';

export type {
	ElizaBuildOptions,
	BuildRunnerOptions,
} from './packages/typescript/build.ts';
