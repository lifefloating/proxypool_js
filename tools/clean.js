/**
 * created by curdBoy
 */

import { cleanDir } from './libs/fs'
import config from './config'

function clean() {
  return Promise.all([
    cleanDir(config.dist, {
      nosort: true,
      dot: true
    }),

    cleanDir('.cache', { nosort: true, dot: true })
  ])
}

export default {
  name: 'clean',
  func: clean
}
