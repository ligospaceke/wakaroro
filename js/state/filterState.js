export const filters={q:'',tag:'all',size:'all',sort:'new',
set(o){Object.assign(this,o)},
reset(){this.q='';this.tag='all';this.size='all';this.sort='new'},
apply(list){let r=list.filter(p=>(this.tag==='all'||p.tag===this.tag||(this.tag==='offer'&&p.was))&&(this.size==='all'||p.sizes.includes(this.size))&&(p.name+' '+p.desc).toLowerCase().includes(this.q.toLowerCase()));
if(this.sort==='lo')r=[...r].sort((a,b)=>a.price-b.price);if(this.sort==='hi')r=[...r].sort((a,b)=>b.price-a.price);return r}};
