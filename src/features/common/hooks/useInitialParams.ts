import { useSearchParams } from 'react-router-dom'

export const useInitialParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const bookingId = searchParams.get('uuid_booking')


  const updateSearchParam = (key: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  }

  return {
    bookingId,
    updateSearchParam
  }
}
