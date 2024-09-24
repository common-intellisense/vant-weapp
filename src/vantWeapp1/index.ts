import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function vantWeapp1() {
  return {
    uiName: '@vant/weapp',
    lib: '@vant/weapp',
    map: getPropsMap(),
  }
}

export function vantWeapp1Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: true,
    prefix: 'vant',
    isReact: false,
    lib: '@vant/weapp',
    // directives: directives.vantWeapp1,
  }
}
