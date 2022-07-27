  // create html page
const div = document.createElement('div');
let closeIcon = document.createElement('img');
div.className = 'lgo_btn_vew';
div.id='lgo_btn_vew';
div.style.width='100vw';
div.style.height='100vh';
div.style.backgroundColor='#6070ff';
div.style.mixBlendMode='multiply';
div.style.position='fixed';

 //adding list of menu items
 let mbl_mnu = document.createElement('ul');
 mbl_mnu.className='mbl_mnu';
 mbl_mnu.style.marginTop='10px';
 mbl_mnu.style.listStyle='none';
 for(let i=0;i<3;i++) {
    let mnu_itm = document.createElement('li');
    mnu_itm.className='menu_item'+i;
    let lnk = document.createElement('a');
   
    if(i==0) {
      lnk.appendChild(document.createTextNode('Portfolio'));
      lnk.href="#";
    }
    else if(i==1) {
      lnk.appendChild(document.createTextNode('About'));
      lnk.href=".about_myself_section";
    }
    else {
      lnk.appendChild(document.createTextNode('Contact'));
      lnk.href="#footer";
    }
    lnk.style.fontFamily='Poppins,sans-serif';
    lnk.style.fontSize='32px';
    lnk.style.textDecoration='none';
    lnk.style.color='#fff';
    lnk.addEventListener('click',close)
    mnu_itm.appendChild(lnk);
    mbl_mnu.appendChild(mnu_itm);
 }
 
 div.appendChild(mbl_mnu);

 closeIcon.src='images/close-icon.jpg';
 closeIcon.style.width='25px';
 closeIcon.style.height='25px';
 closeIcon.style.cursor='pointer';
 closeIcon.addEventListener('click',close);

 div.appendChild(closeIcon);
 document.body.append(div);
 div.style.display='flex';

 div.style.visibility= 'hidden';
 div.style.transition='visibility 0.3s, opacity 0.3s linear';
 div.style.opacity='0';


 

function hmBrgrBtn() {
  div.style.opacity='1';
  div.style.visibility= 'visible';
  div.style.justifyContent='space-between';
}

function close() {
  div.style.opacity='0';
  div.style.visibility= 'hidden';
}

let btn = document.querySelector('#hmbrgr');
btn.addEventListener('click', hmBrgrBtn);