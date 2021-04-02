require('esbuild')
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    // outfile: 'index.js',
    outdir: 'dist',
    format: 'cjs',
  })
  .catch(() => process.exit(1));
