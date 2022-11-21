import { parasUrl } from '../src'

test('urlSearchParam test', () => {
  const paramsString = "q=URLUtils.searchParams&topic=api"
  const topic = parasUrl.urlSearchParam(paramsString, "topic")
  expect(topic).not.toBeNull();
  expect(topic).toEqual("api")
})
