(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return k})),n.d(t,"b",(function(){return O})),n.d(t,"l",(function(){return j})),n.d(t,"i",(function(){return $})),n.d(t,"c",(function(){return E})),n.d(t,"h",(function(){return w})),n.d(t,"k",(function(){return C})),n.d(t,"g",(function(){return P})),n.d(t,"d",(function(){return I})),n.d(t,"j",(function(){return T}));var a=n(147),r=n.n(a),o=n(148),c=n.n(o);function i(){var e=r()(["\n  mutation PushSourceIntoProject($id: ID!, $target: String!, $data: String!) {\n    pushInProject(id: $id, data: $data, target: $target) {\n      success\n    }\n  }\n"]);return i=function(){return e},e}function l(){var e=r()(["\n  mutation CreateNotebook(\n    $sections: [String!]\n    $onenoteId: ID!\n    $tags: [String!]\n  ) {\n    createNotebook(\n      input: { sections: $sections, onenoteId: $onenoteId, tags: $tags }\n    ) {\n      data {\n        id\n      }\n    }\n  }\n"]);return l=function(){return e},e}function u(){var e=r()(["\n  mutation CreateResource($website: String!, $name: String!, $tags: [String!]) {\n    createResource(input: { website: $website, name: $name, tags: $tags }) {\n      data {\n        id\n      }\n    }\n  }\n"]);return u=function(){return e},e}function s(){var e=r()(["\n  mutation PushSourceIntoProject($id: ID!, $target: String!, $data: String!) {\n    pushInProject(id: $id, data: $data, target: $target) {\n      success\n    }\n  }\n"]);return s=function(){return e},e}function d(){var e=r()(["\n  mutation CreateStream($tags: [String!], $feedlyStreamsid: [String!]) {\n    createStream(input: { feedlyStreamsid: $feedlyStreamsid, tags: $tags }) {\n      data {\n        id\n      }\n    }\n  }\n"]);return d=function(){return e},e}function p(){var e=r()(["\n  mutation CreateHero($name: String!, $tags: [String!], $links: [LinkInput!]) {\n    createHeroe(input: { name: $name, tags: $tags, links: $links }) {\n      data {\n        id\n      }\n    }\n  }\n"]);return p=function(){return e},e}function m(){var e=r()(["\n  mutation CreatTask(\n    $tags: [String!]\n    $resource: resourceInput!\n    $type: String\n  ) {\n    createTask(input: { tags: $tags, resource: $resource, type: $type }) {\n      success\n      data {\n        id\n      }\n    }\n  }\n"]);return m=function(){return e},e}function g(){var e=r()(["\n  mutation PushTaskIntoProject($id: ID!, $target: String!, $data: String!) {\n    pushInProject(id: $id, data: $data, target: $target) {\n      success\n    }\n  }\n"]);return g=function(){return e},e}function b(){var e=r()(["\n  mutation CreateBoard($resourceid: String!, $activeList: String!) {\n    createBoard(input: { resourceid: $resourceid, activeList: $activeList }) {\n      data {\n        id\n      }\n    }\n  }\n"]);return b=function(){return e},e}function f(){var e=r()(["\n  mutation CreateRepo($githubId: String!) {\n    createRepo(input: { githubId: $githubId }) {\n      data {\n        id\n      }\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=r()(["\n  mutation CreateProject(\n    $title: String!\n    $description: String!\n    $board: String!\n    $repo: String!\n  ) {\n    createProject(\n      input: {\n        title: $title\n        description: $description\n        weekly: { boards: [$board] }\n        resources: { repos: [$repo] }\n      }\n    ) {\n      data {\n        title\n        description\n        id\n      }\n    }\n  }\n"]);return v=function(){return e},e}function h(){var e=r()(["\n  mutation GetLogin($email: String!, $password: String!) {\n    getLogin(input: { email: $email, password: $password }) {\n      token\n      usuario\n    }\n  }\n"]);return h=function(){return e},e}var y=c()(h()),S=c()(v()),k=c()(f()),O=c()(b()),j=c()(g()),$=c()(m()),E=c()(p()),w=c()(d()),C=c()(s()),P=c()(u()),I=c()(l()),T=c()(i())},164:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(9),r=n.n(a),o=n(0),c=n.n(o),i=n(287),l=n(284),u=n(260),s=n(175);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.state,n=e.setState;return c.a.createElement("div",null,c.a.createElement("h5",null,"Agrega nuevos tags"),c.a.createElement(i.a,{onChange:function(e){return e.persist(),n(p(p({},t),{},{newTagInput:e.target.value}))}},c.a.createElement(u.a,{value:t.newTagInput,id:"basicTemplate",label:"NewTag"})),c.a.createElement(l.a,{onClick:function(){var e=t.tags,a=t.newTagInput;return e.push(a),n(p(p({},t),{},{tags:e,newTagInput:""}))},color:"primary"},"Agregar Tag"),c.a.createElement("div",null,t.tags.length?t.tags.map((function(e,a){return c.a.createElement(s.a,{label:e,key:a,onDelete:function(){return a=e,r=t.tags.filter((function(e){return e!==a})),n(p(p({},t),{},{tags:r,newTagInput:""}));var a,r}})})):c.a.createElement(c.a.Fragment,null)))}},175:function(e,t,n){"use strict";var a=n(2),r=n(5),o=n(0),c=(n(7),n(8)),i=n(145),l=Object(i.a)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),u=n(11),s=n(28),d=n(141),p=n(12),m=n(292);function g(e){return"Backspace"===e.key||"Delete"===e.key}var b=o.forwardRef((function(e,t){var n=e.avatar,i=e.classes,u=e.className,s=e.clickable,b=e.color,f=void 0===b?"default":b,v=e.component,h=e.deleteIcon,y=e.disabled,S=void 0!==y&&y,k=e.icon,O=e.label,j=e.onClick,$=e.onDelete,E=e.onKeyDown,w=e.onKeyUp,C=e.size,P=void 0===C?"medium":C,I=e.variant,T=void 0===I?"default":I,R=Object(r.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),x=o.useRef(null),D=Object(d.a)(x,t),N=function(e){e.stopPropagation(),$&&$(e)},L=!(!1===s||!j)||s,F="small"===P,W=v||(L?m.a:"div"),z=W===m.a?{component:"div"}:{},A=null;if($){var K=Object(c.a)("default"!==f&&("default"===T?i["deleteIconColor".concat(Object(p.a)(f))]:i["deleteIconOutlinedColor".concat(Object(p.a)(f))]),F&&i.deleteIconSmall);A=h&&o.isValidElement(h)?o.cloneElement(h,{className:Object(c.a)(h.props.className,i.deleteIcon,K),onClick:N}):o.createElement(l,{className:Object(c.a)(i.deleteIcon,K),onClick:N})}var M=null;n&&o.isValidElement(n)&&(M=o.cloneElement(n,{className:Object(c.a)(i.avatar,n.props.className,F&&i.avatarSmall,"default"!==f&&i["avatarColor".concat(Object(p.a)(f))])}));var U=null;return k&&o.isValidElement(k)&&(U=o.cloneElement(k,{className:Object(c.a)(i.icon,k.props.className,F&&i.iconSmall,"default"!==f&&i["iconColor".concat(Object(p.a)(f))])})),o.createElement(W,Object(a.a)({role:L||$?"button":void 0,className:Object(c.a)(i.root,u,"default"!==f&&[i["color".concat(Object(p.a)(f))],L&&i["clickableColor".concat(Object(p.a)(f))],$&&i["deletableColor".concat(Object(p.a)(f))]],"default"!==T&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[f]],S&&i.disabled,F&&i.sizeSmall,L&&i.clickable,$&&i.deletable),"aria-disabled":!!S||void 0,tabIndex:L||$?0:void 0,onClick:j,onKeyDown:function(e){e.currentTarget===e.target&&g(e)&&e.preventDefault(),E&&E(e)},onKeyUp:function(e){e.currentTarget===e.target&&($&&g(e)?$(e):"Escape"===e.key&&x.current&&x.current.blur()),w&&w(e)},ref:D},z,R),M||U,o.createElement("span",{className:Object(c.a)(i.label,F&&i.labelSmall)},O),A)}));t.a=Object(u.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=Object(s.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(s.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(s.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(s.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(s.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(s.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(s.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.c)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(s.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(s.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(s.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(s.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(b)},298:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var a=n(157),r=n.n(a),o=n(158),c=n.n(o),i=n(9),l=n.n(i),u=n(143),s=n.n(u),d=n(0),p=n.n(d),m=n(111),g=n(287),b=n(284),f=n(249),v=n(291),h=n(302),y=n(109),S=n(260),k=n(175),O=n(144),j=n(147),$=n.n(j),E=n(148),w=n.n(E);function C(){var e=$()(["\n    query {\n      getAllGithubRepos {\n        id\n        name\n      }\n    }\n  "]);return C=function(){return e},e}function P(e){var t=w()(C()),n=Object(m.b)(t);n.error||(g.a,h.a,v.a,!n.loaging&&n.data?n.data.getAllGithubRepos.map((function(e){return p.a.createElement(f.a,{key:e.id,value:e},e.name)})):y.a,k.a,e.formState.repo.name)}var I=n(164),T=n(163);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e){var t=Object(m.b)(O.f),n=Object(m.b)(O.g,{variables:{notebookId:e.state.notebook}}),a=function(t){var n=e.state.notebookSections.filter((function(e){return e!==t}));e.setState(x(x({},e.state),{},{notebookSections:n,notebookSectionInput:""}))};switch(e.state.activeResource){case"Repo":return p.a.createElement(P,{addRepos:function(t){return t.persist(),e.setState(x(x({},e.state),{},{repo:t.target.value}))},deleteRepo:function(){return e.setState(x(x({},e.state),{},{repo:{}}))},formState:e.state});case"Notebooks":return p.a.createElement(p.a.Fragment,null,p.a.createElement("h5",null,"Agrega tu Notebook"),p.a.createElement(g.a,{variant:"filled",fullWidth:!0},p.a.createElement(h.a,{id:"trello-list-input"},"Selecciona Notebook"),p.a.createElement(v.a,{labelId:"trello-list-input",id:"trello-list-inputs",onChange:function(t){return function(t){return t.persist(),e.setState(x(x({},e.state),{},{notebook:t.target.value}))}(t)},autoWidth:!0},t.loading?t.error?t.error.message.includes("CompactToken validation failed")||t.error.message.includes("Unauthorized from Microsoft")?p.a.createElement(p.a.Fragment,null,p.a.createElement("h1",null,"Failed gettin the Mircosoft Auth Token"),p.a.createElement("h4",null,"Please Login again"),p.a.createElement(T.a,null)):p.a.createElement(p.a.Fragment,null,p.a.createElement("h1",null,"Sorry! There was an unknown error getting the notebooks"),p.a.createElement("p",null,t.error)):p.a.createElement(y.a,null):t.error?t.error.message.includes("CompactToken validation failed")||t.error.message.includes("Unauthorized from Microsoft")?p.a.createElement(p.a.Fragment,null,p.a.createElement("h1",null,"Failed gettin the Mircosoft Auth Token"),p.a.createElement("h4",null,"Please Login again"),p.a.createElement(T.a,null)):p.a.createElement(p.a.Fragment,null,p.a.createElement("h1",null,"Sorry! There was an unknown error getting the notebooks"),p.a.createElement("p",null,t.error)):t.data.getNotebooksFromOnenote.map((function(e){return p.a.createElement(f.a,{key:e.id,value:e.id},e.name)})))),p.a.createElement(g.a,{variant:"filled",fullWidth:!0},p.a.createElement(h.a,{id:"trello-list-input"},"Seleccionar secciones"),p.a.createElement(v.a,{labelId:"trello-list-input",id:"trello-list-inputs",value:e.state.notebookSection,onChange:function(t){return function(t){t.persist();var n=e.state.notebookSections,a=t.target.value;n.push(a),e.setState(x(x({},e.state),{},{notebookSections:n,notebookSectionInput:""}))}(t)},autoWidth:!0},!n.loading&&n.data?n.data.getSectionsFromOnenote.map((function(e){return p.a.createElement(f.a,{key:e.id,value:e},e.name)})):p.a.createElement(y.a,null)),e.state.notebookSections.map((function(e,t){return p.a.createElement(k.a,{label:e.name,key:t,onDelete:function(){return a(e)}})}))),p.a.createElement(I.default,{state:e.state,setState:e.setState}));case"Resources":return p.a.createElement(p.a.Fragment,null,p.a.createElement("h5",null,"Agrega el nombre de tu recurso"),p.a.createElement(g.a,{variant:"filled",fullWidth:!0},p.a.createElement(S.a,{onChange:function(t){t.persist(),e.setState(x(x({},e.state),{},{resourceTitle:t.target.value}))},value:e.state.resourceTitle,id:"basicTemplate",label:"Name of your resource"})),p.a.createElement("h5",null,"Agrega el sitio web de tu recurso"),p.a.createElement(g.a,{variant:"filled",fullWidth:!0},p.a.createElement(S.a,{onChange:function(t){t.persist(),e.setState(x(x({},e.state),{},{resourceWebsite:t.target.value}))},value:e.state.resourceWebsite,id:"basicTemplate",label:"The url of the resource website"})),p.a.createElement("div",null,p.a.createElement(I.default,{state:e.state,setState:e.setState}),p.a.createElement("div",null,e.state.notebookSections.map((function(e,t){return p.a.createElement(k.a,{label:e,key:t,onDelete:function(){return a(e)}})})))))}}var N=n(149);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e){var t=Object(d.useState)({activeResource:"Notebooks",repo:{},notebook:"",notebookSections:[],notebookSectionInput:"",tags:[],newTagInput:"",resourceTitle:"",resourceWebsite:""}),n=s()(t,2),a=n[0],o=n[1],i=Object(m.a)(N.f),l=s()(i,1)[0],u=Object(m.a)(N.d),y=s()(u,1)[0],S=Object(m.a)(N.g),k=s()(S,1)[0],O=Object(m.a)(N.j),j=s()(O,1)[0],$=function(){var t=c()(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.notebookSections.map((function(e){return e.id})),t.t0=a.activeResource,t.next="Repo"===t.t0?4:"Notebooks"===t.t0?7:"Resources"===t.t0?10:13;break;case 4:return t.next=6,l({variables:{githubId:a.repo.id}}).then((function(t){j({variables:{target:"resources.repos",data:t.data.createRepo.data.id,id:e.activeProject}})}));case 6:return t.abrupt("return",e.handleForm());case 7:return t.next=9,y({variables:{sections:n,onenoteId:a.notebook,tags:a.tags}}).then((function(t){j({variables:{target:"resources.notebooks",data:t.data.createNotebook.data.id,id:e.activeProject}})}));case 9:return t.abrupt("return",e.handleForm());case 10:return t.next=12,k({variables:{name:a.resourceTitle,website:a.resourceWebsite,tags:a.tags}}).then((function(t){j({variables:{id:e.activeProject,target:"resources.resources",data:t.data.createResource.data.id}}).then((function(e){return console.log("Push source:",e)}))}));case 12:return t.abrupt("return",e.handleForm());case 13:return t.abrupt("break",14);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return p.a.createElement("form",null,p.a.createElement("h5",null,"Selecciona el recurso que quieres agregar"),p.a.createElement(g.a,{variant:"filled",fullWidth:!0},p.a.createElement(h.a,{id:"trello-list-input"},"Recurso"),p.a.createElement(v.a,{labelId:"trello-list-input",id:"trello-list-inputs",value:a.activeResource,onChange:function(e){e.persist(),o(F(F({},a),{},{activeResource:e.target.value}))},autoWidth:!0},p.a.createElement(f.a,{value:"Repo"},"Repo"),p.a.createElement(f.a,{value:"Notebooks"},"Notebooks"),p.a.createElement(f.a,{value:"Resources"},"Resources"))),p.a.createElement("div",null,p.a.createElement(D,{setState:o,state:a})),p.a.createElement(b.a,{variant:"contained",color:"primary",onClick:$},"Enviar formulario"))}}}]);