"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[382],{82382:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var s,n=i(2568);void 0===s&&(s={});class a extends n.Z{constructor(e){if(super(e),e){var t=e.orig;this.useRunestoneServices=e.useRunestoneServices||eBookConfig.useRunestoneServices,this.origElem=t,this.divid=t.id,this.question=this.origElem.innerHTML,this.optional=!1,$(this.origElem).is("[data-optional]")&&(this.optional=!0),$(this.origElem).is("[data-mathjax]")&&(this.mathjax=!0),this.renderHTML(),this.caption="shortanswer",this.addCaption("runestone"),this.checkServer("shortanswer",!0)}}renderHTML(){this.containerDiv=document.createElement("div"),this.containerDiv.id=this.divid,$(this.containerDiv).addClass(this.origElem.getAttribute("class")),this.newForm=document.createElement("form"),this.newForm.id=this.divid+"_journal",this.newForm.name=this.newForm.id,this.newForm.action="",this.containerDiv.appendChild(this.newForm),this.fieldSet=document.createElement("fieldset"),this.newForm.appendChild(this.fieldSet),this.legend=document.createElement("legend"),this.legend.innerHTML="Short Answer",this.fieldSet.appendChild(this.legend),this.firstLegendDiv=document.createElement("div"),this.firstLegendDiv.innerHTML=this.question,$(this.firstLegendDiv).addClass("journal-question"),this.fieldSet.appendChild(this.firstLegendDiv),this.jInputDiv=document.createElement("div"),this.jInputDiv.id=this.divid+"_journal_input",this.fieldSet.appendChild(this.jInputDiv),this.jOptionsDiv=document.createElement("div"),$(this.jOptionsDiv).addClass("journal-options"),this.jInputDiv.appendChild(this.jOptionsDiv),this.jLabel=document.createElement("label"),$(this.jLabel).addClass("radio-inline"),this.jOptionsDiv.appendChild(this.jLabel),this.jTextArea=document.createElement("textarea");let e=this;this.jTextArea.onchange=function(){e.isAnswered=!0},this.jTextArea.id=this.divid+"_solution",$(this.jTextArea).attr("aria-label","textarea"),$(this.jTextArea).css("display:inline, width:530px"),$(this.jTextArea).addClass("form-control"),this.jTextArea.rows=4,this.jTextArea.cols=50,this.jLabel.appendChild(this.jTextArea),this.jTextArea.onchange=function(){this.feedbackDiv.innerHTML="Your answer has not been saved yet!",$(this.feedbackDiv).removeClass("alert-success"),$(this.feedbackDiv).addClass("alert alert-danger")}.bind(this),this.fieldSet.appendChild(document.createElement("br")),this.mathjax&&(this.renderedAnswer=document.createElement("div"),$(this.renderedAnswer).addClass("latexoutput"),this.fieldSet.appendChild(this.renderedAnswer)),this.buttonDiv=document.createElement("div"),this.fieldSet.appendChild(this.buttonDiv),this.submitButton=document.createElement("button"),$(this.submitButton).addClass("btn btn-success"),this.submitButton.type="button",this.submitButton.textContent="Save",this.submitButton.onclick=function(){this.checkCurrentAnswer(),this.logCurrentAnswer(),this.renderFeedback()}.bind(this),this.buttonDiv.appendChild(this.submitButton),this.randomSpan=document.createElement("span"),this.randomSpan.innerHTML="Instructor's Feedback",this.fieldSet.appendChild(this.randomSpan),this.otherOptionsDiv=document.createElement("div"),$(this.otherOptionsDiv).css("padding-left:20px"),$(this.otherOptionsDiv).addClass("journal-options"),this.fieldSet.appendChild(this.otherOptionsDiv),this.feedbackDiv=document.createElement("div"),$(this.feedbackDiv).css("width:530px, font-style:italic"),this.feedbackDiv.id=this.divid+"_feedback",this.feedbackDiv.innerHTML="You have not answered this question yet.",$(this.feedbackDiv).addClass("alert alert-danger"),this.fieldSet.appendChild(this.feedbackDiv),$(this.origElem).replaceWith(this.containerDiv),"undefined"!=typeof MathJax&&this.queueMathJax(this.containerDiv)}renderMath(e){this.mathjax&&(e=(e=e.replace(/\$\$(.*?)\$\$/g,"\\[ $1 \\]")).replace(/\$(.*?)\$/g,"\\( $1 \\)"),$(this.renderedAnswer).text(e),this.queueMathJax(this.renderedAnswer))}checkCurrentAnswer(){}async logCurrentAnswer(e){let t=$(document.getElementById(this.divid+"_solution")).val();this.renderMath(t),this.setLocalStorage({answer:t,timestamp:new Date});let i={event:"shortanswer",act:t,answer:t,div_id:this.divid};void 0!==e&&(i.sid=e),await this.logBookEvent(i)}renderFeedback(){this.feedbackDiv.innerHTML="Your answer has been saved.",$(this.feedbackDiv).removeClass("alert-danger"),$(this.feedbackDiv).addClass("alert alert-success")}setLocalStorage(e){if(!this.graderactive){let t=this.localStorageKey();localStorage.setItem(t,JSON.stringify(e))}}checkLocalStorage(){var e="";if(!this.graderactive&&localStorage.length>0){var t=localStorage.getItem(this.localStorageKey());if(null!==t){try{e=JSON.parse(t).answer}catch(e){return console.log(e.message),void localStorage.removeItem(this.localStorageKey())}$("#"+this.divid+"_solution").text(e),this.renderMath(e),this.feedbackDiv.innerHTML="Your current saved answer is shown above.",$(this.feedbackDiv).removeClass("alert-danger"),$(this.feedbackDiv).addClass("alert alert-success")}}}restoreAnswers(e){e.answer||(e.answer=""),this.answer=e.answer,this.jTextArea.value=this.answer,this.renderMath(this.answer);let t=document.createElement("p");this.jInputDiv.appendChild(t);var i;if(i=e.timestamp?new Date(e.timestamp).toLocaleString():"",$(t).text(i),e.last_answer){this.current_answer="ontime";let s=document.createElement("button");s.type="button",$(s).text("Show Late Answer"),$(s).addClass("btn btn-warning"),$(s).css("margin-left","5px"),$(s).click(function(){var n,a;"ontime"===this.current_answer?(this.jTextArea.value=e.last_answer,this.answer=e.last_answer,n=new Date(e.last_timestamp).toLocaleString(),a="Show on-Time Answer",this.current_answer="late"):(this.jTextArea.value=e.answer,this.answer=e.answer,n=i,a="Show Late Answer",this.current_answer="ontime"),this.renderMath(this.answer),$(t).text(`Submitted: ${n}`),$(s).text(a)}.bind(this)),this.buttonDiv.appendChild(s)}let s="Your current saved answer is shown above.";void 0!==e.score&&(s=`Score: ${e.score}`),e.comment&&(s+=` -- ${e.comment}`),this.feedbackDiv.innerHTML=s,$(this.feedbackDiv).removeClass("alert-danger"),$(this.feedbackDiv).addClass("alert alert-success")}disableInteraction(){this.jTextArea.disabled=!0}}$(document).on("runestone:login-complete",(function(){$("[data-component=shortanswer]").each((function(){if(0==$(this).closest("[data-component=timedAssessment]").length)try{s[this.id]=new a({orig:this,useRunestoneServices:eBookConfig.useRunestoneServices})}catch(e){console.log(`Error rendering ShortAnswer Problem ${this.id}\n                Details: ${e}`)}}))}));class r extends a{constructor(e){super(e),this.renderTimedIcon(this.containerDiv),this.hideButtons()}hideButtons(){$(this.submitButton).hide()}renderTimedIcon(e){var t=document.createElement("div"),i=document.createElement("img");$(i).attr({src:"../_static/clock.png",style:"width:15px;height:15px"}),t.className="timeTip",t.title="",t.appendChild(i),$(e).prepend(t)}checkCorrectTimed(){return"I"}hideFeedback(){$(this.feedbackDiv).hide()}}void 0===window.component_factory&&(window.component_factory={}),window.component_factory.shortanswer=function(e){return e.timed?new r(e):new a(e)}}}]);
//# sourceMappingURL=382.a84c675f498bed3f.bundle.js.map