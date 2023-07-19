import {
  Checkbox,
  Color,
  Select,
  Style,
  TextInput,
} from '@makeswift/runtime/controls'
import { ReactRuntime } from '@makeswift/runtime/react'
import { ChainId } from '@thirdweb-dev/react'

import { NFTDropCard } from '../../components'

ReactRuntime.registerComponent(NFTDropCard, {
  type: 'nft-drop',
  label: 'NFT Drop',
  props: {
    className: Style(),
    chainId: Select({
      label: 'Chain',
      options: Object.entries(ChainId)
        .filter(([key]) => Number.isInteger(parseInt(key, 10)))
        .map(([value, label]) => ({ label: label as string, value })),
      defaultValue: String(ChainId.Mumbai),
    }),
    contractAddress: TextInput({
      label: 'Contract Address',
      defaultValue: '0x9d80B96453F4923C8C826824b7E68D15195e08Cd',
    }),
    showMedia: Checkbox({
      label: 'Show media',
      defaultValue: true,
    }),
    showDescription: Checkbox({
      label: 'Show description',
      defaultValue: true,
    }),
    totalClaimed: Select({
      label: 'Total Supply Basis',
      options: [
        { label: 'No Total', value: 'nototal' },
        { label: 'Total Supply', value: 'total' },
        { label: 'Max Supply', value: 'max' },
        { label: 'Available Supply', value: 'available' },
      ],
      defaultValue: 'total',
    }),
    buttonBgColor: Color({ label: 'Button bg', defaultValue: '#000000' }),
    buttonTextColor: Color({ label: 'Button text', defaultValue: '#FFFFFF' }),
  },
})
