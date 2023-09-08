/**
 * This is the first browser extension I make. The code is clearly not well organized (I could have splitted it into separated files), but I just wanted to get the ideas out of my mind. May be in the future I'll spend some time making it prettier :-)
 *
 */

//Define components

const navbar =
  document.querySelector("#navbar").firstElementChild.firstElementChild;
const toolsIcon = document.createElement("div");
const toolsMenu = document.createElement("div");

//Activate toolsIcon

toolsIcon.classList.add("tools-icon");
toolsIcon.innerHTML = `
<div><img src="https://joaotextor.com/eproc-tools/eprocTools-icon.png" alt="eprocTools Icon"/></div>
`;

toolsIcon.onclick = () => {
  toolsMenu.classList.toggle("show");
};

//Activate toolsMenu
toolsMenu.classList.add("tools-menu");

toolsMenu.innerHTML = `
  <ul>
  <li><span>Processos de Saúde</span></li>
  
  <li><a href="https://bit.ly/ProcSaudeRSERE01" target="_blank"><img src="https://joaotextor.com/eproc-tools/saldos-icon.png" alt="saldos saude icon"/>Saldos - Processos de Medicamentos</a></li>

  <li><a href="https://www.cnj.jus.br/e-natjus/" target="_blank"><img src="https://joaotextor.com/eproc-tools/natjus-icon.png" alt="natjus icon"/>NatJus</a></li>

  <li><span>Constrição de Bens e Valores</span></li>
  
  <li><a href="https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=sisbajud&redirect_uri=https%3A%2F%2Fsisbajud.cnj.jus.br%2F&state=794f2f56-2dc4-4fb2-b64c-2ac431a8c1be&response_mode=fragment&response_type=code&scope=openid&nonce=2bc8c1f1-996c-4192-85ae-a737d7cc4ac0" target="_blank"><img src="https://intrars2.trf4.jus.br/wp-content/uploads/2014/03/7fa22e0d48fea6a53159cb7e66d9f938.png" alt="sisbajud icon"/>SISBAJUD</a></li>

  <li><a href="https://renajud.pdpj.jus.br" target="_blank"><img src="https://intrars2.trf4.jus.br/wp-content/uploads/2014/03/1ec87e64f5e5e06801cfec2f9b3d76f7.png" alt="renajud icon"/>RENAJUD/RS</a></li>

  <li><a href="https://www.indisponibilidade.org.br/autenticacao/" target="_blank"><img src="https://intrars2.trf4.jus.br/wp-content/uploads/2015/03/e5d34badfc8eba336ffea5faae5d3596.png" alt="cnib icon"/>CNIB</a></li>

  <li><span>Comunicação</span></li>

  <li><a href="https://malotedigital.cjf.jus.br/malotedigital/login.jsf" target="_blank"><img src="https://intrars2.trf4.jus.br/wp-content/uploads/2014/03/b887c61ba067ab4ca10b6d9c57b1d7f8.png" alt="malote icon"/>Malote Digital</a></li>

  <li><a href="https://www.jfsc.jus.br/agenda/login.xhtml" target="_blank"><img src="https://intrars2.trf4.jus.br/wp-content/uploads/2020/08/7c59d0f9e770d1a87ac10547fa31b4ce.png" alt="balcão virtual icon"/>Balcão Virtual</a></li>

  <li><span>Outros</span></li>

  <li><a href="https://joaotextor.com/diasuteis" target="_blank"><img src="https://joaotextor.com/eproc-tools/diasuteis-icon.png" alt="dias uteis icon"/>Calculadora de Dias Úteis</a></li>

  <li><a href="https://joaotextor.com/cumprimento-mandados" target="_blank"><img src="https://joaotextor.com/eproc-tools/mandados-icon.png" alt="mandados icon"/>Cumprimento de Mandados</a></li>

  <li><a href="https://bit.ly/DativosRSERE01" target="_blank"><img src="https://joaotextor.com/eproc-tools/dativos-icon.png" alt="dativos icon"/>Lista de Dativos</a></li>

  <li><a href="https://ajg1.cjf.jus.br/aj/seguranca/efetuarloginintranet/efetuarLoginIntranet_efetuarLogin.jsf?conversationId=4435&conversationIsLongRunning=true" target="_blank"><img src="https://intrars2.trf4.jus.br/wp-content/uploads/2014/03/9aaf9575839b3d6a8993c307552ce624.png" alt="ajg icon"/>AJG - Nomeações e Pagamentos</a></li>  
  </ul>
  `;

navbar.appendChild(toolsIcon);
navbar.appendChild(toolsMenu);

// Position menu
toolsMenu.style.top = toolsIcon.getBoundingClientRect().top + 25 + "px";
toolsMenu.style.left = toolsIcon.getBoundingClientRect().left + "px";

//Make menu disappear when clicking outside of it
window.onclick = (e) => {
  if (
    e.clientX > toolsIcon.getBoundingClientRect().left &&
    e.clientX < toolsIcon.getBoundingClientRect().right &&
    e.clientY > toolsIcon.getBoundingClientRect().top &&
    e.clientY < toolsIcon.getBoundingClientRect().bottom
  ) {
    return;
  }

  if (
    e.clientX < toolsMenu.getBoundingClientRect().left ||
    e.clientX > toolsMenu.getBoundingClientRect().right ||
    e.clientY < toolsMenu.getBoundingClientRect().top ||
    e.clientY > toolsMenu.getBoundingClientRect().bottom
  ) {
    toolsMenu.classList.remove("show");
  }
};
