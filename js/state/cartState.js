import {store,persist} from '../utils/helpers.js';
import {PRODUCTS} from '../data/products.js';
const subs=new Set();let items=store('wk_cart',[]);
const emit=()=>{persist('wk_cart',items);subs.forEach(f=>f())};
export const byId=id=>PRODUCTS.find(p=>p.id===id);
export const cart={
subscribe:f=>subs.add(f),
get items(){return items},
add(id,size,col){const f=items.find(i=>i.id===id&&i.size===size&&i.col===col);f?f.qty++:items.push({id,size,col,qty:1});emit()},
step(k,d){items[k].qty+=d;if(items[k].qty<1)items.splice(k,1);emit()},
remove(k){items.splice(k,1);emit()},
count:()=>items.reduce((a,i)=>a+i.qty,0),
total:()=>items.reduce((a,i)=>a+i.qty*(byId(i.id)?byId(i.id).price:0),0)};
