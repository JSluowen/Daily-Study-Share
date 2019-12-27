``

## `最流行的`Git flow 流程介绍

1. ![o_git-flow-nvie](https://images.cnblogs.com/cnblogs_com/cnblogsfans/771108/o_git-flow-nvie.png)

1. master 分支

   这个分支是发布到生产环境的分支，只能从其他分支合并，不能在这个分支直接修改

2. develop（dev）分支

   主开发分支，包含所有要发布到下一个版本的代码，这个分支主要合并其他分支，比如 Feature 分支

3. feature 分支

   这个分支用来开发新的功能，一旦开发完成，就合入develop 分支

4. release 分支

   版本分支，当需要发布一个新的版本的时候，基于develop 分支创建，完成发布后，合并到 master 和 develop

5. hotfix 分支（紧急bug）

   当在生产环境发现bug后，基于master 分支创建，解决后合入Mater 分支和develop 分支，版本自动进入下一个

## 企业级Git 开发流程规范

### 1. 分支命名规范

分支应当简介明了，采用二级命名方式

```js
<group-name>/<branch-name>
```

group-name:

* feature: 新需求
* bugfix: bug 修复
* hotfix：紧急bug 修复
* wip：验证想法，实验分支，不合并到主分支 

branch-name：

使用中横线（ - ）分割的小写字母，一般前一个是开发者的姓名小写，后一个是功能简述。

```js
feaure/luowen-comment
```



## 2. commit 的书写规范

指代码分支提交时的描述，原则是不限制中英文的。

🚫 禁止一些无意义的话

**安利一个辅助插件 - git cz** ：https://github.com/streamich/git-cz

## 3. Commit 的提交

这里分两种情况

1. 多人协同开发，涉及到代码需要 review的时候，代码提交就需要频繁点，这样就会降低代码的出错率，提高开发效率。

2. 如果是小团队小项目的开发（因团队而异），可能会要求减少 commit 的次数，这不是指数量上的减少，而是指降低对于一个功能开发所产生的大同小异的描述。

   ```js
   1.git commit --amend
   
   2 git  commit rebase 
   ```

   

## 4 禁止master 分支上开发

**记住** master 只干两件事

* 同步上游的分支 git pull
* 以master 为基础切一个新的开发分支出来

**福利安利**：当忘记创建工作分支直接进行了编码怎么办？？

```js
git status # 看看工作区是否干净，如果不干净，请 commit
git checkout -b <group-name>/<branch-name> # 在当前的基础上创建工作分支
git log origin/master # 手动把最上面一个 commit 的 sha-1 值复制下来
git checkout master # 回到主分支
git reset --hard <粘贴 sha-1> # 重置主分支的一切修改
```



##  5. 保护主分支，禁止往master推送

演示 Github 仓库的设置

## 6. 安利两个实用 git 命令

### stash

1. 介绍 stash

   它是通过开辟一个空间来存储当前所做的所有未提交的修改（包括工作区和暂存区）

2. 实用场景

   紧急bug 的修复的时候，或者需要切换功能分支的时候。

### rebase

1. 介绍下 rebase

   变基操作, 能够对我们提交的commit 进行编辑操作。

2. 常见用法

   合并多个commit 为一个commit。

    

   ```js
   git  rebase -i [commitID]
   ```

   将某一段的commit 移动到另一个分支上。

   ```js
   git  rebase (startCommitId, endCommitId] --onto [targetBranchName] 
   ```

## 推荐学习的命令

**Diff   reset  cherry-pick**

## 福利安利

1. 配置简写操作命令
2. [iTerm2 + Oh  My Zsh](https://www.jianshu.com/p/9c3439cc3bdb)