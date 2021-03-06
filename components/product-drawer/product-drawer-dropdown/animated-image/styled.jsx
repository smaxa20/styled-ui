import styled, { keyframes } from 'styled-components';

const textSlideUpAndFadeIn = keyframes`
	0% {
		opacity: 0;
		transform: translate(0, 7px);
	}

	80% {
		opacity: 0;
		transform: translate(0, 7px);
	}

	100% {
		opacity: 1;
		transform: translate(0, 0);
	}
`;

const iconsSlideUpPauseAndSlideOut = keyframes`
	0% {
		transform: translate(0, -23px);
		opacity: 1;
	}

	80% {
		transform: translate(0, -23px) scale(1);
		opacity: 1;
	}

	100% {
		transform: translate(0, -25px) scale(0.5);
		opacity: 0;
	}
    `;

const textShrinkUpAndFadeOut = keyframes`
	0% {
		transform: translate(0, 0);
	}

	100% {
		opacity: 0;
		transform: scale(0.4) translate(0, -7px);
	}
    `;

const iconSlideUpAndFadeIn = keyframes`
	0% {
		opacity: 0;
		transform: translate(0, -13px);
	}

	100% {
		opacity: 1;
		transform: translate(0, -23px);
	}
    `;

export const AnimatedImageIcon = styled.img`
	margin: 0 7px;
	transform-origin: 100% 50%;
	animation-duration: 1.5s;
	animation-timing-function: cubic-bezier(0.33, 0, 0, 1);
	animation-fill-mode: both;

	&:nth-of-type(2) {
		animation-delay: 40ms;
		transform-origin: 50% 50%;
	}

	&:nth-of-type(3) {
		animation-delay: 80ms;
		transform-origin: 50% 50%;
	}

	&:nth-of-type(4) {
		animation-delay: 120ms;
		transform-origin: 0% 50%;
	}

	&:nth-of-type(5) {
		animation-delay: 160ms;
		transform-origin: 0% 50%;
	}

	&:nth-of-type(6) {
		animation-delay: 160ms;
		transform-origin: 0% 50%;
	}
`;

const AnimatedImageText = styled.img`
	vertical-align: bottom;
	animation-duration: 1.5s;
	animation-timing-function: cubic-bezier(0.33, 0, 0, 1);
	animation-fill-mode: both;
`;

export const AnimatedImageTextFirst = styled(AnimatedImageText)`
	transform-origin: 100% 50%;
`;

export const AnimatedImageTextSecond = styled(AnimatedImageText)`
	transform-origin: 0% 50%;
	animation-delay: 40ms;
`;

export const AnimatedImage = styled.div`
	margin: 0 auto;
	height: 30px;
	width: 70%;

	${/* sc-custom 'AnimatedImageTextFirst' */ AnimatedImageTextFirst} {
		animation-name: ${props => (props.animatedImageVisible ? textSlideUpAndFadeIn : '')};
	}

	${/* sc-custom 'AnimatedImageTextSecond' */ AnimatedImageTextSecond} {
		animation-name: ${props => (props.animatedImageVisible ? textSlideUpAndFadeIn : '')};
	}

	${/* sc-custom 'AnimatedImageIcon' */ AnimatedImageIcon} {
		animation-name: ${props => (props.animatedImageVisible ? iconsSlideUpPauseAndSlideOut : '')};
	}

	&:hover {
		${/* sc-custom 'AnimatedImageTextFirst' */ AnimatedImageTextFirst} {
			animation-name: ${textShrinkUpAndFadeOut};
			animation-duration: 300ms;
			animation-timing-function: cubic-bezier(0.33, 0, 0, 1);
			animation-fill-mode: both;
		}

		${/* sc-custom 'AnimatedImageTextSecond' */ AnimatedImageTextSecond} {
			animation-name: ${textShrinkUpAndFadeOut};
			animation-duration: 300ms;
			animation-timing-function: cubic-bezier(0.33, 0, 0, 1);
			animation-fill-mode: both;
		}

		${/* sc-custom 'AnimatedImageIcon' */ AnimatedImageIcon} {
			animation-name: ${iconSlideUpAndFadeIn};
			animation-duration: 300ms;
			animation-timing-function: cubic-bezier(0.33, 0, 0, 1);
			animation-fill-mode: both;
		}
	}
`;

export const AnimatedImageEquip = styled(AnimatedImage)`
	${/* sc-custom 'img' */ AnimatedImageIcon} {
		&:nth-of-type(2) {
			transform-origin: 100% 50%;
		}

		&:nth-of-type(4) {
			animation-delay: 120ms;
			transform-origin: 50% 50%;
		}

		&:nth-of-type(5) {
			animation-delay: 160ms;
			transform-origin: 0% 50%;
		}

		&:nth-of-type(6) {
			animation-delay: 200ms;
			transform-origin: 0% 50%;
		}
	}
`;
