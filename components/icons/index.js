import React from 'react';

export const Check = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
		<path
			fill="none"
			fillRule="evenodd"
			stroke="#62BB46"
			strokeWidth="2.2"
			d="M3.57 8.51l4.453 4.428L15.962 5"
		/>
	</svg>
);

export const SmallCheck = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="9.6" height="9.6" viewBox="0 0 8 8">
		<path fill="none" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z" />
	</svg>
);

export const Exclamation = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
		<path
			fill="#D94848"
			fillRule="nonzero"
			d="M9 1c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 14.4c3.52 0 6.4-2.88 6.4-6.4 0-3.52-2.88-6.4-6.4-6.4-3.52 0-6.4 2.88-6.4 6.4 0 3.52 2.88 6.4 6.4 6.4zM8 5h2v5H8V5zm1 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
		/>
	</svg>
);

export const Info = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
		<path
			fill="#888"
			d="M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0zm-1.6 0A6.4 6.4 0 1 0 2.6 9a6.4 6.4 0 0 0 12.8 0zm-7.2-.8h1.6V13H8.2V8.2zM9 5a.8.8 0 1 1 0 1.6A.8.8 0 0 1 9 5z"
		/>
	</svg>
);

export const CircleCheck = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xlink="http://www.w3.org/1999/xlink"
		width="18"
		height="18"
		viewBox="0 0 18 18"
	>
		<defs>
			<path
				id="a"
				d="M9 1c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 14.4c3.52 0 6.4-2.88 6.4-6.4 0-3.52-2.88-6.4-6.4-6.4-3.52 0-6.4 2.88-6.4 6.4 0 3.52 2.88 6.4 6.4 6.4zM12.467 6L13.6 7.134l-5.78 5.78L4.447 9.54l1.134-1.134 2.24 2.24L12.467 6z"
			/>
		</defs>
		<use fill="#888" fillRule="nonzero" href="#a" />
	</svg>
);

export const Calendar = props => (
	<svg {...props} width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
		<path
			fill="currentColor"
			d="M3,3 L3,2 C3,1.44771525 3.44771525,1 4,1 C4.55228475,1 5,1.44771525 5,2 L5,3 L8,3 L8,2 C8,1.44771525 8.44771525,1 9,1 C9.55228475,1 10,1.44771525 10,2 L10,3 L13,3 L13,2 C13,1.44771525 13.4477153,1 14,1 C14.5522847,1 15,1.44771525 15,2 L15,3 L16,3 C16.5522847,3 17,3.44771525 17,4 L17,16 C17,16.5522847 16.5522847,17 16,17 L2,17 C1.44771525,17 1,16.5522847 1,16 L1,4 C1,3.44771525 1.44771525,3 2,3 L3,3 Z M15,15 L15,8 L3,8 L3,15 L15,15 Z"
			id="path-1"
		/>
	</svg>
);

export const Caret = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
		<g fill="currentColor" transform="matrix(0 1 1 0 1 -1)">
			<polygon id="caret-right-1px-a" points="10 13 3 6.304 4.273 5 10 10.478 15.727 5 17 6.304" />
		</g>
	</svg>
);

export const Close = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
		<g fill="none" fillRule="evenodd">
			<path
				fill="#979797"
				fillRule="nonzero"
				d="M9,7.58578644 L13.2928932,3.29289322 L14.7071068,4.70710678 L10.4142136,9 L14.7071068,13.2928932 L13.2928932,14.7071068 L9,10.4142136 L4.70710678,14.7071068 L3.29289322,13.2928932 L7.58578644,9 L3.29289322,4.70710678 L4.70710678,3.29289322 L9,7.58578644 Z"
			/>
			<g>
				<mask id="x-b" fill="#A8A8A8">
					<path d="M9,7.58578644 L13.2928932,3.29289322 L14.7071068,4.70710678 L10.4142136,9 L14.7071068,13.2928932 L13.2928932,14.7071068 L9,10.4142136 L4.70710678,14.7071068 L3.29289322,13.2928932 L7.58578644,9 L3.29289322,4.70710678 L4.70710678,3.29289322 L9,7.58578644 Z" />
				</mask>
				<rect width="18" height="18" />
			</g>
		</g>
	</svg>
);

export const LightBulbL = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
		<g fill="none" fillRule="evenodd">
			<path
				fill="#0174B9"
				fillRule="nonzero"
				d="M7 13h3v-1.292l.444-.297a3.5 3.5 0 1 0-3.887 0l.443.297V13zm4 1H6v-1.758a4.5 4.5 0 1 1 5 0V14z"
			/>
			<path fill="#1E91D6" d="M6.5 15h4v1h-4z" />
		</g>
	</svg>
);

export const LightBulbM = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
		<g fill="none" fillRule="evenodd">
			<path
				fill="#0174B9"
				fillRule="nonzero"
				d="M10 13v-1.292l.444-.297a3.5 3.5 0 1 0-3.887 0l.443.297V13h3zm1 1H6v-1.758a4.5 4.5 0 1 1 5 0V14zm-4.5 1h4v1h-4v-1z"
			/>
			<path
				fill="#79CAFB"
				d="M8 1h1v1H8V1zm5 2h1v1h-1V3zM3 3h1v1H3V3zm12 5h1v1h-1V8zM1 8h1v1H1V8z"
			/>
		</g>
	</svg>
);
export const LightBulbH = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
		<g fill="none" fillRule="evenodd">
			<path
				fill="#0174B9"
				fillRule="nonzero"
				d="M10 13v-1.292l.444-.297a3.5 3.5 0 1 0-3.887 0l.443.297V13h3zm1 1H6v-1.758a4.5 4.5 0 1 1 5 0V14zm-4.5 1h4v1h-4v-1z"
			/>
			<path
				fill="#79CAFB"
				d="M8 0h1v3H8V0zm6 8h3v1h-3V8zM0 8h3v1H0V8zm13.354-3.646l-.708-.708 2.291-2.29.708.707-2.291 2.29zm-9.708 0l-2.29-2.291.707-.708 2.29 2.291-.707.708z"
			/>
		</g>
	</svg>
);

export const OKCircle = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
		<g fill="none" fillRule="evenodd">
			<path
				fill="#0174B9"
				fillRule="nonzero"
				d="M8.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm0 1a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17z"
			/>
			<path
				fill="#1E91D6"
				d="M5.59 12.108c-.383 0-.734-.07-1.052-.212a2.278 2.278 0 0 1-.818-.612 2.867 2.867 0 0 1-.531-.967A4.063 4.063 0 0 1 3 9.03c0-.474.063-.898.189-1.273.126-.376.303-.692.53-.95.228-.258.501-.456.819-.594a2.614 2.614 0 0 1 1.052-.207c.384 0 .735.069 1.053.207.317.138.592.336.823.594.23.258.409.574.535.95.126.375.189.799.189 1.273 0 .48-.063.909-.19 1.287-.125.378-.303.7-.534.967a2.32 2.32 0 0 1-.823.612 2.566 2.566 0 0 1-1.053.212zm0-.909c.234 0 .444-.051.63-.153.186-.102.345-.247.477-.436.132-.19.233-.417.305-.684.072-.268.108-.566.108-.896 0-.66-.136-1.177-.409-1.552a1.302 1.302 0 0 0-1.11-.563c-.468 0-.839.187-1.111.563-.273.375-.41.892-.41 1.552 0 .33.036.628.108.896.072.267.174.494.306.684.132.189.29.334.477.436.186.102.395.153.63.153zm3.778-5.085h1.043v2.673h.027l2.096-2.673h1.16l-1.808 2.295L14 12h-1.151l-1.592-2.772-.846 1.053V12H9.368V6.114z"
			/>
		</g>
	</svg>
);

export const KebabVertical = props => (
	<svg {...props} viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
		<path
			transform="rotate(90 31,31)"
			d="m8.016,36.5c3.047,0 5.516,-2.462 5.516,-5.5s-2.47,-5.5 -5.516,-5.5s-5.516,2.462 -5.516,5.5s2.47,5.5 5.516,5.5zm22.984,0c3.046,0 5.516,-2.462 5.516,-5.5s-2.47,-5.5 -5.516,-5.5s-5.516,2.462 -5.516,5.5s2.47,5.5 5.516,5.5zm22.984,0c3.046,0 5.516,-2.462 5.516,-5.5s-2.47,-5.5 -5.516,-5.5c-3.047,0 -5.516,2.462 -5.516,5.5s2.47,5.5 5.516,5.5z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);

export function GearIcon(props) {
	return React.createElement(
		'svg',
		{ width: '18', height: '18', viewBox: '0 0 18 18', ...props },
		React.createElement('path', {
			fill: 'currentColor',
			d:
				'M14.3 6.2l1.1-2.1L14 2.7l-2.1 1.1c-.3-.2-.7-.3-1.1-.4L10 1H8l-.8 2.3c-.3.1-.7.2-1 .4L4.1 2.6 2.6 4.1l1.1 2.1c-.2.3-.3.7-.4 1L1 8v2l2.3.8c.1.4.3.7.4 1.1L2.6 14 4 15.4l2.1-1.1c.3.2.7.3 1.1.4L8 17h2l.8-2.3c.4-.1.7-.3 1.1-.4l2.1 1.1 1.4-1.4-1.1-2.1c.2-.3.3-.7.4-1.1L17 10V8l-2.3-.8c-.1-.3-.2-.7-.4-1zM9 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z',
		}),
	);
}

export const SolidTriangleIcon = props => (
	<svg {...props} width="12" height="12" viewBox="0 0 12 12">
		<path
			fill="currentColor"
			className="icon-path"
			d="M4.27 1.2l5.33 4a1 1 0 0 1 0 1.6l-5.33 4a1 1 0 0 1-1.6-.8V2a1 1 0 0 1 1.6-.8z"
		/>
	</svg>
);

export const FileIcon = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
		<g fill="#444" fillRule="nonzero" opacity=".5">
			<path d="M14 0H1C.448 0 0 .448 0 1v22c0 .552.448 1 1 1h20c.552 0 1-.448 1-1V8h-7c-.552 0-1-.448-1-1V0zM4 17h14v2H4v-2zm0-5h14v2H4v-2zm6-3H4V7h6v2z" />
			<path d="M21.414 6H16V.586z" />
		</g>
	</svg>
);

export const AudioIcon = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21">
		<g fill="#444" fillRule="nonzero" opacity=".5">
			<path d="M15.584.082a.772.772 0 0 0-.794.061L6.61 6H.762A.755.755 0 0 0 0 6.75v7.5c0 .415.34.75.762.75H6.61l8.18 5.857a.768.768 0 0 0 .794.061.748.748 0 0 0 .416-.668V.75c0-.282-.16-.54-.416-.668zM19.5 9.75H24v1.5h-4.5zm-1.58-4.4l3.897-2.25.75 1.3-3.897 2.25zm0 10.3l.75-1.299 3.897 2.25-.75 1.3z" />
		</g>
	</svg>
);

export const VideoFileIcon = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
		<g fill="none" fillRule="evenodd" opacity=".5">
			<path
				d="M14 0H1C.448 0 0 .448 0 1v22c0 .552.448 1 1 1h20c.552 0 1-.448 1-1V8h-7c-.552 0-1-.448-1-1V0z"
				fill="#444"
				fillRule="nonzero"
			/>
			<path
				d="M14.83235 13.2846548l-6.3 3.6666784C8.4767 16.9836666 8.41335 17 8.35 17c-.0588 0-.11795-.014-.17115-.0426668C8.06825 16.898333 8 16.7873327 8 16.6666656V9.3333088c0-.120667.06825-.2316674.17885-.2906676.1106-.0590002.2457-.0566669.35385.0063333l6.3 3.6666784c.10395.0606669.1673.1683339.1673.2843343 0 .1160004-.06335.2236674-.16765.2846676z"
				fill="#FFF"
			/>
			<path fill="#444" fillRule="nonzero" d="M21 6h-5V1z" />
		</g>
	</svg>
);

export const ShareToFaithlifeIcon = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<rect width="24" height="24" fill="#5FBC39" rx="2" />
			<path
				fill="#FFF"
				d="M12.767 21.975c-.011.027-.05.034-.07.012-.295-.301-2.015-2.01-4.585-3.63-1.475-.968-2.052-1.567-2.22-1.761-.023-.027 0-.066.036-.064.172.009.57.022 1.073-.008.033-.002.05-.036.033-.061-.216-.308-1.256-1.841-1.33-3.559-.001-.03.034-.05.062-.035.158.082.588.291 1.136.442.03.008.06-.017.053-.046-.081-.357-.446-2.15-.077-3.969.007-.032.05-.044.073-.02.11.112.385.361.869.622.022.012.052.002.06-.02.118-.314.868-2.217 2.132-3.358.025-.022.067-.008.072.023.553 3.364 3.69 4.13 5.172 7.092.995 1.988-.265 3.08-.68 3.37-.034.024-.013.075.03.071 2.367-.178 3.347-2.164 3.603-2.797.017-.04.08-.03.082.013.167 4.684-3.94 4.962-4.59 4.98a.336.336 0 0 1-.158-.034c-3.712-1.834-3.695-5.488-3.656-6.179.001-.021-.031-.027-.04-.008-1.866 4.178 1.347 6.54 2.492 7.573.458.414.661.78.428 1.351zm.616-19.96c.03-.032.086-.009.08.033-.083.638-.273 3.327 2.052 5.665 2.614 2.607 2.33 4.596 1.398 6.444-.021.042-.09.028-.088-.02.017-.497-.128-1.528-1.948-3.39-2.88-2.95-4.9-5.121-1.494-8.732z"
			/>
		</g>
	</svg>
);

export const ShareToFacebookIcon = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<rect width="24" height="24" fill="#3B5998" rx="2" />
			<path
				fill="#FFF"
				d="M13.253 20.989v-9.001h2.523l.334-3.102h-2.857l.004-1.553c0-.809.078-1.242 1.258-1.242h1.577V2.989H13.57c-3.031 0-4.098 1.505-4.098 4.035v1.862h-1.89v3.102h1.89v9h3.782z"
			/>
		</g>
	</svg>
);

export const ShareToTwitterIcon = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<rect width="24" height="24" fill="#55ACEE" rx="2" />
			<path
				fill="#FFF"
				d="M12.178 9.346l.035.583-.59-.071c-2.144-.274-4.018-1.202-5.61-2.761l-.777-.773-.2.57c-.425 1.274-.154 2.618.73 3.523.472.5.365.57-.448.273-.283-.095-.53-.166-.554-.13-.082.083.2 1.166.425 1.594.306.595.93 1.178 1.614 1.523l.578.274-.684.012c-.66 0-.683.012-.613.261.236.774 1.167 1.595 2.204 1.952l.731.25-.636.38a6.636 6.636 0 0 1-3.159.881c-.53.012-.967.06-.967.095 0 .12 1.438.786 2.275 1.047 2.51.774 5.493.44 7.732-.88 1.591-.94 3.182-2.808 3.925-4.617.4-.964.801-2.725.801-3.57 0-.547.036-.618.696-1.273.389-.38.754-.797.825-.916.118-.226.106-.226-.495-.024-1.002.357-1.144.31-.649-.226.366-.38.802-1.07.802-1.273 0-.036-.177.024-.377.13-.212.12-.684.298-1.037.405l-.637.203-.577-.393c-.319-.214-.767-.452-1.002-.524-.601-.166-1.52-.142-2.063.048-1.473.535-2.404 1.916-2.298 3.427z"
			/>
		</g>
	</svg>
);

export const ShareToEmailIcon = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<rect width="24" height="24" fill="#7A7A7A" rx="2" />
			<path
				fill="#fff"
				d="M4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1.174L12 12 4 8.087V7zm7.5 6.665c.28.123.72.123 1 0L20 10v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7l7.5 3.665z"
			/>
		</g>
	</svg>
);

export const ShareIcon = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
		<g fill="#505050" fillRule="nonzero">
			<path d="M11.25 0H6v1.5h3.45L4.725 6.225l1.05 1.05L10.5 2.55V6H12V.75c0-.45-.3-.75-.75-.75z" />
			<path d="M10.5 12H.75C.3 12 0 11.7 0 11.25V1.5C0 1.05.3.75.75.75h3v1.5H1.5v8.25h8.25V8.25h1.5v3c0 .45-.3.75-.75.75z" />
		</g>
	</svg>
);
