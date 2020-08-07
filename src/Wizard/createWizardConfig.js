const createWizardConfig = (stepToComponentPairsArray) => {
  const stepArray = [];
  const componentDict = {};
  const stepIndexDict = {};
  const stepShouldRenderDict = {};
  const stepOptionalFieldsDict = {};

  stepToComponentPairsArray.forEach(({
    step,
    component,
    showIf = () => true,
    canBeBlank = [],
  }, index) => {
    stepArray.push(step);
    componentDict[step] = component;
    stepIndexDict[step] = index;
    stepShouldRenderDict[step] = showIf;
    stepOptionalFieldsDict[step] = canBeBlank;
  });
  return {
    stepArray,
    componentDict,
    stepIndexDict,
    stepShouldRenderDict,
    stepOptionalFieldsDict,
  };
};

export default createWizardConfig;
