## Docker 的知识点学习

### 1. Docker 是什么？

Docker 属于Linux容器的一种封装，提供简单易用的容器使用接口。Dokcer 将应用程序和该程序所需要的依赖封装到一个文件里面，运行这个文件就会生成一个虚拟容器。

### 2 Docker 的常用命令总结

+  **docker image ls**   //列出本机所有的镜像文件

+ **docker image rm 【imagName / imageId】**//删除 image 文件

+ **Docker image build -t 【镜像名称：label】.**  // 构建镜像文件， -t 用来指定镜像文件的名称，后面的冒号指定镜像标签，不指定，默认就是 laster，后面的点表示 Dockfile 文件所在的路径，由于一般Dockfile 都是在当前路径下，所以就是一个点。    

+ **docker container run 【imageName / imageId】** // 该命令会从image文件生成一个运行的容器实例，同时该命令具备自动抓取功能，如果发现本地没有这个image 文件，就会从仓库自动抓取。

+ **docker container kill 【imageName / imageId】**// 手动停止运行的容器 

+ **docker container ls** // 列出正在运行的容器实例

+ **docker container ls --all** // 列出包含已停止运行的容器

+ **docker container rm  【containerId**】// 删除容器

+ **docker container run -p 8080:80 -it [containerName:label]  /bin/bash** // 从image 文件生成容器

  > - `-p`参数：容器的 3000 端口映射到本机的 8000 端口。
  > - `-it`参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
  > - `koa-demo:0.0.1`：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。
  > - `/bin/bash`：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。

+ **cat /etc/hosts** // 在容器内部运行，查看容器运行的IP地址

+ **docker inspect 【containerId】**。// 在容器外运行，查看运行容器的详细信息

+ 

### 3.通过 FTP 查看运行容器的目录结构

