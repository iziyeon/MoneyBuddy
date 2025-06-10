import { create } from 'zustand';

type SignupState = {
  name: string;
  phone: string;
  email: string;
  domain: string;
  password: string;
  passwordCheck: string;
  agreementTerm: string[];

  errors: {
    name: string;
    phone: string;
    email: string;
    password: string;
    passwordCheck: string;
    agreementTerm: string;
  };

  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setEmail: (email: string) => void;
  setDomain: (domain: string) => void;
  setPassword: (password: string) => void;
  setPasswordCheck: (passwordCheck: string) => void;
  setAgreementTerm: (terms: string[]) => void;

  setErrors: (errors: SignupState['errors']) => void;
  setErrorForField: (
    field: keyof SignupState['errors'],
    message: string,
  ) => void;
  clearErrors: () => void;
  resetSignup: () => void;
};

export const useSignupStore = create<SignupState>(set => ({
  name: '',
  phone: '',
  email: '',
  domain: '',
  password: '',
  passwordCheck: '',
  agreementTerm: [],
  errors: {
    name: '',
    phone: '',
    email: '',
    password: '',
    passwordCheck: '',
    agreementTerm: '',
  },

  setName: name => set({ name }),
  setPhone: phone => set({ phone }),
  setEmail: email => set({ email }),
  setDomain: domain => set({ domain }),
  setPassword: password => set({ password }),
  setPasswordCheck: passwordCheck => set({ passwordCheck }),
  setAgreementTerm: terms =>
    set(state => ({
      agreementTerm: terms,
      errors: { ...state.errors, agreementTerm: '' }, // 에러 초기화
    })),

  setErrors: errors => set({ errors }),
  setErrorForField: (field, message) =>
    set(state => ({
      errors: {
        ...state.errors,
        [field]: message,
      },
    })),
  clearErrors: () =>
    set(() => ({
      errors: {
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordCheck: '',
        agreementTerm: '',
      },
    })),

  resetSignup: () =>
    set({
      name: '',
      phone: '',
      email: '',
      domain: '',
      password: '',
      passwordCheck: '',
      agreementTerm: [],
      errors: {
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordCheck: '',
        agreementTerm: '',
      },
    }),
}));
