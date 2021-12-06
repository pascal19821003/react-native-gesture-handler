(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(280)),o={id:"fling-gh",title:"FlingGestureHandler",sidebar_label:"Fling"},c={unversionedId:"gesture-handlers/api/fling-gh",id:"version-2.0.0/gesture-handlers/api/fling-gh",isDocsHomePage:!1,title:"FlingGestureHandler",description:"A discrete gesture handler that activates when the movement is sufficiently long and fast.",source:"@site/versioned_docs/version-2.0.0/gesture-handlers/api/fling-gh.md",slug:"/gesture-handlers/api/fling-gh",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/fling-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-2.0.0/gesture-handlers/api/fling-gh.md",version:"2.0.0",sidebar_label:"Fling",sidebar:"version-2.0.0/docs",previous:{title:"RotationGestureHandler",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/rotation-gh"},next:{title:"PinchGestureHandler",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/pinch-gh"}},l=[{value:"Properties",id:"properties",children:[{value:"<code>direction</code>",id:"direction",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A discrete gesture handler that activates when the movement is sufficiently long and fast.\nHandler gets ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../basics/state#active"}),"ACTIVE")," when movement is sufficiently long and it does not take too much time.\nWhen handler gets activated it will turn into ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../basics/state#end"}),"END")," state when finger is released.\nThe handler will fail to recognize if the finger is lifted before being activated.\nThe handler is implemented using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uiswipegesturerecognizer"}),"UISwipeGestureRecognizer")," on iOS and from scratch on Android."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/common-gh#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to ",Object(i.b)("inlineCode",{parentName:"p"},"FlingGestureHandler")," component:"),Object(i.b)("h3",{id:"direction"},Object(i.b)("inlineCode",{parentName:"h3"},"direction")),Object(i.b)("p",null,"Expressed allowed direction of movement. It's possible to pass one or many directions in one parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"direction={Directions.RIGHT | Directions.LEFT}\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"direction={Directions.DOWN}\n")),Object(i.b)("h3",{id:"numberofpointers"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(i.b)("p",null,"Determine exact number of points required to handle the fling gesture."),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/common-gh#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",Object(i.b)("inlineCode",{parentName:"p"},"FlingGestureHandler"),":"),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/example/src/release_tests/fling/index.tsx"}),"fling example")," from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/example"}),"GestureHandler Example App"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const LongPressButton = () => (\n  <FlingGestureHandler\n    direction={Directions.RIGHT | Directions.LEFT}\n    onHandlerStateChange={({ nativeEvent }) => {\n      if (nativeEvent.state === State.ACTIVE) {\n        Alert.alert("I\'m flinged!");\n      }\n    }}>\n    <View style={styles.box} />\n  </FlingGestureHandler>\n);\n')))}d.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);