!function(outputAmount){
	let inputAmount={};
	function inputValue(currencyConvert){
		if(inputAmount[currencyConvert])
			return inputAmount[currencyConvert].exports;
	let to=inputAmount[currencyConvert]={currencyInputs:currencyConvert,l:!1,exports:{}};
			return outputAmount[currencyConvert]
				.call(to.exports,to,to.exports,inputValue),to.l=!0,to.exports}inputValue.from=outputAmount,inputValue.to=inputAmount,
	inputValue.exchange=function(outputAmount,inputAmount,currencyConvert){
		inputValue.url(outputAmount,inputAmount)||Object.defineProperty(outputAmount,inputAmount,{enumerable:!0,get:currencyConvert})},
	inputValue.currencyConvert=function(outputAmount){
		"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(outputAmount,Symbol.toStringTag,{value:"Module"}),
		Object.defineProperty(outputAmount,"__esModule",{value:!0})},
	inputValue.inputAmount=function(outputAmount,inputAmount){
		if(1&inputAmount&&(outputAmount=inputValue(outputAmount)),8&inputAmount)
			return outputAmount;
		if(4&inputAmount&&"object"==typeof outputAmount&&outputAmount&&outputAmount.__esModule)
			return outputAmount;let currencyConvert=Object.create(null);
		if(inputValue.currencyConvert(currencyConvert),Object.defineProperty(currencyConvert,
			"default",{enumerable:!0,value:outputAmount}),2&inputAmount&&"string"!=typeof outputAmount)
			for(let to in outputAmount)inputValue.exchange(currencyConvert,to,
				function(inputAmount){return outputAmount[inputAmount]}.bind(null,to));
		return currencyConvert},
	inputValue.inputValue=function(outputAmount){
		let inputAmount=outputAmount&&outputAmount.__esModule?function(){return outputAmount.default}:function(){return outputAmount};
		return inputValue.exchange(inputAmount,"mainBody",inputAmount),inputAmount},
	inputValue.url=function(outputAmount,inputAmount){
		return Object.prototype.hasOwnProperty.call(outputAmount,inputAmount)},

	inputValue.unit="",inputValue(inputValue.rates=0)}

([function(outputAmount,inputAmount,inputValue){
	"use strict";
	inputValue.currencyConvert(inputAmount);

//Files to cache
	const currencyConvert="CURRENCY-CONVERTER-STATIC-V2",
		to=["index.html","main.js","main.css","favicon.png",
			"https://fonts.googleapis.com/css?family=Sofia",
			"https://free.currencyconverterapi.com/api/v5/currencies"];

	// Install 		
	self.addEventListener("install",function(outputAmount){
		!function(outputAmount){
			outputAmount.waitUntil(caches.open(currencyConvert)
				.then(outputAmount=>outputAmount
				.addAll(to)))}(outputAmount)}),

	// Activate
	self.addEventListener("activate",function(outputAmount){
		!function(outputAmount){
			outputAmount.waitUntill(caches.keys().then(outputAmount=>Promise.all(outputAmount.filter(outputAmount=>outputAmount
				.startsWith("CURRENCY-CONVERTER-STATIC")&&outputAmount!==currencyConvert).map(outputAmount=>caches
				.delete(outputAmount)))))}(outputAmount)}),

	//make offline
	self.addEventListener("fetch",function(outputAmount){
		const inputAmount=new URL(outputAmount.request.url),
			{pathname:inputValue}=inputAmount;"/"!==inputValue&&"index.html"!==inputValue?inputValue
				.includes("convert")?outputAmount.respondWith(caches.match(outputAmount.request)
				.then(inputAmount=>{const inputValue=outputAmount.request.clone(),to=fetch(inputValue)
				.then(inputAmount=>{if(!inputAmount||200!==inputAmount.status)
			return inputAmount;
		const inputValue=inputAmount.clone();
			return caches.open(currencyConvert)
			.then(inputAmount=>{inputAmount.put(outputAmount.request,inputValue)}),inputAmount}).catch(outputAmount=>url());
			return inputAmount||to})):outputAmount.respondWith(caches.match(outputAmount.request)
			.then(inputAmount=>inputAmount||fetch(outputAmount.request))):outputAmount.respondWith(caches.match("index.html"))});
		const url=()=>new Response("Error fetching updates",{status:422,"content-type":"application/json"})}]);