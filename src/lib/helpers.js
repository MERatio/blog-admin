function handleExpressErr(err) {
	window.flashes([{ msg: err.message }]);
}

export { handleExpressErr };
