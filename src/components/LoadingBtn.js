import PropTypes from 'prop-types';

function LoadingBtn({ type, text, isLoading, loadingText, onClick }) {
	return isLoading ? (
		<button type="button" className={`btn btn-${type}`} disabled>
			<span
				className="spinner-border spinner-border-sm"
				role="status"
				aria-hidden="true"
			></span>
			{loadingText}
		</button>
	) : (
		<button type="button" className={`btn btn-${type}`} onClick={onClick}>
			{text}
		</button>
	);
}

LoadingBtn.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	loadingText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default LoadingBtn;
