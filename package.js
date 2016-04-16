Package.describe({
  name: 'gwendall:blaze-to-react-ck',
  summary: 'Turn any Blaze template into a React component',
  git: 'https://github.com/gwendall/meteor-blaze-to-react.git',
  version: '0.1.2'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.2');
  api.use([
    'jsx@0.2.4',
    'react-meteor-data@0.2.5',
    'templating@1.1.5',
    'underscore@1.0.4'
  ]);
  api.addFiles('lib.jsx');
  api.export('BlazeToReact');
});
