export const CATS=['Women','Men','Kids','Accessories'];
const K=(n,h)=>[n,h];
/* SAMPLE catalogue: replace with real stock, prices and photographs (imgs: ['url', ...]) */
export const PRODUCTS=[
['Silk Wrap Dress','Women',18500,0,['XS','S','M','L'],[K('Champagne','#F7E7CE'),K('Charcoal','#222222')],6,'Fluid silk with a softly wrapped waist.','new'],
['Evening Gown','Women',32000,38000,['S','M','L'],[K('Gold','#D4AF37'),K('Ivory','#FFFFF0')],3,'Floor-length, made for the grand occasion.','offer'],
['Linen Blouse','Women',7800,0,['XS','S','M','L','XL'],[K('Ivory','#FFFFF0'),K('Champagne','#F7E7CE')],12,'Light linen with a relaxed collar.','best'],
['Wool Overcoat','Women',26000,0,['S','M','L'],[K('Charcoal','#222222')],4,'Structured wool, cut long.','new'],
['Oxford Shirt','Men',6500,0,['S','M','L','XL'],[K('Ivory','#FFFFF0'),K('Charcoal','#222222')],15,'Crisp cotton with a tailored fit.','best'],
['Tailored Suit','Men',42000,48000,['46','48','50','52'],[K('Charcoal','#222222')],5,'Two-piece suit, half-canvassed.','offer'],
['Merino Polo','Men',5400,0,['S','M','L','XL'],[K('Cream','#FDFBF7'),K('Charcoal','#222222')],9,'Fine merino knit, quiet and refined.','new'],
['Boys’ Blazer','Kids',8900,0,['4','6','8','10'],[K('Charcoal','#222222')],7,'Formal blazer for special days.','best'],
['Girls’ Occasion Dress','Kids',9800,0,['4','6','8','10'],[K('Champagne','#F7E7CE')],6,'Soft tulle skirt, lined bodice.','new'],
['Gold-Tone Watch','Accessories',15500,0,['One size'],[K('Gold','#D4AF37')],8,'Slim case with a leather strap.','best'],
['Leather Handbag','Accessories',21000,26000,['One size'],[K('Charcoal','#222222'),K('Cream','#FDFBF7')],4,'Structured, hand-finished leather.','offer'],
['Classic Sunglasses','Accessories',6200,0,['One size'],[K('Charcoal','#222222')],0,'Timeless frame with UV protection.','new']
].map((a,i)=>({id:String(i+1),name:a[0],cat:a[1],price:a[2],was:a[3],sizes:a[4],colors:a[5],stock:a[6],desc:a[7],tag:a[8],imgs:[]}));
