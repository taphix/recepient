// /* js/bot-guard.js  */

// const BOT_DOMAINS = [
//     'yandex.com','yandex.ru','yandex.net',
//     'googlebot.com','google.com',
//     'yahoo.com','rambler.ru','mail.ru','msn.com'
//   ];
  
//   // ── утилиты ────────────────────────────────────────────────
//   function reverseIPv4(ip){return ip.split('.').reverse().join('.')+'.in-addr.arpa';}
//   async function getPublicIP(){
//     try{return (await fetch('https://api.ipify.org?format=json').then(r=>r.json())).ip;}
//     catch{return null;}
//   }
//   async function getHostname(ip){
//     if(!ip) return null;
//     try{
//       const url=`https://dns.google/resolve?name=${reverseIPv4(ip)}&type=PTR`;
//       const data=await fetch(url).then(r=>r.json());
//       if(data.Answer?.length) return data.Answer[0].data.replace(/\.$/,'');
//     }catch{}
//     return null;
//   }
//   function isSearchRef(){return /google|yandex|mail|rambler|duckduckgo|yahoo|bing|nigma|zapmeta|qip|sweetim|plusnetwork/i
//     .test(document.referrer);}
//   function setOrgCookie(){
//     const exp=new Date(Date.now()+86400e3).toUTCString();
//     document.cookie=`userlog=org; path=/; expires=${exp}`;
//   }
//   function hasOrgCookie(){return document.cookie.split(';').some(c=>c.trim().startsWith('userlog=org'));}
  
//   // ── главный экспорт ───────────────────────────────────────
//   export async function guardPage(){
//     const ip=await getPublicIP();
//     const host=await getHostname(ip);
//     const isBot=host && BOT_DOMAINS.some(d=>host.endsWith(d));
//     if(isBot) return;
  
//     const urlFlag=new URLSearchParams(location.search).get('enter')==='1';
//     if(isSearchRef()||urlFlag){setOrgCookie();return;}
//     if(hasOrgCookie()) return;
  
//     // блокировка
//     document.open();
//     document.write(`<h2 style="text-align:center;margin:4rem;color:#f55">
//       Account disabled by server administrator
//     </h2>`);
//     document.close();
//   }
  