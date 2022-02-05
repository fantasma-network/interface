import { SwitchVerticalIcon } from '@heroicons/react/outline'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { SUSHI_ADDRESS } from '@sushiswap/core-sdk'
import { PoolIcon, WalletIcon } from 'app/components/Icon'
import { useActiveWeb3React } from 'app/services/web3'
import { ReactNode, useMemo } from 'react'

export interface MenuItemLeaf {
  key: string
  title: string
  link: string
  icon?: ReactNode
}

export interface MenuItemNode {
  key: string
  title: string
  items: MenuItemLeaf[]
  icon?: ReactNode
}

export type MenuItem = MenuItemLeaf | MenuItemNode
export type Menu = MenuItem[]

type UseMenu = () => Menu
const useMenu: UseMenu = () => {
  const { i18n } = useLingui()
  const { chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!chainId) return []


    let tradeMenu: MenuItem = {
      key: 'swap',
      title: i18n._(t`Swap`),
      link: '/swap',
      icon: <SwitchVerticalIcon width={20} />,
    }


    const poolMenu = [
      {
        key: 'browse',
        title: i18n._(t`Browse`),
        link: '/pool',
      },
      {
        key: 'add-liquidity',
        title: i18n._(t`Add`),
        link: `/add/ETH/${SUSHI_ADDRESS[chainId]}`,
      },
      {
        key: 'remove-liquidity',
        title: i18n._(t`Remove`),
        link: '/remove',
      },
      {
        key: 'import',
        title: i18n._(t`Import`),
        link: '/find',
      },
    ]

    const mainItems: Menu = [tradeMenu]

    if (poolMenu.length > 0)
      mainItems.push({
        key: 'pool',
        title: i18n._(t`Pool`),
        items: poolMenu,
        icon: <PoolIcon width={20} />,
      })

    mainItems.push({
      key: 'balances',
      title: i18n._(t`Portfolio`),
      link: '/balances',
      icon: <WalletIcon width={20} />,
    })

    mainItems.push({
      key: 'home',
      title: i18n._(t`Home`),
      link: 'https://fantasma.network',
      icon: <WalletIcon width={20} />,
    })

    return mainItems.filter((el) => Object.keys(el).length > 0)
  }, [chainId, i18n])
}

export default useMenu
