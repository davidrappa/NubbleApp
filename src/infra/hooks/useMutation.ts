import {useState} from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}
/**
 * @deprecated use useMutation from `@tanstack/react-query` instead
 */
export function useMutation<TVariables, TData>(
  mutationFn: (variable: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      const data = await mutationFn(variables);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (mutateError) {
      if (options?.onError) {
        options.onError(options.errorMessage || '');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {mutate, loading, error};
}
