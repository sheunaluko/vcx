import { Action } from 'redux';

export type XFActionTypes = 'ALLOW' | 'BLOCK';
export type XFPayload = string ;  // will be a URL that is allowed 


export type XFActions = Action<XFActionTypes, XFPayload>;


export const allow = (payload: XFPayload) => ({ type: 'ALLOW', payload });
export const block = (payload: XFPayload) => ({ type: 'BLOCK', payload });
