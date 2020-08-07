import path from 'path';

const buildStepUrl = (baseUrl, step) => path.join(baseUrl, step);

const getBaseUrl = (match) => {
  const routePaths = match.routes.map(route => (
    route.path !== undefined ? route.path : ''
  ));
  const url = path.join(...routePaths);
  return url.slice(0, url.indexOf('/:'));
};

const getDirName = pathname => path.dirname(pathname);

const getFirstStep = (baseUrl, wizardConfig) => (
  path.join(
    baseUrl,
    wizardConfig.stepArray[0],
  )
);

const resolveLocalDirError = (StepComponent, pathName, baseUrl) => {
  if (StepComponent) {
    return 'valid';
  }
  if (pathName === baseUrl) {
    return 'go-home';
  }
  if (path.dirname(pathName) === baseUrl) {
    return 'error';
  }
  return 'unmounting';
};

const parseStepFromPathname = pathname => path.basename(pathname);

const getStep = (values, jumpStep, currentStep, wizardConfig) => {
  const {
    stepArray,
    stepIndexDict,
    stepShouldRenderDict,
  } = wizardConfig;
  let nextStep = null;
  for (
    let stepIndex = stepIndexDict[currentStep] + jumpStep;
    stepIndex > -1 && stepIndex < stepArray.length;
    stepIndex += jumpStep) {
    nextStep = stepArray[stepIndex];
    if (stepShouldRenderDict[nextStep](values)) {
      return nextStep;
    }
  }
  return null;
};

const next = (values, currentStep, wizardConfig, go) => {
  const nextStep = getStep(values, 1, currentStep, wizardConfig);
  go(nextStep);
};

const hasNext = (currentStep, wizardConfig) => {
  const { stepArray, stepIndexDict } = wizardConfig;
  return stepIndexDict[currentStep] < stepArray.length - 1;
};

const canSkip = (values, currentStep, wizardConfig) => {
  const { stepOptionalFieldsDict } = wizardConfig;
  if (stepOptionalFieldsDict[currentStep].length === 0) return false;
  const isUndefined = key => (values[key] === undefined);
  return stepOptionalFieldsDict[currentStep].every(isUndefined);
};

const previous = (values, currentStep, wizardConfig, go) => {
  const previousStep = getStep(values, -1, currentStep, wizardConfig);
  go(previousStep);
};

const hasPrevious = (currentStep, wizardConfig) => {
  const { stepIndexDict } = wizardConfig;
  return stepIndexDict[currentStep] > 0;
};

const calculatePercentComplete = (currentStep, wizardConfig) => {
  const { stepArray, stepIndexDict } = wizardConfig;
  const numberOfSteps = stepArray.length;
  const currentStepIndex = stepIndexDict[currentStep];
  return currentStepIndex / numberOfSteps * 100;
};

const makeNavigation = (match, wizardConfig, go) => {
  const currentStep = parseStepFromPathname(match.location.pathname);
  return {
    StepComponent: wizardConfig.componentDict[currentStep],
    percentComplete: () => calculatePercentComplete(
      currentStep,
      wizardConfig,
    ),
    next: values => next(values, currentStep, wizardConfig, go),
    previous: values => previous(
      values,
      currentStep,
      wizardConfig,
      go,
    ),
    hasNext: () => hasNext(currentStep, wizardConfig),
    hasPrevious: () => hasPrevious(currentStep, wizardConfig),
    canSkip: values => canSkip(values, currentStep, wizardConfig),
  };
};

export {
  buildStepUrl,
  getDirName,
  getBaseUrl,
  getFirstStep,
  makeNavigation,
  resolveLocalDirError,
};
