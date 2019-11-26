const program = require('commander');
const V = '0.1.0';

const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

program.version(V)
  .option('-f, --folder <path>','create the WorkSpace Folder')
  .option('-u, --username [username]','The work space main user')
  .option('-o, --organization [org]','The work space main organization name')
  .parse(process.argv);


