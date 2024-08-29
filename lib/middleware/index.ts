import { createMiddlewareChain } from './createMiddlewareChain'
import { addCustomHeaderMiddleware } from './middlewares/addCustomHeaderMiddleware'
import { authMiddleware } from './middlewares/authMiddleware'
import { blockBotMiddleware } from './middlewares/blockBotMiddleware'
import { requestLogMiddleware } from './middlewares/requestLogMiddleware'

export const middlewareChain = createMiddlewareChain(
  requestLogMiddleware,
  blockBotMiddleware,
  authMiddleware,
  addCustomHeaderMiddleware,
)
