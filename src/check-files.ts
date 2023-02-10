import {checkFiles} from '../demo/check-file'
const testAddFun = (a:any,b:any)=>{
  let result:any
  if (a==b) result=a+b
  console.log(a==b)
}
checkFiles(['./src/check-files.ts'])