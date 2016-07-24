'use strict'

var flatpickr = require('flatpickr')
var Cleave = require('cleave.js')

// flatpickr works fine, while addon modules failed
require('clevave.js/src/addons/phone-type-formatter.cn.js')

function detect() {
  flatpickr('#flatpickr-tryme')
    .end()

  new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: 'CN'
  })
}






module.exports = detect
