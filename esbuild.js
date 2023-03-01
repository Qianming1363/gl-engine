
const esbuild = require('esbuild')
esbuild.context({
  entryPoints: ['./src/index.ts'],
  outdir: 'build',
  bundle: true,
}).then((ctx) => {
  ctx.watch()
  console.log('Watching files change ...')
})

