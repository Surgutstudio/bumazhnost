const LIMITED_ID = 100;
let LIMITED_MAX = 100;

// ВСТРОЕННЫЕ ТОВАРЫ (Показываются, если нет data.js)
let PRODUCTS = [
  { id:1, cat:'sticker', emoji:'🏷️', bg:'#ffd166', title:'Наклейки ТУРБО · 10 шт', desc:'Классическая серия. Яркие, плотные, водонепроницаемые.', price:100, tag:'Хит' },
  { id:2, cat:'sticker', emoji:'💥', bg:'#ff4d8d', title:'Наклейки ТУРБО · 25 шт', desc:'Набор для обмена и коллекции. Только наклейки.', price:200, tag:'Новинка' },
  { id:3, cat:'sticker', emoji:'💖', bg:'#8ecae6', title:'Наклейка «Турбо-сердце»', desc:'Винтаж, водонепроницаемая. 1 шт.', price:40 },
  { id:4, cat:'sticker', emoji:'⭐', bg:'#b8e0a0', title:'Наклейки ТУРБО «Ретро» · 20 шт', desc:'Серия с логотипами и звёздами. Плотная плёнка.', price:180 },
  { id:100, cat:'sticker', emoji:'📎', bg:'linear-gradient(135deg,#ffd166,#ff4d8d)', title:'Наклейка «Скрепка» · ЛИМИТКА', desc:'Только 100 штук в мире. Виниловая, 7 см. Когда закончатся — больше не будет.', price:300, tag:'ЛИМИТКА 100' },
  { id:5, cat:'weapon', emoji:'🌀', bg:'#8ecae6', title:'Бумажный сюрикен', desc:'Модульная сборка, 8 лучей. Летает красиво.', price:90, tag:'Хит' },
  { id:6, cat:'weapon', emoji:'🗡️', bg:'#ffd166', title:'Бумажный меч «Катана»', desc:'Длина 60 см, плотная бумага 200 г/м².', price:250 },
  { id:7, cat:'weapon', emoji:'🔫', bg:'#ff4d8d', title:'Бумажный пистолет «Форсаж»', desc:'Стреляет бумажными пульками. Безопасно.', price:200, old:260 },
  { id:8, cat:'weapon', emoji:'🛡️', bg:'#b8e0a0', title:'Бумажный щит «Форсаж»', desc:'Круглый щит 35 см, плотный картон + бумага.', price:320, tag:'Новинка' },
  { id:9, cat:'weapon', emoji:'📦', bg:'#ffd166', title:'Бумажные ножны для меча', desc:'Подходят под «Катану» 60 см.', price:150 },
  { id:10, cat:'weapon', emoji:'🎯', bg:'#ff4d8d', title:'Набор «Арсенал» 5 в 1', desc:'Сюрикен, меч, щит, ножны и пистолет.', price:690, old:790, tag:'Выгода' }
];

// ПОДГРУЖАЕМ ДАННЫЕ ИЗ data.js
if (window.SITE_DATA) {
  PRODUCTS = window.SITE_DATA.products;
  LIMITED_MAX = window.SITE_DATA.skrepka_limit || 100;
  const adminSold = window.SITE_DATA.skrepka_sold || 0;
  if (adminSold > getSold()) setSold(adminSold);
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('heroLimit').textContent = LIMITED_MAX;
    document.getElementById('heroLimitText').textContent = LIMITED_MAX;
    document.getElementById('limitedMaxText').textContent = LIMITED_MAX;
    document.getElementById('faqLimit').textContent = LIMITED_MAX;
    const marqueeSpan = document.querySelector('.marquee-track span');
    if(marqueeSpan) marqueeSpan.innerHTML = marqueeSpan.innerHTML.replace(/100 шт/g, LIMITED_MAX + ' шт');
  });
}

// Пасхалки
const EASTER_EGGS = ["Набрать слово «бумага»","Набрать слово «турбо»","Набрать слово «сургут»","Набрать слово «форсаж»","Набрать слово «секрет»","Набрать слово «конфетти»","Набрать слово «пасхалка»","Набрать слово «скрепка»","Набрать слово «дракон»","Набрать слово «меч»","Набрать слово «щит»","Набрать слово «сюрикен»","Набрать слово «пистолет»","Набрать слово «ножны»","Набрать слово «арсенал»","Набрать слово «ретро»","Набрать слово «сердце»","Набрать слово «звезда»","Набрать слово «молния»","Набрать слово «1000»","Ввести промокод ПАСХАЛКА","Ввести промокод БУМАЖНОСТЬ","Ввести промокод ДРАКОН","Ввести промокод СЕКРЕТ","Ввести промокод СУРГУТ","Ввести промокод СКРЕПКА","Ввести промокод ТУРБО","Ввести промокод ФОРСАЖ","Ввести промокод БУМАГА","Ввести промокод 100","Konami-код (↑↑↓↓←→←→BA)","Клик по логотипу 5 раз","Клик по счётчику корзины 5 раз","Клик по копирайту © 5 раз","Двойной клик по заголовку H1","Клик по бегущей строке","Наведение на карточку товара 2 сек","Правый клик по пустой корзине","Клик по герою 5 раз","Клик по почте 3 раза","Клик по цифре шага 01","Клик по цифре шага 02","Клик по цифре шага 03","Клик по скрепке в логотипе","Клик по кнопке «Смотреть каталог»","Клик по кнопке «Как это работает»","Ввод пустого промокода","Ввод неверного промокода","Очистка промокода","Добавить 100 скрепок в корзину","Добавить 13 товаров","Сумма в корзине > 10 000","Очистить всю корзину","Клик по итоговой сумме","Заказ в пятницу","Заказ ночью (00:00-05:59)","Заказ утром (06:00-11:59)","Пустой email при оформлении","Неверный email при оформлении","Успешный заказ","Нажать Ctrl+B","Нажать Alt+T","Нажать Shift+S","Набрать слово «админ»","Набрать слово «123»","Набрать слово «qwerty»","Набрать слово «тысяча»","Ввод слова «1000»","Свайп влево (мобилка)","Свайп вправо (мобилка)","Скролл в самый низ","Скролл в самый верх","Смена вкладки","Изменение размера окна","Попытка выделить текст","Двойной клик по картинке","Клик по ссылке «Вопросы»","Клик по ссылке «Контакты»","Клик по ссылке «Каталог»","Найти скрытый текст «СЕКРЕТНО»","Найти пасхалку в консоли","Ввод слова «бумага» 5 раз","Ввод слова «турбо» 5 раз","Ввод слова «сургут» 5 раз","Клик по подвалу «📎»","Клик по пустому месту 10 раз","Ввод слова «форсаж» 5 раз","Ввод слова «секрет» 5 раз","Ввод слова «конфетти» 5 раз","Ввод слова «пасхалка» 5 раз","Ввод слова «скрепка» 5 раз","Ввод слова «дракон» 5 раз","Ввод слова «меч» 5 раз","Ввод слова «щит» 5 раз","Ввод слова «сюрикен» 5 раз","Ввод слова «пистолет» 5 раз","Ввод слова «ножны» 5 раз","Ввод слова «арсенал» 5 раз","Ввод слова «ретро» 5 раз","Ввод слова «сердце» 5 раз"];
let foundEggs = new Set(JSON.parse(localStorage.getItem('bf_eggs') || '[]'));

function unlockEgg(index) {
  if (index >= 0 && index < 100 && !foundEggs.has(index)) {
    foundEggs.add(index);
    localStorage.setItem('bf_eggs', JSON.stringify([...foundEggs]));
    if (foundEggs.size % 10 === 0 || foundEggs.size === 1) {
      showToast(`🥚 Найдено пасхалок: ${foundEggs.size}/100!`);
    }
  }
}

function getSold(){ return parseInt(localStorage.getItem('bf_skrepka_sold') || '0', 10) || 0; }
function getRemaining(){ return Math.max(0, LIMITED_MAX - getSold()); }
function setSold(v){ localStorage.setItem('bf_skrepka_sold', String(Math.min(LIMITED_MAX, Math.max(0, v)))); }

const PROMOS = {'БУМАГА10': 0.10,'ФОРСАЖ15': 0.15,'ТУРБО20': 0.20,'SURGUT5': 0.05,'ПАСХАЛКА': 0.99,'БУМАЖНОСТЬ': 0.50,'ДРАКОН': 0.33,'СЕКРЕТ': 0.25,'СУРГУТ': 0.10,'СКРЕПКА': 0.15,'ТУРБО': 0.20,'ФОРСАЖ': 0.15,'БУМАГА': 0.10,'100': 1.00};

let cart = [];
let currentFilter = 'all';
let appliedPromo = null;
let promoRate = 0;

try { cart = JSON.parse(localStorage.getItem('bf_cart')) || []; } catch(e){ cart = []; }
try {
  const sp = localStorage.getItem('bf_promo');
  if(sp && PROMOS[sp]) { appliedPromo = sp; promoRate = PROMOS[sp]; }
} catch(e){}

const $ = s => document.querySelector(s);
const productsEl = $('#products');
const cartBody  = $('#cartBody');
const cartCount = $('#cartCount');
const cartTotal = $('#cartTotal');

function renderProducts(){
  const list = currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === currentFilter);
  productsEl.innerHTML = list.map(p => {
    if(p.id === LIMITED_ID){
      const rem = getRemaining();
      const soldOut = rem <= 0;
      const pct = (rem / LIMITED_MAX * 100).toFixed(0);
      return `
        <article class="card card-limited${soldOut?' sold-out':''}">
          <div class="card-img" style="background:${p.bg}"><span class="card-tag" style="background:var(--red)">${p.tag}</span>${p.emoji}</div>
          <div class="card-body">
            <div class="card-title">${p.title}</div>
            <div class="card-desc">${p.desc}</div>
            <div class="limited-mini"><div class="lm-bar"><div class="lm-fill" style="width:${pct}%"></div></div><div class="lm-text">${soldOut ? '💔 Распродано' : `Осталось ${rem} из ${LIMITED_MAX}`}</div></div>
            <div class="card-foot">
              <div class="price">${p.price} ₽</div>
              <div class="card-actions">
                ${soldOut ? `<button class="add-btn sold-out" disabled>Распродано</button>` : `<div class="prod-qty" data-pid="${p.id}"><button class="pq-btn" data-pq="-1">−</button><span class="pq-val">1</span><button class="pq-btn" data-pq="1">+</button></div><button class="add-btn" data-id="${p.id}">В корзину</button>`}
              </div>
            </div>
          </div>
        </article>`;
    }
    return `
      <article class="card">
        <div class="card-img" style="background:${p.bg}">${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}${p.emoji}</div>
        <div class="card-body">
          <div class="card-title">${p.title}</div>
          <div class="card-desc">${p.desc}</div>
          <div class="card-foot">
            <div class="price">${p.old ? `<s>${p.old}₽</s>` : ''}${p.price} ₽</div>
            <div class="card-actions">
              <div class="prod-qty" data-pid="${p.id}"><button class="pq-btn" data-pq="-1">−</button><span class="pq-val">1</span><button class="pq-btn" data-pq="1">+</button></div>
              <button class="add-btn" data-id="${p.id}">В корзину</button>
            </div>
          </div>
        </div>
      </article>`;
  }).join('');
}

function updateLimitedUI(){
  const rem = getRemaining();
  const pct = (rem / LIMITED_MAX * 100).toFixed(0);
  const bar = document.getElementById('limitedBar');
  const left = document.getElementById('limitedLeft');
  const card = document.getElementById('limitedCard');
  const btn = document.getElementById('limitedBuy');
  if(left) left.textContent = rem;
  if(bar) bar.style.width = pct + '%';
  const soldOut = rem <= 0;
  if(card) card.classList.toggle('sold-out', soldOut);
  if(btn) btn.textContent = soldOut ? '💔 Распродано' : 'Забрать за 300 ₽ →';
}

function saveCart(){ localStorage.setItem('bf_cart', JSON.stringify(cart)); }
function savePromo(){ appliedPromo ? localStorage.setItem('bf_promo', appliedPromo) : localStorage.removeItem('bf_promo'); }
function cartQty(){ return cart.reduce((s,i) => s + i.qty, 0); }
function cartSum(){ return cart.reduce((s,i) => { const p = PRODUCTS.find(x => x.id === i.id); return s + (p ? p.price * i.qty : 0); }, 0); }
function cartDiscount(){ return appliedPromo ? Math.round(cartSum() * promoRate) : 0; }
function cartTotalValue(){ return cartSum() - cartDiscount(); }

function addToCart(id, qty){
  qty = qty || 1;
  if(id === LIMITED_ID){
    const inCart = cart.find(i => i.id === id)?.qty || 0;
    const rem = getRemaining();
    if(inCart + qty > rem){ showToast('😔 Только ' + rem + ' шт. в наличии'); return; }
  }
  const found = cart.find(i => i.id === id);
  if(found) found.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  updateCartUI();
  showToast('✅ Добавлено: ' + qty + ' шт.');
  if(cart.length === 13) unlockEgg(50);
  if(cartTotalValue() > 10000) unlockEgg(51);
}

function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if(!item) return;
  const newQ = item.qty + delta;
  if(id === LIMITED_ID && newQ > getRemaining()){ showToast('😔 Только ' + getRemaining() + ' шт. в наличии'); return; }
  item.qty = newQ;
  if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function removeItem(id){
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  if(cart.length === 0) unlockEgg(52);
}

function updatePromoUI(){
  const input = $('#promoInput');
  const msg = $('#promoMsg');
  if(!input || !msg) return;
  if(appliedPromo){ input.value = appliedPromo; msg.textContent = 'Промокод применён: скидка ' + Math.round(promoRate*100) + '%'; msg.className = 'promo-msg ok'; }
  else { input.value = ''; msg.textContent = ''; msg.className = 'promo-msg'; }
}

function updateCartUI(){
  cartCount.textContent = cartQty();
  cartTotal.textContent = cartTotalValue().toLocaleString('ru-RU') + ' ₽';
  const dr = $('#discountRow'), ds = $('#discountSum');
  if(appliedPromo && cartDiscount() > 0){ dr.style.display = 'flex'; ds.textContent = cartDiscount().toLocaleString('ru-RU') + ' ₽'; } else { dr.style.display = 'none'; }

  if(cart.length === 0){ cartBody.innerHTML = `<div class="cart-empty"><span class="big">📄</span>Пока пусто.<br>Добавь наклейки или бумажное оружие!</div>`; return; }

  cartBody.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if(!p) return '';
    const isLimited = p.id === LIMITED_ID;
    return `
      <div class="cart-item">
        <div class="thumb" style="background:${isLimited ? 'linear-gradient(135deg,#ffd166,#ff4d8d)' : p.bg}">${p.emoji}</div>
        <div>
          <div class="name">${p.title}</div>
          <div class="sub">${p.price} ₽ × ${item.qty} = ${p.price * item.qty} ₽</div>
          <div class="qty"><button data-minus="${p.id}">−</button><span>${item.qty}</span><button data-plus="${p.id}">+</button></div>
        </div>
        <button class="remove" data-remove="${p.id}">🗑️</button>
      </div>`;
  }).join('');
}

let toastTimer;
function showToast(text){
  const t = $('#toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

function openCart(){ $('#drawer').classList.add('open'); $('#overlay').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeCart(){ $('#drawer').classList.remove('open'); $('#overlay').classList.remove('show'); if(!$('#payModal').classList.contains('open')) document.body.style.overflow = ''; }

function buildOrderItems(){
  return cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if(!p) return '';
    return `<div class="order-item"><span class="nm">${p.emoji} ${p.title} × ${item.qty}</span><span>${(p.price * item.qty).toLocaleString('ru-RU')} ₽</span></div>`;
  }).join('');
}

function openPayModal(){
  if(cart.length === 0) return;
  $('#paySummary').innerHTML = `
    <div class="row"><span>Товаров:</span><span>${cartQty()} шт.</span></div>
    <div class="row"><span>Сумма:</span><span>${cartSum().toLocaleString('ru-RU')} ₽</span></div>
    ${appliedPromo ? `<div class="row disc"><span>Скидка (${appliedPromo}):</span><span>−${cartDiscount().toLocaleString('ru-RU')} ₽</span></div>` : ''}
    <div class="row total"><span>К оплате:</span><span>${cartTotalValue().toLocaleString('ru-RU')} ₽</span></div>
    <div class="order-items">${buildOrderItems()}</div>
  `;
  $('#paySuccess').classList.remove('show'); $('#payBody').style.display = 'flex'; $('#payFoot').style.display = 'block';
  $('#customerEmail').value = ''; $('#payBtn').disabled = false; $('#payBtn').textContent = 'Подтвердить заказ';
  $('#payModal').classList.add('open'); $('#overlay').classList.add('show'); document.body.style.overflow = 'hidden';
}

function closePayModal(){
  $('#payModal').classList.remove('open'); $('#overlay').classList.remove('show');
  if(!$('#drawer').classList.contains('open')) document.body.style.overflow = '';
}

$('#payBtn').addEventListener('click', () => {
  const email = $('#customerEmail').value.trim();
  if(!email) unlockEgg(59);
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ showToast('⚠️ Введите корректный email'); $('#customerEmail').focus(); unlockEgg(60); return; }
  const btn = $('#payBtn'); btn.disabled = true; btn.textContent = 'Отправляем…';
  const itemsHtml = buildOrderItems();
  const finalSum = cartTotalValue();
  const skrepkaQty = cart.find(i => i.id === LIMITED_ID)?.qty || 0;

  setTimeout(() => {
    $('#payBody').style.display = 'none'; $('#payFoot').style.display = 'none';
    $('#paySuccessText').innerHTML = `Ваш заказ на сумму <strong>${finalSum.toLocaleString('ru-RU')} ₽</strong> оформлен.<br>Оплата курьеру при получении в Сургуте.<br>Подтверждение придёт на <strong>${email}</strong>.` + (skrepkaQty > 0 ? `<br><br>📎 <strong>Скрепла ${skrepkaQty} шт. зарезервирована!</strong>` : '');
    let orderBox = document.getElementById('orderSuccessItems');
    if(!orderBox){
      orderBox = document.createElement('div'); orderBox.id = 'orderSuccessItems'; orderBox.className = 'order-items';
      orderBox.style.cssText = 'background:var(--paper-2);border:3px solid var(--line);border-radius:12px;padding:12px 14px;width:100%;max-width:360px;text-align:left;max-height:180px;overflow-y:auto;';
      const mb = document.getElementById('payMailBox'); mb.parentNode.insertBefore(orderBox, mb);
    }
    orderBox.innerHTML = '<div style="font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;color:var(--ink-soft)">Вы купили:</div>' + itemsHtml;
    $('#paySuccess').classList.add('show');
    if(skrepkaQty > 0) setSold(getSold() + skrepkaQty);
    cart = []; appliedPromo = null; promoRate = 0; saveCart(); savePromo(); updatePromoUI(); updateCartUI(); updateLimitedUI(); renderProducts();
    btn.disabled = false; btn.textContent = 'Подтвердить заказ'; unlockEgg(61);
  }, 700);
});

$('#payDoneBtn').addEventListener('click', () => { closePayModal(); closeCart(); });
$('#closePay').addEventListener('click', closePayModal);

document.getElementById('limitedBuy')?.addEventListener('click', () => {
  if(getRemaining() <= 0){ showToast('💔 Лимитка распродана'); return; }
  addToCart(LIMITED_ID, 1); openCart();
});

document.addEventListener('click', e => {
  const pq = e.target.closest('.pq-btn');
  if(pq){
    const wrap = pq.closest('.prod-qty'); const valEl = wrap.querySelector('.pq-val');
    let q = parseInt(valEl.textContent, 10) || 1; q += +pq.dataset.pq;
    if(q < 1) q = 1; if(q > 99) q = 99;
    if(+wrap.dataset.pid === LIMITED_ID && q > getRemaining()) q = getRemaining();
    valEl.textContent = q; return;
  }
  const addBtn = e.target.closest('.add-btn');
  if(addBtn && !addBtn.disabled){
    const card = addBtn.closest('.card'); const qtyEl = card.querySelector('.pq-val');
    const qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
    addToCart(+addBtn.dataset.id, qty); return;
  }
  const plus = e.target.closest('[data-plus]');
  if(plus){ changeQty(+plus.dataset.plus, +1); return; }
  const minus = e.target.closest('[data-minus]');
  if(minus){ changeQty(+minus.dataset.minus, -1); return; }
  const rem = e.target.closest('[data-remove]');
  if(rem){ removeItem(+rem.dataset.remove); return; }
  const chip = e.target.closest('.chip');
  if(chip){ document.querySelectorAll('.chip').forEach(c => c.classList.remove('active')); chip.classList.add('active'); currentFilter = chip.dataset.filter; renderProducts(); return; }
});

$('#openCart').addEventListener('click', openCart);
$('#closeCart').addEventListener('click', closeCart);
$('#overlay').addEventListener('click', () => { if($('#payModal').classList.contains('open')) closePayModal(); else closeCart(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape'){ if($('#payModal').classList.contains('open')) closePayModal(); else closeCart(); } });

$('#applyPromo').addEventListener('click', () => {
  const val = $('#promoInput').value.trim().toUpperCase();
  const msg = $('#promoMsg');
  if(!val){ appliedPromo = null; promoRate = 0; savePromo(); updatePromoUI(); updateCartUI(); unlockEgg(47); return; }
  if(PROMOS[val]){
    appliedPromo = val; promoRate = PROMOS[val]; savePromo(); updatePromoUI(); updateCartUI(); showToast('✅ Промокод применён');
    const eggIdx = ['ПАСХАЛКА','БУМАЖНОСТЬ','ДРАКОН','СЕКРЕТ','СУРГУТ','СКРЕПКА','ТУРБО','ФОРСАЖ','БУМАГА','100'].indexOf(val);
    if(eggIdx !== -1) unlockEgg(20 + eggIdx);
  } else {
    appliedPromo = null; promoRate = 0; savePromo(); updatePromoUI(); updateCartUI(); msg.textContent = 'Такого промокода нет'; msg.className = 'promo-msg err'; unlockEgg(48);
  }
});

$('#checkoutBtn').addEventListener('click', openPayModal);
document.getElementById('cartTotal').addEventListener('click', () => unlockEgg(53));

renderProducts();
updatePromoUI();
updateCartUI();
updateLimitedUI();

// Пасхалки JS
(function(){
  'use strict';
  function makeLayer(){ const layer = document.createElement('div'); layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:150;overflow:hidden;'; document.body.appendChild(layer); return layer; }
  function spawnEmoji(emoji, count){ const layer = makeLayer(); for(let i=0;i<count;i++){ const el = document.createElement('div'); el.textContent = emoji; el.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-60px;font-size:${18+Math.random()*30}px;animation:paperFall ${2+Math.random()*3}s linear ${Math.random()*1.2}s forwards;`; layer.appendChild(el); } setTimeout(() => layer.remove(), 6500); }
  function spawnConfetti(count){ const colors = ['#ffd166','#ff4d8d','#8ecae6','#b8e0a0','#e63946','#2a9d8f']; const layer = makeLayer(); for(let i=0;i<count;i++){ const el = document.createElement('div'); el.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-20px;width:10px;height:10px;border-radius:2px;background:${colors[Math.floor(Math.random()*colors.length)]};animation:confettiFall ${1.5+Math.random()*2.5}s ease-in ${Math.random()*0.8}s forwards;`; layer.appendChild(el); } setTimeout(() => layer.remove(), 5500); }
  function flyPlane(){ const el = document.createElement('div'); el.textContent = '✈️'; el.style.cssText = `position:fixed;top:${20+Math.random()*60}%;left:-80px;font-size:50px;z-index:150;pointer-events:none;animation:planeFly ${2+Math.random()*1.5}s linear forwards;`; document.body.appendChild(el); setTimeout(() => el.remove(), 4000); }
  function shakeScreen(){ document.body.classList.add('shake'); setTimeout(() => document.body.classList.remove('shake'), 500); }

  let dragonUnlocked = false;
  function unlockSecretProduct(){
    if(dragonUnlocked){ showToast('🐉 Дракон уже в каталоге'); return; }
    dragonUnlocked = true;
    PRODUCTS.push({ id:999, cat:'weapon', emoji:'🐉', bg:'#ffd166', title:'Бумажный дракон', desc:'СЕКРЕТНЫЙ ТОВАР. Складывается из 300 модулей. Легендарный.', price:1999, old:2999, tag:'СЕКРЕТ' });
    currentFilter = 'all'; document.querySelectorAll('.chip').forEach(c => c.classList.remove('active')); const allChip = document.querySelector('.chip[data-filter="all"]'); if(allChip) allChip.classList.add('active');
    renderProducts(); showToast('🐉 Открыт секретный товар!');
    setTimeout(() => { document.getElementById('products')?.scrollIntoView({behavior:'smooth', block:'center'}); }, 300); unlockEgg(8);
  }

  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let kIdx = 0, konamiBar = null, konamiBarTimer = null;
  function showKonamiBar(){
    if(!konamiBar){ konamiBar = document.createElement('div'); konamiBar.style.cssText = `position:fixed;bottom:90px;left:50%;translate:-50% 0;z-index:200;background:var(--ink);color:#fff;border:3px solid var(--line);border-radius:999px;padding:10px 18px;display:flex;gap:7px;align-items:center;font-family:'Bungee',cursive;font-size:13px;box-shadow:4px 4px 0 var(--pink);`; konamiBar.innerHTML = '<span style="font-size:11px;letter-spacing:1px;opacity:.7;margin-right:4px">KONAMI</span>'; const dots = document.createElement('span'); dots.id = 'konamiDots'; dots.style.cssText = 'display:flex;gap:5px;align-items:center;'; konamiBar.appendChild(dots); document.body.appendChild(konamiBar); }
    konamiBar.style.display = 'flex'; renderKonamiDots(); clearTimeout(konamiBarTimer); konamiBarTimer = setTimeout(() => { if(kIdx === 0 && konamiBar) konamiBar.style.display = 'none'; }, 3000);
  }
  function renderKonamiDots(){ if(!konamiBar) return; const dots = document.getElementById('konamiDots'); if(!dots) return; dots.innerHTML = ''; for(let i=0;i<konami.length;i++){ const d = document.createElement('span'); const active = i < kIdx; d.textContent = active ? '●' : '○'; d.style.cssText = `font-size:14px;line-height:1;color:${active ? 'var(--yellow)' : '#666'};transition:all .15s;`; dots.appendChild(d); } }
  function triggerKonami(){ if(konamiBar) konamiBar.style.display = 'none'; spawnEmoji('📄', 80); spawnConfetti(60); for(let i=0;i<5;i++) setTimeout(flyPlane, i*300); showToast('🎮 KONAMI CODE!'); unlockEgg(30); setTimeout(() => { if(confirm('🎉 Konami code activated!\n\nПрименить секретный промокод ПАСХАЛКА на 99% скидку?')){ appliedPromo = 'ПАСХАЛКА'; promoRate = 0.99; savePromo(); updatePromoUI(); updateCartUI(); showToast('🎁 Промокод ПАСХАЛКА применён!'); } }, 1800); }

  let buf = '';
  const words = {
    'бумага': () => { spawnEmoji('📄', 40); showToast('📄 Бумажный дождь!'); unlockEgg(0); },
    'турбо': () => { document.body.classList.add('flash-yellow'); setTimeout(()=>document.body.classList.remove('flash-yellow'), 800); showToast('🏎️ ТУРБО!'); unlockEgg(1); },
    'сургут': () => { spawnConfetti(30); showToast('🏙️ Сургут — столица бумажности!'); unlockEgg(2); },
    'форсаж': () => { flyPlane(); showToast('🏎️ ФОРСАЖ!'); unlockEgg(3); },
    'секрет': () => { unlockSecretProduct(); unlockEgg(4); },
    'конфетти': () => { spawnConfetti(100); showToast('🎉 Конфетти!'); unlockEgg(5); },
    'пасхалка': () => { showToast('🥚 Пасхалка! Попробуй ПАСХАЛКА'); unlockEgg(6); },
    'скрепка': () => { spawnEmoji('📎', 50); showToast('📎 Скрепки!'); unlockEgg(7); },
    'дракон': () => { unlockSecretProduct(); unlockEgg(8); },
    'меч': () => { spawnEmoji('🗡️', 20); unlockEgg(9); },
    'щит': () => { spawnEmoji('🛡️', 20); unlockEgg(10); },
    'сюрикен': () => { spawnEmoji('🌀', 20); unlockEgg(11); },
    'пистолет': () => { spawnEmoji('🔫', 20); unlockEgg(12); },
    'ножны': () => { spawnEmoji('📦', 20); unlockEgg(13); },
    'арсенал': () => { spawnEmoji('🎯', 20); unlockEgg(14); },
    'ретро': () => { spawnEmoji('⭐', 20); unlockEgg(15); },
    'сердце': () => { spawnEmoji('💖', 20); unlockEgg(16); },
    'звезда': () => { spawnEmoji('🌟', 20); unlockEgg(17); },
    'молния': () => { spawnEmoji('⚡', 20); unlockEgg(18); },
    '1000': () => { spawnEmoji('🥚', 100); showToast('🥚 1000 пасхалок!'); unlockEgg(19); },
    'админ': () => { showToast('👑 Админ!'); unlockEgg(63); },
    '123': () => { showToast('123'); unlockEgg(64); },
    'qwerty': () => { showToast('Клавиатура!'); unlockEgg(65); },
    'тысяча': () => { spawnEmoji('🥚', 100); showToast('🥚 1000 пасхалок!'); unlockEgg(66); }
  };

  document.addEventListener('keydown', e => {
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const k = e.key;
    const exp = konami[kIdx];
    const matches = k === exp || (exp === 'b' && k.toLowerCase() === 'b') || (exp === 'a' && k.toLowerCase() === 'a');
    if(matches){ kIdx++; showKonamiBar(); if(kIdx === konami.length){ kIdx = 0; triggerKonami(); } } else { kIdx = (k === konami[0]) ? 1 : 0; if(kIdx === 1) showKonamiBar(); else if(konamiBar) konamiBar.style.display = 'none'; }
    if (e.ctrlKey && k.toLowerCase() === 'b') { showToast('Ctrl+B!'); unlockEgg(62); }
    if (e.altKey && k.toLowerCase() === 't') { showToast('Alt+T!'); unlockEgg(63); }
    if (e.shiftKey && k.toLowerCase() === 's') { showToast('Shift+S!'); unlockEgg(64); }
    if(k.length === 1){ buf = (buf + k.toLowerCase()).slice(-30); Object.keys(words).forEach(w => { if(buf.endsWith(w)){ words[w](); buf = ''; } }); }
  });

  const logoBadge = document.querySelector('.logo-badge');
  if(logoBadge){ let n = 0, t; logoBadge.addEventListener('click', e => { e.preventDefault(); n++; logoBadge.style.transform = `rotate(${-6 + n*36}deg)`; clearTimeout(t); if(n >= 5){ n = 0; logoBadge.style.transform = 'rotate(-6deg)'; spawnEmoji('📎', 30); showToast('📎 Скрепки атакуют!'); unlockEgg(31); } else { t = setTimeout(() => { n = 0; logoBadge.style.transform = 'rotate(-6deg)'; }, 2000); } }); }

  document.querySelector('h1')?.addEventListener('dblclick', () => { shakeScreen(); showToast('🌋 ТРЯСКА!'); unlockEgg(34); });

  const cc = document.getElementById('cartCount');
  if(cc){ let n = 0, t; cc.addEventListener('click', () => { n++; clearTimeout(t); if(n >= 5){ n = 0; spawnConfetti(80); showToast('🎉 Конфетти!'); unlockEgg(32); } else { t = setTimeout(() => { n = 0; }, 1500); } }); }

  const cr = document.getElementById('footCopyright');
  if(cr){ let n = 0, t; cr.addEventListener('click', () => { n++; clearTimeout(t); if(n >= 5){ n = 0; showCredits(); unlockEgg(33); } else { t = setTimeout(() => { n = 0; }, 1500); } }); }

  function showCredits(){
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:200;display:flex;align-items:center;justify-content:center;padding:16px;';
    const listHtml = EASTER_EGGS.map((egg, i) => { const found = foundEggs.has(i); return `<div class="egg-item ${found ? 'found' : ''}"><span>${i+1}.</span> ${egg} ${found ? '✅' : '🔒'}</div>`; }).join('');
    modal.innerHTML = `<div style="background:var(--paper);border:3px solid var(--line);border-radius:18px;padding:24px;max-width:600px;width:100%;box-shadow:8px 8px 0 var(--ink);"><div style="font-family:'Bungee',cursive;font-size:22px;margin-bottom:8px;text-align:center;">🥚 Все 100 пасхалок</div><div style="text-align:center;font-size:14px;color:var(--ink-soft);margin-bottom:12px;">Найдено: <strong>${foundEggs.size} / 100</strong></div><div class="egg-list">${listHtml}</div><button class="btn btn-main" style="justify-content:center;width:100%;margin-top:16px;">Закрыть</button></div>`;
    document.body.appendChild(modal);
    modal.querySelector('button').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => { if(e.target === modal) modal.remove(); });
  }

  document.addEventListener('contextmenu', e => { if(e.target.closest('.cart-empty')){ e.preventDefault(); showToast('📄 Бумага всё стерпит'); unlockEgg(37); } });

  let hoverTimer = null, hoverEl = null;
  document.addEventListener('mouseover', e => { const img = e.target.closest('.card-img'); if(!img || img === hoverEl) return; clearTimeout(hoverTimer); hoverEl = img; hoverTimer = setTimeout(() => { if(img.matches(':hover')){ img.style.transition = 'transform 1s'; img.style.transform = 'rotate(360deg) scale(1.1)'; setTimeout(() => { img.style.transform = ''; }, 1000); unlockEgg(36); } }, 2000); });
  document.addEventListener('mouseout', e => { const img = e.target.closest('.card-img'); if(img === hoverEl){ clearTimeout(hoverTimer); hoverEl = null; } });

  const marquee = document.querySelector('.marquee');
  if(marquee){ marquee.style.cursor = 'pointer'; marquee.addEventListener('click', () => { const tr = marquee.querySelector('.marquee-track'); if(tr){ tr.style.animationDuration = '4s'; setTimeout(() => { tr.style.animationDuration = ''; }, 3000); showToast('⚡ Разгон!'); unlockEgg(35); } }); }

  setTimeout(() => { setInterval(() => { if(Math.random() < 0.5) flyPlane(); }, 45000); }, 15000);

  setTimeout(() => { const fb = document.querySelector('.foot-bottom'); if(fb && !document.getElementById('eggHint')){ const h = document.createElement('span'); h.id = 'eggHint'; h.textContent = '🥚 Тут спрятаны 100 пасхалок 👀'; h.style.cssText = 'cursor:help;opacity:.7;'; h.title = 'Konami, слова, клики, промокоды — попробуй!'; fb.appendChild(h); } }, 1000);

  document.getElementById('heroArt')?.addEventListener('click', () => unlockEgg(38));
  document.getElementById('footEmail')?.addEventListener('click', () => unlockEgg(39));
  document.getElementById('step1')?.addEventListener('click', () => unlockEgg(40));
  document.getElementById('step2')?.addEventListener('click', () => unlockEgg(41));
  document.getElementById('step3')?.addEventListener('click', () => unlockEgg(42));
  document.getElementById('btnCatalog')?.addEventListener('click', () => unlockEgg(44));
  document.getElementById('btnHow')?.addEventListener('click', () => unlockEgg(45));

  console.log('%c🥚 Тут тоже есть пасхалка! Напиши в консоль: unlockEgg(78)', 'color: #ff4d8d; font-size: 20px; font-weight: bold;');
  window.unlockEgg = unlockEgg;
})();