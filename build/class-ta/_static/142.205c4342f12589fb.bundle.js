"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[142],{66142:(e,o,n)=>{n.r(o);var t=n(2568);class r extends t.Z{constructor(e){super(e)}}let c=new r;function s(e,o){var n=!1;let t=0,r=0,s="check:";for(let e of Object.keys(o.rh_result.answers))r+=1,1==o.rh_result.answers[e].score&&(t+=1),s+=`actual:${o.rh_result.answers[e].student_ans}:expected:${o.rh_result.answers[e].correct_value}:`;let w=t/r;s+=`correct:${t}:count:${r}:pct:${w}`,1==w&&(n=!0),c.logBookEvent({event:"webwork",div_id:o.ww_id,act:s,correct:n})}function w(e,o){c.logBookEvent({event:"webwork",div_id:o.ww_id,act:"show"})}void 0===window.component_factory&&(window.component_factory={}),window.component_factory.webwork=function(e){return new r},$((function(){$("body").on("runestone_ww_check",s),$("body").on("runestone_show_correct",w)}))}}]);
//# sourceMappingURL=142.205c4342f12589fb.bundle.js.map