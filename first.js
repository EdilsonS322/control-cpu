const os = require('node:os');

console.log('informacion del sistema operativo')
console.log('------------------------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Nombre del sistema operativo', os.release())
console.log('arquitectura', os.arch())
console.log('CPU', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria Total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)
