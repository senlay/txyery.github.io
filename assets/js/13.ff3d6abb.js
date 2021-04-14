(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{504:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h4",{attrs:{id:"powermock关键api列子-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#powermock关键api列子-1"}},[s._v("#")]),s._v(" PowerMock关键API列子-1")]),s._v(" "),e("h5",{attrs:{id:"普通mock-mock参数传递的对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通mock-mock参数传递的对象"}},[s._v("#")]),s._v(" 普通Mock： Mock参数传递的对象")]),s._v(" "),e("blockquote",[e("p",[s._v("说明：普通Mock不需要加@RunWith和@PrepareForTest注解")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("package com.pace.mock;  \n  \nimport org.junit.Assert;  \nimport org.junit.Test;  \nimport org.powermock.api.mockito.PowerMockito;  \n  \nimport javax.xml.transform.Source;  \nimport java.io.File;  \n  \n\npublic class TestCase1 {  \n  \n  \n//测试目标代码：  \n public boolean callArgumentInstance(File file) {  \n        return file.exists();  \n  \n }  \n  \n//测试用例代码：  \n @Test  \n public void testCallArgumentInstance() {  \n        File file = PowerMockito.mock(File.class);  \n TestCase1 underTest = new TestCase1();  \n PowerMockito.when(file.exists()).thenReturn(true);  \n Assert.assertTrue(underTest.callArgumentInstance(file));  \n }  \n  \n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("h4",{attrs:{id:"mock方法内部new出来的对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mock方法内部new出来的对象"}},[s._v("#")]),s._v(" Mock方法内部new出来的对象")]),s._v(" "),e("blockquote",[e("p",[s._v("说明：当使用PowerMockito.whenNew方法时，必须加注解@PrepareForTest和@RunWith。注解@PrepareForTest里写的类是需要mock的new对象代码所在的类。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('//测试用例代码：方法内new出来的对象  \n@Test  \n@PrepareForTest(TestCase1.class)  \npublic void testCallInternalInstance() throws Exception {  \n    File file = PowerMockito.mock(File.class);  \n TestCase1 underTest = new TestCase1();  \n // mock方法内new出来的对象  \n PowerMockito.whenNew(File.class).withArguments("hello").thenReturn(file);  \n PowerMockito.when(file.exists()).thenReturn(false);  \n Assert.assertFalse(underTest.callInternalInstance("hello"));  \n  \n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h4",{attrs:{id:"mock普通对象的final、静态方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mock普通对象的final、静态方法"}},[s._v("#")]),s._v(" Mock普通对象的final、静态方法")]),s._v(" "),e("blockquote",[e("p",[s._v("说明： 当需要mock final方法的时候，必须加注解@PrepareForTest和@RunWith。注解@PrepareForTest里写的类是final方法所在的类。\n说明：当需要mock静态方法的时候，必须加注解@PrepareForTest和@RunWith。注解@PrepareForTest里写的类是静态方法所在的类。PowerMockito.mockStatic(SourceDepend.class);")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package com.pace.mock;\n\nimport com.pace.statics.StringUtils;\nimport org.junit.Assert;\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\nimport org.powermock.api.mockito.PowerMockito;\nimport org.powermock.core.classloader.annotations.PrepareForTest;\nimport org.powermock.modules.junit4.PowerMockRunner;\n\nimport java.io.File;\n\n/**\n * Package: com.pace.mock\n * Description： TODO\n * Author: Forest\n * Date: Created in 2021/4/6 13:50\n * Version: 0.0.1\n * Modified By: duforest\n */\n@RunWith(PowerMockRunner.class)\n@PrepareForTest(StringUtils.class)\npublic class TestCase1 {\n\n\n    //测试目标代码：\n    public boolean callArgumentInstance(File file) {\n        return file.exists();\n\n    }\n\n\n    //测试目标代码：方法内new出来的对象\n    public boolean callInternalInstance(String path) {\n        File file = new File(path);\n        return file.exists();\n    }\n\n\n    // 测试final、static 修饰的方法\n    public boolean callFinalMethod(StringUtils refer) {\n        return refer.isAlive();\n    }\n\n\n    //测试目标代码：私有方法\n    public boolean callPrivateMethod() {\n        return isExist();\n    }\n\n    private boolean isExist() {\n        return false;\n    }\n\n    //测试用例代码：\n    @Test\n    public void testCallArgumentInstance() {\n        File file = PowerMockito.mock(File.class);\n        TestCase1 underTest = new TestCase1();\n        PowerMockito.when(file.exists()).thenReturn(true);\n        Assert.assertTrue(underTest.callArgumentInstance(file));\n    }\n\n    //测试用例代码：方法内new出来的对象\n    @Test\n    public void testCallInternalInstance() throws Exception {\n        File file = PowerMockito.mock(File.class);\n        TestCase1 underTest = new TestCase1();\n        // mock方法内new出来的对象\n        PowerMockito.whenNew(File.class).withArguments("hello").thenReturn(file);\n        PowerMockito.when(file.exists()).thenReturn(false);\n        Assert.assertFalse(underTest.callInternalInstance("hello"));\n\n    }\n\n\n    /**\n     * 测试用例代码\n     */\n    @Test\n    public void testCallFinalMethod() {\n        // mock final修饰的方法\n        StringUtils depencency = PowerMockito.mock(StringUtils.class);\n        // mock静态方法\n        PowerMockito.mockStatic(StringUtils.class);\n        PowerMockito.when(depencency.isAlive()).thenReturn(true);\n        TestCase1 underTest = new TestCase1();\n        Assert.assertTrue(underTest.callFinalMethod(depencency));\n    }\n\n\n    /**\n     * 测试私有方法\n     * @throws Exception\n     */\n    @Test\n    public void testCallPrivateMethod() throws Exception\n    {\n        TestCase1 underTest = PowerMockito.mock(TestCase1.class);\n        PowerMockito.when(underTest.callPrivateMethod()).thenCallRealMethod();\n        PowerMockito.when(underTest, "isExist").thenReturn(true);\n        Assert.assertTrue(underTest.callPrivateMethod());\n    }\n\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);