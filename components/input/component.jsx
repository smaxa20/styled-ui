import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { layout, textStyle, border } from 'styled-system';
import { theme } from '../../theme';
import { common, typography } from '../../theme/system';
import { forwardClassRef, resetStyles } from '../utils';
import { thickness, inputColors, colors } from '../shared-styles';

function getVariation(variant, obj) {
	if (variant) {
		return variant;
	}
	return [...Object.entries(obj)].find(entry => entry[1])[0];
}

/** Standard text input with no validation */
export const Input = forwardClassRef(
	class Input extends PureComponent {
		static propTypes = {
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			placeholder: PropTypes.string,
			type: PropTypes.string,
			readOnly: PropTypes.bool,
			autoFocus: PropTypes.bool,
			disabled: PropTypes.bool,
			onChange: PropTypes.func,
			onClick: PropTypes.func,
			onEnter: PropTypes.func,
			/** Enum with values: 'small', 'medium', 'large', and 'inline' */
			variant: PropTypes.oneOf(['small', 'medium', 'large', 'inline']),
			/** Medium variation (deprecated in favor of the variant prop) */
			medium: PropTypes.bool,
			/** Small variation (deprecated in favor of the variant prop) */
			small: PropTypes.bool,
			/** Large variation (deprecated in favor of the variant prop) */
			large: PropTypes.bool,
			styleOverrides: PropTypes.shape({
				width: PropTypes.string,
			}),
			size: PropTypes.number,
			/** Inline input variation */
			inline: PropTypes.bool,
		};

		static defaultProps = {
			theme: theme,
		};

		handleChange = () => {
			const { onChange } = this.props;
			if (onChange) {
				onChange();
			}
		};

		handleKeyPress = e => {
			const { onEnter } = this.props;
			if (onEnter && e.key === 'Enter') {
				onEnter();
			}
		};

		render() {
			const {
				value,
				placeholder,
				readOnly,
				type,
				autoFocus,
				onClick,
				variant,
				small,
				medium,
				large,
				inline,
				disabled,
				onEnter,
				forwardedRef, // eslint-disable-line react/prop-types
				...inputProps
			} = this.props;

			return (
				<StyledInput
					type={type || 'text'}
					autoFocus={autoFocus}
					readOnly={readOnly}
					variant={getVariation(variant, { small, medium, large, inline, none: true })}
					disabled={disabled}
					value={value || ''}
					placeholder={placeholder || ''}
					onChange={this.handleChange}
					onClick={onClick}
					onKeyPress={this.handleKeyPress}
					ref={forwardedRef}
					height="32px"
					padding={3}
					textStyle={variant === 'large' || large ? 'ui.18' : 'ui.16'}
					border={1}
					borderColor="inputBorderColor"
					borderRadius={1}
					{...inputProps}
				/>
			);
		}
	},
);

const StyledInput = styled.input`
	${common};
	${typography};
	${layout};
	${textStyle};
	${border};

	${resetStyles};

	&:focus {
		border-color: ${inputColors.inputFocusedBorderColor};
		box-shadow: 0 0 0 2px ${inputColors.inputFocusedShadowColor};
		outline: 0;
	}

	&:disabled {
		opacity: 0.5;
	}

	&:read-only {
		background: ${colors.gray8};
	}

	${({ variant }) => {
		switch (variant) {
			case 'small':
				return css`
					padding: ${thickness.eight};
					height: 32px;
				`;
			case 'medium':
				return css`
					padding: 12px;
					height: 40px;
				`;
			case 'large':
				return css`
					padding: 16px;
					height: 56px;
				`;
			case 'inline':
				return css`
					background-color: transparent;
					border: none;
					box-shadow: none;
					border-radius: 0;
					padding: 0;
					border-bottom: solid ${thickness.two} ${colors.blueBase};
					height: 20px;
					padding-bottom: ${thickness.four};

					&:focus {
						box-shadow: none;
						border-bottom: solid ${thickness.two}
							${({ theme }) => theme.underlineColor || colors.blueBase};
						outline: 0;
					}
				`;
		}
	}}
`;
