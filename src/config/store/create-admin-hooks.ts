import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './create-admin-store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
