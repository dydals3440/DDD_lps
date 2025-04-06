/* eslint-disable react-hooks/rules-of-hooks */
import { API_URL } from '#/constants/env';
import presentersFn from '#/di/presenters';
import repositoriesFn from '#/di/repositories';
import useCasesFn from '#/di/useCases';

export default function di(apiUrl = API_URL) {
  const repositories = repositoriesFn(apiUrl);
  const useCases = useCasesFn(repositories);
  const presenters = presentersFn(useCases);

  return presenters;
}
