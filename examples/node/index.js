const path = require('path')
const javascriptBarcodeReader = require('../../src/index')

// javascriptBarcodeReader(
//   path.resolve(__dirname, './sample-images/code-128.jpg'),
//   {
//     barcode: 'code-128',
//   }
// )
//   .then(code => {
//     console.log(`ABC-abc-123: ${code}`)
//   })
//   .catch(err => console.error(err))

// javascriptBarcodeReader(
//   path.resolve(__dirname, './sample-images/L89HE1806005080432.png'),
//   {
//     barcode: 'code-128',
//   }
// )
//   .then(code => {
//     console.log(`L89HE1806005080432: ${code}`)
//   })
//   .catch(err => console.error(err))

javascriptBarcodeReader(
  path.resolve(
    __dirname,
    './sample-images/9f31b336-647c-f8d1-5910-987320dc7fa0.png'
  ),
  {
    barcode: 'code-128',
    singlePass: true,
  }
)
  .then(code => {
    console.log(`9f31b336-647c-f8d1-5910-987320dc7fa0: ${code}`)
  })
  .catch(err => console.error(err))

// javascriptBarcodeReader(
//   path.resolve(__dirname, './sample-images/5901234123457.png'),
//   {
//     barcode: 'code-128',
//     // useAdaptiveThreshold: true,
//   }
// )
//   .then(code => {
//     console.log(`5901234123457: ${code}`)
//   })
//   .catch(err => console.error(err))

// javascriptBarcodeReader(
//   path.resolve(__dirname, './sample-images/code-39.jpg'),
//   {
//     barcode: 'code-39',
//   }
// )
//   .then(code => {
//     console.log(`10023: ${code}`)
//   })
//   .catch(err => console.error(err))
