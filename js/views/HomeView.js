import {PRODUCTS,CATS} from '../data/products.js';
import {ProductCard} from '../components/ProductCard.js';
const rail=(k,t,tag,link)=>`<section class="sec wrap"><div class="head"><div class="caps gold">${k}</div><h2>${t}</h2></div><div class="grid">${PRODUCTS.filter(p=>p.tag===tag).slice(0,4).map((p,i)=>ProductCard(p,i)).join('')}</div><p><a class="link" href="#${link}">View all</a></p></section>`;
export const HomeView=()=>`<section class="hero"><div class="t"><div class="caps gold">The Autumn Edit</div><h1>Fashion for Every Generation.<br>Style for Every Occasion.</h1><p class="mute" style="max-width:420px">Designer clothing for women, men and children, chosen to be worn together.</p><a class="btn" href="#women">Shop the collection</a></div><div class="ph"><span>Editorial hero photograph</span></div></section>
<section class="sec wrap"><div class="tiles">${CATS.map(c=>`<a class="zoom" href="#${c.toLowerCase()}"><div class="ph"><b>${c}</b></div></a>`).join('')}</div></section>
${rail('Just in','New arrivals','new','new')}${rail('Most loved','Best sellers','best','new')}
<section class="band"><div class="caps gold">Special offers</div><h2>Selected pieces, specially priced</h2><a class="btn" href="#offers">View offers</a></section>
<section class="sec wrap"><div class="head"><div class="caps gold">Kind words</div><h2>Our customers</h2></div><div class="three">${[1,2,3].map(()=>`<div class="q">[Customer testimonial]<br><span class="caps">[Customer name]</span></div>`).join('')}</div></section>`;
