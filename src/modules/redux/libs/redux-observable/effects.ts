// import {Map} from "immutable";
// import _ from "lodash";
// import {Observable} from "rxjs/index";
// import {Action, Redux} from "../../index";
// import {Actions} from "./actions";
// import {app} from "../../../..";
//
// export class EffectsModule {
//   // Effect keys in Effect class(target)
//   static $effects = Map({});
//
//   static run(className: any) {
//     const instance: any = app().resolve(className);
//     const target        = Object.getPrototypeOf(instance);
//     const keys: any     = EffectsModule.$effects.get(target);
//     const observables   = _.map(keys, (key: string) => {
//       return (action$: Observable<Action>) => {
//
//         // set action$ from epic to Actions class
//         Actions.action$ = action$;
//
//         // we can set state$ here
//
//         return instance[key];
//       };
//     });
//
//     Redux.replaceModuleEffects(observables);
//   }
// }
//
// /*
// * Decorator function for Effect Class
// * To handle all effect key in class
//  */
// export function Effect() {
//   return (target: any, propertyName: string) => {
//     let effects: any = EffectsModule.$effects.get(target);
//     if (!effects) {
//       effects = [];
//     }
//     effects.push(propertyName);
//     EffectsModule.$effects = EffectsModule.$effects.set(target, effects);
//   };
// }
