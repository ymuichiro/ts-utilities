require('esbuild')
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outdir: 'dist',
    format: 'cjs',
  })
  .catch(() => process.exit(1));
