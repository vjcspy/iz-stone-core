import {Map} from "immutable";
import {GeneralError} from "./error";
import {ModuleConfig} from "./module-config-interface";
import * as _ from "lodash";
import {app} from "./app";

export class ModuleManager {
  
  protected static $modules = Map();
  
  constructor() {
    throw new GeneralError("This class don't accept construct");
  }
  
  static registers(moduleConfigs: ModuleConfig[] = []) {
    _.forEach(moduleConfigs, (c) => ModuleManager.__register(c));
  }
  
  protected static __register(config: ModuleConfig) {
    const exited = ModuleManager.$modules.get(config.name);
    if (!exited) {
      ModuleManager.$modules = ModuleManager.$modules.set(config.name, true);
      _.forEach(config.services, (s) => app().register(s));
      config.boot();
    }
  }
}
