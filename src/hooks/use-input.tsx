import { FormEvent, useReducer, useState } from 'react';

enum actions {
  input = 'INPUT',
  blur = 'BLUR',
  reset = 'RESET',
}

type InputState = {
  value: string;
  isTouched: boolean;
};

type InputAction = {
  type: actions;
  value: string;
};

const initialInputState: InputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case actions.input:
      return { value: action.value, isTouched: state.isTouched };
    case actions.blur:
      return { value: state.value, isTouched: true };
    case actions.reset:
      return { value: '', isTouched: false };
  }
  return initialInputState;
};

const useInput = (validationFunction: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validationFunction(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: actions.input, value: event.currentTarget.value });
  };

  const inputBlurHandler = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: actions.blur, value: '' });
  };

  const reset = () => {
    dispatch({ type: actions.reset, value: '' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

// const useInputState = (validationFuction: (value: string) => boolean) => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [IsTouched, setIsTouched] = useState(false);

//   const valueIsValid = validationFuction(enteredValue);
//   const hasError = !valueIsValid && IsTouched;

//   const valueChangeHandler = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setEnteredValue(event.currentTarget.value);
//   };

//   const inputBlurHandler = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setIsTouched(true);
//   };

//   const reset = () => {
//     setEnteredValue('');
//     setIsTouched(false);
//   };

//   return {
//     value: enteredValue,
//     isValid: valueIsValid,
//     hasError,
//     valueChangeHandler,
//     inputBlurHandler,
//     reset,
//   };
// };

export default useInput;
