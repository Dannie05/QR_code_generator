
const imgBox = document.querySelector('.imgBox');
const qrImage = document.querySelector('#qrImage');
const qrText = document.querySelector('#input');
const generate = document.querySelector('button');


const generateQR = ()=>{
    let qrValue= qrText.value;
    // qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrValue;
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
}

generate.addEventListener('click', generateQR)
