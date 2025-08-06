const keyboard = document.createElement('div');
keyboard.className = 'keyboard';

function createKey(label, size = 'tiny') {
  const key = document.createElement('div');
  key.className = 'key ' + size;
  key.textContent = label;
  key.addEventListener('click', () => console.log('Pressed: ' + label));
  return key;
}

function spacer() {
  const s = document.createElement('div');
  s.className = 'spacer';
  return s;
}

function row() {
  const r = document.createElement('div');
  r.className = 'row';
  return r;
}

const r1 = row();
r1.appendChild(createKey('Esc', 'tiny'));
r1.appendChild(spacer());
['F1', 'F2', 'F3', 'F4'].forEach(k => r1.appendChild(createKey(k, 'tiny')));
r1.appendChild(spacer());
['F5', 'F6', 'F7', 'F8'].forEach(k => r1.appendChild(createKey(k, 'tiny')));
r1.appendChild(spacer());
['F9', 'F10', 'F11', 'F12'].forEach(k => r1.appendChild(createKey(k, 'tiny')));
keyboard.appendChild(r1);

const r2 = row();
['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].forEach(k => r2.appendChild(createKey(k, 'tiny')));
r2.appendChild(createKey('Backspace', 'medium'));
keyboard.appendChild(r2);

const r3 = row();
r3.appendChild(createKey('Tab', 'small'));
['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].forEach(k => r3.appendChild(createKey(k, 'tiny')));
keyboard.appendChild(r3);

const r4 = row();
r4.appendChild(createKey('Caps Lock', 'medium'));
['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"].forEach(k => r4.appendChild(createKey(k, 'tiny')));
r4.appendChild(createKey('Enter', 'medium'));
keyboard.appendChild(r4);

const r5 = row();
r5.appendChild(createKey('Shift', 'large'));
['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'].forEach(k => r5.appendChild(createKey(k, 'tiny')));
r5.appendChild(createKey('Shift', 'large'));
keyboard.appendChild(r5);

const r6 = row();
['Ctrl', 'Fn', 'Win', 'Alt'].forEach(k => r6.appendChild(createKey(k, 'small')));
r6.appendChild(createKey('Space', 'xlarge'));
['Alt', 'Menu', 'Ctrl'].forEach(k => r6.appendChild(createKey(k, 'small')));
keyboard.appendChild(r6);

const r7 = row();
r7.style.justifyContent = 'center';
['←', '↓', '→'].forEach(k => r7.appendChild(createKey(k, 'tiny')));
keyboard.appendChild(r7);

document.body.appendChild(keyboard);

const style = document.createElement('style');
style.textContent = `
body {
  background: #1e1e2f;
  display: flex;
  justify-content: center;
  padding: 2em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
}
.keyboard {
  background: #2a2a3b;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.row {
  display: flex;
  gap: 6px;
}
.key {
  background: #3b3b4f;
  color: #e0e0e0;
  border: 1px solid #4a4a6a;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 0;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  user-select: none;
  position: relative;
  overflow: hidden;
  z-index: 0;
}
.key::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(270deg, red, yellow, lime, cyan, blue, magenta, red);
  background-size: 400% 400%;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.2s ease;
}
.key:hover::before {
  animation: rgb-shift 3s infinite linear;
  opacity: 1;
}
.key:hover {
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
@keyframes rgb-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.tiny { width: 44px; }
.small { width: 60px; }
.medium { width: 90px; }
.large { width: 130px; }
.xlarge { width: 300px; }
.spacer {
  width: 30px;
}
`;
document.head.appendChild(style);const keyboard = document.createElement('div');
keyboard.className = 'keyboard';

function createKey(label, size = 'tiny') {
  const key = document.createElement('div');
  key.className = 'key ' + size;
  key.textContent = label;
  key.addEventListener('click', () => console.log('Pressed: ' + label));
  return key;
}

function spacer() {
  const s = document.createElement('div');
  s.className = 'spacer';
  return s;
}

function row() {
  const r = document.createElement('div');
  r.className = 'row';
  return r;
}

const r1 = row();
r1.appendChild(createKey('Esc', 'tiny'));
r1.appendChild(spacer());
['F1', 'F2', 'F3', 'F4'].forEach(k => r1.appendChild(createKey(k, 'tiny')));
r1.appendChild(spacer());
['F5', 'F6', 'F7', 'F8'].forEach(k => r1.appendChild(createKey(k, 'tiny')));
r1.appendChild(spacer());
['F9', 'F10', 'F11', 'F12'].forEach(k => r1.appendChild(createKey(k, 'tiny')));
keyboard.appendChild(r1);

const r2 = row();
['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].forEach(k => r2.appendChild(createKey(k, 'tiny')));
r2.appendChild(createKey('Backspace', 'medium'));
keyboard.appendChild(r2);

const r3 = row();
r3.appendChild(createKey('Tab', 'small'));
['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].forEach(k => r3.appendChild(createKey(k, 'tiny')));
keyboard.appendChild(r3);

const r4 = row();
r4.appendChild(createKey('Caps Lock', 'medium'));
['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"].forEach(k => r4.appendChild(createKey(k, 'tiny')));
r4.appendChild(createKey('Enter', 'medium'));
keyboard.appendChild(r4);

const r5 = row();
r5.appendChild(createKey('Shift', 'large'));
['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'].forEach(k => r5.appendChild(createKey(k, 'tiny')));
r5.appendChild(createKey('Shift', 'large'));
keyboard.appendChild(r5);

const r6 = row();
['Ctrl', 'Fn', 'Win', 'Alt'].forEach(k => r6.appendChild(createKey(k, 'small')));
r6.appendChild(createKey('Space', 'xlarge'));
['Alt', 'Menu', 'Ctrl'].forEach(k => r6.appendChild(createKey(k, 'small')));
keyboard.appendChild(r6);

const r7 = row();
r7.style.justifyContent = 'center';
['←', '↓', '→'].forEach(k => r7.appendChild(createKey(k, 'tiny')));
keyboard.appendChild(r7);

document.body.appendChild(keyboard);

const style = document.createElement('style');
style.textContent = `
body {
  background: #1e1e2f;
  display: flex;
  justify-content: center;
  padding: 2em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
}
.keyboard {
  background: #2a2a3b;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.row {
  display: flex;
  gap: 6px;
}
.key {
  background: #3b3b4f;
  color: #e0e0e0;
  border: 1px solid #4a4a6a;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 0;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  user-select: none;
  position: relative;
  overflow: hidden;
  z-index: 0;
}
.key::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(270deg, red, yellow, lime, cyan, blue, magenta, red);
  background-size: 400% 400%;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.2s ease;
}
.key:hover::before {
  animation: rgb-shift 3s infinite linear;
  opacity: 1;
}
.key:hover {
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
@keyframes rgb-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.tiny { width: 44px; }
.small { width: 60px; }
.medium { width: 90px; }
.large { width: 130px; }
.xlarge { width: 300px; }
.spacer {
  width: 30px;
}
`;
document.head.appendChild(style);
