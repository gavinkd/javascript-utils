import { parasUrl } from '../dist'

test('urlSearchParam test', () => {
  const paramsString = "q=URLUtils.searchParams&topic=api"
  const topic = parasUrl.urlSearchParam(paramsString, "topic")
  expect(topic).not.toBeNull();
  expect(topic).toEqual("api")
})

test('parseUrlParams test', () => {
  const paramsString1 = "q=1&topic=api"
  const params1 = parasUrl.parseUrlParams(paramsString1)
  expect(params1).toEqual({q: '1', topic: "api"})

  const paramsString2 = "https://www.baidu.com?q=1&topic=api"
  const params2 = parasUrl.parseUrlParams(paramsString2)
  expect(params2).toEqual({ q: '1', topic: "api" })
})
