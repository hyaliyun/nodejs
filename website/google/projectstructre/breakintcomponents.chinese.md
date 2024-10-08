# 组件式构建你的解决方案

<br/><br/>


### 一段解释

对于中等规模的应用程序及以上，一个代码库是非常糟糕的 - 一个包含很多依赖的大型软件很难理解，往往导致代码混乱。即使是那些擅长解决复杂问题和 "模块化" 的聪明架构师 - 在设计上花费了很大的脑力, 每一个变化都需要仔细评估对其他依赖对象的影响。最终的解决方案是开发小型软件：将整个堆栈划分为独立的组件，这些组件不与其他组件共享文件，每个组件由很少的文件构成（例如API、服务、数据访问、测试等），因此很容易理解它。有些人可能称之为 "microservices" 架构 - 重要的是要理解 microservices 不是一个你必须遵循的规范，而是一套原则。您可以将许多原则引入到成熟的 microservices 体系结构中, 或者只采用少数几个。只要您保持软件的复杂性低, 两者都是好的。最起码应该做的是在组件之间创建一个基本边界, 为每个业务组件在项目根目录中分配一个文件夹, 并使其自包含-其他组件只能通过其公共接口或 API 使用其功能。这是保持您的组件简单的基础，在未来, 一旦您的应用程序增长，避免依赖性地狱，为全面的 microservices 架构铺平了道路.

<br/><br/>


### 博客引用: "伸缩需要对整个应用程序进行伸缩设计"
 摘自博客 [MartinFowler.com](https://martinfowler.com/articles/microservices.html)

 > 单个应用程序可以成功, 但越来越多的人对它们感到失望 - 尤其是随着更多的应用程序被部署到云中。更改周期被捆绑在一起 - 对应用程序的一小部分进行更改, 需要重建和部署整个整体。随着时间的推移, 通常很难保持一个良好的模块化结构, 这使得更改哪怕只会影响该模块中的一个模块变得更加困难。伸缩设计需要扩展整个应用程序, 而不是它的部分，这往往需要更多资源。

 <br/><br/>
 
 ### 博客引用: "那么, 你的应用程序的架构声明了什么?"
 摘自博客 [uncle-bob](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) 
 
> ...如果你正在寻找一个图书馆的建筑架构, 你可能会看到一个盛大的入口, 一个 check-in-out 的文员, 阅读区, 小会议室, 画廊, 画廊后面容纳了装载所有图书馆书籍的书架。建筑会声明: 图书馆.<br/>
那么, 应用程序的体系架构会声明什么呢？ 当您查看顶级目录结构和最高级别包中的源文件时; 他们声明: 医疗保健系统, 或会计系统, 或库存管理系统？ 或者他们声明: Rails, 或Spring/Hibernate, 或 ASP？.


<br/><br/>

 ### 推荐: 通过独立组件构建解决方案
![alt text](/assets/images/structurebycomponents.PNG "Structuring solution by components")


 <br/><br/> 

### 避免: 按技术角色对文件进行分组
![alt text](/assets/images/structurebyroles.PNG "Structuring solution by technical roles")
