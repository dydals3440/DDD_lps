import presenters from '#/di';
import { IRequestUserSignUpParams } from '#/domains/aggregates/interfaces/IUser';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';

export default function useUser() {
  const di = useMemo(() => presenters(), []);

  console.log(di.user.signup);

  const { mutate: signup, isPending: signupLoading } = useMutation({
    // this binding is not needed
    // mutationFn: di.user.signup.bind(di.user),
    mutationFn: (params: IRequestUserSignUpParams) => di.user.signup(params),
  });

  return {
    signup,
    signupLoading,
  };
}
