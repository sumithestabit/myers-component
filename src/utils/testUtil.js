const getClassList = (component) => {
  const { className } = component.props;
  return className !== null && className !== undefined
    ? className.split(/\s+/)
    : [];
};

const findByClass = (instance, className) => (
  instance.find(component => (
    getClassList(component).indexOf(className) !== -1
  ))
);

export {
  getClassList,
  findByClass,
};
