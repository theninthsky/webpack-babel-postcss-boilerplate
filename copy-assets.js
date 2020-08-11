const { mkdirSync, readdirSync, copyFileSync } = require('fs');
const rimraf = require('rimraf');

try {
    rimraf.sync('dist');

    const dirsToCreate = readdirSync('src').filter(name => !name.includes('.'));

    const dirsToCopy = readdirSync('src').filter(name => !name.includes('.') && name != 'js' && name != 'css');
    const rootFilesToCopy = readdirSync('src').filter(item => item.includes('.'));

    mkdirSync('dist');

    dirsToCreate.forEach(name => mkdirSync(`dist/${name}`));

    dirsToCopy.forEach(name => readdirSync(`src/${name}`).forEach(item => copyFileSync(`src/${name}/${item}`, `dist/${name}/${item}`)));
    rootFilesToCopy.forEach(item => copyFileSync(`src/${item}`, `dist/${item}`));
} catch (err) {
    process.exit(1);
}
