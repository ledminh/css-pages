/*
 *
 * Css7 actions
 *
 */

import {
  SLIDE,
  MOVE,
  RELOCATE,
  SET_NEW_NUMBER,
  RESET
} from './constants';


export function slide(value) {
  return {
    type: SLIDE,
    value
  }
}


export function move() {
  return {
    type: MOVE
  }
}

export function relocate() {
  return {
    type: RELOCATE
  }
}

export function setNewNumber() {
  return {
    type: SET_NEW_NUMBER
  }
}

export function reset() {
  return {
    type: RESET
  }
}
