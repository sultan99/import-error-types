const load = url => import(url).catch(error => ({isNetworkError: error instanceof TypeError}))


const start = async () => {
  const correct = await load('./correct.js')
  const hasException = await load('./has-exception.js')
  const wrongUrl = await load('./wrong-url.js')
  
  console.log({correct, hasException, wrongUrl})
}

start()