/* script.js */
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');
const base64Output = document.getElementById('base64Output');
const copyBase64 = document.getElementById('copyBase64');
const downloadBase64 = document.getElementById('downloadBase64');

const base64Input = document.getElementById('base64Input');
const outputImage = document.getElementById('outputImage');
const renderImage = document.getElementById('renderImage');
const errorDiv = document.getElementById('error');

const byteBtn = document.getElementById('byteBtn');
const byteInput = document.getElementById('byteInput');
const byteOutput = document.getElementById('byteOutput');

const themeToggle = document.getElementById('themeToggle');

// IMAGE → BASE64 (MULTI)
fileInput.addEventListener('change', () => {
  const files = Array.from(fileInput.files);
  if (!files.length) return;

  previewContainer.innerHTML = '';
  base64Output.value = '';

  files.forEach(file => {
    const reader = new FileReader();

    reader.onload = () => {
      // preview
      const img = document.createElement('img');
      img.src = reader.result;
      previewContainer.appendChild(img);

      // append base64
      base64Output.value += reader.result + '\n\n';
    };

    reader.readAsDataURL(file);
  });
});

copyBase64.onclick = () => {
  navigator.clipboard.writeText(base64Output.value);
};

downloadBase64.onclick = () => {
  const blob = new Blob([base64Output.value], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'base64.txt';
  a.click();
};

// BASE64 → IMAGE
function isBase64Image(str) {
  return /^data:image\/(png|jpeg|jpg|gif|webp|bmp|svg\+xml);base64,/.test(str);
}

renderImage.onclick = () => {
  const val = base64Input.value.trim();

  if (!isBase64Image(val)) {
    errorDiv.textContent = 'Base64 inválido ou não é imagem suportada';
    outputImage.src = '';
    return;
  }

  errorDiv.textContent = '';
  outputImage.src = val;
};

// BYTE ARRAY
byteBtn.onclick = () => {
  try {
    const base64 = byteInput.value.split(',')[1] || byteInput.value;
    const binary = atob(base64);
    const bytes = new Uint8Array([...binary].map(c => c.charCodeAt(0)));
    byteOutput.textContent = JSON.stringify(Array.from(bytes), null, 2);
  } catch {
    byteOutput.textContent = 'Erro ao converter';
  }
};

// THEME
themeToggle.onclick = () => {
  document.body.classList.toggle('light');
};