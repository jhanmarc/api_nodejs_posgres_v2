import app from './app'
import '@babel/polyfill'

const port = process.env.PORT || 3000

async function main() {
    await app.listen(port, () => {
        console.log(`Server on port http://localhost:${port}`)
    });
}

main();