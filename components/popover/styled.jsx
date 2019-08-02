import styled from 'styled-components';
import { system } from 'styled-system';
import { colors } from '../shared-styles';
import { Box } from '../Box';

const arrowWidth = '10px';

export const margins = {
	top: { marginBottom: arrowWidth },
	right: { marginLeft: arrowWidth },
	left: { marginRight: arrowWidth },
	bottom: { marginTop: arrowWidth },
};

export const getPlacement = placement => {
	if (!placement) {
		return 'top';
	}
	return placement.split('-')[0];
};

export const Arrow = styled(Box)`
	&::after {
		${system({ arrowBackground: { property: 'background', scale: 'colors' } })};

		content: '';
		border: ${({ styleOverrides }) => (styleOverrides.border ? styleOverrides.border : 'none')};
		position: absolute;
		width: ${arrowWidth};
		height: ${arrowWidth};
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
		box-shadow: ${({ styleOverrides }) => (styleOverrides.hideShadow ? 'none' : colors.boxShadow)};
	}
	${({ placement }) => (placement ? arrowStyles[getPlacement(placement)] : arrowStyles.top)};
`;

const arrowStyles = {
	top: `
		top: 100%;

		&::after {
			top: 0;
		}
	`,
	right: `
		right: 100%;

		&::after {
			top: 50%;
			left: 100%;
		}
	`,
	left: `
		left: 100%;

		&::after {
			top: 50%;
			left: 0;
		}
	`,
	bottom: `
		bottom: 100%;

		&::after {
			top: 100%;
		}
	`,
};
