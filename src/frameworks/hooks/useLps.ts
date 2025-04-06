import presenters from '#/di';

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export default function useLps() {
  const di = useMemo(() => presenters(), []);

  const { data: lps } = useQuery({
    queryFn: () => di.lp.getLps(),
    queryKey: ['lps'],
  });

  return {
    lps,
  };
}
