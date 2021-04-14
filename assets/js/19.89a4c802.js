(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{510:function(e,v,t){"use strict";t.r(v);var a=t(4),s=Object(a.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"vue-特性-响应式编程和组件化的特点。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-特性-响应式编程和组件化的特点。"}},[e._v("#")]),e._v(" vue 特性 响应式编程和组件化的特点。")]),e._v(" "),t("h4",{attrs:{id:"mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[e._v("#")]),e._v(" MVVM ：")]),e._v(" "),t("ul",[t("li",[e._v("是Model-View-ViewModel 的缩写，它是一种基于前端开发的架构模式，其核心是提供对View 和 ViewModel 的双向数  据绑定，这使得ViewModel 的状态改变可以自动传递给 View，即所谓的数据双向绑定。")])]),e._v(" "),t("ul",[t("li",[e._v("vue.js是数据驱动DOM")])]),e._v(" "),t("h4",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[e._v("#")]),e._v(" 指令")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" + v-cloak\n + v-bind\n + v-model\n + v-for\n + v-if\n + v-show\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("h4",{attrs:{id:"vue实例与数据绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue实例与数据绑定"}},[e._v("#")]),e._v(" Vue实例与数据绑定")]),e._v(" "),t("ul",[t("li",[e._v("数据绑定：ViewModel 的状态改变可以自动传递给 View，即所谓的数据双向绑定。")]),e._v(" "),t("li",[e._v("生命周期：每个vue实例创建的过程，都会经历一系列初始化过程，同时会调用相应的生命周期钩子，我们可以利用这些钩子，在合适时机执行我们的业务逻辑。vue的钩子类似JQuery的ready()方法。比较常用的有：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("-  created:实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载，$el还不可用。\n-   mounted:el挂在上实例后调用，一般我们第一个业务逻辑从这里开始。\n-  beforeDestroy：实例销毁前调用，主要解绑一些使用addEventListener监听事件等。\n")])])]),t("ul",[t("li",[e._v("插值与表达式：{{}}是最基本的文本插值方法，它会自动将我们双向绑定的数据实时显示出来。里面支持简单运算，三目表达式。")]),e._v(" "),t("li",[e._v("过滤器：{{}}里插入管道符|可以对数据进行过滤,过滤器在实例中编写filters:function(){}")]),e._v(" "),t("li",[e._v("指令与事件：指令是vue.js模板中常用的一项功能，它带有前缀v-，比如v-if、v-html、v-pre等。指令的主要职责是当其表达式的值改变时，相应的将某些行为应用在DOM上。")]),e._v(" "),t("li",[e._v("v-bind与v-on: v-bind的基本用途是动态更新HTML元素上的属性。v-on用来绑定事件监听器，用于用户与客户端的交互。")])]),e._v(" "),t("h4",{attrs:{id:"vue实例的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue实例的生命周期"}},[e._v("#")]),e._v(" vue实例的生命周期")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("什么是生命周期：从Vue实例创建、运行、销毁期间，总是伴随各种各样的事件。这些事件，统称为生命周期！")])]),e._v(" "),t("li",[t("p",[e._v("生命周期钩子=生命周期事件=生命周期函数")])]),e._v(" "),t("li",[t("p",[e._v("主要的生命周期函数分类：")]),e._v(" "),t("ul",[t("li",[e._v("创建期间的生命周期函数：\n"),t("ul",[t("li",[e._v("beforeCreate：实例刚在内存中被创建出来，此时，还没有初始化好data和methods属性")]),e._v(" "),t("li",[e._v("created:实例已经在内存中创建OK，此时data和methods已经创建OK，此时还没有开始编译模板")]),e._v(" "),t("li",[e._v("beforeMount:此时已经完成了模板的编译，但还没有挂载到页面中。")]),e._v(" "),t("li",[e._v("mounted:此时，已经将编译好的模板，挂载到了页面指定的容器中显示")])])]),e._v(" "),t("li",[e._v("运行期间的生命周期函数：\n"),t("ul",[t("li",[e._v("beforeUpdate:状态更新之前执行此函数，此时data中的状态值是最新的，但是界面上显示的，数据还是旧的，因为此时还没有开始重新渲染DOM节点")]),e._v(" "),t("li",[e._v("updated:实例更新完毕之后调用此函数，此时data中的状态值和界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！")])])]),e._v(" "),t("li",[e._v("销毁期间的生命周期函数：\n"),t("ul",[t("li",[e._v("beforeDestroy:实例销毁之前调用，在这一步，实例仍然完全可用。")]),e._v(" "),t("li",[e._v("destroyed:Vue实例销毁后调用，调用后，Vue实例指示的所有东西都会被解绑定，所有的事件监听会被移除，所有的子实例也会被销毁。")])])])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);