import {money} from './helpers.js';
import {byId} from '../state/cartState.js';
export const WA_NUMBER='254700000000'; /* business WhatsApp: country code, no + */
export const orderUrl=(items,name,loc)=>{
const total=items.reduce((a,i)=>a+i.qty*byId(i.id).price,0);
const lines=items.map(i=>{const p=byId(i.id);return `${i.qty} x ${p.name} | Size ${i.size} | ${p.colors[i.col][0]} | ${money(p.price*i.qty)}`});
const text=`WAKARORO COLLECTION order\nName: ${name}\n\n${lines.join('\n')}\n\nTotal: ${money(total)}\nDelivery location: ${loc}`;
return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`};
