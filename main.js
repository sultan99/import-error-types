const load = url => import(url).catch(
  error => error instanceof TypeError
    ? fetch(url).then(res => ({isNetworkError: res.status === 404}))
    : Promise.resolve({isNetworkError: false})
)


const start = async () => {
  const correct = await load('./correct.js')
  const hasException = await load('./has-exception.js')
  const hasNetworkLikeException = await load('./has-network-like-exception.js')
  const hasNetworkException = await load('./wrong-url.js')
  
  console.log({
    correct,
    hasException,
    hasNetworkLikeException,
    hasNetworkException,
  })
}

start()