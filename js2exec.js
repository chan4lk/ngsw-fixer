const { exec } = require('pkg')
exec([ process.argv[2], '--target', 'host', '--output', 'app.exe' ]).then(function() {
    console.log('Done!')
}).catch(function(error) {
    console.error(error)
})