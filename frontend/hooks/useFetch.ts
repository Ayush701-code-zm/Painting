"use client";

import useSWR from "swr";

function createFetcher<T>() {
  return (url: string): Promise<T> =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
      return res.json() as Promise<T>;
    });
}

interface UseFetchResult<T> {
  data: T | undefined;
  error: Error | undefined;
  isLoading: boolean;
  mutate: () => void;
}

export function useFetch<T>(
  url: string | null,
  options?: { revalidateOnFocus?: boolean; revalidateOnReconnect?: boolean }
): UseFetchResult<T> {
  const fetcher = createFetcher<T>();

  const { data, error, isLoading, mutate } = useSWR<T, Error, string | null>(
    url,
    fetcher,
    {
      revalidateOnFocus: options?.revalidateOnFocus ?? false,
      revalidateOnReconnect: options?.revalidateOnReconnect ?? false,
    }
  );

  return { data, error, isLoading, mutate };
}
