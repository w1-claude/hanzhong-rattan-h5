const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
const craft=[
 {img:'藤编制作工艺流程.jpg',text:'观察藤条的韧性与纹理，选择适合当季的材料。'},
 {img:'藤编工艺制作过程.jpg',text:'去皮、浸润、晾晒，让材料在手中恢复柔韧。'},
 {img:'藤编艺人制作场景.jpg',text:'先起骨架，再定形状，结构决定作品的耐用与舒适。'},
 {img:'藤编工艺制作过程.jpg',text:'一压一挑，一经一纬，手感决定每一处松紧。'},
 {img:'藤编制作工艺流程.jpg',text:'把多余的藤条藏进结构里，让边缘平整、耐看、耐用。'},
 {img:'藤编非遗墙.jpg',text:'从一束藤到一件作品，材料、手艺和生活在此完成连接。'}
];
const correctedProducts=[
 {old:'藤编座椅1.jpg',img:'家具4.jpg',alt:'藤编椅',caption:'藤编椅 · 传统编法与现代使用',category:'furniture',tag:'家具',title:'坐进一把藤椅'},
 {old:'藤编背包.jpg',img:'藤编生活用品6.jpg',alt:'藤编提篮',caption:'藤编提篮 · 轻量化生活器物',category:'home',tag:'家居',title:'提起一篮日常'},
 {old:'藤编装饰灯.jpg',img:'家具1.jpg',alt:'藤编吊灯',caption:'藤编吊灯 · 手工肌理与温柔光影',category:'light',tag:'装饰',title:'一盏会呼吸的灯'},
 {old:'藤编收纳盒.jpg',img:'藤编生活用品2.jpg',alt:'藤编收纳篮',caption:'藤编收纳篮 · 日常收纳提案',category:'home',tag:'家居',title:'把杂乱收好'},
 {old:'藤编提篮.jpg',img:'娱乐装饰5.jpg',alt:'藤编手作夜灯',caption:'藤编手作夜灯 · 轻量化文创提案',category:'light',tag:'装饰',title:'点亮一盏手作夜灯'}
];
correctedProducts.forEach(item=>{const card=$(`[data-image="${item.old}"]`);if(!card)return;card.dataset.image=item.img;card.dataset.caption=item.caption;card.dataset.category=item.category;card.querySelector('img').src=item.img;card.querySelector('img').alt=item.alt;card.querySelector('span').textContent=item.tag;card.querySelector('b').textContent=item.title});
const personDialogue=$('.person-block .media-large');personDialogue.dataset.caption='与基地负责人对话';personDialogue.querySelector('img').alt='与基地负责人对话';personDialogue.querySelector('span').textContent='与基地负责人对话';
const artisanPhoto=$('.artisan-record .interview-photo .image-trigger');artisanPhoto.dataset.image='与编织匠人交谈.jpg';artisanPhoto.dataset.caption='走进生产车间，与一线编织匠人交谈';artisanPhoto.querySelector('img').src='与编织匠人交谈.jpg';artisanPhoto.querySelector('img').alt='走进生产车间，与一线编织匠人交谈';
$('.field-block h3').textContent='深入现场，看见藤编的真实生态';
$('.field-block .showcase-copy>p:not(.eyebrow)').textContent='从基地交流到车间走访，从传播讨论到团队考察。每一次对话，都让项目更贴近藤编传承的真实现场。';
const fieldImages=[
 {img:'新媒体新传播交流.jpg',alt:'新媒体新传播交流',caption:'新媒体新传播交流'},
 {img:'合影 (3).jpg',alt:'藤编羌绣非遗考察团合影',caption:'藤编、羌绣非遗考察团合影'},
 {img:'采访藤编制作人.jpg',alt:'走进车间与一线匠人交流',caption:'走进车间，与一线匠人交流'},
 {img:'合照.jpg',alt:'藤编羌绣非遗考察团合照',caption:'藤编·羌绣非遗考察团合照'}
];
$$('.field-grid .image-trigger').forEach((button,index)=>{const item=fieldImages[index];button.dataset.image=item.img;button.dataset.caption=item.caption;button.querySelector('img').src=item.img;button.querySelector('img').alt=item.alt});
const productCards=$$('.product-grid .product-card');const furnitureCard=productCards[5];furnitureCard.dataset.image='家具5.jpg';furnitureCard.dataset.caption='藤编柜 · 家居空间提案';furnitureCard.querySelector('img').src='家具5.jpg';furnitureCard.querySelector('img').alt='藤编柜';furnitureCard.querySelector('b').textContent='让藤编成为家居风景';
const evidenceItems=[
 {img:'调研考察证明.jpg',alt:'调研考察证明',caption:'汉中藤编、羌绣非遗工坊实地调研考察证明',label:'调研证明'},
 {img:'职业证明.jpg',alt:'基地职业资质材料',caption:'南郑县良顺藤编发展有限公司职业资质材料',label:'资质材料'},
 {img:'藤编证书展示厅.jpg',alt:'良顺藤编成果展示厅',caption:'良顺藤编成果展示厅与非遗展示空间',label:'展示基地'},
 {img:'合影 (3).jpg',alt:'藤编羌绣非遗考察团合影',caption:'藤编、羌绣非遗考察团合影',label:'考察合影'}
];
$$('#resultEvidence .evidence-card').forEach((card,index)=>{const item=evidenceItems[index];card.dataset.image=item.img;card.dataset.caption=item.caption;card.querySelector('img').src=item.img;card.querySelector('img').alt=item.alt;card.querySelector('span').textContent=item.label});
$('.hero-actions').insertAdjacentHTML('beforeend','<button class="button button-ghost video-trigger" type="button" data-video="一根青藤的逆袭.mp4">完整观看影片 <span>▶</span></button>');
const coCreateSlides=['家具2.jpg','娱乐装饰5.jpg','家具5.jpg'];coCreateSlides.forEach(src=>{const image=new Image();image.src=src});let coCreateIndex=0;let coCreateCurrent=$('.co-create-slide.current');let coCreateNext=$('.co-create-slide.next');setInterval(()=>{coCreateIndex=(coCreateIndex+1)%coCreateSlides.length;coCreateNext.src=coCreateSlides[coCreateIndex];coCreateNext.classList.add('slide-right');requestAnimationFrame(()=>{coCreateCurrent.classList.add('slide-left');coCreateNext.classList.remove('slide-right')});setTimeout(()=>{coCreateCurrent.classList.add('no-motion','slide-right');coCreateCurrent.classList.remove('slide-left','current');coCreateNext.classList.add('current');const previous=coCreateCurrent;coCreateCurrent=coCreateNext;coCreateNext=previous;requestAnimationFrame(()=>coCreateNext.classList.remove('no-motion'))},900)},5000);
$('.life-block .showcase-copy>p:not(.eyebrow)').textContent='从座椅、灯具到提篮和收纳，产品是传统技艺与当代生活之间最具体的连接。';
$('.logic-heading .eyebrow').textContent='03 / PROJECT LOGIC';
$('.network .eyebrow').textContent='04 / VALUE NETWORK';
$('.co-create .eyebrow').textContent='05 / PUBLIC PARTICIPATION';
const logic={
 problem:{label:'问题 · 项目闭环',title:'好技艺，如何持续被需要？',text:'四类真实访谈共同表明：藤编的审美吸引力已经存在，但认知科普不足、青年传承有限、轻量化产品不足、匠人收益、市场转化与线上运营能力受限仍是现实问题。',proof:'已完成：游客、基地工作人员、一线匠人与电商负责人四类访谈，覆盖消费、运营、生产与传播端。'},
 method:{label:'方法 · 项目闭环',title:'以共创，而不是替代的方式参与',text:'以传承人、匠人、基地与电商团队为实践主体，连接田野调研、青年体验、轻量化产品打样与系列化数字传播，让高校和青年成为长期共创伙伴。',proof:'已有材料：四类访谈、工艺制作、青年体验、产品实拍与新媒体传播记录'},
 result:{label:'成果 · 项目闭环',title:'每一项成果，都应回到真实的人',text:'形成真实访谈和调研资料、传承人合作记录、藤编产品打样、团队交流与传播素材，并保留可核验的现场证据。',proof:'阶段性成果：完成四类访谈与实地走访，沉淀工艺、人物、产品和传播影像，形成可持续迭代的非遗活化素材库。'},
 future:{label:'未来 · 项目闭环',title:'让一次体验，成为持续的连接',text:'建立藤编技艺数字档案，发展常态化体验课程，推动产品系列化与品牌化，形成线上展示、线下体验、产品转化和乡村回流的长期闭环。',proof:'后续方向：档案化、体验常态化、产品化与品牌化'}
};
const roles={artisan:{label:'ROLE 01',title:'让手艺人的时间被认真看见',text:'以传承人为知识主体，记录经验、呈现过程，让作品价值回到真正创造它的人手里。'},youth:{label:'ROLE 02',title:'让青年成为传统的新合伙人',text:'把设计、体验和传播转化为参与方式，让青年不只是旁观者，而是产品和内容的共同创造者。'},market:{label:'ROLE 03',title:'让每一次购买都有来处',text:'用清楚的材料、工艺和人物信息降低理解门槛，让消费成为支持乡村手艺的具体选择。'},village:{label:'ROLE 04',title:'让价值回到乡村现场',text:'连接传承、产品和传播，让乡村拥有可持续的文化表达与产业协作空间。'}};
function openModal(id){const el=document.getElementById(id);el.classList.add('open');el.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(id){const el=document.getElementById(id);el.classList.remove('open');el.setAttribute('aria-hidden','true');document.body.style.overflow='';if(id==='videoModal'){$('#modalVideo').pause();$('#modalVideo').removeAttribute('src')}}
$$('.image-trigger').forEach(btn=>btn.addEventListener('click',()=>{$('#modalImage').src=btn.dataset.image;$('#modalImage').alt=btn.dataset.caption||'';$('#modalCaption').textContent=btn.dataset.caption||'';openModal('mediaModal')}));
$$('.video-trigger').forEach(btn=>btn.addEventListener('click',()=>{const v=$('#modalVideo');v.src=btn.dataset.video;openModal('videoModal');v.play().catch(()=>{})}));
$$('[data-close]').forEach(el=>el.addEventListener('click',()=>closeModal(el.dataset.close)));document.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal.open').forEach(m=>closeModal(m.id))});
$$('.craft-step').forEach((btn,i)=>btn.addEventListener('click',()=>{const item=craft[i];$$('.craft-step').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$('#craftImage').src=item.img;$('#craftText').textContent=item.text;$('#craftNote').textContent=item.text}));
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{const f=btn.dataset.filter;$$('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$$('.product-card').forEach(card=>card.classList.toggle('hidden',f!=='all'&&card.dataset.category!==f))}));
$$('.logic-tab').forEach(btn=>btn.addEventListener('click',()=>{const item=logic[btn.dataset.logic];$$('.logic-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$('#logicLabel').textContent=item.label;$('#logicTitle').textContent=item.title;$('#logicText').textContent=item.text;$('#logicProof').textContent=item.proof;$('#resultEvidence').hidden=btn.dataset.logic!=='result'}));
$$('.network-role').forEach(btn=>btn.addEventListener('click',()=>{const item=roles[btn.dataset.role];$$('.network-role').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$('#networkLabel').textContent=item.label;$('#networkTitle').textContent=item.title;$('#networkText').textContent=item.text}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});$$('.reveal').forEach(el=>observer.observe(el));window.addEventListener('scroll',()=>$('.site-header').classList.toggle('scrolled',scrollY>80));
$('#openCard').addEventListener('click',()=>openModal('cardModal'));$('#updateCard').addEventListener('click',()=>{const role=$('#cardRoleSelect').value;const blessing=$('#cardBlessingInput').value.trim()||'愿每一次选择，都让手艺继续生长。';$('#cardRole').textContent=role;$('#cardBlessing').textContent=blessing;$('#cardName').textContent=role==='青年设计师'?'青年共创者':role==='非遗守护人'?'非遗守护人':'乡村价值共创者'});
$('#downloadCard').addEventListener('click',()=>{const canvas=document.createElement('canvas');canvas.width=900;canvas.height=1100;const ctx=canvas.getContext('2d');ctx.fillStyle='#1d5146';ctx.fillRect(0,0,900,1100);ctx.fillStyle='#c9ad6d';ctx.font='38px serif';ctx.fillText('藤',80,180);ctx.font='42px serif';ctx.fillText($('#cardName').textContent,80,700);ctx.fillStyle='#f3f1e7';ctx.font='24px serif';ctx.fillText($('#cardBlessing').textContent,80,770);ctx.font='18px sans-serif';ctx.fillText($('#cardRole').textContent,80,1010);const a=document.createElement('a');a.download='项目共创卡.png';a.href=canvas.toDataURL('image/png');a.click()});
let audioCtx;$('.sound-toggle').addEventListener('click',()=>{if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();const btn=$('.sound-toggle');if(audioCtx.state==='suspended'){audioCtx.resume();btn.innerHTML='<span class="sound-icon">◉</span><span>环境音开</span>'}else{audioCtx.suspend();btn.innerHTML='<span class="sound-icon">◌</span><span>环境音</span>'}});
