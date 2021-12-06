(window.webpackJsonp=window.webpackJsonp||[]).push([[154,112,163,183],{230:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(280)),i=a(54),s=a(55),c=a(56),l={id:"tap-gesture",title:"Tap gesture",sidebar_label:"Tap gesture"},d={unversionedId:"api/gestures/tap-gesture",id:"version-2.0.0/api/gestures/tap-gesture",isDocsHomePage:!1,title:"Tap gesture",description:"A discrete gesture that recognizes one or many taps.",source:"@site/versioned_docs/version-2.0.0/api/gestures/tap-gesture.md",slug:"/api/gestures/tap-gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/tap-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-2.0.0/api/gestures/tap-gesture.md",version:"2.0.0",sidebar_label:"Tap gesture",sidebar:"version-2.0.0/docs",previous:{title:"Pan gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/pan-gesture"},next:{title:"Long press gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/long-press-gesture"}},u=[{value:"Config",id:"config",children:[{value:"Properties specific to <code>TapGesture</code>:",id:"properties-specific-to-tapgesture",children:[]},{value:"<code>minPointers(value: number)</code>",id:"minpointersvalue-number",children:[]},{value:"<code>maxDurationMs(value: number)</code>",id:"maxdurationmsvalue-number",children:[]},{value:"<code>maxDelayMs(value: number)</code>",id:"maxdelaymsvalue-number",children:[]},{value:"<code>numberOfTaps(value: number)</code>",id:"numberoftapsvalue-number",children:[]},{value:"<code>maxDeltaX(value: number)</code>",id:"maxdeltaxvalue-number",children:[]},{value:"<code>maxDeltaY(value: number)</code>",id:"maxdeltayvalue-number",children:[]},{value:"<code>maxDist(value: number)</code>",id:"maxdistvalue-number",children:[]}]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Event data",id:"event-data",children:[{value:"Event attributes specific to <code>TapGesture</code>:",id:"event-attributes-specific-to-tapgesture",children:[]},{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],b={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A discrete gesture that recognizes one or many taps."),Object(o.b)("p",null,"Tap gestures detect one or more fingers briefly touching the screen.\nThe fingers involved in these gestures must not move significantly from their initial touch positions.\nThe required number of taps and allowed distance from initial position may be configured.\nFor example, you might configure tap gesture recognizers to detect single taps, double taps, or triple taps."),Object(o.b)("p",null,"In order for a gesture to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activate"),", specified gesture requirements such as minPointers, numberOfTaps, maxDist, maxDurationMs, and maxDelayMs (explained below) must be met. Immediately after the gesture ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activates"),", it will ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#end"}),"end"),"."),Object(o.b)("h2",{id:"config"},"Config"),Object(o.b)("h3",{id:"properties-specific-to-tapgesture"},"Properties specific to ",Object(o.b)("inlineCode",{parentName:"h3"},"TapGesture"),":"),Object(o.b)("h3",{id:"minpointersvalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"minPointers(value: number)")),Object(o.b)("p",null,"Minimum number of pointers (fingers) required to be placed before the gesture ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activates"),". Should be a positive integer. The default value is 1."),Object(o.b)("h3",{id:"maxdurationmsvalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"maxDurationMs(value: number)")),Object(o.b)("p",null,"Maximum time, expressed in milliseconds, that defines how fast a finger must be released after a touch. The default value is 500."),Object(o.b)("h3",{id:"maxdelaymsvalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"maxDelayMs(value: number)")),Object(o.b)("p",null,"Maximum time, expressed in milliseconds, that can pass before the next tap \u2014 if many taps are required. The default value is 500."),Object(o.b)("h3",{id:"numberoftapsvalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"numberOfTaps(value: number)")),Object(o.b)("p",null,"Number of tap gestures required to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activate")," the gesture. The default value is 1."),Object(o.b)("h3",{id:"maxdeltaxvalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"maxDeltaX(value: number)")),Object(o.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the X axis during a tap gesture. If the finger travels further than the defined distance along the X axis and the gesture hasn't yet ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activated"),", it will fail to recognize the gesture."),Object(o.b)("h3",{id:"maxdeltayvalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"maxDeltaY(value: number)")),Object(o.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the Y axis during a tap gesture. If the finger travels further than the defined distance along the Y axis and the gesture hasn't yet ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activated"),", it will fail to recognize the gesture."),Object(o.b)("h3",{id:"maxdistvalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"maxDist(value: number)")),Object(o.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel during a tap gesture. If the finger travels further than the defined distance and the gesture hasn't yet ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activated"),", it will fail to recognize the gesture."),Object(o.b)(s.default,{mdxType:"BaseEventConfig"}),Object(o.b)("h2",{id:"callbacks"},"Callbacks"),Object(o.b)(c.default,{mdxType:"BaseEventCallbacks"}),Object(o.b)("h2",{id:"event-data"},"Event data"),Object(o.b)("h3",{id:"event-attributes-specific-to-tapgesture"},"Event attributes specific to ",Object(o.b)("inlineCode",{parentName:"h3"},"TapGesture"),":"),Object(o.b)("h3",{id:"x"},Object(o.b)("inlineCode",{parentName:"h3"},"x")),Object(o.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector")),"."),Object(o.b)("h3",{id:"y"},Object(o.b)("inlineCode",{parentName:"h3"},"y")),Object(o.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector")),"."),Object(o.b)("h3",{id:"absolutex"},Object(o.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(o.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. It is recommended to use ",Object(o.b)("inlineCode",{parentName:"p"},"absoluteX")," instead of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#x"}),Object(o.b)("inlineCode",{parentName:"a"},"x"))," in cases when the view attached to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," can be transformed as an effect of the gesture."),Object(o.b)("h3",{id:"absolutey"},Object(o.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(o.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. It is recommended to use ",Object(o.b)("inlineCode",{parentName:"p"},"absoluteY")," instead of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#y"}),Object(o.b)("inlineCode",{parentName:"a"},"y"))," in cases when the view attached to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," can be transformed as an effect of the gesture."),Object(o.b)(i.default,{mdxType:"BaseEventData"}),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const singleTap = Gesture.Tap()\n  .maxDurationMs(250)\n  .onStart(() => {\n    Alert.alert('Single tap!');\n  });\n\nconst doubleTap = Gesture.Tap()\n  .maxDurationMs(250)\n  .onStart(() => {\n    Alert.alert('Double tap!');\n  });\n\nreturn (\n  <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>\n    <View style={styles.box} />\n  </GestureDetector>\n);\n")))}p.isMDXComponent=!0},280:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,h=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return a?r.a.createElement(h,s(s({ref:t},l),{},{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},54:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(280)),i={},s={unversionedId:"api/gestures/base-gesture-event-data",id:"version-2.0.0/api/gestures/base-gesture-event-data",isDocsHomePage:!1,title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-event-data.md",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-event-data",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-event-data.md",version:"2.0.0"},c=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),Object(o.b)("h3",{id:"state"},Object(o.b)("inlineCode",{parentName:"h3"},"state")),Object(o.b)("p",null,"Current ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(o.b)("inlineCode",{parentName:"p"},"State")," object by the library."),Object(o.b)("h3",{id:"numberofpointers"},Object(o.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(o.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}d.isMDXComponent=!0},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(280)),i={},s={unversionedId:"api/gestures/base-gesture-config",id:"version-2.0.0/api/gestures/base-gesture-config",isDocsHomePage:!1,title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-config.md",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-config.md",version:"2.0.0"},c=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",children:[]},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",children:[]},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",children:[]},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",children:[]},{value:"<code>withRef(ref)</code>",id:"withrefref",children:[]},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",children:[]},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),Object(o.b)("h3",{id:"enabledvalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),Object(o.b)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(o.b)("strong",{parentName:"p"},"never")," become ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"}),Object(o.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#cancelled"}),Object(o.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#cancelled"}),"cancel")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(o.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/long-press-gesture"}),Object(o.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/tap-gesture"}),Object(o.b)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"hitslopsettings"},Object(o.b)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),Object(o.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(o.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right"),", ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(o.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(o.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"top")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(o.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(o.b)("inlineCode",{parentName:"p"},"width")," or ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(o.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(o.b)("h3",{id:"withrefref"},Object(o.b)("inlineCode",{parentName:"h3"},"withRef(ref)")),Object(o.b)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),Object(o.b)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},Object(o.b)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),Object(o.b)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),". ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(o.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),Object(o.b)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},Object(o.b)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),Object(o.b)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),".",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(o.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}d.isMDXComponent=!0},56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(280)),i={},s={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.0.0/api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",version:"2.0.0"},c=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onTouchesDown(event, stateManager)</code>",id:"ontouchesdownevent-statemanager",children:[]},{value:"<code>onTouchesMove(event, stateManager)</code>",id:"ontouchesmoveevent-statemanager",children:[]},{value:"<code>onTouchesUp(event, stateManager)</code>",id:"ontouchesupevent-statemanager",children:[]},{value:"<code>onTouchesCancelled(event, stateManager)</code>",id:"ontouchescancelledevent-statemanager",children:[]},{value:"<code>onTouchesChange(event, stateManager)</code>",id:"ontoucheschangeevent-statemanager",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(o.b)("h3",{id:"onbegincallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onBegin")," callback."),Object(o.b)("h3",{id:"onstartcallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onStart")," callback."),Object(o.b)("h3",{id:"onendcallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onEnd")," callback."),Object(o.b)("h3",{id:"ontouchesdownevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesDown(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(o.b)("h3",{id:"ontouchesmoveevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesMove(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(o.b)("h3",{id:"ontouchesupevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesUp(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(o.b)("h3",{id:"ontouchescancelledevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."),Object(o.b)("h3",{id:"ontoucheschangeevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesChange(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesChange")," callback which is called for every touch event."))}d.isMDXComponent=!0}}]);