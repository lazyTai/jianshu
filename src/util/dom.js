export   const find=function(str){
	return document.querySelector(str)
}
export const  getSize=function(dom){
	return {w:dom.clientWidth,y:dom.clientHeight}
}