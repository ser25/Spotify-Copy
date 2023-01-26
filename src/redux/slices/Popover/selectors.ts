import {RootState} from "../../store";

export const selectPopover = (state: RootState) => state.popover.classes;

export const selectPopoverAll = (state: RootState) => state.popover