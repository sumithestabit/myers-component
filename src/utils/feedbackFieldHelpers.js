import normalizer from '@propalytics-common/field/lib/normalizer';
import graphql from '@propalytics-common/etc/lib/graphql';
import token from '@propalytics-common/etc/lib/token';
import { getClientInfo } from './clientInfo';

const fieldNameToIDTypeDict = {
  feedbackRating: {
    id: process.env.FEEDBACK_FIELD_DEFINITION_ID_RATING,
    type: 'number',
  },
  feedbackCategory: {
    id: process.env.FEEDBACK_FIELD_DEFINITION_ID_CATEGORY,
    type: 'selection',
  },
  feedbackComment: {
    id: process.env.FEEDBACK_FIELD_DEFINITION_ID_COMMENT,
    type: 'multilineText',
  },
  feedbackEmail: {
    id: process.env.FEEDBACK_FIELD_DEFINITION_ID_EMAIL,
    type: 'email',
  },
  url: {
    id: process.env.FEEDBACK_FIELD_DEFINITION_ID_URL,
    type: 'url',
  },
  browser: {
    id: process.env.FEEDBACK_FIELD_DEFINITION_ID_BROWSER,
    type: 'text',
  },
  operatingSystem: {
    id: process.env.FEEDBACK_FIELD_DEFINITION_ID_OPERATING_SYSTEM,
    type: 'text',
  },
};

const fieldTypeToCleanFuncDict = {
  number: value => value.toString(),
  text: value => normalizer.squashWhitespace(value),
  email: value => normalizer.normalizeEmail(value),
};

const isFieldValueValid = value => (
  value !== null
  && value !== undefined
  && value !== ''
  && !(Array.isArray(value) && value.length === 0)
);

const getFieldsForMutation = (values) => {
  const fieldsForMutation = [];
  Object.keys(values).forEach((fieldName) => {
    const value = values[fieldName];
    const valueIsValid = isFieldValueValid(value);
    if (valueIsValid) {
      const {
        id,
        type,
      } = fieldNameToIDTypeDict[fieldName];
      const cleanFunc = fieldTypeToCleanFuncDict[type];
      const cleanedValue = cleanFunc !== undefined
        ? cleanFunc(value)
        : value;
      fieldsForMutation.push({
        fieldDefinitionID: id,
        value: {
          [type]: cleanedValue,
        },
      });
    }
  });
  return fieldsForMutation;
};

const tryMutation = async (values) => {
  const accessToken = token.getAccessTokenFromCookie();
  const clientInfo = getClientInfo();
  const valuesForMutation = {
    ...values,
    ...clientInfo,
  };
  const fields = getFieldsForMutation(valuesForMutation);
  const query = `
    mutation($input: CreateTaskInput!) {
      createTask(input: $input) {
        task {id}
      }
    }
  `;
  const variables = {
    input: {
      createTaskInput: {
        name: values.feedbackComment.substring(0, 15),
        processID: process.env.FEEDBACK_FORM_PROCESS_ID,
        statusID: process.env.FEEDBACK_FORM_STATUS_ID,
        fields,
      },
    },
  };
  let res;
  try {
    res = await graphql.request(
      `${process.env.SERVER_URL_API}/graphql`,
      accessToken,
      query,
      variables,
    );
  } catch (error) {
    return false;
  }
  if (res.data.errors !== undefined && res.data.errors.length > 0) {
    return false;
  }
  return true;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  tryMutation,
};
