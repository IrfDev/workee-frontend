export const NAV = "[NAV]";

export const SET_ACTIVE_TAB = `${NAV} SET TAB`;
export const SET_NAV_MESSAGE = `${NAV} SET TOP MESSAGE`;

export const setActiveTab = (activeNav) => ({
  type: SET_ACTIVE_TAB,
  payload: activeNav,
});

export const setNavMessage = (message) => ({
  type: SET_NAV_MESSAGE,
  message,
});
