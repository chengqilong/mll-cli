#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs');
program
  .version('4.0.3')
  .option('-ir, initReact [name]', '初始化react项目')
  .option('-iv, initVue [name]', '初始化vue项目')
  .parse(process.argv);


  if (program.initReact) {
    const spinner = ora('正在从github下载模板文件').start();
    download('direct:https://github.com/chengqilong/template.git', program.initReact,{ clone: true }, function (err) {
      if(!err){
        // 可以输出一些项目成功的信息
        console.info(chalk.blueBright('下载成功'));

        fs.readFile(`${process.cwd()}/${program.initReact}/package.json`, (err, data) => {
            if (err) throw err;
            let _data = JSON.parse(data.toString())
            _data.name = program.initReact
            _data.version = '1.0.0'
            let str = JSON.stringify(_data, null, 4);
            fs.writeFile(`${process.cwd()}/${program.initReact}/package.json`, str, function (err) {
              if (err) throw err;
              process.exit(0);//成功后退出进程
            })
        });
        

      }else{
        // 可以输出一些项目失败的信息
        console.info(chalk.blueBright('下载失败'));
      }
    })
  }

  
  if (program.initVue) {
    const spinner = ora('正在从github下载模板文件').start();
    download('direct:https://github.com/chengqilong/templateVue.git', program.initVue,{ clone: true }, function (err) {
      if(!err){
        // 可以输出一些项目成功的信息
        console.info(chalk.blueBright('下载成功'));

        fs.readFile(`${process.cwd()}/${program.initVue}/package.json`, (err, data) => {
            if (err) throw err;
            let _data = JSON.parse(data.toString())
            _data.name = program.initVue
            _data.version = '1.0.0'
            let str = JSON.stringify(_data, null, 4);
            fs.writeFile(`${process.cwd()}/${program.initVue}/package.json`, str, function (err) {
              if (err) throw err;
              process.exit(0);//成功后退出进程
            })
        });
      }else{
        // 可以输出一些项目失败的信息
        console.info(chalk.blueBright('下载失败'));
      }
    })
  }

  

 



