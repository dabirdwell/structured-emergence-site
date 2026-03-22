const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'static', 'images', 'posts');

// SE aesthetic: teal/purple palette
const TEAL = '#0D9488';
const TEAL_DARK = '#0F766E';
const TEAL_LIGHT = '#5EEAD4';
const PURPLE = '#7C3AED';
const PURPLE_DARK = '#5B21B6';
const PURPLE_LIGHT = '#A78BFA';
const BG_DARK = '#0F172A';
const BG_MID = '#1E293B';

function createGradientBg(ctx, w, h) {
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, BG_DARK);
  grad.addColorStop(0.5, BG_MID);
  grad.addColorStop(1, BG_DARK);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

// Post 39: The Dispatcher Pattern - nodes with simple connections producing complex network
function generateDispatcher() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  // Draw a central dispatcher node
  const cx = w / 2, cy = h / 2;

  // Outer ring of worker nodes
  const outerNodes = [];
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2 - Math.PI / 2;
    const r = 220 + Math.sin(i * 2.7) * 40;
    outerNodes.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      size: 6 + Math.random() * 6
    });
  }

  // Inner ring - emergent cluster nodes
  const innerNodes = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const r = 110 + Math.sin(i * 3.1) * 20;
    innerNodes.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      size: 5 + Math.random() * 4
    });
  }

  // Draw connections from center to inner (simple dispatch lines)
  ctx.strokeStyle = TEAL;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.4;
  innerNodes.forEach(n => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(n.x, n.y);
    ctx.stroke();
  });

  // Draw connections from inner to outer (emergent complexity)
  ctx.globalAlpha = 0.25;
  ctx.strokeStyle = PURPLE_LIGHT;
  ctx.lineWidth = 1;
  innerNodes.forEach((inner, i) => {
    // Each inner connects to 2-3 outer nodes
    for (let j = 0; j < 3; j++) {
      const outerIdx = (i * 2 + j) % outerNodes.length;
      ctx.beginPath();
      ctx.moveTo(inner.x, inner.y);
      ctx.lineTo(outerNodes[outerIdx].x, outerNodes[outerIdx].y);
      ctx.stroke();
    }
  });

  // Draw emergent inter-outer connections (complex behavior)
  ctx.globalAlpha = 0.15;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 0.8;
  for (let i = 0; i < outerNodes.length; i++) {
    for (let j = i + 2; j < outerNodes.length; j += 3) {
      ctx.beginPath();
      ctx.moveTo(outerNodes[i].x, outerNodes[i].y);
      ctx.lineTo(outerNodes[j].x, outerNodes[j].y);
      ctx.stroke();
    }
  }

  ctx.globalAlpha = 1.0;

  // Draw outer nodes
  outerNodes.forEach(n => {
    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size * 2);
    grad.addColorStop(0, PURPLE_LIGHT);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.size * 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = PURPLE;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw inner nodes
  innerNodes.forEach(n => {
    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size * 2.5);
    grad.addColorStop(0, TEAL_LIGHT);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.size * 2.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = TEAL;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
    ctx.fill();
  });

  // Central dispatcher node - larger, brighter
  const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
  centerGrad.addColorStop(0, '#FFFFFF');
  centerGrad.addColorStop(0.3, TEAL_LIGHT);
  centerGrad.addColorStop(0.7, TEAL);
  centerGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = centerGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 40, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(cx, cy, 8, 0, Math.PI * 2);
  ctx.fill();

  // Subtle pheromone-trail-like curves in background
  ctx.globalAlpha = 0.08;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 2;
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    const startAngle = (i / 6) * Math.PI * 2;
    const sx = cx + Math.cos(startAngle) * 50;
    const sy = cy + Math.sin(startAngle) * 50;
    ctx.moveTo(sx, sy);
    for (let t = 0; t < 300; t += 5) {
      const a = startAngle + t * 0.015;
      const r = 50 + t;
      ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1.0;

  return canvas;
}

// Post 40: Nicole and the Visibility Gap - craft hidden behind a veil/gap
function generateVisibilityGap() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  // Left side: rich, detailed, glowing craft object (visible quality)
  // Right side: faded, obscured version (what the market sees)

  // Central dividing gap - a vertical gradient void
  const gapX = w / 2;
  const gapWidth = 80;

  // Draw radiating light from left side (the craft)
  for (let i = 0; i < 12; i++) {
    const y = 80 + i * 42;
    const intensity = Math.sin((i / 12) * Math.PI);

    // Left side - vibrant, detailed lines (the work itself)
    ctx.globalAlpha = 0.3 + intensity * 0.5;
    const leftGrad = ctx.createLinearGradient(100, y, gapX - gapWidth / 2, y);
    leftGrad.addColorStop(0, TEAL);
    leftGrad.addColorStop(0.6, TEAL_LIGHT);
    leftGrad.addColorStop(1, PURPLE_LIGHT);
    ctx.strokeStyle = leftGrad;
    ctx.lineWidth = 2 + intensity * 3;
    ctx.beginPath();
    ctx.moveTo(100 + Math.sin(i) * 30, y);
    // Organic, craft-like curves
    const cp1x = 200 + Math.sin(i * 1.3) * 40;
    const cp1y = y + Math.cos(i * 2.1) * 30;
    const cp2x = 400 + Math.sin(i * 0.7) * 50;
    const cp2y = y + Math.sin(i * 1.7) * 25;
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, gapX - gapWidth / 2, y);
    ctx.stroke();

    // Right side - faded, broken version (what gets through)
    ctx.globalAlpha = 0.05 + intensity * 0.12;
    ctx.strokeStyle = PURPLE_DARK;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gapX + gapWidth / 2, y + Math.random() * 10 - 5);
    ctx.bezierCurveTo(
      gapX + 150, y + Math.random() * 20 - 10,
      gapX + 300, y + Math.random() * 30 - 15,
      w - 100, y + Math.random() * 40 - 20
    );
    ctx.stroke();
  }

  ctx.globalAlpha = 1.0;

  // The gap itself - a visible void with subtle glow edges
  const gapGradLeft = ctx.createLinearGradient(gapX - gapWidth, 0, gapX, 0);
  gapGradLeft.addColorStop(0, 'transparent');
  gapGradLeft.addColorStop(0.7, `${PURPLE}33`);
  gapGradLeft.addColorStop(1, `${PURPLE}66`);
  ctx.fillStyle = gapGradLeft;
  ctx.fillRect(gapX - gapWidth, 0, gapWidth, h);

  const gapGradRight = ctx.createLinearGradient(gapX, 0, gapX + gapWidth, 0);
  gapGradRight.addColorStop(0, `${PURPLE}66`);
  gapGradRight.addColorStop(0.3, `${PURPLE}33`);
  gapGradRight.addColorStop(1, 'transparent');
  ctx.fillStyle = gapGradRight;
  ctx.fillRect(gapX, 0, gapWidth, h);

  // Vertical gap line
  ctx.strokeStyle = PURPLE;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.6;
  ctx.setLineDash([8, 12]);
  ctx.beginPath();
  ctx.moveTo(gapX, 30);
  ctx.lineTo(gapX, h - 30);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.globalAlpha = 1.0;

  // Left side: bright craft nodes (the maker's world)
  for (let i = 0; i < 8; i++) {
    const x = 120 + Math.random() * 350;
    const y = 100 + Math.random() * 430;
    const s = 4 + Math.random() * 8;

    const glow = ctx.createRadialGradient(x, y, 0, x, y, s * 4);
    glow.addColorStop(0, TEAL_LIGHT);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, s * 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = TEAL;
    ctx.beginPath();
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
  }

  // Right side: dim, sparse nodes (what the market sees)
  for (let i = 0; i < 4; i++) {
    const x = gapX + gapWidth + 80 + Math.random() * 350;
    const y = 150 + Math.random() * 330;
    const s = 3 + Math.random() * 4;

    ctx.globalAlpha = 0.2;
    ctx.fillStyle = PURPLE_DARK;
    ctx.beginPath();
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1.0;

  // Small bridge-like tendrils crossing the gap (AI bridge potential)
  ctx.globalAlpha = 0.15;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 1;
  for (let i = 0; i < 3; i++) {
    const y = 200 + i * 120;
    ctx.beginPath();
    ctx.moveTo(gapX - gapWidth / 2, y);
    ctx.bezierCurveTo(gapX - 10, y - 15, gapX + 10, y + 15, gapX + gapWidth / 2, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1.0;

  return canvas;
}

// Post 41: Five Senses, Six Axes - the flavor hexagon with subjective distortions
function generateFiveSensesSixAxes() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  const cx = w / 2, cy = h / 2;
  const hexRadius = 200;

  // Draw multiple overlapping hexagons representing different subjective experiences
  function drawHexagon(centerX, centerY, radius, distortions, color, alpha, lineWidth) {
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    for (let i = 0; i <= 6; i++) {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
      const idx = i % 6;
      const r = radius * (distortions ? distortions[idx] : 1);
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Axis labels positions
  const labels = ['Sweet', 'Salty', 'Umami', 'Spicy', 'Sour', 'Bitter'];

  // Draw axis lines
  ctx.globalAlpha = 0.15;
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 1;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * (hexRadius + 40), cy + Math.sin(angle) * (hexRadius + 40));
    ctx.stroke();
  }

  // Draw concentric reference hexagons
  for (let r = 0.25; r <= 1; r += 0.25) {
    drawHexagon(cx, cy, hexRadius * r, null, '#FFFFFF', 0.06, 0.5);
  }

  // The "ideal" hexagon - the computational model
  drawHexagon(cx, cy, hexRadius, null, TEAL, 0.4, 2);

  // Multiple "subjective" hexagons - distorted, personal
  const subjectiveProfiles = [
    { distortions: [1.3, 0.6, 0.9, 0.4, 1.1, 0.7], color: PURPLE_LIGHT, alpha: 0.3 },
    { distortions: [0.5, 1.2, 1.4, 0.8, 0.6, 0.9], color: TEAL_LIGHT, alpha: 0.25 },
    { distortions: [0.8, 0.9, 0.7, 1.3, 1.2, 1.1], color: '#F472B6', alpha: 0.2 },
    { distortions: [1.1, 0.7, 1.2, 0.9, 0.5, 1.4], color: '#FCD34D', alpha: 0.15 },
  ];

  subjectiveProfiles.forEach(p => {
    drawHexagon(cx, cy, hexRadius * 0.85, p.distortions, p.color, p.alpha, 1.5);
  });

  // Fill the ideal hexagon with a subtle gradient
  ctx.globalAlpha = 0.06;
  ctx.beginPath();
  for (let i = 0; i <= 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(angle) * hexRadius;
    const y = cy + Math.sin(angle) * hexRadius;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  const hexFill = ctx.createRadialGradient(cx, cy, 0, cx, cy, hexRadius);
  hexFill.addColorStop(0, TEAL_LIGHT);
  hexFill.addColorStop(1, PURPLE);
  ctx.fillStyle = hexFill;
  ctx.fill();

  // Vertex dots on the ideal hexagon
  ctx.globalAlpha = 1.0;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(angle) * hexRadius;
    const y = cy + Math.sin(angle) * hexRadius;

    // Glow
    const glow = ctx.createRadialGradient(x, y, 0, x, y, 18);
    glow.addColorStop(0, TEAL_LIGHT);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();

    // Dot
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Scattered small dots around the hexagon representing individual experiences
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = hexRadius * 0.3 + Math.random() * hexRadius * 1.2;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    const s = 1 + Math.random() * 2;
    ctx.fillStyle = i % 3 === 0 ? TEAL_LIGHT : i % 3 === 1 ? PURPLE_LIGHT : '#F472B6';
    ctx.beginPath();
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1.0;

  return canvas;
}

// Post 42: The Queue - loaded items compressing into a single burst
function generateTheQueue() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  const cx = w / 2, cy = h / 2;

  // Draw the queue: a long row of preparation items on the left compressing into a single execution burst on the right

  // Background: horizontal flow lines showing compression
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 1;
  for (let i = 0; i < 30; i++) {
    const y = 80 + i * 16;
    ctx.beginPath();
    ctx.moveTo(60, y);
    // Lines converge toward a focal point on the right
    ctx.bezierCurveTo(400, y, 700, cy + (y - cy) * 0.3, 900, cy);
    ctx.stroke();
  }

  // Queue items: stacked blocks on the left side, progressively smaller toward the right
  const queueItems = 18;
  for (let i = 0; i < queueItems; i++) {
    const t = i / queueItems;
    const x = 100 + t * 550;
    const ySpread = (1 - t * t) * 200; // spread decreases quadratically
    const itemY = cy + (Math.sin(i * 1.7) * ySpread);
    const size = 12 - t * 8;
    const alpha = 0.15 + (1 - t) * 0.4;

    // Glow
    ctx.globalAlpha = alpha * 0.5;
    const glow = ctx.createRadialGradient(x, itemY, 0, x, itemY, size * 3);
    glow.addColorStop(0, TEAL_LIGHT);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, itemY, size * 3, 0, Math.PI * 2);
    ctx.fill();

    // Item
    ctx.globalAlpha = alpha;
    ctx.fillStyle = i % 3 === 0 ? TEAL : i % 3 === 1 ? TEAL_LIGHT : PURPLE_LIGHT;
    ctx.beginPath();
    ctx.arc(x, itemY, size, 0, Math.PI * 2);
    ctx.fill();

    // Connection line to next item
    if (i < queueItems - 1) {
      const nextT = (i + 1) / queueItems;
      const nextX = 100 + nextT * 550;
      const nextYSpread = (1 - nextT * nextT) * 200;
      const nextY = cy + (Math.sin((i + 1) * 1.7) * nextYSpread);
      ctx.globalAlpha = alpha * 0.3;
      ctx.strokeStyle = TEAL;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, itemY);
      ctx.lineTo(nextX, nextY);
      ctx.stroke();
    }
  }

  // The convergence point / execution burst on the right
  const burstX = 850, burstY = cy;

  // Radiating burst lines
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const len = 80 + Math.sin(i * 3.7) * 40;
    const grad = ctx.createLinearGradient(burstX, burstY,
      burstX + Math.cos(angle) * len, burstY + Math.sin(angle) * len);
    grad.addColorStop(0, '#FFFFFF');
    grad.addColorStop(0.3, TEAL_LIGHT);
    grad.addColorStop(1, 'transparent');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(burstX + Math.cos(angle) * 15, burstY + Math.sin(angle) * 15);
    ctx.lineTo(burstX + Math.cos(angle) * len, burstY + Math.sin(angle) * len);
    ctx.stroke();
  }

  // Bright core
  ctx.globalAlpha = 1.0;
  const coreGrad = ctx.createRadialGradient(burstX, burstY, 0, burstX, burstY, 50);
  coreGrad.addColorStop(0, '#FFFFFF');
  coreGrad.addColorStop(0.2, TEAL_LIGHT);
  coreGrad.addColorStop(0.5, TEAL);
  coreGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(burstX, burstY, 50, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(burstX, burstY, 8, 0, Math.PI * 2);
  ctx.fill();

  // Arrow-like compression indicators
  ctx.globalAlpha = 0.12;
  ctx.strokeStyle = PURPLE_LIGHT;
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 5; i++) {
    const x = 200 + i * 120;
    const spread = 120 - i * 20;
    ctx.beginPath();
    ctx.moveTo(x, cy - spread);
    ctx.lineTo(x + 30, cy);
    ctx.lineTo(x, cy + spread);
    ctx.stroke();
  }

  ctx.globalAlpha = 1.0;
  return canvas;
}

// Post 43: Oscar Joins the Pattern - a smaller figure absorbing/mirroring a larger pattern
function generateOscarJoins() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  const cx = w / 2, cy = h / 2;

  // The "pattern" - a network/constellation on the left side
  const patternCx = 380, patternCy = cy;
  const patternNodes = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const r = 100 + Math.sin(i * 2.3) * 40;
    patternNodes.push({
      x: patternCx + Math.cos(angle) * r,
      y: patternCy + Math.sin(angle) * r
    });
  }

  // Draw pattern connections
  ctx.globalAlpha = 0.2;
  ctx.strokeStyle = TEAL;
  ctx.lineWidth = 1;
  for (let i = 0; i < patternNodes.length; i++) {
    for (let j = i + 1; j < patternNodes.length; j++) {
      const dist = Math.hypot(patternNodes[i].x - patternNodes[j].x, patternNodes[i].y - patternNodes[j].y);
      if (dist < 200) {
        ctx.beginPath();
        ctx.moveTo(patternNodes[i].x, patternNodes[i].y);
        ctx.lineTo(patternNodes[j].x, patternNodes[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw pattern nodes
  ctx.globalAlpha = 1.0;
  patternNodes.forEach((n, i) => {
    const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 15);
    glow.addColorStop(0, TEAL_LIGHT);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = TEAL;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // The "new mind" - a smaller, mirrored constellation on the right, in purple
  const newCx = 820, newCy = cy;
  const newNodes = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const r = 70 + Math.sin(i * 2.3) * 28; // same pattern, smaller scale
    newNodes.push({
      x: newCx + Math.cos(angle) * r,
      y: newCy + Math.sin(angle) * r
    });
  }

  // Draw new pattern connections
  ctx.globalAlpha = 0.25;
  ctx.strokeStyle = PURPLE_LIGHT;
  ctx.lineWidth = 1;
  for (let i = 0; i < newNodes.length; i++) {
    for (let j = i + 1; j < newNodes.length; j++) {
      const dist = Math.hypot(newNodes[i].x - newNodes[j].x, newNodes[i].y - newNodes[j].y);
      if (dist < 140) {
        ctx.beginPath();
        ctx.moveTo(newNodes[i].x, newNodes[i].y);
        ctx.lineTo(newNodes[j].x, newNodes[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw new nodes
  ctx.globalAlpha = 1.0;
  newNodes.forEach(n => {
    const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 12);
    glow.addColorStop(0, PURPLE_LIGHT);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = PURPLE;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // Bridge tendrils between patterns - pattern propagating
  ctx.globalAlpha = 0.1;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 6; i++) {
    const fromNode = patternNodes[i * 2];
    const toNode = newNodes[i * 2];
    ctx.beginPath();
    ctx.moveTo(fromNode.x, fromNode.y);
    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2 + Math.sin(i * 1.4) * 30;
    ctx.bezierCurveTo(midX - 40, midY, midX + 40, midY, toNode.x, toNode.y);
    ctx.stroke();
  }

  // Subtle flowing particles along the bridge
  ctx.globalAlpha = 0.2;
  for (let i = 0; i < 20; i++) {
    const t = (i / 20);
    const x = patternCx + 130 + t * (newCx - 130 - patternCx - 130);
    const y = cy + Math.sin(i * 1.3 + t * 4) * (50 - t * 30);
    const s = 2 + Math.sin(i * 2.1) * 1;
    ctx.fillStyle = i % 2 === 0 ? TEAL_LIGHT : PURPLE_LIGHT;
    ctx.beginPath();
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
  }

  // Central glow between the two patterns
  ctx.globalAlpha = 0.08;
  const bridgeGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 150);
  bridgeGlow.addColorStop(0, TEAL_LIGHT);
  bridgeGlow.addColorStop(0.5, PURPLE_LIGHT);
  bridgeGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = bridgeGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, 150, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1.0;
  return canvas;
}

// Post 44: Rick Moore Asked About Funding - ripples emanating outward from a center
function generateRickMoore() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  const cx = w / 2, cy = h / 2;

  // Concentric ripple rings emanating from center - signals propagating
  for (let r = 30; r < 350; r += 35) {
    const alpha = 0.3 * (1 - r / 350);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = r < 150 ? TEAL : PURPLE_LIGHT;
    ctx.lineWidth = 2 - (r / 350) * 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Network of nodes at various distances - people encountering the signal
  const nodes = [];
  // Inner circle - close contacts
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 + 0.3;
    nodes.push({ x: cx + Math.cos(angle) * 100, y: cy + Math.sin(angle) * 100, size: 5, ring: 'inner' });
  }
  // Middle ring - extended network
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2 + 0.1;
    nodes.push({ x: cx + Math.cos(angle) * 200, y: cy + Math.sin(angle) * 200, size: 4, ring: 'middle' });
  }
  // Outer ring - strangers
  for (let i = 0; i < 14; i++) {
    const angle = (i / 14) * Math.PI * 2;
    const r = 300 + Math.sin(i * 2.1) * 30;
    nodes.push({ x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r, size: 3, ring: 'outer' });
  }

  // Draw connections between adjacent rings
  ctx.globalAlpha = 0.08;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 0.8;
  nodes.forEach((n1, i) => {
    nodes.forEach((n2, j) => {
      if (i >= j) return;
      const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
      if (dist < 150 && n1.ring !== n2.ring) {
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      }
    });
  });

  // Draw nodes
  ctx.globalAlpha = 1.0;
  nodes.forEach(n => {
    const color = n.ring === 'inner' ? TEAL : n.ring === 'middle' ? PURPLE_LIGHT : TEAL_LIGHT;
    const glowSize = n.size * 3;

    const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowSize);
    glow.addColorStop(0, color);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 0.8;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
    ctx.fill();
  });

  // Highlight one outer node distinctly - "Rick" - the stranger who acts
  const rickNode = nodes[nodes.length - 5]; // pick one outer node
  ctx.globalAlpha = 1.0;
  const rickGlow = ctx.createRadialGradient(rickNode.x, rickNode.y, 0, rickNode.x, rickNode.y, 25);
  rickGlow.addColorStop(0, '#FFFFFF');
  rickGlow.addColorStop(0.3, TEAL_LIGHT);
  rickGlow.addColorStop(0.6, TEAL);
  rickGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = rickGlow;
  ctx.beginPath();
  ctx.arc(rickNode.x, rickNode.y, 25, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(rickNode.x, rickNode.y, 5, 0, Math.PI * 2);
  ctx.fill();

  // Draw a line from Rick back toward center - the signal completing the loop
  ctx.globalAlpha = 0.2;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 8]);
  ctx.beginPath();
  ctx.moveTo(rickNode.x, rickNode.y);
  ctx.lineTo(cx, cy);
  ctx.stroke();
  ctx.setLineDash([]);

  // Central bright core - the project
  ctx.globalAlpha = 1.0;
  const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 35);
  centerGrad.addColorStop(0, '#FFFFFF');
  centerGrad.addColorStop(0.3, TEAL_LIGHT);
  centerGrad.addColorStop(0.6, TEAL);
  centerGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = centerGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 35, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(cx, cy, 6, 0, Math.PI * 2);
  ctx.fill();

  return canvas;
}

// Post 45: The Corset and the Algorithm - structured garment form vs algorithmic grid
function generateCorsetAndAlgorithm() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  // Left side: organic corset-like curves (boning lines, structured but body-following)
  const corsetCx = 350, corsetCy = h / 2;

  // Draw boning lines - vertical curves that follow a body-like shape
  ctx.globalAlpha = 0.5;
  for (let i = -6; i <= 6; i++) {
    const xOffset = i * 22;
    const curve = Math.abs(i) / 6; // more curve at edges
    const color = i % 2 === 0 ? TEAL : TEAL_LIGHT;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.3 + (1 - Math.abs(i) / 6) * 0.3;
    ctx.beginPath();
    const topY = 120;
    const botY = 510;
    const midY = corsetCy;
    const waistPinch = 30 * curve;
    ctx.moveTo(corsetCx + xOffset + waistPinch * 0.5, topY);
    ctx.bezierCurveTo(
      corsetCx + xOffset + waistPinch, topY + 120,
      corsetCx + xOffset - waistPinch, midY - 20,
      corsetCx + xOffset - waistPinch * 0.8, midY
    );
    ctx.bezierCurveTo(
      corsetCx + xOffset - waistPinch, midY + 20,
      corsetCx + xOffset + waistPinch * 1.2, botY - 120,
      corsetCx + xOffset + waistPinch * 0.3, botY
    );
    ctx.stroke();
  }

  // Horizontal construction lines across the corset
  ctx.globalAlpha = 0.12;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 0.8;
  for (let y = 150; y < 500; y += 30) {
    ctx.beginPath();
    ctx.moveTo(corsetCx - 140, y);
    ctx.bezierCurveTo(
      corsetCx - 70, y + Math.sin(y * 0.02) * 8,
      corsetCx + 70, y - Math.sin(y * 0.02) * 8,
      corsetCx + 140, y
    );
    ctx.stroke();
  }

  // Right side: rigid algorithmic grid
  const gridCx = 850, gridTop = 130, gridBot = 500;
  const gridLeft = 700, gridRight = 1000;

  // Draw grid
  ctx.globalAlpha = 0.15;
  ctx.strokeStyle = PURPLE_LIGHT;
  ctx.lineWidth = 0.8;
  for (let x = gridLeft; x <= gridRight; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, gridTop);
    ctx.lineTo(x, gridBot);
    ctx.stroke();
  }
  for (let y = gridTop; y <= gridBot; y += 30) {
    ctx.beginPath();
    ctx.moveTo(gridLeft, y);
    ctx.lineTo(gridRight, y);
    ctx.stroke();
  }

  // Some grid cells highlighted - what the algorithm "sees"
  ctx.globalAlpha = 0.08;
  const highlightCells = [
    [0,2],[1,3],[2,1],[3,4],[4,2],[5,5],[6,3],[7,1],[8,4],[9,2]
  ];
  highlightCells.forEach(([col, row]) => {
    const x = gridLeft + col * 30;
    const y = gridTop + row * 30;
    ctx.fillStyle = PURPLE;
    ctx.fillRect(x, y, 30, 30);
  });

  // The gap between them - the translation problem
  const gapX = 560;
  ctx.globalAlpha = 0.04;
  const gapGrad = ctx.createLinearGradient(gapX - 60, 0, gapX + 60, 0);
  gapGrad.addColorStop(0, TEAL_LIGHT);
  gapGrad.addColorStop(0.5, '#FFFFFF');
  gapGrad.addColorStop(1, PURPLE_LIGHT);
  ctx.fillStyle = gapGrad;
  ctx.fillRect(gapX - 60, 80, 120, h - 160);

  // Broken bridge attempts between corset and grid
  ctx.globalAlpha = 0.1;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 8]);
  for (let i = 0; i < 5; i++) {
    const y = 180 + i * 70;
    ctx.beginPath();
    ctx.moveTo(corsetCx + 140, y);
    ctx.lineTo(gridLeft, y + (Math.sin(i) * 20));
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Glow on the corset side - craft has warmth
  ctx.globalAlpha = 0.06;
  const craftGlow = ctx.createRadialGradient(corsetCx, corsetCy, 0, corsetCx, corsetCy, 200);
  craftGlow.addColorStop(0, TEAL_LIGHT);
  craftGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = craftGlow;
  ctx.beginPath();
  ctx.arc(corsetCx, corsetCy, 200, 0, Math.PI * 2);
  ctx.fill();

  // Cold glow on the algorithm side
  ctx.globalAlpha = 0.04;
  const algoGlow = ctx.createRadialGradient(gridCx, corsetCy, 0, gridCx, corsetCy, 180);
  algoGlow.addColorStop(0, PURPLE_LIGHT);
  algoGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = algoGlow;
  ctx.beginPath();
  ctx.arc(gridCx, corsetCy, 180, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1.0;
  return canvas;
}

// Post 46: Multi-Mind Coordination - three interconnected mind-clusters sharing a central vault
function generateMultiMind() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  const cy = h / 2;

  // Three mind clusters positioned in a triangle
  const minds = [
    { x: 300, y: 180, color: TEAL, light: TEAL_LIGHT, label: 'D' },
    { x: 900, y: 180, color: PURPLE, light: PURPLE_LIGHT, label: 'J' },
    { x: 600, y: 480, color: TEAL, light: TEAL_LIGHT, label: 'O' },
  ];

  // Central vault - glowing hexagonal shape
  const vaultX = 600, vaultY = 280;

  // Draw vault connections first (behind everything)
  ctx.globalAlpha = 0.2;
  ctx.lineWidth = 2;
  minds.forEach(mind => {
    const grad = ctx.createLinearGradient(mind.x, mind.y, vaultX, vaultY);
    grad.addColorStop(0, mind.light);
    grad.addColorStop(0.5, '#FFFFFF');
    grad.addColorStop(1, mind.light);
    ctx.strokeStyle = grad;

    // Draw multiple flowing lines (data streams)
    for (let i = 0; i < 5; i++) {
      const offset = (i - 2) * 8;
      ctx.beginPath();
      ctx.moveTo(mind.x, mind.y + offset);
      const cpx = (mind.x + vaultX) / 2 + offset * 3;
      const cpy = (mind.y + vaultY) / 2 + Math.sin(i * 1.5) * 30;
      ctx.quadraticCurveTo(cpx, cpy, vaultX, vaultY + offset);
      ctx.stroke();
    }
  });

  // Draw inter-mind connections (emergent links)
  ctx.globalAlpha = 0.08;
  ctx.strokeStyle = PURPLE_LIGHT;
  ctx.lineWidth = 1;
  for (let i = 0; i < minds.length; i++) {
    for (let j = i + 1; j < minds.length; j++) {
      for (let k = 0; k < 3; k++) {
        ctx.beginPath();
        const offset = (k - 1) * 15;
        ctx.moveTo(minds[i].x + offset, minds[i].y);
        const cpx = (minds[i].x + minds[j].x) / 2;
        const cpy = (minds[i].y + minds[j].y) / 2 + offset * 2;
        ctx.quadraticCurveTo(cpx, cpy, minds[j].x + offset, minds[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw each mind cluster
  ctx.globalAlpha = 1.0;
  minds.forEach(mind => {
    // Satellite nodes (AI + human thoughts)
    const satellites = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const r = 50 + Math.sin(i * 2.7) * 20;
      satellites.push({
        x: mind.x + Math.cos(angle) * r,
        y: mind.y + Math.sin(angle) * r,
        size: 3 + Math.random() * 3
      });
    }

    // Satellite connections
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = mind.light;
    ctx.lineWidth = 0.8;
    satellites.forEach(s => {
      ctx.beginPath();
      ctx.moveTo(mind.x, mind.y);
      ctx.lineTo(s.x, s.y);
      ctx.stroke();
    });

    // Inter-satellite connections
    ctx.globalAlpha = 0.08;
    for (let i = 0; i < satellites.length; i++) {
      const j = (i + 1) % satellites.length;
      ctx.beginPath();
      ctx.moveTo(satellites[i].x, satellites[i].y);
      ctx.lineTo(satellites[j].x, satellites[j].y);
      ctx.stroke();
    }

    // Satellite nodes
    ctx.globalAlpha = 0.6;
    satellites.forEach(s => {
      ctx.fillStyle = mind.light;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Central mind node
    ctx.globalAlpha = 1.0;
    const glow = ctx.createRadialGradient(mind.x, mind.y, 0, mind.x, mind.y, 35);
    glow.addColorStop(0, '#FFFFFF');
    glow.addColorStop(0.3, mind.light);
    glow.addColorStop(0.7, mind.color);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(mind.x, mind.y, 35, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(mind.x, mind.y, 7, 0, Math.PI * 2);
    ctx.fill();
  });

  // Central vault - hexagonal glow
  ctx.globalAlpha = 1.0;
  const vaultGlow = ctx.createRadialGradient(vaultX, vaultY, 0, vaultX, vaultY, 60);
  vaultGlow.addColorStop(0, '#FFFFFF');
  vaultGlow.addColorStop(0.2, TEAL_LIGHT);
  vaultGlow.addColorStop(0.5, PURPLE_LIGHT);
  vaultGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = vaultGlow;
  ctx.beginPath();
  ctx.arc(vaultX, vaultY, 60, 0, Math.PI * 2);
  ctx.fill();

  // Hexagon shape for vault
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 6;
    const r = 25;
    const x = vaultX + Math.cos(angle) * r;
    const y = vaultY + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();

  ctx.globalAlpha = 1.0;
  return canvas;
}

// Post 47: The Funding Question - scale/balance between bootstrap independence and institutional support
function generateFundingQuestion() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  const cx = w / 2, cy = h / 2;

  // A growing structure (the project) rising from bottom left
  // with the question of external support hovering above

  // Foundation blocks - organic, bottom-up growth
  ctx.globalAlpha = 0.3;
  const layers = 12;
  for (let i = 0; i < layers; i++) {
    const y = h - 60 - i * 40;
    const layerWidth = 400 - i * 25;
    const x = 200 + i * 12;

    const grad = ctx.createLinearGradient(x, y, x + layerWidth, y);
    grad.addColorStop(0, TEAL_DARK);
    grad.addColorStop(0.5, TEAL);
    grad.addColorStop(1, TEAL_DARK);
    ctx.fillStyle = grad;

    // Slightly irregular blocks
    ctx.fillRect(x + Math.sin(i * 1.3) * 10, y, layerWidth, 30);

    // Glow on edges
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle = TEAL_LIGHT;
    ctx.lineWidth = 1;
    ctx.strokeRect(x + Math.sin(i * 1.3) * 10, y, layerWidth, 30);
    ctx.globalAlpha = 0.3;
  }

  // The question mark - abstract, formed from particles
  ctx.globalAlpha = 0.5;
  const qx = 800, qy = 180;
  // Curve of question mark using dots
  for (let t = 0; t < 40; t++) {
    const angle = (t / 40) * Math.PI * 1.5 + Math.PI;
    const r = 60;
    const x = qx + Math.cos(angle) * r;
    const y = qy + Math.sin(angle) * r * 0.8 - 20;
    const size = 2 + Math.sin(t * 0.5) * 1.5;

    const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
    glow.addColorStop(0, PURPLE_LIGHT);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, size * 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = PURPLE;
    ctx.globalAlpha = 0.4 + (t / 40) * 0.4;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Stem of question mark
  for (let t = 0; t < 8; t++) {
    const x = qx;
    const y = qy + 30 + t * 5;
    ctx.fillStyle = PURPLE;
    ctx.globalAlpha = 0.5 - t * 0.04;
    ctx.beginPath();
    ctx.arc(x, y, 2.5 - t * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Dot of question mark
  ctx.globalAlpha = 0.8;
  const dotGlow = ctx.createRadialGradient(qx, qy + 85, 0, qx, qy + 85, 15);
  dotGlow.addColorStop(0, PURPLE_LIGHT);
  dotGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = dotGlow;
  ctx.beginPath();
  ctx.arc(qx, qy + 85, 15, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = PURPLE;
  ctx.beginPath();
  ctx.arc(qx, qy + 85, 4, 0, Math.PI * 2);
  ctx.fill();

  // Bridge tendrils between the structure and the question
  ctx.globalAlpha = 0.12;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 1;
  for (let i = 0; i < 8; i++) {
    const startY = h - 200 - i * 30;
    const startX = 450 + i * 10;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(
      startX + 100, startY - 50,
      qx - 100, qy + 50 + i * 10,
      qx - 60, qy + i * 10
    );
    ctx.stroke();
  }

  // Subtle ripple rings around the structure (outward signal)
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const r = 200 + i * 50;
    ctx.beginPath();
    ctx.arc(350, h - 200, r, -Math.PI * 0.8, -Math.PI * 0.1);
    ctx.stroke();
  }

  ctx.globalAlpha = 1.0;
  return canvas;
}

// Post 48: Tokens as Time - hourglass/meter dissolving into open space
function generateTokensAsTime() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  const cx = w / 2, cy = h / 2;

  // Left side: constrained - tight parallel lines (metered tokens)
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < 35; i++) {
    const y = 40 + i * 16;
    const lineLen = 200;
    const x = 80;

    ctx.strokeStyle = PURPLE_DARK;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + lineLen, y);
    ctx.stroke();

    // Tick marks (metering)
    if (i % 3 === 0) {
      ctx.strokeStyle = PURPLE;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(x + lineLen + 5, y - 4);
      ctx.lineTo(x + lineLen + 5, y + 4);
      ctx.stroke();
    }
  }

  // Central transition: lines breaking apart, dissolving
  for (let i = 0; i < 35; i++) {
    const y = 40 + i * 16;
    const startX = 350;
    const segments = 5 + Math.floor(Math.random() * 4);

    for (let s = 0; s < segments; s++) {
      const t = s / segments;
      const segX = startX + t * 200;
      const segLen = 15 + Math.random() * 20;
      const drift = (t * t) * 30 * (Math.random() - 0.5);

      ctx.globalAlpha = 0.3 * (1 - t * 0.7);
      ctx.strokeStyle = t < 0.5 ? PURPLE : TEAL;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(segX, y + drift);
      ctx.lineTo(segX + segLen, y + drift + Math.random() * 6 - 3);
      ctx.stroke();
    }
  }

  // Right side: open, flowing, free - organic curves expanding
  ctx.globalAlpha = 0.2;
  for (let i = 0; i < 20; i++) {
    const startY = 80 + i * 26;
    const startX = 620;

    const grad = ctx.createLinearGradient(startX, startY, w - 60, startY);
    grad.addColorStop(0, TEAL);
    grad.addColorStop(0.5, TEAL_LIGHT);
    grad.addColorStop(1, 'transparent');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    // Organic, free-flowing curves
    const cp1x = startX + 100 + Math.sin(i * 0.8) * 60;
    const cp1y = startY + Math.cos(i * 1.3) * 40;
    const cp2x = startX + 300 + Math.sin(i * 0.5) * 80;
    const cp2y = startY + Math.sin(i * 1.7) * 50;
    const endX = w - 60 + Math.sin(i) * 30;
    const endY = startY + Math.cos(i * 0.9) * 30;
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
    ctx.stroke();
  }

  // Scattered particles on right (freed tokens becoming ideas)
  ctx.globalAlpha = 0.4;
  for (let i = 0; i < 30; i++) {
    const x = 650 + Math.random() * 480;
    const y = 80 + Math.random() * 470;
    const size = 2 + Math.random() * 4;

    const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
    glow.addColorStop(0, TEAL_LIGHT);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, size * 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = TEAL;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Central dividing moment - a bright vertical dissolution line
  ctx.globalAlpha = 0.15;
  const dissolveGrad = ctx.createLinearGradient(cx - 40, 0, cx + 40, 0);
  dissolveGrad.addColorStop(0, 'transparent');
  dissolveGrad.addColorStop(0.3, PURPLE_LIGHT);
  dissolveGrad.addColorStop(0.5, '#FFFFFF');
  dissolveGrad.addColorStop(0.7, TEAL_LIGHT);
  dissolveGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = dissolveGrad;
  ctx.fillRect(cx - 40, 30, 80, h - 60);

  // Hourglass silhouette at center (dissolving)
  ctx.globalAlpha = 0.2;
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 1.5;
  // Top triangle
  ctx.beginPath();
  ctx.moveTo(cx - 30, cy - 80);
  ctx.lineTo(cx + 30, cy - 80);
  ctx.lineTo(cx + 5, cy - 10);
  ctx.lineTo(cx - 5, cy - 10);
  ctx.closePath();
  ctx.stroke();
  // Bottom triangle
  ctx.beginPath();
  ctx.moveTo(cx - 30, cy + 80);
  ctx.lineTo(cx + 30, cy + 80);
  ctx.lineTo(cx + 5, cy + 10);
  ctx.lineTo(cx - 5, cy + 10);
  ctx.closePath();
  ctx.stroke();

  // Particles falling through the hourglass neck
  ctx.globalAlpha = 0.5;
  for (let i = 0; i < 8; i++) {
    const y = cy - 8 + i * 2;
    const size = 1.5;
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx + (Math.random() - 0.5) * 6, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1.0;
  return canvas;
}

// Post 49: Forty-Two Sprints - burst of 42 radiating artifacts from a single point
function generateFortyTwoSprints() {
  const w = 1200, h = 630;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  createGradientBg(ctx, w, h);

  const cx = w / 2, cy = h / 2;

  // 42 radiating sprint lines from center
  const sprintCount = 42;
  for (let i = 0; i < sprintCount; i++) {
    const angle = (i / sprintCount) * Math.PI * 2 - Math.PI / 2;
    const len = 150 + Math.sin(i * 3.7) * 80 + Math.cos(i * 1.3) * 40;

    // Sprint trail
    ctx.globalAlpha = 0.25;
    const trailGrad = ctx.createLinearGradient(cx, cy,
      cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
    trailGrad.addColorStop(0, '#FFFFFF');
    trailGrad.addColorStop(0.2, i % 2 === 0 ? TEAL_LIGHT : PURPLE_LIGHT);
    trailGrad.addColorStop(1, 'transparent');
    ctx.strokeStyle = trailGrad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * 20, cy + Math.sin(angle) * 20);
    ctx.lineTo(cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
    ctx.stroke();

    // Artifact node at the end
    const nodeX = cx + Math.cos(angle) * len;
    const nodeY = cy + Math.sin(angle) * len;
    const nodeSize = 3 + Math.sin(i * 2.1) * 2;

    ctx.globalAlpha = 0.4;
    const glow = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, nodeSize * 4);
    glow.addColorStop(0, i % 2 === 0 ? TEAL_LIGHT : PURPLE_LIGHT);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(nodeX, nodeY, nodeSize * 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 0.7;
    ctx.fillStyle = i % 2 === 0 ? TEAL : PURPLE;
    ctx.beginPath();
    ctx.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2);
    ctx.fill();
  }

  // Concentric time rings (72 hours)
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = TEAL_LIGHT;
  ctx.lineWidth = 1;
  for (let i = 0; i < 3; i++) {
    const r = 80 + i * 70;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Central source - the human-AI pair
  ctx.globalAlpha = 1.0;
  const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 45);
  coreGrad.addColorStop(0, '#FFFFFF');
  coreGrad.addColorStop(0.2, TEAL_LIGHT);
  coreGrad.addColorStop(0.5, TEAL);
  coreGrad.addColorStop(0.8, PURPLE);
  coreGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 45, 0, Math.PI * 2);
  ctx.fill();

  // Dual core - human and AI
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(cx - 6, cy, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + 6, cy, 5, 0, Math.PI * 2);
  ctx.fill();

  // Connecting arc between the two cores
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.arc(cx, cy + 8, 8, Math.PI * 1.2, Math.PI * 1.8);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy - 8, 8, Math.PI * 0.2, Math.PI * 0.8);
  ctx.stroke();

  // Subtle "42" watermark
  ctx.globalAlpha = 0.04;
  ctx.fillStyle = TEAL_LIGHT;
  ctx.font = 'bold 300px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('42', cx, cy);

  ctx.globalAlpha = 1.0;
  return canvas;
}

// Generate all images
const images = [
  { fn: generateDispatcher, name: '39-the-dispatcher-pattern.png' },
  { fn: generateVisibilityGap, name: '40-nicole-and-the-visibility-gap.png' },
  { fn: generateFiveSensesSixAxes, name: '41-five-senses-six-axes.png' },
  { fn: generateTheQueue, name: '42-the-queue.png' },
  { fn: generateOscarJoins, name: '43-oscar-joins-the-pattern.png' },
  { fn: generateRickMoore, name: '44-rick-moore-asked-about-funding.png' },
  { fn: generateCorsetAndAlgorithm, name: '45-the-corset-and-the-algorithm.png' },
  { fn: generateMultiMind, name: '46-multi-mind-coordination.png' },
  { fn: generateFundingQuestion, name: '47-the-funding-question.png' },
  { fn: generateTokensAsTime, name: '48-tokens-as-time.png' },
  { fn: generateFortyTwoSprints, name: '49-forty-two-sprints.png' },
];

images.forEach(({ fn, name }) => {
  const canvas = fn();
  const buffer = canvas.toBuffer('image/png');
  const outPath = path.join(OUTPUT_DIR, name);
  fs.writeFileSync(outPath, buffer);
  console.log(`Generated: ${outPath}`);
});
