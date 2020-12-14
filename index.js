document.querySelector('.generate-qr-code').addEventListener('click', function (){
    var url = document.querySelector('.qr-url').value
    var size = document.querySelector('.qr-size').value

    document.querySelector('#qrcode').innerHTML = ''

    var qrcode = new QRCode(document.querySelector('#qrcode'), {
        text: `${url}`,
        width: `${size}`,
        height: `${size}`,
        colorDark: `black`,
        colorLight: `white`,
        correctLevel: QRCode.CorrectLevel.H
    })
})