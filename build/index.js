"use strict";var g=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var J=(e,t)=>{for(var s in t)g(e,s,{get:t[s],enumerable:!0})},I=(e,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of b(t))!f.call(e,i)&&i!==s&&g(e,i,{get:()=>t[i],enumerable:!(r=_(t,i))||r.enumerable});return e};var N=e=>I(g({},"__esModule",{value:!0}),e);var w={};J(w,{JSClass:()=>l,JSObject:()=>o,JSSystemGetAllClasses:()=>p,JSSystemGetClasses:()=>h,Random_Serial_BigInt:()=>n,Throwable:()=>c});module.exports=N(w);var m=require("../node_modules/big-integer/BigInteger.js"),S=class{#t=[];constructor(){}addClass(t,s){for(let i=0;i<this.#t.length;i++){let u=this.#t[i];if(u.getName()===t&&u.getSerialBigInt()===s)return this.#t[i]}let r=new l({className:t,serial:s});return this.#t.push(r),r}getClasses(t){let s=[];if(this.#t.forEach(r=>{t===r.getName()&&s.push(r)}),s.length>0)return s;throw new Error("Class Not Found")}getAllClasses(){return this.#t}};function n(e){let t=e?.min||"-1e100",s=e?.max||"1e100";return BigInt((0,m.randBetween)(t.toString(),s.toString()).toString())}var a=new S,h=a.getClasses,p=a.getAllClasses;var C,B=n();function x(){return C}var l=class{#t=this.constructor.name;#s=x;#e="";#i;constructor({className:t,serial:s}){this.#i=s,this.#e=t}getClass(){return this.#s()}getName(){return this.#e}getSerialBigInt(){return this.#i}isEquals(t){return this.getName()===t.getName()&&this.getSerialBigInt()===t.getSerialBigInt()}};C=a.addClass("JSClass",B);var d=n(),o=class{#t=this.constructor.name;#s;#e;#i=n();constructor(t=d){this.#s=t??d,this.#e=a.addClass(this.#t,this.#s)}getClass(){return this.#e}toString(){return`class ${this.getClass().getName()}`}hashCode(){return this.#i}isEquals(t){return this===t}};var c=class extends o{#t=new Error;#s=null;Throwable(t=void 0){this.fillInStackTrace(),t!==void 0&&(this.#s=t)}getMessage(){return this.#s}toString(){let t=this.getClass().getName(),s=this.getMessage();return s!==null?`${t}: ${s}`:t}printStackTrace(t=void 0){if(t===void 0){console.log(this.toString()),this.printStackTrace0(process.stdout);return}t.write(`${this.toString()}`),this.printStackTrace0(t)}printStackTrace0(t){}fillInStackTrace(){this.#t=new Error(this.#t.stack)}};0&&(module.exports={JSClass,JSObject,JSSystemGetAllClasses,JSSystemGetClasses,Random_Serial_BigInt,Throwable});
