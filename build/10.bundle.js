(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{126:function(e,n,t){"use strict";t.r(n);var a=t(9),r=t.n(a),o=t(53),i=t(28),c=t(45),l=t(0),u=t.n(l),s=t(117),d=t(14),m=t(220),b=t(115),f=t(145),p=t.n(f),g=t(108),h=t(110),v=t(2),y=(t(7),t(11)),j={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},k=function(e){return Object(v.a)(Object(v.a)({color:e.palette.text.primary},e.typography.body2),{},{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var O=Object(y.a)((function(e){return{"@global":{html:j,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(v.a)(Object(v.a)({margin:0},k(e)),{},{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var n=e.children,t=void 0===n?null:n;return e.classes,l.createElement(l.Fragment,null,t)})),E=t(112),w=t(5),x=t(8),P=t(300),S=t(12),C=l.forwardRef((function(e,n){var t=e.children,a=e.classes,r=e.className,o=e.color,i=void 0===o?"default":o,c=e.component,u=void 0===c?"button":c,s=e.disabled,d=void 0!==s&&s,m=e.disableFocusRipple,b=void 0!==m&&m,f=e.focusVisibleClassName,p=e.size,g=void 0===p?"large":p,h=e.variant,y=void 0===h?"round":h,j=Object(w.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return l.createElement(P.a,Object(v.a)({className:Object(x.a)(a.root,r,"round"!==y&&a.extended,"large"!==g&&a["size".concat(Object(S.a)(g))],d&&a.disabled,{primary:a.primary,secondary:a.secondary,inherit:a.colorInherit}[i]),component:u,disabled:d,focusRipple:!b,focusVisibleClassName:Object(x.a)(a.focusVisible,f),ref:n},j),l.createElement("span",{className:a.label},t))})),I=Object(y.a)((function(e){return{root:Object(v.a)(Object(v.a)({},e.typography.button),{},{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(C),N=t(249),z=t.n(N),W=t(250),$=t.n(W),B=t(251),D=t.n(B),M=t(201),L=t.n(M),T=t(252),R=t.n(T),F=u.a.lazy((function(){return Promise.all([t.e(0),t.e(3),t.e(5),t.e(21)]).then(t.bind(null,303))})),A=Object(g.a)((function(e){return{text:{padding:e.spacing(2,2,0)},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,display:"flex"},fabButton:{backgroundColor:"#03DAC5",color:"#33333",position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},Toolbar:{display:"flex",justifyContent:"space-between"},IconButton:{alignSelf:"stretch",display:"flex",flexDirection:"column",alignItems:"center",justiyfContent:"center",margin:".8em"},Container:{margin:0}}}));function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var q=Object(o.b)((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.nav)}),(function(e){return{setActiveTab:function(n){return e(Object(c.c)(n))}}}))((function(e){var n=e.setActiveTab,t=e.activeNav,a=e.activeProject,r=A(),o=u.a.useState(!1),i=p()(o,2),c=i[0],s=i[1];return u.a.createElement("div",{className:"row m-0 p-0 justify-content-center"},u.a.createElement(O,null),u.a.createElement(h.a,{position:"fixed",color:"primary",className:[r.appBar,"col-12 col-md-4 col-lg-6 bottom-navbar"]},u.a.createElement(E.a,{className:"d-flex align-items-center justify-content-between"},u.a.createElement("div",{onKeyDown:function(){return n("Weekly")},onClick:function(){return n("Weekly")},tabIndex:0,role:"button","aria-label":"open drawer",className:"".concat(r.IconButton," ").concat("Weekly"===t?"activeTab":"")},u.a.createElement(z.a,{className:"menu-icon"}),u.a.createElement("span",null,"Weekly")),u.a.createElement("div",{color:"inherit","aria-label":"open drawer",className:"".concat(r.IconButton," ").concat("Daily"===t?"activeTab":""),onKeyDown:function(){return n("Daily")},onClick:function(){return n("Daily")},tabIndex:0,role:"button"},u.a.createElement($.a,{className:"menu-icon"}),u.a.createElement("span",null,"Daily")),u.a.createElement(l.Suspense,{fallback:u.a.createElement("h1",null,"Loading...")},u.a.createElement(F,{activeProject:a,open:c,onClose:function(){s(!1)},activeTab:t,setActiveTab:n})),u.a.createElement(I,{"aria-label":"add",className:r.fabButton,onClick:function(){s(!0)}},u.a.createElement(D.a,null)),u.a.createElement("div",{className:r.grow}),u.a.createElement("div",{onKeyDown:function(){return n("Source")},onClick:function(){return n("Source")},tabIndex:0,role:"button",color:"inherit",className:"".concat(r.IconButton," ").concat("Source"===t?"activeTab":"")},u.a.createElement(L.a,{className:"menu-icon"}),u.a.createElement("span",null,"Source")),u.a.createElement("div",{onClick:function(){return n("Tools")},onKeyDown:function(){return n("Tools")},tabIndex:0,color:"inherit",role:"button",className:"".concat(r.IconButton," ").concat("Tools"===t?"activeTab":"")},u.a.createElement(R.a,{className:"menu-icon"}),u.a.createElement("span",null,"Tools")))))})),G=u.a.lazy((function(){return t.e(16).then(t.bind(null,309))})),V=u.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(9),t.e(22)]).then(t.bind(null,301))})),H=u.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(14)]).then(t.bind(null,302))})),U=u.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(12)]).then(t.bind(null,304))})),K=function(e){var n=e.param,t=e.project;switch(n){case"Weekly":return u.a.createElement(l.Suspense,{fallback:u.a.createElement(b.a,null)},u.a.createElement(U,{activeProject:t.id}));case"Daily":return u.a.createElement(l.Suspense,{fallback:u.a.createElement(b.a,null)},u.a.createElement(G,{activeProject:t.id}));case"Tools":return u.a.createElement(l.Suspense,{fallback:u.a.createElement(b.a,null)},u.a.createElement(V,{activeProject:t.id}));case"Source":return u.a.createElement(l.Suspense,{fallback:u.a.createElement(b.a,null)},u.a.createElement(H,{activeProject:t.id}));default:t.weekly.boards}},J=t(166),X=t(147);function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=Object(o.b)((function(e){return Y(Y({},e.projects),{},{nav:e.nav})}),(function(e){return{fetchProjects:function(){return e(Object(i.f)())},setActiveProject:function(n){return e(Object(i.g)(n))},fetchAndFindProjects:function(n){return e(Object(i.e)(n))},setNavMessage:function(n){return e(Object(c.d)(n))}}}))((function(e){var n=Object(s.b)(X.h,{variables:{id:e.title}});return n.error?n.error.message.includes("Unauthorized")?u.a.createElement(d.c,{to:"/",noThrow:!0}):n.error.message.includes("CompactToken validation failed")||n.error.message.includes("Unauthorized from Microsoft")?u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Failed gettin the Mircosoft Auth Token"),u.a.createElement("h4",null,"Please Login again"),u.a.createElement(J.a,null)):u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Sorry! There was an unknown error"),u.a.createElement("p",null,n.error)):u.a.createElement("div",{className:"container-fluid pb-5 mb-5"},!n.loading&&n.data?u.a.createElement("div",{className:"row m-0 mt-3"},u.a.createElement("div",{className:"col-12 text-center"},u.a.createElement("h1",null,n.data.getProjectById.title)),u.a.createElement(m.a,null,u.a.createElement(K,{param:e.nav.activeNav,project:n.data.getProjectById})),u.a.createElement(q,{activeProject:n.data.getProjectById.id})):u.a.createElement(b.a,null))}))},147:function(e,n,t){"use strict";t.d(n,"h",(function(){return j})),t.d(n,"k",(function(){return k})),t.d(n,"c",(function(){return O})),t.d(n,"i",(function(){return E})),t.d(n,"j",(function(){return w})),t.d(n,"b",(function(){return x})),t.d(n,"a",(function(){return P})),t.d(n,"e",(function(){return S})),t.d(n,"d",(function(){return C})),t.d(n,"f",(function(){return I})),t.d(n,"g",(function(){return N})),t.d(n,"l",(function(){return z})),t.d(n,"m",(function(){return W}));var a=t(150),r=t.n(a),o=t(151),i=t.n(o);function c(){var e=r()(["\n  mutation PushBoardIntoProject($id: ID!, $target: String!, $data: String!) {\n    pushInProject(id: $id, data: $data, target: $target) {\n      success\n    }\n  }\n"]);return c=function(){return e},e}function l(){var e=r()(["\n  mutation CreateBoard(\n    $resourceid: String!\n    $activeList: String!\n    $tags: [String!]\n  ) {\n    createBoard(\n      input: { resourceid: $resourceid, activeList: $activeList, tags: $tags }\n    ) {\n      data {\n        id\n      }\n    }\n  }\n"]);return l=function(){return e},e}function u(){var e=r()(["\n  query GetOnenoteNotebook($notebookId: String!) {\n    getSectionsFromOnenote(notebookId: $notebookId) {\n      name: displayName\n      id\n    }\n  }\n"]);return u=function(){return e},e}function s(){var e=r()(["\n  query {\n    getNotebooksFromOnenote {\n      name: displayName\n      id\n    }\n  }\n"]);return s=function(){return e},e}function d(){var e=r()(["\n  query {\n    getFeedsFromFeedly {\n      id\n      label\n    }\n  }\n"]);return d=function(){return e},e}function m(){var e=r()(["\n  query {\n    getAllGithubRepos {\n      language\n      id\n      description\n      name\n      owner {\n        login\n        avatar_url\n      }\n    }\n  }\n"]);return m=function(){return e},e}function b(){var e=r()(["\n  query {\n    getAllHeroes {\n      id\n      tags\n      name\n      links {\n        name: website\n        url: urlLink\n      }\n    }\n  }\n"]);return b=function(){return e},e}function f(){var e=r()(["\n  query {\n    getAllProjects {\n      id\n      title\n      description\n      thumb\n    }\n  }\n"]);return f=function(){return e},e}function p(){var e=r()(["\n  query GetSourceProject($id: ID!) {\n    getProjectById(id: $id) {\n      id\n      sources {\n        heroes {\n          name\n          tags\n          links {\n            name: website\n            url: urlLink\n          }\n        }\n        streams {\n          feedlyItems {\n            id\n            items {\n              origin {\n                title\n                htmlUrl\n              }\n              webfeeds {\n                logo\n              }\n              keywords\n              title\n              content {\n                content\n              }\n              categories {\n                label\n              }\n              visual {\n                url\n              }\n              summary {\n                content\n              }\n              label\n              author\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return p=function(){return e},e}function g(){var e=r()(["\n  query GetResourceProject($id: ID!) {\n    getProjectById(id: $id) {\n      id\n      resources {\n        notebooks {\n          id\n          onenoteId\n          resource: onenoteNotebook {\n            name: displayName\n            url: sectionsUrl\n          }\n          sections: onenoteSections {\n            name: displayName\n            url: sectionsUrl\n          }\n        }\n        resources {\n          name\n          tags\n          website\n        }\n        repos {\n          info: githubRepo {\n            name\n            owner {\n              login\n              avatar_url\n            }\n            description\n            url\n            language\n          }\n          technologies\n        }\n      }\n    }\n  }\n"]);return g=function(){return e},e}function h(){var e=r()(["\n  query GetDailyProject($id: ID!) {\n    getProjectById(id: $id) {\n      id\n      daily {\n        tasks {\n          resource {\n            title\n            about\n          }\n          tags\n        }\n      }\n    }\n  }\n"]);return h=function(){return e},e}function v(){var e=r()(["\n  query GetWeeklyProject($idWeekly: ID!) {\n    getProjectById(id: $idWeekly) {\n      id\n      weekly {\n        boards {\n          id\n          cards: trelloCardsFromActiveList {\n            title: name\n            date: dueReminder\n            description: desc\n            labels {\n              green\n              yellow\n              orange\n              red\n              purple\n              blue\n              sky\n              lime\n              pink\n              black\n            }\n          }\n          info: trelloBoard {\n            name\n            prefs {\n              backgroundImage\n            }\n            url: shortUrl\n          }\n          list: trelloActiveList {\n            name\n          }\n        }\n      }\n    }\n  }\n"]);return v=function(){return e},e}function y(){var e=r()(["\n  query GetProjectById($id: ID!) {\n    getProjectById(id: $id) {\n      title\n      id\n    }\n  }\n"]);return y=function(){return e},e}var j=i()(y()),k=i()(v()),O=i()(h()),E=i()(g()),w=i()(p()),x=i()(f()),P=i()(b()),S=i()(m()),C=i()(d()),I=i()(s()),N=i()(u()),z=i()(l()),W=i()(c())},166:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(172),i=t.n(o),c=t(292);n.a=function(){return r.a.createElement(c.a,{size:"medium",variant:"contained",color:"primary",href:"https://api.workee.site/auth/signin"},r.a.createElement(i.a,null),"Login with Microsoft")}},172:function(e,n,t){"use strict";var a=t(48);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,a(t(77)).default)(r.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");n.default=o},201:function(e,n,t){"use strict";var a=t(48);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,a(t(77)).default)(r.default.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");n.default=o},220:function(e,n,t){"use strict";var a=t(2),r=t(5),o=t(19),i=t(0),c=(t(7),t(8)),l=t(11),u=t(12),s=i.forwardRef((function(e,n){var t=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,d=e.disableGutters,m=void 0!==d&&d,b=e.fixed,f=void 0!==b&&b,p=e.maxWidth,g=void 0===p?"lg":p,h=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(s,Object(a.a)({className:Object(c.a)(t.root,o,f&&t.fixed,m&&t.disableGutters,!1!==g&&t["maxWidth".concat(Object(u.a)(String(g)))]),ref:n},h))}));n.a=Object(l.a)((function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(n,t){var a=e.breakpoints.values[t];return 0!==a&&(n[e.breakpoints.up(t)]={maxWidth:a}),n}),{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(s)},249:function(e,n,t){"use strict";var a=t(48);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,a(t(77)).default)(r.default.createElement("path",{d:"M20 9H4v2h16V9zM4 15h16v-2H4v2z"}),"DragHandle");n.default=o},250:function(e,n,t){"use strict";var a=t(48);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,a(t(77)).default)(r.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");n.default=o},251:function(e,n,t){"use strict";var a=t(48);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,a(t(77)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.default=o},252:function(e,n,t){"use strict";var a=t(48);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,a(t(77)).default)(r.default.createElement("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"}),"Build");n.default=o}}]);