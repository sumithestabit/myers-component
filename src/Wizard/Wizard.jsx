import React from 'react';
import withRouter from 'found/lib/withRouter';
import queryString from 'query-string';
import { WizardContext } from './WizardContext';
import {
  buildStepUrl,
  getBaseUrl,
  resolveLocalDirError,
  getFirstStep,
  makeNavigation,
} from '../utils/wizardUtil';

class Wizard extends React.PureComponent {
  go = baseUrl => (step) => {
    const stepUrl = buildStepUrl(baseUrl, step);
    const query = queryString.parse(this.props.match.location.search);
    const url = query.id ? `${stepUrl}?id=${query.id}` : stepUrl;
    this.props.router.push(url);
  }

  render = () => {
    const baseUrl = getBaseUrl(this.props.match);
    const navigation = makeNavigation(
      this.props.match,
      this.props.wizardConfig,
      this.go(baseUrl),
    );

    const routeCase = resolveLocalDirError(
      navigation.StepComponent,
      this.props.match.location.pathname,
      baseUrl,
    );

    switch (routeCase) {
      case 'valid':
        return (
          <WizardContext.Provider value={navigation}>
            {this.props.children}
          </WizardContext.Provider>
        );
      case 'error':
        this.props.router.push('/error?status=404');
        return null;
      case 'go-home':
        this.props.router.push(getFirstStep(baseUrl, this.props.wizardConfig));
        return null;
      default:
        return null;
    }
  }
}

export default withRouter(Wizard);
