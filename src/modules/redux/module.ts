import {Store} from "./libs/redux-observable/store";
import {ModuleConfig} from "../../core/module-config-interface";

const name = "__FRAMEWORK_REDUX__";

function boot() {
  return undefined;
}

const services: any = [
  Store
];

export const __FRAMEWORK_REDUX__: ModuleConfig = {
  name,
  boot,
  services
};
