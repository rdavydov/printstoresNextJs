const ONE_STEP_CONFIG = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
  validateMessages: {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  },
  initialValues: {
    prefix: '7',
  },
};

const TWO_STEP_CONFIG = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

export const getStepsFormConfig = (step: number) => {
  switch (step) {
    case 1: {
      return ONE_STEP_CONFIG;
    }
    case 2: {
      return TWO_STEP_CONFIG;
    }
    case 3: {
      return true;
    }
    default: {
      return ONE_STEP_CONFIG;
    }
  }
};
