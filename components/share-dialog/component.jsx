import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Modal } from '../modal/modal';
import {
	FaithlifeShareButton,
	TwitterShareButton,
	FacebookShareButton,
	EmailShareButton,
} from './social-share-buttons';
import { CopyToClipboard } from './copy-to-clipboard';

/**
 * Branded Faithlife modal to share a link to social platforms
 */
export class ShareDialog extends React.Component {
	static propTypes = {
		shareUrl: PropTypes.string.isRequired,
		onClose: PropTypes.func.isRequired,
		message: PropTypes.string,
		isOpen: PropTypes.bool,
		modalTitle: PropTypes.string,
		copyButtonText: PropTypes.string,
	};

	static defaultProps = {
		modalTitle: 'Share this page',
	};

	state = {
		onDesktop: false,
	};

	componentDidMount() {
		this.setState({ onDesktop: window.matchMedia('(hover: hover)').matches });
	}

	render() {
		const { shareUrl, message, onClose, isOpen, modalTitle, copyButtonText } = this.props;
		const { onDesktop } = this.state;

		const encodedShareUrl = encodeURIComponent(shareUrl);
		const encodedMessage = message ? encodeURIComponent(message) : '';

		const desktopModal = (
			<Box display="flex" alignItems="center" my={2}>
				<FaithlifeShareButton encodedShareUrl={encodedShareUrl} encodedMessage={encodedMessage} />
				<TwitterShareButton encodedShareUrl={encodedShareUrl} encodedMessage={encodedMessage} />
				<FacebookShareButton encodedShareUrl={encodedShareUrl} />
				<EmailShareButton encodedShareUrl={encodedShareUrl} encodedMessage={encodedMessage} />
				<CopyToClipboard copyValue={shareUrl} copyButtonText={copyButtonText} />
			</Box>
		);
		const mobileModal = (
			<Box>
				<Box display="flex" alignItems="center" my={2}>
					<FaithlifeShareButton encodedShareUrl={encodedShareUrl} encodedMessage={encodedMessage} />
					<TwitterShareButton encodedShareUrl={encodedShareUrl} encodedMessage={encodedMessage} />
					<FacebookShareButton encodedShareUrl={encodedShareUrl} />
					<EmailShareButton encodedShareUrl={encodedShareUrl} encodedMessage={encodedMessage} />
				</Box>
				<Box display="flex" alignItems="center" my={2}>
					<CopyToClipboard copyValue={shareUrl} copyButtonText={copyButtonText} />
				</Box>
			</Box>
		);

		return (
			<Modal withoutFooter isOpen={isOpen} onClose={onClose} title={modalTitle} container="body">
				{onDesktop ? desktopModal : mobileModal}
			</Modal>
		);
	}
}
