import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi() {
    return 
  }
   

  public async Saydemo(data:any){
    console.log(data,1);
    return '11111'
  }
  //测试登陆

  
}
