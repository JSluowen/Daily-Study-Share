##  **HashRouter**

它使用URL的哈希部分（即`window.location.hash`）来保持页面的UI与URL同步。

重点说明：哈希历史记录不支持`location.key`或`location.state`

## BrowserRouter

使用HTML5历史API（ pushState，replaceState和popstate事件），让页面的UI同步与URL

## 区别

### url上表现不一致q33

1. BrowserRouter使用HTML5 history API，保证UI界面和URL保存同步
2.  HashRouter使用URL（即window.location.hash）的哈希部分来保持UI与URL同步的。哈希历史记录不支持
3. hashRouter不支持location.key 、location.state

