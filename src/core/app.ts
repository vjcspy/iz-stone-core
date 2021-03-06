import {Container, injectable} from "inversify";
import {Map} from "immutable";
import "reflect-metadata";

export class App {
  static $instace: any;
  public config: any = {
    __DEV__: true
  };
  
  protected container: any;
  protected classNameBinding = Map();
  
  static getInstance() {
    if (!App.$instace) {
      App.$instace = new App();
    }
    
    return App.$instace;
  }
  
  resolve<T>(name: any): T {
    if (typeof name === "symbol") {
      return this.getContainer().get(name);
    } else {
      return this.getContainer().resolve(name);
    }
  }
  
  register(name: any): void {
    if (this.classNameBinding.get(name.name)) {
      throw new Error("This class has been register");
    }
    this.getContainer().bind(name).toSelf();
  }
  
  bindTo(target: any, to: any): void {
    this.getContainer().bind(target).to(to);
  }
  
  setAppMode(developMode = true) {
    this.config.__DEV__ = developMode;
  }
  
  isDevelopMode(): boolean {
    return this.config.__DEV__;
  }
  
  protected getContainer(): Container {
    if (typeof this.container === "undefined") {
      this.container = new Container();
    }
    
    return this.container;
  }
}

export const app        = (): App => App.getInstance();
export const Injectable = injectable;
