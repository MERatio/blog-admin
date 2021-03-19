import PropTypes from 'prop-types';
import SubmitBtn from './SubmitBtn';

function PostForm({ action, state, onInputChange, onSubmit, isSubmitting }) {
	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<label htmlFor="title">Title</label>
				<textarea
					className="form-control"
					id="title"
					name="title"
					value={state.title}
					onChange={onInputChange}
					required
					maxLength={70}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="body">Body</label>
				<textarea
					className="form-control"
					id="body"
					name="body"
					value={state.body}
					onChange={onInputChange}
					required
					maxLength={1000}
				/>
			</div>
			<div className="form-group form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="published"
					name="published"
					onChange={onInputChange}
				/>
				<label className="form-check-label" htmlFor="published">
					Published?
				</label>
			</div>
			<SubmitBtn text={'Submit'} isSubmitting={isSubmitting} />
		</form>
	);
}

PostForm.propTypes = {
	action: PropTypes.string.isRequired,
	state: PropTypes.object.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	isSubmitting: PropTypes.bool.isRequired,
};

export default PostForm;
