
// stats.js r6 - http://github.com/mrdoob/stats.js
var Stats = function () {
    function s(a, g, d) { var f, c, e; for (c = 0; c < 30; c++)for (f = 0; f < 73; f++)e = (f + c * 74) * 4, a[e] = a[e + 4], a[e + 1] = a[e + 5], a[e + 2] = a[e + 6]; for (c = 0; c < 30; c++)e = (73 + c * 74) * 4, c < g ? (a[e] = b[d].bg.r, a[e + 1] = b[d].bg.g, a[e + 2] = b[d].bg.b) : (a[e] = b[d].fg.r, a[e + 1] = b[d].fg.g, a[e + 2] = b[d].fg.b) } var r = 0, t = 2, g, u = 0, j = (new Date).getTime(), F = j, v = j, l = 0, w = 1E3, x = 0, k, d, a, m, y, n = 0, z = 1E3, A = 0, f, c, o, B, p = 0, C = 1E3, D = 0, h, i, q, E, b = {
        fps: { bg: { r: 16, g: 16, b: 48 }, fg: { r: 0, g: 255, b: 255 } }, ms: { bg: { r: 16, g: 48, b: 16 }, fg: { r: 0, g: 255, b: 0 } }, mb: {
            bg: {
                r: 48, g: 16,
                b: 26
            }, fg: { r: 255, g: 0, b: 128 }
        }
    }; g = document.createElement("div"); 
    g.style.cursor = "pointer"; 
    g.style.width = "80px"; 
    g.style.opacity = "0.9"; 
    g.style.zIndex = "10001"; 
    g.addEventListener("click", function () { r++; r == t && (r = 0); 
        k.style.display = "none"; 
        f.style.display = "none"; 
        h.style.display = "none"; 
        switch (r) { case 0: k.style.display = "block"; 
            break; case 1: f.style.display = "block"; 
            break; case 2: h.style.display = "block" } }, !1); 
            k = document.createElement("div"); 
            k.style.backgroundColor = "rgb(" + Math.floor(b.fps.bg.r / 2) + "," + Math.floor(b.fps.bg.g /
        2) + "," + Math.floor(b.fps.bg.b / 2) + ")"; k.style.padding = "2px 0px 3px 0px"; 
        g.appendChild(k); 
        d = document.createElement("div"); 
        d.style.fontFamily = "Helvetica, Arial, sans-serif"; 
        d.style.textAlign = "left"; 
        d.style.fontSize = "9px"; 
        d.style.color = "rgb(" + b.fps.fg.r + "," + b.fps.fg.g + "," + b.fps.fg.b + ")"; 
        d.style.margin = "0px 0px 1px 3px"; d.innerHTML = '<span style="font-weight:bold">FPS</span>'; 
        k.appendChild(d);
        a = document.createElement("canvas");
        a.width = 74;
        a.height = 30;
        a.style.display = "block";
        a.style.marginLeft = "3px";
        k.appendChild(a);
    m = a.getContext("2d");
     m.fillStyle = "rgb(" + b.fps.bg.r + "," + b.fps.bg.g + "," + b.fps.bg.b + ")";
      m.fillRect(0, 0, a.width, a.height);
       y = m.getImageData(0, 0, a.width, a.height);
        f = document.createElement("div");
         f.style.backgroundColor = "rgb(" + Math.floor(b.ms.bg.r / 2) + "," + Math.floor(b.ms.bg.g / 2) + "," + Math.floor(b.ms.bg.b / 2) + ")";
          f.style.padding = "2px 0px 3px 0px"; f.style.display = "none";
           g.appendChild(f); c = document.createElement("div");
            c.style.fontFamily = "Helvetica, Arial, sans-serif";
             c.style.textAlign = "left"; c.style.fontSize = "9px";
         c.style.color = "rgb(" + b.ms.fg.r + "," + b.ms.fg.g + "," + b.ms.fg.b + ")";
        c.style.margin = "0px 0px 1px 3px"; c.innerHTML = '<span style="font-weight:bold">MS</span>';
        f.appendChild(c); a = document.createElement("canvas");
        a.width = 74; a.height = 30; a.style.display = "block"; a.style.marginLeft = "3px"; f.appendChild(a);
        o = a.getContext("2d"); o.fillStyle = "rgb(" + b.ms.bg.r + "," + b.ms.bg.g + "," + b.ms.bg.b + ")";
        o.fillRect(0, 0, a.width, a.height); B = o.getImageData(0, 0, a.width, a.height); try {
        performance && performance.memory && performance.memory.totalJSHeapSize && (t = 3)
        } catch (G) { } h = document.createElement("div"); h.style.backgroundColor = "rgb(" + Math.floor(b.mb.bg.r / 2) + "," + Math.floor(b.mb.bg.g / 2) + "," + Math.floor(b.mb.bg.b / 2) + ")";
        h.style.padding = "2px 0px 3px 0px"; h.style.display = "none";
        g.appendChild(h);
        i = document.createElement("div"); i.style.fontFamily = "Helvetica, Arial, sans-serif"; i.style.textAlign = "left"; i.style.fontSize = "9px"; i.style.color = "rgb(" + b.mb.fg.r + "," + b.mb.fg.g + "," + b.mb.fg.b + ")"; 
        i.style.margin = "0px 0px 1px 3px"; i.innerHTML = '<span style="font-weight:bold">MB</span>';
        h.appendChild(i);
        a = document.createElement("canvas");
        a.width = 74; a.height = 30; a.style.display = "block"; a.style.marginLeft = "3px"; h.appendChild(a);
        q = a.getContext("2d"); q.fillStyle = "#301010"; q.fillRect(0, 0, a.width, a.height);
        E = q.getImageData(0, 0, a.width, a.height); return {
        domElement: g, update: function () {
            u++; j = (new Date).getTime(); n = j - F; z = Math.min(z, n); A = Math.max(A, n); s(B.data, Math.min(30, 30 - n / 200 * 30), "ms"); c.innerHTML = '<span style="font-weight:bold">' + n + " MS</span> (" + z + "-" + A + ")";
             o.putImageData(B, 0, 0);
              F = j; if (j > v + 1E3) { l = Math.round(u * 1E3 / (j - v)); w = Math.min(w, l);
                 x = Math.max(x, l);
                  s(y.data, Math.min(30, 30 - l / 100 * 30), "fps");
                   d.innerHTML = '<span style="font-weight:bold">' + l + " FPS</span> (" + w + "-" + x + ")"; 
                   m.putImageData(y, 0, 0); if (t == 3) p = performance.memory.usedJSHeapSize * 9.54E-7, C = Math.min(C, p), D = Math.max(D, p), s(E.data, Math.min(30, 30 - p / 2), "mb"), i.innerHTML = '<span style="font-weight:bold">' + Math.round(p) + " MB</span> (" + Math.round(C) + "-" + Math.round(D) + ")", q.putImageData(E, 0, 0); v = j;
                    u = 0 }
        }
    }
};



    //-------------------------------------------------------------------------
    // base helper methods
    //-------------------------------------------------------------------------

    function get(id)        { return document.getElementById(id);  }
    function hide(id)       { get(id).style.visibility = 'hidden'; }
    function show(id)       { get(id).style.visibility = null;     }
    function html(id, html) { get(id).innerHTML = html;            }

    function timestamp()           { return new Date().getTime();                             }
    function random(min, max)      { return (min + (Math.random() * (max - min)));            }
    function randomChoice(choices) { return choices[Math.round(random(0, choices.length-1))]; }

    if (!window.requestAnimationFrame) { // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
      window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
                                     window.mozRequestAnimationFrame    ||
                                     window.oRequestAnimationFrame      ||
                                     window.msRequestAnimationFrame     ||
                                     function(callback, element) {
                                       window.setTimeout(callback, 1000 / 60);
                                     }
    }

    //-------------------------------------------------------------------------
    // game constants
    //-------------------------------------------------------------------------

    var KEY     = { ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
        DIR     = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3, MIN: 0, MAX: 3 },
        stats   = new Stats(),
        canvas  = get('canvas'),
        ctx     = canvas.getContext('2d'),
        ucanvas = get('upcoming'),
        uctx    = ucanvas.getContext('2d'),
        speed   = { start: 0.6, decrement: 0.005, min: 0.1 }, // how long before piece drops by 1 row (seconds)
        nx      = 10, // width of tetris court (in blocks)
        ny      = 20, // height of tetris court (in blocks)
        nu      = 5;  // width/height of upcoming preview (in blocks)

    //-------------------------------------------------------------------------
    // TEMAS VISUAIS
    //-------------------------------------------------------------------------

    var THEMES = {
      classic: { className: 'theme-classic' },
      ocean: { className: 'theme-ocean' },
      red: { className: 'theme-red' },
      neon: { className: 'theme-neon' },
      magic: { className: 'theme-magic' }
    };

    var currentTheme = 'classic';

    function applyTheme(themeName) {
      if (!THEMES[themeName]) themeName = 'classic';
      currentTheme = themeName;
      var body = document.body;
      body.classList.remove('theme-classic', 'theme-ocean', 'theme-red', 'theme-neon', 'theme-magic');
      body.classList.add(THEMES[themeName].className);
      var select = get('theme-select');
      if (select) select.value = themeName;
      try { localStorage.setItem('tetris-theme', themeName); } catch (e) {}
      invalidate();
      invalidateNext();
    }

    function initializeTheme() {
      var savedTheme = null;
      try { savedTheme = localStorage.getItem('tetris-theme'); } catch (e) { savedTheme = null; }
      if (!savedTheme || !THEMES[savedTheme]) savedTheme = 'classic';
      currentTheme = savedTheme;
      document.body.classList.remove('theme-classic', 'theme-ocean', 'theme-red', 'theme-neon', 'theme-magic');
      document.body.classList.add(THEMES[savedTheme].className);
      var select = get('theme-select');
      if (select) {
        select.value = savedTheme;
        select.addEventListener('change', function() {
          applyTheme(this.value);
        });
      }
    }

    //-------------------------------------------------------------------------
    // game variables (initialized during reset)
    //-------------------------------------------------------------------------

    var dx, dy,        // pixel size of a single tetris block
        blocks,        // 2 dimensional array (nx*ny) representing tetris court - either empty block or occupied by a 'piece'
        actions,       // queue of user actions (inputs)
        playing,       // true|false - game is in progress
        paused,        // true|false - game is currently paued (to differentiate need for reset)
        dt,            // time since starting this game
        current,       // the current piece
        next,          // the next piece
        score,         // the current score
        vscore,        // the currently displayed score (it catches up to score in small chunks - like a spinning slot machine)
        rows,          // number of completed rows in the current game
        step;          // how long before current piece drops by 1 row

    //-------------------------------------------------------------------------
    // tetris pieces
    //
    // blocks: each element represents a rotation of the piece (0, 90, 180, 270)
    //         each element is a 16 bit integer where the 16 bits represent
    //         a 4x4 set of blocks, e.g. j.blocks[0] = 0x44C0
    //
    //             0100 = 0x4 << 3 = 0x4000
    //             0100 = 0x4 << 2 = 0x0400
    //             1100 = 0xC << 1 = 0x00C0
    //             0000 = 0x0 << 0 = 0x0000
    //                               ------
    //                               0x44C0
    //
    //-------------------------------------------------------------------------

    
    var i = { size: 4, blocks: [0x0F00, 0x2222, 0x00F0, 0x4444], color: 'red'   };
    var j = { size: 3, blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20], color: 'green'   };
    var l = { size: 3, blocks: [0x4460, 0x0E80, 0xC440, 0x2E00], color: 'blue' };
    var o = { size: 2, blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00], color: 'orange' };
    var s = { size: 3, blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620], color: 'purple'  };
    var t = { size: 3, blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640], color: 'yellow' };
    var z = { size: 3, blocks: [0x0C60, 0x4C80, 0xC600, 0x2640], color: 'pink'    };
    var Plus = { size: 3, blocks: [0x4E40, 0x4E40, 0x4E40, 0x4E40], color: 'teal'    };
    var oo = { size: 4, blocks: [0xCCcc, 0x00ff, 0xCCcc, 0x00ff], color: 'maroon' };  


    //------------------------------------------------
    // do the bit manipulation and iterate through each   
    // occupied block (x,y) for a given piecere
    //------------------------------------------------
    function eachblock(type, x, y, dir, fn) {
      var bit, result, row = 0, col = 0, blocks = type.blocks[dir];
      for(bit = 0x8000 ; bit > 0 ; bit = bit >> 1) {
        if (blocks & bit) {
          fn(x + col, y + row);
        }
        if (++col === 4) {
          col = 0;
          ++row;
        }
      }
    }

    //-----------------------------------------------------
    // check if a piece can fit into a position in the grid
    //-----------------------------------------------------
    function occupied(type, x, y, dir) {
      var result = false
      eachblock(type, x, y, dir, function(x, y) {
        if ((x < 0) || (x >= nx) || (y < 0) || (y >= ny) || getBlock(x,y))
          result = true;
      });
      return result;
    }

    function unoccupied(type, x, y, dir) {
      return !occupied(type, x, y, dir);
    }

    //-----------------------------------------
    // start with 4 instances of each piece and
    // pick randomly until the 'bag is empty'
    //-----------------------------------------
    var pieces = [];
    function randomPiece() {
      if (pieces.length == 0)
        pieces = [i,i,i,i,j,j,j,j,l,l,l,l,o,o,o,o,s,s,s,s,t,t,t,t,z,z,z,z,Plus,Plus,Plus,Plus,oo,oo,oo,oo];
      var type = pieces.splice(random(0, pieces.length-1), 1)[0];
      return { type: type, dir: DIR.UP, x: Math.round(random(0, nx - type.size)), y: 0 };
    }


    //-------------------------------------------------------------------------
    // GAME LOOP
    //-------------------------------------------------------------------------

    function run() {

      showStats(); // initialize FPS counter
      addEvents(); // attach keydown and resize events

      var last = now = timestamp();
      function frame() {
        now = timestamp();
        update(Math.min(1, (now - last) / 1000.0)); // using requestAnimationFrame have to be able to handle large delta's caused when it 'hibernates' in a background or non-visible tab
        draw();
        stats.update();
        last = now;
        requestAnimationFrame(frame, canvas);
      }

      resize(); // setup all our sizing information
      initAchievements(); // render initial achievements on screen
      reset();  // reset the per-game variables
      frame();  // start the first frame

    }

    function showStats() {
      stats.domElement.id = 'stats';
      get('menu').appendChild(stats.domElement);
    }

    function addEvents() {
      document.addEventListener('keydown', keydown, false);
      window.addEventListener('resize', resize, false);
      get('restartButton').addEventListener('click', restartGame, false);
      get('game-over-restart').addEventListener('click', function() {
        window.location.reload();
      });
    }
    
function restartGame() {
    reset();
    closeGameModal();

    var gameOverScreen = get('game-over');
    if (gameOverScreen) {
        gameOverScreen.hidden = true;
    }

    hide('start');
    paused = false;
    playing = true;

    if (window.TetrisAudio) {
        TetrisAudio.startMusic();
    }
}

    function resize(event) {
      canvas.width   = canvas.clientWidth;  // set canvas logical size equal to its physical size
      canvas.height  = canvas.clientHeight; // (ditto)
      ucanvas.width  = ucanvas.clientWidth;
      ucanvas.height = ucanvas.clientHeight;
      dx = canvas.width  / nx; // pixel size of a single tetris block
      dy = canvas.height / ny; // (ditto)
      invalidate();
      invalidateNext();
    }

    function keydown(ev) {
      var handled = false;
      if (!get('game-over').hidden)
        return;
      if (playing) {
        switch(ev.keyCode) {
          case KEY.LEFT:   actions.push(DIR.LEFT);  handled = true; break;
          case KEY.RIGHT:  actions.push(DIR.RIGHT); handled = true; break;
          case KEY.UP:     actions.push(DIR.UP);    handled = true; break;
          case KEY.DOWN:   actions.push(DIR.DOWN);  handled = true; break;
          case KEY.ESC:    lose();                  handled = true; break;
          case KEY.SPACE:  pause();                 handled = true; break;
        }
      }
      else if (ev.keyCode == KEY.SPACE) {
        if(paused) {
            
          }else{
            play();
            handled = true;
          }
      }
      if (handled)
        ev.preventDefault(); // prevent arrow keys from scrolling the page (supported in IE9+ and all other browsers)
    }

    //-------------------------------------------------------------------------
    // GAME LOGIC
    //-------------------------------------------------------------------------
 const resume = get('resume');

resume.addEventListener('click', function() {
    closeGameModal();
    resumeCountdown();
});

function openGameModal() {
    hide('start');
    show('container-pause');

    get('container-pause').style.visibility = 'visible';
    paused = true;
    playing = false;
}

function closeGameModal() {
    get('container-pause').style.visibility = 'hidden';
}

function resumeCountdown() {
    let countdown = 5;

    const countdownElement = get('start');
    show('start');

   countdownElement.textContent = `O jogo vai começar em: ${countdown}`;

    const interval = setInterval(function() {
        countdown--;

        countdownElement.textContent = `O jogo vai começar em: ${countdown}`;

        if (countdown === 0) {
            clearInterval(interval);
            hide('start');

            paused = false;
            playing = true;
        }
    }, 1000);
}

function play() {
    hide('start');
    reset();
    paused = false;
    playing = true;

    if (window.TetrisAudio) {
        TetrisAudio.startMusic();
    }
}

function pause() {
  show('start');
    paused = true;
    playing = false;
    openGameModal();
  
}

function restart() {
  closeGameModal();
  resumeCountdown();
   
  if (window.TetrisAudio) {
    TetrisAudio.startMusic();
     }
}
    
function lose() {
    hide('start');
    setVisualScore();

    html('game-over-score', ("00000" + Math.floor(score)).slice(-5));
    html('game-over-rows', rows);
    html('game-over-level', getLevel());

    renderGameOverAchievements();
    drawGameOverPiece();

    get('game-over').hidden = false;
    playing = false;

    if (window.TetrisAudio) {
        TetrisAudio.stopMusic();
    }
}


    function drawGameOverPiece() {
      var pieceCanvas = get('game-over-piece');
      var pieceContext;
      var padding = (nu - current.type.size) / 2;
      pieceCanvas.width = nu * dx;
      pieceCanvas.height = nu * dy;
      pieceContext = pieceCanvas.getContext('2d');
      pieceContext.save();
      pieceContext.lineWidth = 1;
      pieceContext.translate(0.5, 0.5);
      drawPiece(pieceContext, current.type, padding, padding, current.dir);
      pieceContext.restore();
    }

    function setVisualScore(n)      { vscore = n || score; invalidateScore(); }
    function setScore(n)            { score = n; setVisualScore(n); checkAchievements(); }
    function addScore(n)            { score = score + n; checkAchievements(); }
    function clearScore()           { setScore(0); }
    function clearRows()            { setRows(0); }
    function setRows(n)             { rows = n; step = Math.max(speed.min, speed.start - (speed.decrement*rows)); invalidateRows(); checkAchievements(); }
    function addRows(n)             { setRows(rows + n); }
    function getBlock(x,y)          { return (blocks && blocks[x] ? blocks[x][y] : null); }
    function setBlock(x,y,type)     { blocks[x] = blocks[x] || []; blocks[x][y] = type; invalidate(); }
    function clearBlocks()          { blocks = []; invalidate(); }
    function clearActions()         { actions = []; }
    function setCurrentPiece(piece) { current = piece || randomPiece(); invalidate();     }
    function setNextPiece(piece)    { next    = piece || randomPiece(); invalidateNext(); }
    function restartGame() {reset();hide('start');paused = false;playing = true;}   

    function reset() {
      dt = 0;
      clearActions();
      clearBlocks();
      clearRows();
      clearScore();
      resetAchievements();
      if (invalid) invalid.level = true;
      setCurrentPiece(next);
      setNextPiece();
    }

    function update(idt) {
      if (playing) {
        if (vscore < score)
          setVisualScore(vscore + 1);
        handle(actions.shift());
        dt = dt + idt;
        if (dt > step) {
          dt = dt - step;
          drop();
        }
        checkAchievements();
      }
    }

    function handle(action) {
      switch(action) {
        case DIR.LEFT:  move(DIR.LEFT);  break;
        case DIR.RIGHT: move(DIR.RIGHT); break;
        case DIR.UP:    rotate();        break;
        case DIR.DOWN:  drop();          break;
      }
    }

    function move(dir) {
      var x = current.x, y = current.y;
      switch(dir) {
        case DIR.RIGHT: x = x + 1; break;
        case DIR.LEFT:  x = x - 1; break;
        case DIR.DOWN:  y = y + 1; break;
      }
      if (unoccupied(current.type, x, y, current.dir)) {
    current.x = x;
    current.y = y;
    invalidate();

    // Som apenas para movimentos manuais
    if (dir !== DIR.DOWN && window.TetrisAudio) {
        TetrisAudio.move();
    }

    return true;
}
      else {
        return false;
      }
    }

   function rotate() {
    var newdir = (current.dir == DIR.MAX
        ? DIR.MIN
        : current.dir + 1);

    if (unoccupied(current.type, current.x, current.y, newdir)) {
        current.dir = newdir;
        invalidate();

        if (window.TetrisAudio) {
            TetrisAudio.rotate();
        }
    }
}

    function drop() {
      if (!move(DIR.DOWN)) {
        if (window.TetrisAudio) {
        TetrisAudio.lock();
        }
        addScore(10);
        dropPiece();
        removeLines();
        setCurrentPiece(next);
        setNextPiece(randomPiece());
        clearActions();
        if (occupied(current.type, current.x, current.y, current.dir)) {
          lose();
        }
      }
    }

    function dropPiece() {
      eachblock(current.type, current.x, current.y, current.dir, function(x, y) {
        setBlock(x, y, current.type);
      });
    }

    function removeLines() {
      var x, y, complete, n = 0;
      for(y = ny ; y > 0 ; --y) {
        complete = true;
        for(x = 0 ; x < nx ; ++x) {
          if (!getBlock(x, y))
            complete = false;
        }
        if (complete) {
          removeLine(y);
          y = y + 1; // recheck same line
          n++;
        }
      }
      if (n > 0) {
        addRows(n);
        addScore(100*Math.pow(2,n-1)); // 1: 100, 2: 200, 3: 400, 4: 800
      }
    }

    function removeLine(n) {
      var x, y;
      for(y = n ; y >= 0 ; --y) {
        for(x = 0 ; x < nx ; ++x)
          setBlock(x, y, (y == 0) ? null : getBlock(x, y-1));
      }
    }

    //-------------------------------------------------------------------------
    // RENDERING
    //-------------------------------------------------------------------------

    var invalid = {};

    function invalidate()         { invalid.court  = true; }
    function invalidateNext()     { invalid.next   = true; }
    function invalidateScore()    { invalid.score  = true; }
    function invalidateRows()     { invalid.rows   = true; invalid.level = true; }

    function draw() {
      ctx.save();
      ctx.lineWidth = 1;
      ctx.translate(0.5, 0.5); // for crisp 1px black lines
      drawCourt();
      drawNext();
      drawScore();
      drawRows();
      drawLevel();
      ctx.restore();
    }

    function drawCourt() {
      if (invalid.court) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (playing)
          drawPiece(ctx, current.type, current.x, current.y, current.dir);
        var x, y, block;
        for(y = 0 ; y < ny ; y++) {
          for (x = 0 ; x < nx ; x++) {
            if (block = getBlock(x,y))
              drawBlock(ctx, x, y, block.color);
          }
        }
        ctx.strokeRect(0, 0, nx*dx - 1, ny*dy - 1); // court boundary
        invalid.court = false;
      }
    }

    function drawNext() {
      if (invalid.next) {
        var padding = (nu - next.type.size) / 2; // half-arsed attempt at centering next piece display
        uctx.save();
        uctx.translate(0.5, 0.5);
        uctx.clearRect(0, 0, nu*dx, nu*dy);
        drawPiece(uctx, next.type, padding, padding, next.dir);
        uctx.strokeStyle = 'black';
        uctx.strokeRect(0, 0, nu*dx - 1, nu*dy - 1);
        uctx.restore();
        invalid.next = false;
      }
    }

    function drawScore() {
      if (invalid.score) {
        html('score', ("00000" + Math.floor(vscore)).slice(-5));
        invalid.score = false;
      }
    }

    function drawRows() {
      if (invalid.rows) {
        html('rows', rows);
        invalid.rows = false;
      }
    }

    function drawLevel() {
      if (invalid.level) {
        html('level', getLevel());
        invalid.level = false;
      }
    }

    function drawPiece(ctx, type, x, y, dir) {
      eachblock(type, x, y, dir, function(x, y) {
        drawBlock(ctx, x, y, type.color);
      });
    }

    function drawBlock(ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x*dx, y*dy, dx, dy);
      ctx.strokeRect(x*dx, y*dy, dx, dy)
    }

    //-------------------------------------------------------------------------
    // SISTEMA DE CONQUISTAS
    //-------------------------------------------------------------------------

    function getLevel() {
      return Math.floor((rows || 0) / 2) + 1;
    }

    var achievements = [
      {
        id: 'rows_1',
        name: 'Primeira Linha',
        description: 'Elimine 1 linha durante a partida.',
        icon: '🎯',
        target: 1,
        unit: 'linha',
        unlocked: false,
        check: function(s) { return s.rows >= 1; },
        progress: function(s) { return Math.min(s.rows, 1) / 1; },
        currentText: function(s) { return Math.min(s.rows, 1) + ' / 1 linha'; }
      },
      {
        id: 'score_100',
        name: 'Primeiros Passos',
        description: 'Faça 100 pontos durante a partida.',
        icon: '⭐',
        target: 100,
        unit: 'pts',
        unlocked: false,
        check: function(s) { return s.score >= 100; },
        progress: function(s) { return Math.min(s.score, 100) / 100; },
        currentText: function(s) { return Math.min(s.score, 100) + ' / 100 pts'; }
      },
      {
        id: 'level_5',
        name: 'Chegar ao nível 5',
        description: 'Alcance o nível 5 de dificuldade.',
        icon: '⚡',
        target: 5,
        unit: 'nível',
        unlocked: false,
        check: function(s) { return s.level >= 5; },
        progress: function(s) { return Math.min(s.level, 5) / 5; },
        currentText: function(s) { return 'Nível ' + Math.min(s.level, 5) + ' / 5'; }
      },
      {
        id: 'rows_10',
        name: 'Eliminar 12 linhas',
        description: 'Elimine 12 linhas durante a partida.',
        icon: '🔥',
        target: 12,
        unit: 'linhas',
        unlocked: false,
        check: function(s) { return s.rows >= 12; },
        progress: function(s) { return Math.min(s.rows, 12) / 12; },
        currentText: function(s) { return Math.min(s.rows, 12) + ' / 12 linhas'; }
      },
      {
        id: 'score_1000',
        name: 'Fazer 1.000 pontos',
        description: 'Faça 1.000 pontos durante a partida.',
        icon: '💎',
        target: 1000,
        unit: 'pts',
        unlocked: false,
        check: function(s) { return s.score >= 1000; },
        progress: function(s) { return Math.min(s.score, 1000) / 1000; },
        currentText: function(s) { return Math.min(s.score, 1000) + ' / 1.000 pts'; }
      },
      {
        id: 'score_3000',
        name: 'Mestre do Tetris',
        description: 'Faça 3.000 pontos em uma única partida.',
        icon: '👑',
        target: 3000,
        unit: 'pts',
        unlocked: false,
        check: function(s) { return s.score >= 3000; },
        progress: function(s) { return Math.min(s.score, 3000) / 3000; },
        currentText: function(s) { return Math.min(s.score, 3000) + ' / 3.000 pts'; }
      }
    ];

    function getGameState() {
      return {
        score: score || 0,
        rows: rows || 0,
        level: getLevel()
      };
    }

    function initAchievements() {
      var list = get('achievements-list');
      if (!list) return;
      list.innerHTML = '';

      achievements.forEach(function(ach) {
        var item = document.createElement('li');
        item.id = 'achievement-' + ach.id;
        item.className = 'achievement-item locked';
        item.setAttribute('role', 'listitem');

        item.innerHTML =
          '<div class="achievement-item-icon" aria-hidden="true">🔒</div>' +
          '<div class="achievement-item-content">' +
            '<div class="achievement-item-top">' +
              '<span class="achievement-item-name">' + ach.name + '</span>' +
              '<span class="achievement-item-pill">Bloqueada</span>' +
            '</div>' +
            '<p class="achievement-item-desc">' + ach.description + '</p>' +
            '<div class="achievement-item-track" aria-hidden="true">' +
              '<div class="achievement-item-bar" style="width: 0%"></div>' +
            '</div>' +
            '<div class="achievement-item-meta">' +
              '<span class="achievement-item-status">' + ach.currentText({ score: 0, rows: 0, level: 1 }) + '</span>' +
              '<span class="achievement-item-percent">0%</span>' +
            '</div>' +
          '</div>';

        list.appendChild(item);
      });

      updateAchievementsUI(getGameState());
    }

    function checkAchievements() {
      var s = getGameState();
      for (var i = 0; i < achievements.length; i++) {
        var ach = achievements[i];
        // Critério 2: Uma conquista já desbloqueada não deve ser liberada novamente na mesma partida
        if (!ach.unlocked && ach.check(s)) {
          ach.unlocked = true;
          unlockAchievement(ach);
        }
      }
      updateAchievementsUI(s);
    }

    function unlockAchievement(ach) {
      playAchievementSound();
      showAchievementToast(ach);
      updateAchievementsUI(getGameState());
    }

    function playAchievementSound() {
      if (window.TetrisAudio && TetrisAudio.isMuted()) {
    return;
  }
      try {
        var AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        if (!window._tetrisAudioContext) {
          window._tetrisAudioContext = new AudioContextClass();
        }
        var ctx = window._tetrisAudioContext;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }
        var now = ctx.currentTime;
        var notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach(function(freq, idx) {
          var osc = ctx.createOscillator();
          var gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          gain.gain.setValueAtTime(0, now + idx * 0.1);
          gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.1 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.28);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.3);
        });
      } catch (e) {
        // audio optional
      }
    }

    function showAchievementToast(ach) {
      var container = get('achievement-toast-container');
      if (!container) return;

      var toast = document.createElement('div');
      toast.className = 'achievement-toast';
      toast.setAttribute('role', 'alert');

      toast.innerHTML =
        '<div class="achievement-toast-icon" aria-hidden="true">' + (ach.icon || '🏆') + '</div>' +
        '<div class="achievement-toast-body">' +
          '<span class="achievement-toast-badge">Conquista Desbloqueada!</span>' +
          '<strong class="achievement-toast-name">' + ach.name + '</strong>' +
          '<span class="achievement-toast-desc">' + ach.description + '</span>' +
        '</div>' +
        '<button class="achievement-toast-close" type="button" aria-label="Fechar">&times;</button>';

      function dismiss() {
        if (toast.classList.contains('leaving')) return;
        toast.classList.add('leaving');
        setTimeout(function() {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 380);
      }

      var closeBtn = toast.querySelector('.achievement-toast-close');
      if (closeBtn) closeBtn.addEventListener('click', dismiss);

      container.appendChild(toast);
      requestAnimationFrame(function() {
        toast.classList.add('visible');
      });

      setTimeout(dismiss, 4200);
    }

    function updateAchievementsUI(s) {
      if (!s) s = getGameState();
      var unlockedCount = 0;

      achievements.forEach(function(ach) {
        var item = get('achievement-' + ach.id);
        if (!item) return;

        var ratio = Math.max(0, Math.min(1, ach.progress(s)));
        var percent = Math.round(ratio * 100);

        if (ach.unlocked) {
          unlockedCount++;
          item.className = 'achievement-item unlocked';
          var iconEl = item.querySelector('.achievement-item-icon');
          if (iconEl) iconEl.textContent = ach.icon || '🏆';
          var pillEl = item.querySelector('.achievement-item-pill');
          if (pillEl) pillEl.textContent = '✨ Desbloqueada';
          var barEl = item.querySelector('.achievement-item-bar');
          if (barEl) barEl.style.width = '100%';
          var statusEl = item.querySelector('.achievement-item-status');
          if (statusEl) statusEl.textContent = 'Meta Concluída!';
          var percentEl = item.querySelector('.achievement-item-percent');
          if (percentEl) percentEl.textContent = '100%';
        } else {
          item.className = 'achievement-item locked';
          var iconEl = item.querySelector('.achievement-item-icon');
          if (iconEl) iconEl.textContent = '🔒';
          var pillEl = item.querySelector('.achievement-item-pill');
          if (pillEl) pillEl.textContent = 'Bloqueada';
          var barEl = item.querySelector('.achievement-item-bar');
          if (barEl) barEl.style.width = percent + '%';
          var statusEl = item.querySelector('.achievement-item-status');
          if (statusEl) statusEl.textContent = ach.currentText(s);
          var percentEl = item.querySelector('.achievement-item-percent');
          if (percentEl) percentEl.textContent = percent + '%';
        }
      });

      var counterEl = get('achievements-counter');
      if (counterEl) {
        counterEl.textContent = unlockedCount + ' / ' + achievements.length + ' Desbloqueadas';
        if (unlockedCount > 0) {
          counterEl.classList.add('has-unlocked');
        } else {
          counterEl.classList.remove('has-unlocked');
        }
      }

      var overallFill = get('achievements-overall-fill');
      if (overallFill) {
        var overallPercent = Math.round((unlockedCount / achievements.length) * 100);
        overallFill.style.width = overallPercent + '%';
      }
    }

    function resetAchievements() {
      achievements.forEach(function(ach) {
        ach.unlocked = false;
      });
      updateAchievementsUI({ score: 0, rows: 0, level: 1 });
    }

    function renderGameOverAchievements() {
      var countEl = get('game-over-achievements-count');
      var listEl = get('game-over-achievements-list');
      if (!countEl || !listEl) return;

      var unlocked = achievements.filter(function(a) { return a.unlocked; });
      countEl.textContent = unlocked.length + ' / ' + achievements.length;
      listEl.innerHTML = '';

      if (unlocked.length === 0) {
        listEl.innerHTML = '<span class="game-over-achievement-empty">Nenhuma conquista desbloqueada nesta partida. Tente novamente!</span>';
      } else {
        unlocked.forEach(function(ach) {
          var tag = document.createElement('span');
          tag.className = 'game-over-achievement-tag';
          tag.textContent = (ach.icon || '🏆') + ' ' + ach.name;
          listEl.appendChild(tag);
        });
      }
    }

    // Expose helpers globally for testing/debugging
    window.TetrisAchievements = {
      list: achievements,
      check: checkAchievements,
      reset: resetAchievements,
      unlock: unlockAchievement,
      getLevel: getLevel
    };

    //-------------------------------------------------------------------------
    // FINALLY, lets run the game
    //-------------------------------------------------------------------------

    initializeTheme();
    run();


