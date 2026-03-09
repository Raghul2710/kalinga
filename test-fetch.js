const { fetchTableData } = require('./src/app/lib/api');

async function test() {
    try {
        const data = await fetchTableData("87");
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();
