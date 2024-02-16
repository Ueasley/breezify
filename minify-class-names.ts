import {minifyClassNames} from "./index";

const { Command } = require('commander');
const program = new Command();

program
.name('minify-class-names')
.description('CLI to class minifier package')
.version('1.0.0');

program.command('minify')
  .description('Minify class names in your build files')
  .argument('<buildPath>', 'path to your build folder')
  .action((path: string, options: {}) => {
    minifyClassNames(path)
  });

program.parse();
