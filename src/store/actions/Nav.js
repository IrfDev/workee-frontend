export const NAV = "[NAV]";

export const SET_ACTIVE_TAB = `${NAV} SET TAB`;

export const setActiveTab = (activeNav) => ({
  type: SET_ACTIVE_TAB,
  payload: activeNav,
});
