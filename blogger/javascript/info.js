/*! Info v1.6.6 | (c) Meraz Alvee's Organization and other contributors | cdn.merazalvee.com/license */
document.addEventListener(&quot;DOMContentLoaded&quot;, function() { const icons = { software: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z'/><path d='M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z'/><path d='M8.01001 4V2'/><path d='M12 4V2'/><path d='M16 4V2'/><path d='M20 8H22'/><path d='M20 12H22'/><path d='M20 16H22'/><path d='M16 20V22'/><path d='M12.01 20V22'/><path d='M8.01001 20V22'/><path d='M2 8H4'/><path d='M2 12H4'/><path d='M2 16H4'/></svg>`, resolution: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M21.6799 16.9599L18.5499 9.64988C17.4899 7.16988 15.5399 7.06988 14.2299 9.42988L12.3399 12.8399C11.3799 14.5699 9.58993 14.7199 8.34993 13.1699L8.12993 12.8899C6.83993 11.2699 5.01993 11.4699 4.08993 13.3199L2.36993 16.7699C1.15993 19.1699 2.90993 21.9999 5.58993 21.9999H18.3499C20.9499 21.9999 22.6999 19.3499 21.6799 16.9599Z'/><path d='M6.96997 8C8.62682 8 9.96997 6.65685 9.96997 5C9.96997 3.34315 8.62682 2 6.96997 2C5.31312 2 3.96997 3.34315 3.96997 5C3.96997 6.65685 5.31312 8 6.96997 8Z'/></svg>`, price: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z' stroke-miterlimit='10'/><path d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z' stroke-miterlimit='10'/><path d='M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10' stroke-miterlimit='10'/><path d='M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10' stroke-miterlimit='10'/><path d='M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14' stroke-miterlimit='10'/><path d='M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14' stroke-miterlimit='10'/></svg>`,  size: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z'/><path d='M7.98998 21.97L7.97998 19C7.97998 17.89 8.86998 17 9.97998 17H13.99C15.09 17 15.98 17.89 15.99 18.99L16.02 21.98'/><path d='M8.93994 4.95006L8.98994 2.06006'/><path d='M11.9399 4.95006L11.9899 2.06006'/><path d='M14.9399 4.92004L14.9899 2.04004'/></svg>`, contributor: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'/><path d='M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22'/></svg>`, sponsored: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z'/><path d='M10.11 13.6501L13.69 10.0601'/></svg>`, category: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M21.6601 10.44L20.6801 14.62C19.8401 18.23 18.1801 19.69 15.0601 19.39C14.5601 19.35 14.0201 19.26 13.4401 19.12L11.7601 18.72C7.59006 17.73 6.30006 15.67 7.28006 11.49L8.26006 7.30001C8.46006 6.45001 8.70006 5.71001 9.00006 5.10001C10.1701 2.68001 12.1601 2.03001 15.5001 2.82001L17.1701 3.21001C21.3601 4.19001 22.6401 6.26001 21.6601 10.44Z'/><path d='M15.06 19.39C14.44 19.81 13.66 20.16 12.71 20.47L11.13 20.99C7.15998 22.27 5.06997 21.2 3.77997 17.23L2.49997 13.28C1.21997 9.30998 2.27997 7.20998 6.24997 5.92998L7.82997 5.40998C8.23997 5.27998 8.62997 5.16998 8.99997 5.09998C8.69997 5.70998 8.45997 6.44998 8.25997 7.29998L7.27997 11.49C6.29997 15.67 7.58998 17.73 11.76 18.72L13.44 19.12C14.02 19.26 14.56 19.35 15.06 19.39Z'/><path d='M12.64 8.53003L17.49 9.76003'/><path d='M11.66 12.4L14.56 13.14'/></svg>`, views: `<svg class='line' style='stroke-width:1;stroke:var(--linkC);stroke-linecap:round;stroke-linejoin:round' viewBox='0 0 24 24'><path d='M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z'/><path d='M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z'/></svg>`, download: `<svg class='line' style='stroke-width:1;stroke:var(--linkC);stroke-linecap:round;stroke-linejoin:round' viewBox='0 0 24 24'><polyline points='8 17 12 21 16 17'/><line x1='12' x2='12' y1='12' y2='21'/><path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29'/></svg>`, format: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z'/><path d='M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z'/><path d='M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z'/><path d='M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z'/><path d='M6 12H18'/><path d='M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18'/></svg>`, date: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M8 2V5' stroke-miterlimit='10'/><path d='M16 2V5' stroke-miterlimit='10'/><path d='M3.5 9.08997H20.5' stroke-miterlimit='10'/><path d='M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z' stroke-miterlimit='10'/><path d='M15.6947 13.7H15.7037'/><path d='M15.6947 16.7H15.7037'/><path d='M11.9955 13.7H12.0045'/><path d='M11.9955 16.7H12.0045'/><path d='M8.29431 13.7H8.30329'/><path d='M8.29431 16.7H8.30329'/></svg>`, license: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M16.7 18.98H7.30002C6.88002 18.98 6.41002 18.65 6.27002 18.25L2.13002 6.66999C1.54002 5.00999 2.23002 4.49999 3.65002 5.51999L7.55002 8.30999C8.20002 8.75999 8.94002 8.52999 9.22002 7.79999L10.98 3.10999C11.54 1.60999 12.47 1.60999 13.03 3.10999L14.79 7.79999C15.07 8.52999 15.81 8.75999 16.45 8.30999L20.11 5.69999C21.67 4.57999 22.42 5.14999 21.78 6.95999L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z'/><path d='M6.5 22H17.5'/><path d='M9.5 14H14.5'/></svg>`, vector: `<svg class='line' style='stroke-width:1;stroke:var(--linkC)' viewBox='0 0 24 24'><path d='M2 9V6.5C2 4.01 4.01 2 6.5 2H9'/><path d='M15 2H17.5C19.99 2 22 4.01 22 6.5V9'/><path d='M22 16V17.5C22 19.99 19.99 22 17.5 22H16'/><path d='M9 22H6.5C4.01 22 2 19.99 2 17.5V15'/><path d='M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z'/><path d='M18.5 7V9C18.5 10 18 10.5 17 10.5H15C14 10.5 13.5 10 13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7Z'/><path d='M10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17V15C5.5 14 6 13.5 7 13.5H9C10 13.5 10.5 14 10.5 15Z'/><path d='M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z'/></svg>` }; document.querySelectorAll(&quot;icon&quot;).forEach(function(iconElement) { const iconName = iconElement.getAttribute(&quot;name&quot;); if (icons[iconName]) { iconElement.innerHTML = icons[iconName]; } }); });
function _0x5257(_0xd3087f,_0x2484d6){const _0x2783d2=_0x2783();return _0x5257=function(_0x525753,_0x1a0797){_0x525753=_0x525753-0x1b2;let _0x295188=_0x2783d2[_0x525753];return _0x295188;},_0x5257(_0xd3087f,_0x2484d6);}const _0x4a343d=_0x5257;(function(_0x9c4b7,_0x2a9c72){const _0x169a34=_0x5257,_0xb7628f=_0x9c4b7();while(!![]){try{const _0x2321e1=-parseInt(_0x169a34(0x1cc))/0x1+-parseInt(_0x169a34(0x1b8))/0x2*(parseInt(_0x169a34(0x1c4))/0x3)+-parseInt(_0x169a34(0x1bb))/0x4+parseInt(_0x169a34(0x1ca))/0x5*(parseInt(_0x169a34(0x1b4))/0x6)+parseInt(_0x169a34(0x1b3))/0x7*(parseInt(_0x169a34(0x1b9))/0x8)+-parseInt(_0x169a34(0x1b2))/0x9+parseInt(_0x169a34(0x1c0))/0xa;if(_0x2321e1===_0x2a9c72)break;else _0xb7628f['push'](_0xb7628f['shift']());}catch(_0x3a4dcf){_0xb7628f['push'](_0xb7628f['shift']());}}}(_0x2783,0x8f233));function _0x2783(){const _0x4d4dca=['category','2331192vlKyhq','detail','add','detail-text','div','771900mCTdhp','icon','setAttribute','icon-box','87lbHQLl','forEach','name','span','info-container','innerHTML','5502835ikBNgE','textContent','15762mYHSrM','getElementById','626463FgYdIt','518nWLMnb','6eAlmBI','classList','createElement','appendChild','42402ZSvEQL','74760CCVLmb'];_0x2783=function(){return _0x4d4dca;};return _0x2783();}const container=document[_0x4a343d(0x1cd)](_0x4a343d(0x1c8));details[_0x4a343d(0x1c5)](_0x55b335=>{const _0xaf3fa3=_0x4a343d,_0x12b510=document['createElement'](_0xaf3fa3(0x1bf));_0x12b510[_0xaf3fa3(0x1b5)][_0xaf3fa3(0x1bd)](_0xaf3fa3(0x1bc));const _0x1c9a65=document['createElement'](_0xaf3fa3(0x1bf));_0x1c9a65[_0xaf3fa3(0x1b5)][_0xaf3fa3(0x1bd)](_0xaf3fa3(0x1c3));const _0x4fe69f=document[_0xaf3fa3(0x1b6)](_0xaf3fa3(0x1c1));_0x4fe69f[_0xaf3fa3(0x1c2)](_0xaf3fa3(0x1c6),_0x55b335[_0xaf3fa3(0x1c1)]),_0x1c9a65['appendChild'](_0x4fe69f);const _0x2a8df1=document[_0xaf3fa3(0x1b6)](_0xaf3fa3(0x1bf));_0x2a8df1[_0xaf3fa3(0x1b5)][_0xaf3fa3(0x1bd)](_0xaf3fa3(0x1be));const _0x45da22=document[_0xaf3fa3(0x1b6)](_0xaf3fa3(0x1c7));_0x45da22[_0xaf3fa3(0x1b5)][_0xaf3fa3(0x1bd)](_0xaf3fa3(0x1ba)),_0x45da22[_0xaf3fa3(0x1cb)]=_0x55b335[_0xaf3fa3(0x1ba)];const _0x3d0d77=document['createElement']('span');_0x3d0d77[_0xaf3fa3(0x1b5)][_0xaf3fa3(0x1bd)]('value'),_0x3d0d77[_0xaf3fa3(0x1c9)]=_0x55b335['value'],_0x2a8df1[_0xaf3fa3(0x1b7)](_0x45da22),_0x2a8df1['appendChild'](_0x3d0d77),_0x12b510[_0xaf3fa3(0x1b7)](_0x1c9a65),_0x12b510[_0xaf3fa3(0x1b7)](_0x2a8df1),container['appendChild'](_0x12b510);});
