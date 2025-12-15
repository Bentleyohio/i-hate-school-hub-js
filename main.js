// ==========================================================
//  1. DEFINE THE ENTIRE HTML/CSS STRUCTURE AS A TEMPLATE STRING
// ==========================================================

const APP_STRUCTURE = `
<style>
body {
  margin: 0;
  min-height: 100vh;
  background: black;
  color: #00ff9c;
  font-family: "Courier New", monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
#matrix { position: fixed; inset: 0; z-index: -1; }
.terminal {
  background: rgba(0,0,0,.85);
  border: 1px solid #00ff9c;
  padding: 20px;
  width: 800px;
  box-shadow: 0 0 25px rgba(0,255,156,.4);
  position: relative;
  overflow-y: auto;
  max-height: 80vh;
}
h1 { margin: 0 0 10px; }
#terminalText {
  white-space: pre-wrap;
  line-height: 1.4;
  min-height: 120px;
}
.cursor {
  display:inline-block;
  width:10px;
  height:18px;
  background:#00ff9c;
  animation: blink 1s infinite;
}
@keyframes blink { 50% { opacity:0; } }
button {
  width:100%;
  margin-top:10px;
  background:black;
  color:#00ff9c;
  border:1px solid #00ff9c;
  padding:10px;
  font-family:inherit;
  cursor:pointer;
  text-align:left;
}
button:hover { background:#00ff9c; color:black; }
.credits-btn {
  position:absolute;
  bottom:10px;
  right:10px;
  width:auto;
  font-size:12px;
}
.extra-btn {
  position:absolute;
  bottom:10px;
  right:90px;
  width:auto;
  font-size:12px;
}
.credits-box {
  display:none;
  margin-top:10px;
  border-top:1px solid #00ff9c;
  padding-top:8px;
}
</style>
<canvas id="matrix"></canvas>
<div class="terminal">
  <h1>I hate school hub</h1>
  <div id="terminalText"></div><span class="cursor"></span>
  <button onclick="openBlank()">> launch_about_blank</button>
  <button onclick="launchBritishMan()">> launch_british_man</button>
  <button onclick="runEliteGamez()">> elite_gamez</button>
  <button class="extra-btn" onclick="openExtra()">extra</button>
  <button class="credits-btn" onclick="openCredits()">credits</button>
  <div id="creditsBox" class="credits-box"></div>
</div>
`;

// ==========================================================
//  2. INJECT THE STRUCTURE INTO THE DOCUMENT BODY
// ==========================================================

// This is the key fix: clear the body and insert the structure
document.body.innerHTML = '';
document.body.insertAdjacentHTML('afterbegin', APP_STRUCTURE);


// ==========================================================
//  3. ALL APPLICATION LOGIC (NOW THE ELEMENTS EXIST)
// ==========================================================

// Get the terminal text element (now it exists!)
const terminalText = document.getElementById("terminalText"); 

// ===== TERMINAL STARTUP =====
const bootLines = [
    "Initializing system...",
    "Running diagnostics...",
    "byp@ss protocol engaged...",
    "she was 12, oliver...",
    "unbl0k3d mode enabled...",
    "System online."
];

let bi = 0;
(function boot() {
    if (bi >= bootLines.length) return;
    let line = bootLines[bi], i = 0;
    (function type() {
        if (i < line.length) {
            terminalText.textContent += line[i++];
            setTimeout(type, 40);
        } else {
            terminalText.textContent += "\n";
            bi++;
            setTimeout(boot, 400);
        }
    })();
})();

function log(msg) {
    terminalText.textContent += msg + "\n";
    const maxLines = 50;
    let lines = terminalText.textContent.split("\n");
    if (lines.length > maxLines) {
        terminalText.textContent = lines.slice(-maxLines).join("\n");
    }
    terminalText.scrollTop = terminalText.scrollHeight;
}

// ===== ABOUT:BLANK + ANTI-CLOSE =====
function createPopup(url) {
    const win = window.open("about:blank", "_blank", "width=900,height=600");
    if (!win) { alert("Popup blocked"); return; }
    fetch(url)
        .then(r => r.text())
        .then(html => {
            win.document.open();
            win.document.write(html);
            win.document.close();
            win.onbeforeunload = e => { e.preventDefault(); return ""; };
        });
}

// ===== BUTTONS =====
function openBlank() {
    const u = prompt("Paste URL:");
    if (u) { log("Launching about:blank..."); createPopup(u); }
}

function launchBritishMan() {
    log("Launching british man...");
    const w = window.open("https://html.cafe/xa4dd0de0", "_blank", "width=900,height=600");
    if (!w) { alert("Popup blocked"); return; }
    w.onbeforeunload = e => { e.preventDefault(); return ""; };
}

function runEliteGamez() {
    log("Executing elite_gamez...");
    createPopup("https://cdn.jsdelivr.net/gh/elite-gamez/elite-gamez.github.io@main/g67.html?=" + Date.now());
}

// ===== CREDITS =====
function openCredits() {
    const box = document.getElementById("creditsBox");
    box.style.display = box.style.display === "block" ? "none" : "block"; 
    box.textContent = "Made by Bentley, Heil Alex, hassan keys";
}

// ===== EXTRA =====
function addExtra(text, fn) {
    const b = document.createElement("button");
    b.textContent = text;
    b.onclick = fn;
    document.querySelector(".terminal").appendChild(b); 
}

let extraMenuOpen = false;

function openExtra() {
    if (extraMenuOpen) return;
    log("\nExtra Menu:");
    addExtra("1. Premium Docs", openPremiumDocs);
    addExtra("2. Hidden earrape", openHiddenFiles);
    addExtra("3. Empty", () => log("Nothing here yet"));
    extraMenuOpen = true; 
}

// ===== PREMIUM DOCS (FIXED) ===== 
function openPremiumDocs() {
    log("Opening premium documents... Initiating takeover.\n");
    const crashGifUrl = "https://cdn.discordapp.com/attachments/1332433346210299904/1374675243163189290/image0.gif?ex=693f2756&is=693dd5d6&hm=0b0e60f4512632a774f5c4d9cd2169f20b89ad64e6e843380afd6879509583e9";
    
    function waiting() {
        const elem = document.createElement("div");
        const body = document.getElementsByTagName("body")[0]; 
        if (body) { 
            body.appendChild(elem);
        }
        elem.style.position = "fixed";
        elem.style.top = "0";
        elem.style.left = "0";
        elem.style.width = "100%";
        elem.style.height = "100%";
        elem.style.zIndex = 99999999; 
        elem.style.opacity = 1;
        elem.style.backgroundImage = `url('${crashGifUrl}')`;
        elem.style.backgroundSize = "cover";
        elem.style.backgroundPosition = "center";
        elem.id = "elem";
    }
    
    function applyGlitchEffect(e) {
        const glitchGifUrl = "https://cdn.discordapp.com/attachments/999685490036965447/1182346564786720798/HULK-SMASH.gif?ex=6940d54b&is=693f83cb&hm=dfb9f63479dec3fbd475622e2c3261dbd486e9c10c32efea5ba902b643b48c3f";
        for (const child of e.childNodes) {
            applyGlitchEffect(child);
            if (child.style) {
                child.style.backgroundImage = `url(${glitchGifUrl})`;
            }
        }
    }
    applyGlitchEffect(document);

    setTimeout(waiting, 900);

    setTimeout(() => {
        log("SYSTEM LOCKUP INITIATED: UNSTABLE RELOAD LOOP.");
        while (true) {
            window.location.reload(1);
        }
    }, 1800);
}

// ===== HIDDEN EARRAPE =====
function openHiddenFiles() {
    log("Launching hidden audio...\n");
    alert('High pitched noise! Press H to hide.');
    const s='https://www.youtube.com/embed/MMNa8yqUEbE';
    const b=document.createElement('iframe');
    b.src=s;
    b.id='rusic-modal';
    b.style='position:fixed;z-index:999999;width:400px;height:270px;left:10px;top:10px;border:5px solid #009933;overflow:hidden;background:#fff;';
    document.body.appendChild(b);
    window.addEventListener('keydown', function(e){ if(e.key=='h') b.style.left='-1000000000000px'; });
}

// ===== MATRIX =====
const c = document.getElementById("matrix");
if (c) {
    const ctx = c.getContext("2d");
    c.width = window.innerWidth; 
    c.height = window.innerHeight;
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const drops = Array(Math.floor(c.width / 16)).fill(1);

    setInterval(() => {
        ctx.fillStyle = "rgba(0,0,0,.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#00ff9c";
        ctx.font = "16px monospace";
        drops.forEach((y,i)=>{
            ctx.fillText(chars[Math.floor(Math.random()*chars.length)], i*16, y*16);
            if(y*16>c.height && Math.random()>.975) drops[i]=0;
            drops[i]++;
        });
    },35);

    window.onresize = () => { c.width = window.innerWidth; c.height = window.innerHeight; }
} else {
    console.error("Matrix canvas element not found.");
}
