/////////////////////// *** ///////////////////////
// JUST EXAMPLE OF CONTEXT
/////////////////////// *** ///////////////////////



// export interface IMenusState {
//   loading: boolean;
//   data: IMenuItem[];
//   more: boolean;
//   page: number;
//   load: () => void;
//   searchPhrase: string;
// }

// export enum MenusActions {
//   START = "START",
//   LOADED = "LOADED",
//   NOOP = "NOOP",
//   SEARCH = "SEARCH",
//   SEARCH_PHRASE = "SEARCH_PHRASE",
// }

// export interface IStartAction {
//   type: MenusActions.START;
// }

// export interface INoopAction {
//   type: MenusActions.NOOP;
// }

// export interface ILoadAction {
//   type: MenusActions.LOADED;
//   payload: IMenuItem[];
// }

// export interface ISearchAction {
//   type: MenusActions.SEARCH;
//   payload: IMenuItem[];
// }

// export interface ISearchPhraseAction {
//   type: MenusActions.SEARCH_PHRASE;
//   payload: string;
// }

// export type IMenusActionTypes =
//   | IStartAction
//   | ILoadAction
//   | INoopAction
//   | ISearchPhraseAction
//   | ISearchAction;

// export type ActionMenusDispatch = (arg: IMenusActionTypes) => IMenusActionTypes;

// export interface IMenusContext {
//   children?: React.ReactNode;
// }

// export interface IMenuItem
//   extends Readonly<{
//     id: number;
//     name: string;
//     vendor: string;
//     type: string;
//     description: string;
//     imageURL: string | null;
//   }> {}
