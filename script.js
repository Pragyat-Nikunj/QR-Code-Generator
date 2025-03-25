const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body')

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (qrText.value === "") return; 
    generateQRCode();
})

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    if (qrText.value === "") return; 
    generateQRCode()
})
function generateQRCode() {
    qrContainer.innerHTML = ``;
    new QRCode(qrContainer, {
        text: qrText.value.trim(),
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

downloadBtn.addEventListener("click", () => {
  let img = qrContainer.querySelector("img");
  let canvas = qrContainer.querySelector("canvas");
  let downloadLink = document.createElement("a");

  if (img) {
    downloadLink.href = img.src;
    downloadLink.download = "qrcode.png";
  } else if (canvas) {
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.download = "qrcode.png";
  } else {
    alert("No QR code found to download!");
    return;
  }

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});


