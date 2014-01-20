---
layout: python_item
permalink: /python/scrapy/installation/
title: "Scrapy Installation"
date: "2013-12-15 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [demo]
---

#Windows下Scrapy环境搭建

##	Python安装
*	下载并安装[Python](http://www.python.org/)
*	安装后在系统环境变量PATH中[配置Python相关的环境变量](http://blog.csdn.net/liguo9860/article/details/6829610)
*	`$ python -V`查看是否安装并配置成功（注意：是大写的-V）

-------------------------------------------------------------------------------
##	SetupTools安装
*	easy\_install实际上是setupTools里面的一个子工具，我们需要安装SetupTools来包含easy\_install工具
*	下载脚本[ez_setup.py](https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py)至本地，例如D盘根目录
*	终端执行`$ python d:/ez_setup.py`进行SetupTools的安装
*	在运行的时候会发生一个错误，该错误为"ascii codec can't decode byte 0xe8 in position 0:ordinal not in range(128)",大意为ascii编码不能解析byte 0xe8。解决方法：找到并打开python根目录/Lib/mimetypes.py文件，在`import urllib`后，添加代码:

```python
reload(sys)
sys.setdefaultencoding('gbk')
```

*	把默认编码方式改为gbk（网上有写用utf8的，在这个脚本中是无效的，需要改成gbk格式）。重新执行`$ python d:/ez_setup.py`，如果出现刷屏的安装信息，则说明安装成功了。此时，在python目录下多了一个Script文件夹，easy\_install就在里面。

-------------------------------------------------------------------------------
##	Pip安装
*	接下来进入easy\_install所在的文件夹，即Python根目录\Scripts执行以下命令进行pygments关联插件的安装：
*	执行`$ pip -V`来查看pip是否安装成功以及相应的安装版本

```bash
C:\Python27\Scripts> easy_install.exe pip
```

-------------------------------------------------------------------------------
##      环境变量设置和检查
*       检查PATH中是否添加了`C:\Python27;`，如果没有则添加上。
*       检查PATH中是否添加了`C:\Python27\Scripts;`，如果没有则添加上。
*       检查PATHEXT中是否添加了`.EXE;`，如果没有则添加上。
*       检查PATHEXT中是否添加了`.PY;`，如果没有则添加上。
*       检查PATHEXT中是否添加了`.PYM`，如果没有则添加上。

-------------------------------------------------------------------------------
##	Dependencies的预安装
以下所有程序都可以到我分享的[云盘](http://pan.baidu.com/s/13oRlq)中找到,具体是在/polysaas/python/lib/目录下

<div class="note warning">
  <h5>出现提示不能在注册表中识别出来python2.7的解决方法</h5>
  <p>
		新建一个register.py 文件，把文档尾部的代码贴进去，保存并执行
  </p>
</div>

在cmd中到该文件所在目录下，执行`$ python register.py`<br>
安装完成后会提示`--- Python 2.7 is now registered`

*	安装lxml-3.2.4.win32-py2.7.exe(64位系统需要安装lxml-3.2.4.win-amd64-py2.7.exe)
*	安装pywin32-218.win32-py2.7.exe(64位系统需要安装pywin32-218.win-amd64-py2.7.exe)
*	安装Twisted-13.2.0.win32-py2.7.exe(64位系统需要安装Twisted-13.2.0.win-amd64-py2.7.exe)
*	安装pyOpenSSL-0.13.1.win32-py2.7.exe(64位系统需要安装pyOpenSSL-0.13.1.win-amd64-py2.7.exe)
*	将zope.interface-4.0.5-py2.7-win32.egg拷贝到C:\Python27\Scripts目录下，执行`$ easy_install.exe zope.interface-4.0.5-py2.7-win32.egg`
*       执行`pip install pyYaml` YAML for Python库
*       执行`pip install requests==2.0.1` 安装requests库(upyun的依赖库)
*       执行`pip install upyun` 安装又拍云接口库
*       执行`pip install pybcs` 安装百度云接口库
*       执行`pip install progressbar` 安装依赖库

验证dependecy是否安装成功的方法：<br>

*   cmd执行`$ python`进入python控制台
*   执行`import lxml`，如果没报错，则说明lxml安装成功
*   执行`import twisted`，如果没报错，则说明twisted安装成功
*   执行`import OpenSSL`，如果没报错，则说明OpenSSL安装成功
*   执行`import zope.interface`，如果没报错，则说明zope.interface安装成功

如果安装成功，那么在cmd中执行`& python`，然后执行`import lxml`，如果没有报错，则说明lxml安装成功。

-------------------------------------------------------------------------------
##	终于要安装Scrapy了....
解压缩Scrapy-0.20.2.tar.gz，在其目录下执行`$ python setup.py install`进行Scrapy的安装。至此......Scrapy就成功安装了。Linux系统的小盆友就不用这么麻烦了，几行命令搞定，自行搜索....

检查Scrapy是否安装成功，可以在cmd控制台执行`$ scrapy` 如果没有报错，则说明安装成功

-------------------------------------------------------------------------------

##无法识别Python2.7的解决方法的代码

```python
#
# script to register Python 2.0 or later for use with win32all
# and other extensions that require Python registry settings
#
# written by Joakim Loew for Secret Labs AB / PythonWare
#
# source:
# http://www.pythonware.com/products/works/articles/regpy20.htm
#
# modified by Valentine Gogichashvili as described in http://www.mail-archive.com/distutils-sig@python.org/msg10512.html

import sys

from _winreg import *

# tweak as necessary
version = sys.version[:3]
installpath = sys.prefix

regpath = "SOFTWARE\\Python\\Pythoncore\\%s\\" % (version)
installkey = "InstallPath"
pythonkey = "PythonPath"
pythonpath = "%s;%s\\Lib\\;%s\\DLLs\\" % (
    installpath, installpath, installpath
)

def RegisterPy():
    try:
        reg = OpenKey(HKEY_CURRENT_USER, regpath)
    except EnvironmentError as e:
        try:
            reg = CreateKey(HKEY_CURRENT_USER, regpath)
            SetValue(reg, installkey, REG_SZ, installpath)
            SetValue(reg, pythonkey, REG_SZ, pythonpath)
            CloseKey(reg)
        except:
            print "*** Unable to register!"
            return
        print "--- Python", version, "is now registered!"
        return
    if (QueryValue(reg, installkey) == installpath and
        QueryValue(reg, pythonkey) == pythonpath):
        CloseKey(reg)
        print "=== Python", version, "is already registered!"
        return
    CloseKey(reg)
    print "*** Unable to register!"
    print "*** You probably have another Python installation!"

if __name__ == "__main__":
    RegisterPy()
```


<br>
#CentOS 6.4 64Bit下Scrapy环境搭建

##Pre-requisites
*	update centOS lib to latest version by `yum -y update`
*	install development tools by `yum groupinstall -y development`
*	install additional pakage `yum install -y zlib-dev openssl-devel sqlite-devel bzip2-devel`
*	download python v2.7.6 `wget http://www.python.org/ftp/python/2.7.6/Python-2.7.6.tar.xz`
*	unzip downloaded file <br>
	`xz -d Python-3.3.3.tar.xz`<br>	
	`tar -xvf Python-3.3.3.tar`
*	step into Python file by `cd Python-2.7.6`
*	take installation by `./configure` and then `make && make altinstall`

##Fix Yum python-2.7 unsurpported problem
`mv /usr/bin/python /usr/bin/python2.6.6`
`ln -s /usr/local/bin/python2.7 /usr/bin/python`<br>
change the first line code `#!/usr/bin/python` to `#!/usr/bin/python2.6.6`

##setuptools and pip installation
	# Let's download the installation file using wget:
	wget --no-check-certificate https://pypi.python.org/packages/source/s/setuptools/setuptools-1.4.2.tar.gz
	
	# Extract the files from the archive:
	tar -xvf setuptools-1.4.2.tar.gz
	
	# Enter the extracted directory:
	cd setuptools-1.4.2
	
	# Install setuptools using the Python we've installed (2.7.6)
	python setup.py install
	
	# Install pip
	easy_install pip
	#alternative
	curl https://raw.github.com/pypa/pip/master/contrib/get-pip.py | python2.7 -

##Fix lxml installation error problem
	yum install libxslt-devel

##Scrapy Installation
	pip install scrapy

##Others
	pip install supervisor
	pip install web.py

