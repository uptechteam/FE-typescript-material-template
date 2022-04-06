/////////////////////// *** ///////////////////////
// JUST EXAMPLE 
/////////////////////// *** ///////////////////////


// import { LOAD_DELAY, MENUS_PER_PAGE } from "@constants";
// import { getMenus } from "@pages/Menus/utils";
// import { AxiosResponse } from "axios";
// import React from "react";
// import {
//   ActionMenusDispatch,
//   MenusActions,
//   IMenusActionTypes,
//   IMenusContext,
//   IMenusState,
// } from "./types";

// export const defaultState: IMenusState = {
//   loading: false,
//   more: true,
//   data: [],
//   page: 0,
//   load: () => undefined,
//   searchPhrase: "",
// };

// const MenusCtx = React.createContext<IMenusState>(defaultState);

// const MenusDispatch = React.createContext<ActionMenusDispatch>(() => ({
//   type: MenusActions.NOOP,
// }));

// export const menusReducer: React.Reducer<IMenusState, IMenusActionTypes> = (
//   state,
//   action
// ) => {
//   switch (action.type) {
//     case MenusActions.START:
//       return { ...state, loading: true };
//     case MenusActions.LOADED:
//       return {
//         ...state,
//         loading: false,
//         data: [...state.data, ...action.payload],
//         more: action.payload.length === MENUS_PER_PAGE,
//         page: state.page + MENUS_PER_PAGE,
//       };
//     case MenusActions.SEARCH_PHRASE:
//       return { ...state, page: 0, searchPhrase: action.payload };
//     case MenusActions.SEARCH:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         more: action.payload.length === MENUS_PER_PAGE,
//         page: state.page + MENUS_PER_PAGE,
//       };
//     case MenusActions.NOOP:
//       return { ...state };
//     default:
//       throw new Error("Unsupported ActionType");
//   }
// };

// export const MenusContext: React.FC<IMenusContext> = ({ children }) => {
//   const [state, dispatch] = React.useReducer<
//     React.Reducer<IMenusState, IMenusActionTypes>
//   >(menusReducer, defaultState);

//   const onSuccess = (result: AxiosResponse) => {
//     dispatch({ type: MenusActions.LOADED, payload: result.data });
//   };

//   const load = React.useCallback(() => {
//     dispatch({ type: MenusActions.START });
//     setTimeout(() => {
//       getMenus(state.page, onSuccess, state.searchPhrase);
//     }, LOAD_DELAY);
//   }, [state.page, state.searchPhrase]);

//   const contextValues = React.useMemo(
//     () => ({ ...state, load }),
//     [state, load]
//   ) as IMenusState;

//   return (
//     <MenusDispatch.Provider value={dispatch as ActionMenusDispatch}>
//       <MenusCtx.Provider value={contextValues}>{children}</MenusCtx.Provider>
//     </MenusDispatch.Provider>
//   );
// };

// export const useMenusState = (): IMenusState => {
//   const ctx = React.useContext<IMenusState>(MenusCtx);
//   if (ctx === undefined) {
//     throw new Error("useMenusState must be used within a Provider");
//   }
//   return ctx;
// };

// export const useMenusDispatch = (): ActionMenusDispatch => {
//   const dispatch = React.useContext<ActionMenusDispatch>(MenusDispatch);
//   if (dispatch === undefined) {
//     throw new Error("useMenusDispatch must be used within a Provider");
//   }
//   return dispatch;
// };
