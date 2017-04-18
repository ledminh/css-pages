/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_LINKS,
  REQUEST_LINKS
} from './constants';

export function requestLinks(){
  return {
    type: REQUEST_LINKS
  }
}

export function loadLinks(links) {
  return {
    type: LOAD_LINKS,
    links
  };
}
