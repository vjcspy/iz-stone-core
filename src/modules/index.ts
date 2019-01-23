import {__FRAMEWORK_REDUX__} from "./redux/module";
import {ModuleManager} from "../core/module-manager";

export function bootFramework() {
  ModuleManager.registers([__FRAMEWORK_REDUX__]);
}
