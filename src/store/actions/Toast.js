export const OPEN_TOAST = `[TOAST] SET OPEN`;

export const CLOSE_TOAST = `[TOAST] SET CLOSE`;

export const setOpenToast = (target, message) => ({
  type: OPEN_TOAST,
  target,
  message,
});

export const setCloseToast = (target) => ({
  type: CLOSE_TOAST,
  target,
});
