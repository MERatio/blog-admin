import PropTypes from 'prop-types';

function Flashes({ flashes, onFlashDelete }) {
	return (
		<>
			{flashes.map((flash) => (
				<div
					key={flash.id}
					className={`alert alert-${flash.type || 'danger'} alert-dismissible`}
					role="alert"
				>
					{flash.msg}
					<button
						type="button"
						className="close"
						aria-label="Close"
						onClick={() => onFlashDelete(flash.id)}
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			))}
		</>
	);
}

Flashes.propTypes = {
	flashes: PropTypes.array.isRequired,
	onFlashDelete: PropTypes.func.isRequired,
};

export default Flashes;
