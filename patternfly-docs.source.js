const path = require('path');

module.exports = sourceMD => {
  // QuickStarts MD
  const docsPath = path.join(__dirname, 'src');
  sourceMD(path.join(docsPath, '/**/examples/**/*.md'), 'examples');
  // TODO: Add example full demos?
  // sourceMD(path.join(coreDocsPath, 'demos/**/*.md'), 'html-demos');

  // TODO: Should these sections exist for extensions?
  // // Release notes
  // sourceMD(require.resolve('./RELEASE-NOTES.md'), 'html');

  // // Upgrade guides
  // sourceMD(require.resolve('./UPGRADE-GUIDE.md'), 'html');
};
