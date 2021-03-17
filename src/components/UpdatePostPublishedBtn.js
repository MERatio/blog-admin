import PropTypes from 'prop-types';

function UpdatePostPublishedBtn({ type, text, isUpdating, onClick }) {
	return isUpdating ? (
		<button type="button" className={`btn btn-${type}`} disabled>
			<span
				className="spinner-border spinner-border-sm"
				role="status"
				aria-hidden="true"
			></span>
			Updating...
		</button>
	) : (
		<button type="button" className={`btn btn-${type}`} onClick={onClick}>
			{text}
		</button>
	);
}

UpdatePostPublishedBtn.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	isUpdating: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default UpdatePostPublishedBtn;
