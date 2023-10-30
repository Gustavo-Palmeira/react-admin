import { Button, Card, CardContent, CardHeader } from '@mui/material'
import {
  useAppDispatch,
  useAppSelector,
} from './config/store/create-admin-hooks'
import { addAmount, decrement, increment } from './store/counter/counter-slice'

export const Dashboard = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleCounter = {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    addAmount: () => dispatch(addAmount(3)),
  }

  return (
    <Card sx={{ mt: 3, mx: 2 }}>
      <CardHeader title="Stone Admin" />
      <CardContent>Lorem ipsum sic dolor</CardContent>
      <Button onClick={() => handleCounter['increment']()}>Increment</Button>
      <Button onClick={() => handleCounter['decrement']()}>Decrement</Button>
      <Button onClick={() => handleCounter['addAmount']()}>Add Amount (3)</Button>
      Counter: {count}
    </Card>
  )
}
