import { ChainId } from '@sushiswap/core-sdk'

const analytics = {
  [ChainId.ETHEREUM]: 'https://analytics.fantasma.network',
  [ChainId.MATIC]: 'https://analytics-polygon.fantasma.network',
  [ChainId.FANTOM]: 'https://analytics-ftm.fantasma.network',
  [ChainId.BSC]: 'https://analytics-bsc.fantasma.network',
  [ChainId.XDAI]: 'https://analytics-xdai.fantasma.network',
  [ChainId.HARMONY]: 'https://analytics-harmony.fantasma.network',
  [ChainId.ARBITRUM]: 'https://analytics-arbitrum.fantasma.network',
}

export default analytics
