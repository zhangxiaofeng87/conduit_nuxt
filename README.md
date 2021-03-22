##### 一、 登录逻辑

1、调用登录接口：<br />
  1)、获取到的登录信息保存本地cookie，保存本地cookie是为了在服务端能获取到

  2)、保存到store中

2、store文件<br>
  mutations中调用nuxtServerInit方法（nuxt一个特殊的方法，运行在服务端），nuxtServerInit({commit}, {req}) req.headers.cookie获取到client端保存的cookie，通过cookieparser.parse解析可以得到user，commit调用setUser保存state