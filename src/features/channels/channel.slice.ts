import { RootState } from '../../store/root-reducer'

export const channelSelector = (state: RootState) =>
  state.fireStore.data.channels
