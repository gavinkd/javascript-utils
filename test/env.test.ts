import { env } from '../dist'

test('env', () => {
  const currentEnv = env.getRuntimeEnv()
  expect(currentEnv.node).toBe(true)
})
