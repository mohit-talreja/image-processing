const Jimp = require('jimp')

/*
Jimp
    .read('images/mohit.jpg')
    .then(image => {
        image
            .rotate(90)
            .write('images-manipulated/mohit-rotate.jpg')
    })
    .catch(err => console.log(err))
*/

/* 
Jimp
    .read('images/mohit.jpg')
    .then(image => {
        image
            .mirror(true, false)
            .write('images-manipulated/mohit-mirror.jpg')
    })
    .catch(err => console.log(err))
*/

/*
Jimp
    .read('images/mohit.jpg')
    .then(image => {
        image
            .brightness(0.5)
            .write('images-manipulated/mohit-bright.jpg')
    })
    .catch(err => console.log(err))
*/

/*
Jimp
    .read('images/mohit.jpg')
    .then(image => {
        image
            .blur(5)
            .write('images-manipulated/mohit-blur.jpg')
    })
    .catch(err => console.log(err))
*/

/*
Jimp
    .read('images/mohit.jpg')
    .then(image => {
        image
            .invert()
            .write('images-manipulated/mohit-invert.jpg')
    })
    .catch(err => console.log(err))
*/

/*
Jimp
    .read('images/mohit.jpg')
    .then(image => {
        image
            .contrast(0.5)
            .write('images-manipulated/mohit-contrast.jpg')
    })
    .catch(err => console.log(err))
*/

/*
Jimp
    .read('images/mohit.jpg')
    .then(image => {
        image
            .autocrop(0.9)
            .write('images-manipulated/mohit-auto-crop.jpg')
    })
    .catch(err => console.log(err))
*/

Jimp
    .read('images/mohit.jpg')
    .then(image => {
        image
            .crop(105,105,105,105)
            .write('images-manipulated/mohit-crop.jpg')
    })
    .catch(err => console.log(err))