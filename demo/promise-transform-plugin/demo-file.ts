async function fn() {
  await [];
  console.log('do something...');
}

async function catchfn() {
  try{
    // await new Promise((resolve, reject) => reject('报错'));
    console.log('do something...');
  } catch{
    console.log('catch do something...');
  }

}
function test(){}