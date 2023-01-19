import { RootState } from '../../store';
import {RegistrationSlice} from "./slice";

export const selectRegistration = (state: RootState) => state.registration;