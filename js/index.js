let fn = function closed() {};
const hdr = document.querySelector('.hdr');
const mdl = document.querySelector('.mdl');
const ftr = document.querySelector('.ftr');

// create html page
const div = document.createElement('div');
const closeIcon = document.createElement('img');
div.className = 'lgo_btn_vew';
div.id = 'lgo_btn_vew';
div.style.width = '100vw';
div.style.height = '100vh';
div.style.backgroundColor = '#6070ff';
div.style.mixBlendMode = 'multiply';
div.style.position = 'fixed';
// adding list of menu items
const mblMnu = document.createElement('ul');
mblMnu.className = 'mbl_mnu';
mblMnu.style.marginTop = '62px';
mblMnu.style.listStylem = 'none';
for (let i = 0; i < 3; i += 1) {
  const mnuItm = document.createElement('li');
  mnuItm.style.marginBottom = '40px';
  mnuItm.className = `menu_item${i}`;
  const lnk = document.createElement('a');

  if (i === 0) {
    lnk.appendChild(document.createTextNode('Portfolio'));
    lnk.href = '#';
  } else if (i === 1) {
    lnk.appendChild(document.createTextNode('About'));
    lnk.href = '#abtmslf';
  } else {
    lnk.appendChild(document.createTextNode('Contact'));
    lnk.href = '#footer';
  }
  lnk.style.fontFamily = 'Poppins,sans-serif';
  lnk.style.fontStyle = 'normal';
  lnk.style.fontWeight = '600';
  lnk.style.fontSize = '32px';
  lnk.style.textDecoration = 'none';
  lnk.style.color = '#fff';

  fn = () => {
    div.style.opacity = '0';
    div.style.visibility = 'hidden';
    hdr.style.filter = 'blur(0)';
    mdl.style.filter = 'blur(0)';
    ftr.style.filter = 'blur(0)';
  };
  lnk.addEventListener('click', fn);
  mnuItm.appendChild(lnk);
  mblMnu.appendChild(mnuItm);
}
div.appendChild(mblMnu);
closeIcon.src = 'images/close-icon.png';
closeIcon.style.width = '15px';
closeIcon.style.height = '15px';
closeIcon.style.cursor = 'pointer';
closeIcon.style.marginTop = '18px';
closeIcon.style.marginRight = '55px';
closeIcon.style.backgroundColor = 'transparent';
closeIcon.addEventListener('click', fn);
div.appendChild(closeIcon);
document.body.appendChild(div);
div.style.display = 'flex';
div.style.transition = 'visibility 0.3s, filter 1s, opacity 0.3s linear';
div.style.visibility = 'hidden';
div.style.opacity = '0';
function hmBrgrBtn() {
  div.style.opacity = '1';
  div.style.visibility = 'visible';
  div.style.justifyContent = 'space-between';
  hdr.style.filter = 'blur(5px)';
  mdl.style.filter = 'blur(5px)';
  ftr.style.filter = 'blur(5px)';
}

const btn = document.querySelector('#hmbrgr');
btn.addEventListener('click', hmBrgrBtn);