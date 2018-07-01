!function(inputAmount){
	let outputAmount={};
	function currencyConvert(inputValue){
		if(outputAmount[inputValue])return outputAmount[inputValue].exports;
		let rates=outputAmount[inputValue]={currencyInputs:inputValue,l:!1,exports:{}};
		return inputAmount[inputValue].call(rates.exports,rates,rates.exports,currencyConvert),rates.l=!0,rates.exports
	}
	currencyConvert.from=inputAmount, 
	currencyConvert.to=outputAmount, 
	currencyConvert.exchange=function(inputAmount,outputAmount,inputValue){
		currencyConvert.url(inputAmount,outputAmount)||Object.defineProperty(inputAmount,outputAmount,{enumerable:!0,get:inputValue})
	},
	currencyConvert.currencyConvert=function(inputAmount){
		"undefined"!=typeof 
		Symbol&&Symbol.toStringTag&&Object.defineProperty(
			inputAmount,Symbol.toStringTag,{value:"Module"}
			),
		Object.defineProperty(inputAmount,"__esModule",{value:!0})
	},
	currencyConvert.inputAmount=function(inputAmount,outputAmount){
		if(1&outputAmount&&(inputAmount=currencyConvert(inputAmount)),8&outputAmount)return inputAmount;
		if(4&outputAmount&&"object"==typeof inputAmount&&inputAmount&&inputAmount.__esModule)return inputAmount;
		let inputValue=Object.create(null);
		if(currencyConvert.currencyConvert(inputValue),Object.defineProperty(inputValue,"default",{enumerable:!0,value:inputAmount}),2&outputAmount&&"string"!=typeof inputAmount)
			for(let rates in inputAmount)currencyConvert.exchange(inputValue,rates,function(outputAmount){
				return inputAmount[outputAmount]}.bind(null,rates));
				return inputValue
	},
	currencyConvert.inputValue=function(inputAmount){
		let outputAmount=inputAmount&&inputAmount.__esModule?function(){
			return inputAmount.default}:function(){return inputAmount};
			return currencyConvert.exchange(outputAmount,"mainBody",outputAmount),outputAmount
	},
	currencyConvert.url=function(inputAmount,outputAmount){
		return Object.prototype.hasOwnProperty.call(inputAmount,outputAmount)
	},
	currencyConvert.unit="",currencyConvert(currencyConvert.rates=1)}


// checks
	({1:function(inputAmount,outputAmount,currencyConvert){
		"use strict";
		currencyConvert.currencyConvert(outputAmount);currencyConvert(6);
		let inputValue=class{
			constructor(inputAmount,outputAmount="input"){
				this.label=inputAmount,this._$root=null,this.type=outputAmount,this.hasError=!1,this.createInput(),this.createLabel(),this.createErrorField()}
			createLabel(){
				this.$label=document.createElement("label"),this.$label.textContent=this.label}
			createInput(){
				this.$input=document.createElement(this.type),this.$input.setAttribute("aria-label",this.label),
				this.$input.className="field-input"}
			createErrorField(){
				this.$error=document.createElement("div"),this.$error.className="field-error",this.$errorValue=document.createTextNode(""),
				this.$error.appendChild(this.$errorValue)}
			setError(inputAmount){
				this.$error.classList.add("has-error"),this.$errorValue.data=inputAmount,this.hasError=!0}
			clearError(){
				this.hasError&&(this.$error.classList.remove("has-error"),this.$errorValue.data="",this.hasError=!1)}
			getRoot(){
				return this._$root?this._$root:(this._$root=document.createElement("div"),this._$root.className="field-wrapper",
				this._$root.appendChild(this.$label),this._$root.appendChild(this.$input),this._$root.appendChild(this.$error),this._$root)}
			inputAttribute(inputAmount,outputAmount){
				return this.$input.setAttribute(inputAmount,outputAmount),this}
			value(){return this.$input.value}
		};
		class rates extends inputValue{
			constructor(inputAmount){
				super(inputAmount,"select"),this.$input.add(rates.createOption("--select--"))}
			static createOption(inputAmount,outputAmount=""){
				const currencyConvert=document.createElement("option");
				return currencyConvert.text=inputAmount,currencyConvert.value=outputAmount,currencyConvert}
		}
		let currencyInputs=rates;
		let url=class{
			constructor(inputAmount){this.baseUrl=inputAmount}
			get(inputAmount){return this.fetch(inputAmount)}
			fetch(inputAmount,outputAmount="get"){
				return inputAmount=this.baseUrl+inputAmount,
				new Promise((currencyConvert,inputValue)=>fetch(inputAmount,{method:outputAmount})
					.then(inputAmount=>inputAmount&&200===inputAmount.status?inputAmount.json()
					.then(inputAmount=>currencyConvert(inputAmount))
					.catch(inputAmount=>inputValue(inputAmount)):Promise.reject("Failed to fetch updates"))

					.catch(inputAmount=>inputValue(inputAmount)))}
		};
		let ConvertedOutput=class{
			constructor(){
				this.http=new url("https://free.currencyconverterapi.com/api/v5/")}
			getCurrencies(){
				return this.http.get("currencies")}convert(inputAmount,outputAmount){const currencyConvert=inputAmount+"_"+outputAmount;
				return new Promise((inputValue,rates)=>this.http.get(`convert?q=${currencyConvert}&compact=ultra`)
					.then(rates=>inputValue({from:inputAmount,to:outputAmount,rate:rates[currencyConvert]}))
					.catch(inputAmount=>rates(inputAmount)))}
		};

		//build the HTML
		let mainBody=class{
			constructor(inputAmount,outputAmount){
				this.$rootNode=inputAmount,this.app=outputAmount}
			render(){
				const inputAmount=document.createDocumentFragment("div"),outputAmount=document.createElement("div");
				outputAmount.className="row",this.app.iterateCurrencyInputs(inputAmount=>{outputAmount.appendChild(inputAmount.getRoot())}),inputAmount.appendChild(outputAmount);
				const currencyConvert=document.createElement("div");
				currencyConvert.className="conversion",currencyConvert.appendChild(this.app.amount.$input),currencyConvert.appendChild(this.app.$button),inputAmount.appendChild(currencyConvert);
				const inputValue=document.createElement("div");
				inputValue.appendChild(this.app.amount.$error),
				inputValue.className="amount-error",inputAmount.appendChild(inputValue),
				this.app.$result.className="result",inputAmount.appendChild(this.app.$result),
				this.$rootNode.appendChild(inputAmount)}
		};

		//responds
		const to=new class{
			constructor(){
				this.Converter=new ConvertedOutput,this.currencyInputs={},this.currencies={},
				this.setCurrencyInputs().setResult().setAmount().setButton(),this.updateCurrencies()}
			setCurrencyInputs(){
				return this.currencyInputs.fromCurrency=new currencyInputs("From"),this.currencyInputs.toCurrency=new currencyInputs("To"),this}
			setAmount(){
				return this.amount=new inputValue("Amount").inputAttribute("placeholder","Enter amount"),this}
			setResult(){
				return this.$result=document.createElement("div"),this.$resultValue=document.createTextNode("?"),
				this.$result.appendChild(this.$resultValue),this}
			setButton(){
				return this.$button=document.createElement("button"),this.$button.className="button",
				this.$button.appendChild(document.createTextNode("Convert")),this.$button.addEventListener("click",
				this.convert.bind(this)),this}
			hasMissingValue(){
				return Object.values(this.currencyInputs).filter(inputAmount=>this.validateRequired(inputAmount)).length||this.validateRequired(this.amount)}
			validateRequired(inputAmount){
				return inputAmount.value()?(inputAmount.clearError(),!1):(inputAmount.setError(`select ${inputAmount.label} field !`),!0)}
			amountIsInvalid(){
				const inputAmount=+this.amount.value();
				return inputAmount?(this.amount.clearError(),!1):(this.amount.setError(0===inputAmount?"input a number above 0":"input a number"),!0)}
			convert(inputAmount){
				if(inputAmount.preventDefault(),this.updateResult("?"),this.hasMissingValue()||this.amountIsInvalid()||this.currenciesAreTheSame())return;
				const{toCurrency:outputAmount,fromCurrency:currencyConvert}=this.currencyInputs;this.updateResult("...converting"),
				this.$button.setAttribute("disabled",!0),this.Converter.convert(currencyConvert.value(),outputAmount.value())
				.then(({rate:inputAmount,to:outputAmount})=>{const currencyConvert=this.amount.value(),inputValue=Number(inputAmount*currencyConvert).toLocaleString();
				this.updateResult(`${this.currencySymbol(outputAmount)} ${inputValue}`)})
				.catch(inputAmount=>this.updateResult(inputAmount)).finally(inputAmount=>this.$button.removeAttribute("disabled",!1))}
			currencySymbol(inputAmount){
				const outputAmount=this.currencies[inputAmount];
				return outputAmount?outputAmount.currencySymbol||outputAmount.name:inputAmount}
			currenciesAreTheSame(){
				const{toCurrency:inputAmount,fromCurrency:outputAmount}=this.currencyInputs;
				return inputAmount.value()===outputAmount.value()&&(this.amount.setError("Rate is the same lol"),!0)}
			updateResult(inputAmount){
				this.$resultValue.data=inputAmount}
			updateCurrencies(){
				this.Converter.getCurrencies().then(this.updateSelectOptions.bind(this))}
			updateSelectOptions({results:inputAmount}){this.currencies=inputAmount;const outputAmount=document.createDocumentFragment("div");
				Object.values(inputAmount).forEach(({id:inputAmount,currencyName:currencyConvert,currencySymbol:inputValue})=>{outputAmount.appendChild(currencyInputs.createOption(`${currencyConvert} (${inputValue})`,inputAmount))}),
				this.iterateCurrencyInputs(inputAmount=>inputAmount.$input.appendChild(outputAmount.cloneNode(!0)))}
			iterateCurrencyInputs(inputAmount){
				Object.values(this.currencyInputs).forEach(outputAmount=>{inputAmount(outputAmount)})}
		};
		
		//add Service Worker
				new mainBody(document.getElementById("app"),to)
				.render(),navigator.serviceWorker&&navigator.serviceWorker
				.register("sW.js")
				.then(inputAmount=>console.log("Yay! Service worker Registered"))
				.catch(inputAmount=>console.log("ugh! Service worker failed to register"))
			},
			6:function(inputAmount,outputAmount){}
	});