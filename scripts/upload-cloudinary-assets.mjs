import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const envPath = path.join(rootDir, ".env");

function loadEnv(filePath) {
  const env = {};
  const raw = fs.readFileSync(filePath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    env[key] = value;
  }
  return env;
}

function slugify(input) {
  return input
    .replace(/\\/g, "/")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
}

function mimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  if (ext === ".gif") return "image/gif";
  if (ext === ".mp4") return "video/mp4";
  if (ext === ".pdf") return "application/pdf";
  return "application/octet-stream";
}

function resourceTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".mp4") return "video";
  if (ext === ".pdf") return "raw";
  return "image";
}

function signParams(params, secret) {
  const signatureBase = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== "")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return crypto.createHash("sha1").update(signatureBase + secret).digest("hex");
}

function toDataUri(filePath) {
  const mime = mimeType(filePath);
  const base64 = fs.readFileSync(filePath).toString("base64");
  return `data:${mime};base64,${base64}`;
}

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function createBrochurePdf(filePath) {
  const title = "Pinnacle Expo Lubricants";
  const lines = [
    "Premium engine lubricants for export and distribution",
    "",
    "Product range:",
    " - Multi-grade 5L engine oil",
    " - 20L ATF lubricant",
    " - Fully synthetic 20L lubricant",
    "",
    "Why partners choose us:",
    " - Reliable supply for export markets",
    " - Quality-oriented packaging and sourcing",
    " - Dedicated support for inquiries and bulk orders",
    "",
    "Contact: pinnacle.chd@gmail.com | +91 92163 99808",
  ];

  const content = [
    "BT",
    "/F1 24 Tf",
    "72 760 Td",
    `(${escapePdfText(title)}) Tj`,
    "/F1 12 Tf",
    "0 -34 Td",
    ...lines.map((line) => `(${escapePdfText(line)}) Tj T*`),
    "ET",
  ].join("\n");

  const objects = [];
  objects.push("1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj");
  objects.push("2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj");
  objects.push(
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj"
  );
  objects.push(
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj"
  );
  objects.push(
    `5 0 obj << /Length ${Buffer.byteLength(content, "utf8")} >> stream\n${content}\nendstream endobj`
  );

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (const object of objects) {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${object}\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i <= objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefOffset}\n%%EOF\n`;

  fs.writeFileSync(filePath, pdf, "binary");
}

const env = loadEnv(envPath);
const cloudName = env.CLOUDINARY_CLOUD_NAME;
const apiKey = env.CLOUDINARY_API_KEY;
const apiSecret = env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  throw new Error("Missing Cloudinary env values in .env");
}

const assets = [
  { key: "logo", file: "public/logo.png" },
  { key: "brochure", file: "public/Brochure/Lubricants .pdf" },
  { key: "video", file: "src/assets/hero video.mp4" },
  { key: "mobileVideo", file: "src/assets/mobile hero.mp4", forceUpload: true },
  { key: "categories.rice", file: "src/assets/Categories/Rice.jpeg" },
  { key: "categories.basmati", file: "src/assets/Categories/Basmmati.jpeg" },
  { key: "categories.engine_lubricants", file: "src/assets/Categories/lubricants.jpeg" },
  { key: "products.thai_jasmine_rice", file: "src/assets/Categories/Products/Thai Jasmine Rice.jpeg" },
  { key: "products.sugandha_rice", file: "src/assets/Categories/Products/Sugandha Rice.jpg" },
  { key: "products.sona_masoori_rice", file: "src/assets/Categories/Products/Sona Masoori NBR.png" },
  { key: "products.sharbati_rice", file: "src/assets/Categories/Products/Sharbati Rice.jpg" },
  { key: "products.pusa_rice", file: "src/assets/Categories/Products/Pusa Rice.jpg" },
  { key: "products.pr14_rice", file: "src/assets/Categories/Products/PR14 Rice.jpg" },
  { key: "products.pr11_rice", file: "src/assets/Categories/Products/PR11 Rice.png" },
  { key: "products.ponni_rice", file: "src/assets/Categories/Products/Ponni Rice.jpg" },
  { key: "products.parmal_rice", file: "src/assets/Categories/Products/Parmal Rice.jpg" },
  { key: "products.emirates_5l", file: "src/assets/Categories/Products/Emirates 5l.jpeg" },
  { key: "products.emirates_20_synthetic", file: "src/assets/Categories/Products/Emirates 20 Synthetic.jpeg" },
  { key: "products.emirates_20_synthetic_2", file: "src/assets/Categories/Products/Emirates 20 Synthetic 2.jpeg" },
  { key: "products.emirates_20_atf", file: "src/assets/Categories/Products/Emirates 20 ATF.jpeg" },
  { key: "products.rice_1718", file: "src/assets/Categories/Products/1718 Rice.jpg" },
  { key: "products.rice_1509", file: "src/assets/Categories/Products/1509 Rice.jpg" },
  { key: "products.rice_1401", file: "src/assets/Categories/Products/1401 Rice.jpg" },
  { key: "products.rice_1121", file: "src/assets/Categories/Products/1121 Rice.jpg" },
  { key: "categories.london_colognes", file: "src/assets/Categories/london colognes.png" },
  { key: "products.affection", file: "src/assets/Categories/Products/Affection.png" },
  { key: "products.untamed", file: "src/assets/Categories/Products/untamed.png" },
  { key: "products.sensory", file: "src/assets/Categories/Products/sensory.png" },
  { key: "products.floral", file: "src/assets/Categories/Products/floral.png" },
];

async function uploadAsset(asset) {
  const absolutePath =
    asset.key === "brochure"
      ? path.join(rootDir, ".tmp-brochure.pdf")
      : path.join(rootDir, asset.file);
  const ext = path.extname(absolutePath);
  const publicId = slugify(asset.key);
  const resourceType = resourceTypeFor(absolutePath);
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params = {
    folder: "pinnacleexpo",
    public_id: publicId,
    timestamp,
  };
  const signature = signParams(params, apiSecret);

  if (asset.key === "brochure") {
    createBrochurePdf(absolutePath);
  }

  const file = toDataUri(absolutePath);
  const form = new FormData();
  form.append("file", file);
  form.append("api_key", apiKey);
  form.append("timestamp", timestamp);
  form.append("signature", signature);
  form.append("folder", "pinnacleexpo");
  form.append("public_id", publicId);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
    { method: "POST", body: form }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Cloudinary upload failed for ${asset.file}: ${text}`);
  }

  const json = await response.json();

  if (asset.key === "brochure" && fs.existsSync(absolutePath)) {
    fs.unlinkSync(absolutePath);
  }

  return json.secure_url;
}

let existingAssets = {};
try {
  const modulePath = path.resolve(rootDir, "src/data/cloudinaryAssets.js");
  if (fs.existsSync(modulePath)) {
    const content = fs.readFileSync(modulePath, "utf8");
    const jsonMatch = content.match(/export const cloudinaryAssets = ({[\s\S]*?});/);
    if (jsonMatch) {
      existingAssets = eval(`(${jsonMatch[1]})`);
    }
  }
} catch (e) {
  console.warn("Could not load existing assets, will re-upload all:", e);
}

const uploaded = {};

for (const asset of assets) {
  const exists =
    asset.key === "brochure" || fs.existsSync(path.join(rootDir, asset.file));
  if (!exists) {
    if (existingAssets[asset.key]) {
      uploaded[asset.key] = existingAssets[asset.key];
      console.log(`Reusing existing URL for ${asset.key}: ${existingAssets[asset.key]} (local file missing)`);
      continue;
    }
    throw new Error(`Missing asset file: ${asset.file}`);
  }

  if (existingAssets[asset.key] && !asset.forceUpload) {
    uploaded[asset.key] = existingAssets[asset.key];
    console.log(`Reusing existing URL for ${asset.key}: ${existingAssets[asset.key]} (already uploaded)`);
    continue;
  }

  // eslint-disable-next-line no-await-in-loop
  const url = await uploadAsset(asset);
  uploaded[asset.key] = url;
  console.log(`${asset.key} -> ${url}`);
}

const output = `export const cloudinaryAssets = ${JSON.stringify(uploaded, null, 2)};\n`;
const outputPath = path.join(rootDir, "src/data/cloudinaryAssets.js");
fs.writeFileSync(outputPath, output, "utf8");
console.log(`Wrote ${outputPath}`);
