(function(t){function a(a){for(var s,l,n=a[0],_=a[1],d=a[2],c=0,v=[];c<n.length;c++)l=n[c],r[l]&&v.push(r[l][0]),r[l]=0;for(s in _)Object.prototype.hasOwnProperty.call(_,s)&&(t[s]=_[s]);o&&o(a);while(v.length)v.shift()();return i.push.apply(i,d||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,n=1;n<e.length;n++){var _=e[n];0!==r[_]&&(s=!1)}s&&(i.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},r={app:0},i=[];function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/div2-bos-gamers/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],_=n.push.bind(n);n.push=a,n=n.slice();for(var d=0;d<n.length;d++)a(n[d]);var o=_;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("64a9"),r=e.n(s);r.a},"0662":function(t,a,e){},"1f4c":function(t,a,e){},3172:function(t,a,e){"use strict";var s=e("1f4c"),r=e.n(s);r.a},"36ca":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),r=e("8c4f"),i=e("9f7b"),l=e.n(i),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("TopNavigation"),e("router-view")],1)},_=[],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{id:"navbar"}},[e("div",{staticClass:"navbar-wrapper"},[e("div",{staticClass:"container"},[t._m(0),e("div",{attrs:{id:"navigation"}},[e("ul",{staticClass:"navigation-menu nav"},[e("li",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("li",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/team-stats"}},[t._v("Team Stats")])],1)])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"menu-extras"},[e("div",{staticClass:"menu-item"},[e("div",{staticClass:"header-socials"})]),e("div",{staticClass:"menu-item"},[e("div",{staticClass:"nav-toggle"},[e("a",{staticClass:"menu-toggle"},[e("div",{staticClass:"hamburger"},[e("div",{staticClass:"hamburger-box"},[e("div",{staticClass:"hamburger-inner"})])])])])])])}],c={name:"TopNavigation"},v=c,u=e("2877"),p=Object(u["a"])(v,d,o,!1,null,null,null),m=p.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("section",{staticClass:"grey-bg"},[e("div",{staticClass:"container"},[t._m(1),e("div",{staticClass:"section-content pt-25 pb-25"},[e("div",{staticClass:"row"},t._l(t.gamerData,function(t){return e("div",{key:t.pid,staticClass:"col-md-3 col-sm-6"},[e("HomePageGamerCard",{attrs:{gamer:t}})],1)}),0)])])])])},f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"page-title parallax-section"},[e("div",{staticClass:"row-parallax-bg"},[e("div",{staticClass:"parallax-wrapper"},[e("div",{staticClass:"parallax-bg"},[e("img",{attrs:{src:"images/the-division-2.jpg",alt:"The Division 2"}})])]),e("div",{staticClass:"parallax-overlay"})]),e("div",{staticClass:"centrize"},[e("div",{staticClass:"v-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title text-center"},[e("h4",{staticClass:"upper"},[t._v("Brotherhood of Steel")]),e("h1",[t._v("Division 2 Stats")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title text-center"},[e("h2",[t._v("The Division 2 Brotherhood")])])}],D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"team-member pointer mb-40",attrs:{"data-animation":"fadeInUp","data-delay":"900"}},[e("div",{staticClass:"team-image"},[e("img",{attrs:{src:t.gamer.avatar_256,alt:t.gamer.name,title:t.gamer.name},on:{click:function(a){return t.goToDetail(t.gamer.pid)}}})]),e("div",{staticClass:"team-overlay",on:{click:function(a){return t.goToDetail(t.gamer.pid)}}},[e("div",{staticClass:"team-info"},[e("h4",{on:{click:function(a){return t.goToDetail(t.gamer.pid)}}},[t._v(t._s(t.gamer.name))]),e("span",[t._v("PVE Level: "+t._s(t.gamer.level_pve))]),e("br"),e("span",[t._v("DZ Level: "+t._s(t.gamer.level_dz))])])])])},k=[],h={name:"HomePageGamerCard",props:{gamer:Object},methods:{goToDetail:function(t){this.$router.push({name:"gamerDetail",params:{pid:t}})}}},b=h,y=(e("89bf"),Object(u["a"])(b,D,k,!1,null,null,null)),C=y.exports,P=e("bc3a"),T=e.n(P),K={name:"BoS",components:{HomePageGamerCard:C},props:{msg:String},data:function(){return{pids:["52fc0217-88e8-4f2e-9763-5d1da29ab6df","a16ba01c-2115-47f6-ba5f-b70af8e7cc14","97476967-4a4d-4841-8694-7df5cca12564","37908b65-01d7-4f40-9608-b601fce2d9ae","4f666efb-0fca-49fe-95f0-9e4872d9ff4d"],gamerData:[]}},created:function(){this.pidLoop()},methods:{pidLoop:function(){var t,a=this;for(t=0;t<a.pids.length;t++)this.getGamerData(a.pids[t])},getGamerData:function(t){var a=this;T.a.get("https://thedivisiontab.com/api/player.php?pid="+t).then(function(t){return a.gamerData.push(t.data)})}}},x=K,E=(e("3172"),Object(u["a"])(x,g,f,!1,null,"cda6c1fa",null)),S=E.exports,V={name:"app",components:{BoS:S,TopNavigation:m}},w=V,z=(e("034f"),Object(u["a"])(w,n,_,!1,null,null,null)),O=z.exports,j=(e("f9e3"),e("2dd8"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("TeamStatsTable",{attrs:{gamerData:t.gamerData}})],1)}),$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"page-title parallax-section"},[e("div",{staticClass:"row-parallax-bg"},[e("div",{staticClass:"parallax-wrapper"},[e("div",{staticClass:"parallax-bg"},[e("img",{attrs:{src:"images/team-stats-header.jpg",alt:"The Division 2"}})])]),e("div",{staticClass:"parallax-overlay"})]),e("div",{staticClass:"centrize"},[e("div",{staticClass:"v-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title text-center"},[e("h4",{staticClass:"upper"},[t._v("Brotherhood of Steel")]),e("h1",[t._v("Team Stats")])])])])])])}],Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"last-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-50"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v(" ")]),t._l(t.gamerData,function(a){return e("th",{key:a.pid,staticClass:"pointer",on:{click:function(e){return t.goToDetail(a.pid)}}},[t._v("\n                                "+t._s(a.name)+"\n                            ")])})],2)]),e("tbody",[e("tr",[e("td",[t._v("Gear Score")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.gearscore))])})],2),e("tr",[e("td",[t._v("PVE Level")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.level_pve))])})],2),e("tr",[e("td",[t._v("DZ Level")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.level_dz))])})],2),e("tr",[e("td",[t._v("Specialization")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.specialization))])})],2),e("tr",[e("td",[t._v("E Credits")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.ecredits))])})],2),e("tr",[e("td",[t._v("Headshots")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.headshots))])})],2),e("tr",[e("td",[t._v("Looted")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.looted))])})],2),e("tr",[e("td",[t._v("Total Kills")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_total))])})],2),e("tr",[e("td",[t._v("NPC Kills")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_npc))])})],2),e("tr",[e("td",[t._v("PVP Kills")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pvp))])})],2),e("tr",[e("td",[t._v("Total Time Played")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.timeplayed_total))])})],2),e("tr",[e("td",[t._v("Time Played DZ")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.timeplayed_dz))])})],2),e("tr",[e("td",[t._v("Time Played PVE")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.timeplayed_pve))])})],2),e("tr",[e("td",[t._v("Time Played PVP")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.timeplayed_pvp))])})],2),e("tr",[e("td",[t._v("Time Played Rogue")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.timeplayed_rogue))])})],2),e("tr",[e("td",[t._v("Max. Time Rogue")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.maxtime_rogue))])})],2),e("tr",[e("td",[t._v("Kills (bleeding)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_bleeding))])})],2),e("tr",[e("td",[t._v("Kills (shocked)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_shocked))])})],2),e("tr",[e("td",[t._v("Kills (burning)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_burning))])})],2),e("tr",[e("td",[t._v("Kills (ensnare)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_ensnare))])})],2),e("tr",[e("td",[t._v("Kills (headshot)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_headshot))])})],2),e("tr",[e("td",[t._v("Kills (skill)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_skill))])})],2),e("tr",[e("td",[t._v("Kills (turret)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_turret))])})],2),e("tr",[e("td",[t._v("Kills (PVP Named Bosses)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pvp_namedbosses))])})],2),e("tr",[e("td",[t._v("Kills (PVP Elite Bosses)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pvp_elitebosses))])})],2),e("tr",[e("td",[t._v("Kills (PVP DZ Total)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pvp_dz_total))])})],2),e("tr",[e("td",[t._v("Kills (PVP DZ Rogue)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pvp_dz_rogue))])})],2),e("tr",[e("td",[t._v("Kills (PVE Hyenas)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pve_hyenas))])})],2),e("tr",[e("td",[t._v("Kills (PVE Outcasts)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pve_outcasts))])})],2),e("tr",[e("td",[t._v("Kills (PVE Black Tusk)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pve_blacktusk))])})],2),e("tr",[e("td",[t._v("Kills (PVE True Sons)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pve_truesons))])})],2),e("tr",[e("td",[t._v("Kills (PVE DZ Hyenas)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pve_dz_hyenas))])})],2),e("tr",[e("td",[t._v("Kills (PVE DZ Outcasts)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pve_dz_outcasts))])})],2),e("tr",[e("td",[t._v("Kills (PVE DZ Black Tusk)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pve_dz_blacktusk))])})],2),e("tr",[e("td",[t._v("Kills (PVE DZ True Sons)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_pve_dz_truesons))])})],2),e("tr",[e("td",[t._v("Kills (pistol)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_wp_pistol))])})],2),e("tr",[e("td",[t._v("Kills (grenade)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_wp_grenade))])})],2),e("tr",[e("td",[t._v("Kills (SMG)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_wp_smg))])})],2),e("tr",[e("td",[t._v("Kills (shotgun)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_wp_shotgun))])})],2),e("tr",[e("td",[t._v("Kills (rifles)")]),t._l(t.gamerData,function(a){return e("td",{key:a.pid},[t._v(t._s(a.kills_wp_rifles))])})],2)])])])])])])},G=[],B={name:"TeamStatsTable",props:{gamerData:Array},methods:{goToDetail:function(t){this.$router.push({name:"gamerDetail",params:{pid:t}})}}},L=B,H=(e("8d5f"),Object(u["a"])(L,Z,G,!1,null,null,null)),M=H.exports,N={name:"TeamStats",components:{TeamStatsTable:M},props:{msg:String},data:function(){return{pids:["52fc0217-88e8-4f2e-9763-5d1da29ab6df","a16ba01c-2115-47f6-ba5f-b70af8e7cc14","97476967-4a4d-4841-8694-7df5cca12564","37908b65-01d7-4f40-9608-b601fce2d9ae","4f666efb-0fca-49fe-95f0-9e4872d9ff4d"],gamerData:[]}},created:function(){this.pidLoop()},methods:{pidLoop:function(){var t,a=this;for(t=0;t<a.pids.length;t++)this.getGamerData(a.pids[t])},getGamerData:function(t){var a=this;T.a.get("https://thedivisiontab.com/api/player.php?pid="+t).then(function(t){return a.gamerData.push(t.data)})}}},R=N,F=Object(u["a"])(R,j,$,!1,null,null,null),J=F.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"page-title parallax-section"},[t._m(0),e("div",{staticClass:"centrize"},[e("div",{staticClass:"v-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title text-center"},[e("h4",{staticClass:"upper"},[t._v("Division 2 Statistics")]),e("h1",[t._v(t._s(t.gamerData.name))])])])])])]),e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(1),e("div",{staticClass:"col-md-6 col-md-offset-1"},[t._m(2),e("div",{staticClass:"section-content"},[e("TeamSoloTable",{attrs:{gamerData:t.gamerData}})],1)])])])])])},I=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row-parallax-bg"},[e("div",{staticClass:"parallax-wrapper",staticStyle:{transform:"translate3d(0px, 0px, 0px)"}},[e("div",{staticClass:"parallax-bg",staticStyle:{"background-image":'url("images/div-2-gamer-detail-bg.jpeg")'}})]),e("div",{staticClass:"parallax-overlay"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"image-box"},[e("img",{attrs:{src:"images/div-2-stat-1.png",alt:""}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title"},[e("h6",[t._v("Fun Facts")])])}],U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",[t._v("Gear Score")]),e("td",[t._v(t._s(t.gamerData.gearscore))])]),e("tr",[e("td",[t._v("PVE Level")]),e("td",[t._v(t._s(t.gamerData.level_pve))])]),e("tr",[e("td",[t._v("DZ Level")]),e("td",[t._v(t._s(t.gamerData.level_dz))])]),e("tr",[e("td",[t._v("Specialization")]),e("td",[t._v(t._s(t.gamerData.specialization))])]),e("tr",[e("td",[t._v("E Credits")]),e("td",[t._v(t._s(t.gamerData.ecredits))])]),e("tr",[e("td",[t._v("Headshots")]),e("td",[t._v(t._s(t.gamerData.headshots))])]),e("tr",[e("td",[t._v("Looted")]),e("td",[t._v(t._s(t.gamerData.looted))])]),e("tr",[e("td",[t._v("Total Kills")]),e("td",[t._v(t._s(t.gamerData.kills_total))])]),e("tr",[e("td",[t._v("NPC Kills")]),e("td",[t._v(t._s(t.gamerData.kills_npc))])]),e("tr",[e("td",[t._v("PVP Kills")]),e("td",[t._v(t._s(t.gamerData.kills_pvp))])]),e("tr",[e("td",[t._v("Total Time Played")]),e("td",[t._v(t._s(t.gamerData.timeplayed_total))])]),e("tr",[e("td",[t._v("Time Played DZ")]),e("td",[t._v(t._s(t.gamerData.timeplayed_dz))])]),e("tr",[e("td",[t._v("Time Played PVE")]),e("td",[t._v(t._s(t.gamerData.timeplayed_pve))])]),e("tr",[e("td",[t._v("Time Played PVP")]),e("td",[t._v(t._s(t.gamerData.timeplayed_pvp))])]),e("tr",[e("td",[t._v("Time Played Rogue")]),e("td",[t._v(t._s(t.gamerData.timeplayed_rogue))])]),e("tr",[e("td",[t._v("Max. Time Rogue")]),e("td",[t._v(t._s(t.gamerData.maxtime_rogue))])]),e("tr",[e("td",[t._v("Kills (bleeding)")]),e("td",[t._v(t._s(t.gamerData.kills_bleeding))])]),e("tr",[e("td",[t._v("Kills (shocked)")]),e("td",[t._v(t._s(t.gamerData.kills_shocked))])]),e("tr",[e("td",[t._v("Kills (burning)")]),e("td",[t._v(t._s(t.gamerData.kills_burning))])]),e("tr",[e("td",[t._v("Kills (ensnare)")]),e("td",[t._v(t._s(t.gamerData.kills_ensnare))])]),e("tr",[e("td",[t._v("Kills (headshot)")]),e("td",[t._v(t._s(t.gamerData.kills_headshot))])]),e("tr",[e("td",[t._v("Kills (skill)")]),e("td",[t._v(t._s(t.gamerData.kills_skill))])]),e("tr",[e("td",[t._v("Kills (turret)")]),e("td",[t._v(t._s(t.gamerData.kills_turret))])]),e("tr",[e("td",[t._v("Kills (PVP Named Bosses)")]),e("td",[t._v(t._s(t.gamerData.kills_pvp_namedbosses))])]),e("tr",[e("td",[t._v("Kills (PVP Elite Bosses)")]),e("td",[t._v(t._s(t.gamerData.kills_pvp_elitebosses))])]),e("tr",[e("td",[t._v("Kills (PVP DZ Total)")]),e("td",[t._v(t._s(t.gamerData.kills_pvp_dz_total))])]),e("tr",[e("td",[t._v("Kills (PVP DZ Rogue)")]),e("td",[t._v(t._s(t.gamerData.kills_pvp_dz_rogue))])]),e("tr",[e("td",[t._v("Kills (PVE Hyenas)")]),e("td",[t._v(t._s(t.gamerData.kills_pve_hyenas))])]),e("tr",[e("td",[t._v("Kills (PVE Outcasts)")]),e("td",[t._v(t._s(t.gamerData.kills_pve_outcasts))])]),e("tr",[e("td",[t._v("Kills (PVE Black Tusk)")]),e("td",[t._v(t._s(t.gamerData.kills_pve_blacktusk))])]),e("tr",[e("td",[t._v("Kills (PVE True Sons)")]),e("td",[t._v(t._s(t.gamerData.kills_pve_truesons))])]),e("tr",[e("td",[t._v("Kills (PVE DZ Hyenas)")]),e("td",[t._v(t._s(t.gamerData.kills_pve_dz_hyenas))])]),e("tr",[e("td",[t._v("Kills (PVE DZ Outcasts)")]),e("td",[t._v(t._s(t.gamerData.kills_pve_dz_outcasts))])]),e("tr",[e("td",[t._v("Kills (PVE DZ Black Tusk)")]),e("td",[t._v(t._s(t.gamerData.kills_pve_dz_blacktusk))])]),e("tr",[e("td",[t._v("Kills (PVE DZ True Sons)")]),e("td",[t._v(t._s(t.gamerData.kills_pve_dz_truesons))])]),e("tr",[e("td",[t._v("Kills (pistol)")]),e("td",[t._v(t._s(t.gamerData.kills_wp_pistol))])]),e("tr",[e("td",[t._v("Kills (grenade)")]),e("td",[t._v(t._s(t.gamerData.kills_wp_grenade))])]),e("tr",[e("td",[t._v("Kills (SMG)")]),e("td",[t._v(t._s(t.gamerData.kills_wp_smg))])]),e("tr",[e("td",[t._v("Kills (shotgun)")]),e("td",[t._v(t._s(t.gamerData.kills_wp_shotgun))])]),e("tr",[e("td",[t._v("Kills (rifles)")]),e("td",[t._v(t._s(t.gamerData.kills_wp_rifles))])])])])},q=[],Q={name:"TeamSoloTable",props:{gamerData:Object},created:function(){console.log(this.gamerData)}},W=Q,X=Object(u["a"])(W,U,q,!1,null,null,null),Y=X.exports,tt={name:"GamerDetail",components:{TeamSoloTable:Y},data:function(){return{gamerData:{}}},created:function(){this.getGamerData(this.$route.params.pid)},methods:{getGamerData:function(t){var a=this;T.a.get("https://thedivisiontab.com/api/player.php?pid="+t).then(function(t){return a.gamerData=t.data})}}},at=tt,et=Object(u["a"])(at,A,I,!1,null,null,null),st=et.exports;s["default"].use(l.a),s["default"].use(r["a"]),s["default"].use(e("2ead")),s["default"].config.productionTip=!1;var rt=[{path:"/",name:"home",component:S},{path:"/team-stats",name:"testStats",component:J},{path:"/:pid",name:"gamerDetail",component:st}],it=new r["a"]({routes:rt});new s["default"]({router:it,render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,a,e){},"89bf":function(t,a,e){"use strict";var s=e("0662"),r=e.n(s);r.a},"8d5f":function(t,a,e){"use strict";var s=e("36ca"),r=e.n(s);r.a}});
//# sourceMappingURL=app.a1ea9a2a.js.map