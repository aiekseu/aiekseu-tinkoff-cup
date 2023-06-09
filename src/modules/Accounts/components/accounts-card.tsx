import React, { FC } from 'react'
import { Box, Grid, styled } from '@mui/material'
import { useAppSelector } from '@/store/hooks'
import Text from '@/ui/Text'
import Card from '@/ui/Card'
import { accountColors } from '@/config/colors'

const AccountsCard: FC = () => {
	const accounts = useAppSelector((state) => state.accounts)

	return (
		<Card>
			<Text variant={'h5'} component={'p'} pb={2}>
				Счета
			</Text>
			<AccountsContainer container alignItems={'top'} direction={'row'} justifyContent={'start'} rowSpacing={4}>
				{accounts.map((acc, index) => (
					<Account item key={acc.name} xs={6} md={4}>
						<AccountIcon index={index} />
						<Text variant={'subtitle1'} mt={1}>
							{acc.name}
						</Text>
						<Text variant={'h6'} component={'p'}>
							{acc.bank} {acc.currency.symbol}
						</Text>
					</Account>
				))}
				<Account item key={'new-acc'} xs={6} md={4}>
					<AccountIcon additional>
						<Text>+</Text>
					</AccountIcon>
				</Account>
			</AccountsContainer>
		</Card>
	)
}

const AccountsContainer = styled(Grid)({
	width: '100%',
})
const Account = styled(Grid)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})

const AccountIcon = styled(Box, { shouldForwardProp: (props) => props !== 'index' && props !== 'additional' })<{
	index?: number
	additional?: boolean
}>(({ index, additional = false }) => ({
	height: 48,
	width: 48,
	background: !additional ? accountColors[index!] : 'transparent',
	border: !additional ? 'none' : '1px solid black',
	borderRadius: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

export default AccountsCard
